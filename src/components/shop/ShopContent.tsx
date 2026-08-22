"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Search, Star, X, Info, CheckCircle2, Loader2 } from "lucide-react";
import ScrollReveal, {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";

const ITEMS_PER_PAGE = 12;

export default function ShopContent() {
  const { data, t } = useLanguage();
  const shopProducts = data.shopProducts;

  type Product = (typeof shopProducts)[number];

  const allCategories = useMemo(() => {
    return [
      t("all"),
      ...Array.from(new Set(shopProducts.map((p) => p.category))),
    ];
  }, [shopProducts, t]);

  const [category, setCategory] = useState(t("all"));
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const observerRef = useRef<HTMLDivElement | null>(null);

  // Sync category state if language changes
  useEffect(() => {
    setCategory(t("all"));
  }, [t]);

  // Reset pagination when filter/search/sort changes
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [category, search, sort]);

  const filtered = useMemo(() => {
    let items = shopProducts;
    if (category !== t("all"))
      items = items.filter((p) => p.category === category);
    if (search) {
      const q = search.toLowerCase();
      items = items.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.description && p.description.toLowerCase().includes(q)),
      );
    }
    if (sort === "price-asc")
      items = [...items].sort((a, b) => a.price - b.price);
    if (sort === "price-desc")
      items = [...items].sort((a, b) => b.price - a.price);
    if (sort === "name")
      items = [...items].sort((a, b) => a.name.localeCompare(b.name));
    return items;
  }, [shopProducts, category, search, sort, t]);

  const displayedProducts = useMemo(() => {
    return filtered.slice(0, visibleCount);
  }, [filtered, visibleCount]);

  const hasMore = visibleCount < filtered.length;

  const loadMore = useCallback(() => {
    if (!hasMore || isLoadingMore) return;
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) =>
        Math.min(prev + ITEMS_PER_PAGE, filtered.length),
      );
      setIsLoadingMore(false);
    }, 300);
  }, [hasMore, isLoadingMore, filtered.length]);

  useEffect(() => {
    const sentinel = observerRef.current;
    if (!sentinel || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "250px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, loadMore]);

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Toolbar */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-col gap-5 items-start justify-between">
            <div className="flex flex-wrap gap-5 items-center justify-between w-full">
              {/* Search */}
              <div className="relative w-full lg:w-80">
                <Search
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/40"
                />
                <input
                  type="text"
                  placeholder={t("searchProducts")}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 bg-cream/70 border border-dark/10 rounded-full text-sm text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* Sort */}
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="px-4 py-2.5 bg-cream/70 border border-dark/10 rounded-full text-xs uppercase tracking-wider text-dark/80 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer font-sans"
                >
                  <option value="default">{t("defaultSort")}</option>
                  <option value="price-asc">{t("priceAsc")}</option>
                  <option value="price-desc">{t("priceDesc")}</option>
                  <option value="name">{t("nameSort")}</option>
                </select>
              </div>
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 text-xs tracking-wider uppercase rounded-full transition-all cursor-pointer font-medium duration-200 ${
                    category === cat
                      ? "bg-dark text-cream shadow-sm"
                      : "bg-cream/60 text-dark/70 border border-dark/8 hover:border-dark/20 hover:text-dark hover:bg-cream"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Product count */}
        <div className="flex items-center justify-between text-xs tracking-wider text-dark/50 mb-8 uppercase font-sans">
          <p>
            {t("showing")}{" "}
            <span className="font-semibold text-dark">
              {displayedProducts.length}
            </span>{" "}
            {t("of")}{" "}
            <span className="font-semibold text-dark">{filtered.length}</span>{" "}
            {t("results")}
          </p>
          {filtered.length !== shopProducts.length && (
            <p className="text-dark/40">
              ({shopProducts.length} {t("totalAvailable")})
            </p>
          )}
        </div>

        {/* Products grid */}
        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.08}
        >
          {displayedProducts.map((product) => (
            <StaggerItem key={product.id}>
              <motion.div
                onClick={() => setSelectedProduct(product)}
                className="group bg-white rounded-2xl border border-dark/8 hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer overflow-hidden relative shadow-xs"
                whileHover={{ y: -4 }}
              >
                {/* Image */}
                <div className="aspect-square bg-cream/40 relative overflow-hidden">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-serif text-5xl text-dark/10 group-hover:text-primary/20 transition-colors duration-500">
                        {product.name.charAt(0)}
                      </span>
                    </div>
                  )}

                  {/* Category Tag overlay */}
                  <span className="absolute top-3.5 left-3.5 bg-dark/80 backdrop-blur-xs text-cream text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-medium shadow-xs">
                    {product.category}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6 text-center flex flex-col flex-1">
                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1 mb-2.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < product.rating
                            ? "text-primary fill-primary"
                            : "text-dark/15"
                        }
                      />
                    ))}
                  </div>

                  <h3 className="font-serif text-2xl text-dark tracking-wide mb-2 group-hover:text-primary transition-colors duration-200">
                    {product.name}
                  </h3>

                  {/* Product Description */}
                  {product.description && (
                    <p className="text-dark/60 text-xs sm:text-sm mb-5 line-clamp-2 leading-relaxed font-sans">
                      {product.description}
                    </p>
                  )}

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-dark/6">
                    <span className="font-serif text-2xl text-primary font-semibold">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-xs uppercase tracking-wider font-medium text-dark/60 group-hover:text-primary transition-colors flex items-center gap-1">
                      {t("description")} →
                    </span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-2xl text-dark/30">
              {t("noProductsFound")}
            </p>
          </div>
        )}

        {/* Infinite Scroll Sentinel & Loader */}
        {hasMore && (
          <div
            ref={observerRef}
            className="mt-16 text-center flex flex-col items-center justify-center py-8"
          >
            {isLoadingMore ? (
              <div className="flex items-center gap-3 text-primary font-medium text-sm">
                <Loader2 className="animate-spin" size={20} />
                <span>{t("loadingMore")}</span>
              </div>
            ) : (
              <button
                onClick={loadMore}
                className="px-6 py-3 border border-dark/10 hover:border-dark text-xs uppercase tracking-widest text-dark transition-colors cursor-pointer"
              >
                {t("loadMore")}
              </button>
            )}
          </div>
        )}

        {!hasMore && filtered.length > ITEMS_PER_PAGE && (
          <div className="mt-16 text-center py-8 border-t border-dark/5">
            <p className="text-xs uppercase tracking-widest text-dark/30">
              {t("viewedAll")}
            </p>
          </div>
        )}
      </div>

      {/* Product Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-dark/75 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white border border-dark/10 shadow-2xl overflow-y-auto max-h-[90vh] z-10 rounded-3xl my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-30 w-9 h-9 flex items-center justify-center bg-white/90 hover:bg-dark hover:text-cream text-dark border border-dark/10 shadow-sm transition-all rounded-full cursor-pointer active:scale-95"
                aria-label="Close details"
              >
                <X size={17} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                {/* Modal Image - Fills full height on desktop, responsive height on mobile */}
                <div className="relative w-full h-56 sm:h-72 md:h-full min-h-55 md:min-h-87.5 bg-dark/5 overflow-hidden">
                  {selectedProduct.image ? (
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      fill
                      className="object-cover object-center w-full h-full"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-dark/5">
                      <span className="font-serif text-6xl text-dark/20">
                        {selectedProduct.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Modal Content */}
                <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2 pr-8">
                      <span className="bg-primary/10 text-primary text-[11px] uppercase tracking-widest px-2.5 py-1 font-semibold">
                        {selectedProduct.category}
                      </span>
                      {selectedProduct.inStock && (
                        <span className="inline-flex items-center gap-1 text-emerald-700 text-xs font-medium">
                          <CheckCircle2 size={13} /> {t("inStock")}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-dark tracking-wide mb-2">
                      {selectedProduct.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={15}
                          className={
                            i < Math.round(selectedProduct.rating)
                              ? "text-primary fill-primary"
                              : "text-dark/20"
                          }
                        />
                      ))}
                      <span className="text-xs text-dark/50 ml-1 font-medium">
                        ({selectedProduct.rating})
                      </span>
                    </div>

                    {/* Detailed Product Description */}
                    <div className="border-t border-b border-dark/10 py-3 my-3">
                      <h4 className="text-[10px] font-semibold uppercase tracking-wider text-dark/50 mb-1 flex items-center gap-1.5">
                        <Info size={13} /> {t("description")}
                      </h4>
                      <p className="text-dark/75 text-sm leading-relaxed">
                        {selectedProduct.description ||
                          "Freshly prepared artisan item from La Madeleine."}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <span className="text-[11px] text-dark/40 uppercase tracking-wider block">
                        {t("price")}
                      </span>
                      <span className="font-serif text-2xl sm:text-3xl text-primary font-medium">
                        ${selectedProduct.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
