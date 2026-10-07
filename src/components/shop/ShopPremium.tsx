"use client";

import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Star, X, ArrowRight, Plus } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";
import { shopProducts as shopProductsEN } from "@/lib/data";

type Product = (typeof shopProductsEN)[number];

type FilterKey =
  | "all"
  | "breakfast"
  | "pastries_desserts"
  | "coffees"
  | "cold_drinks"
  | "hot_drinks"
  | "juices"
  | "extras"
  | "bakery";

// Stable filter keys with translated labels.
// Filtering is done by product `id` (stable across EN/FR/AR),
// so switching language never breaks the category match.
const COLLECTIONS: {
  key: FilterKey;
  i18nKey:
    | "shopPremiumFilterAll"
    | "shopPremiumFilterBreakfast"
    | "shopPremiumFilterPastries"
    | "shopPremiumFilterCoffees"
    | "shopPremiumFilterColdDrinks"
    | "shopPremiumFilterHotDrinks"
    | "shopPremiumFilterJuices"
    | "shopPremiumFilterExtras"
    | "shopPremiumFilterBakery";
}[] = [
  { key: "all", i18nKey: "shopPremiumFilterAll" },
  { key: "breakfast", i18nKey: "shopPremiumFilterBreakfast" },
  { key: "pastries_desserts", i18nKey: "shopPremiumFilterPastries" },
  { key: "coffees", i18nKey: "shopPremiumFilterCoffees" },
  { key: "cold_drinks", i18nKey: "shopPremiumFilterColdDrinks" },
  { key: "hot_drinks", i18nKey: "shopPremiumFilterHotDrinks" },
  { key: "juices", i18nKey: "shopPremiumFilterJuices" },
  { key: "extras", i18nKey: "shopPremiumFilterExtras" },
  { key: "bakery", i18nKey: "shopPremiumFilterBakery" },
];

// Reference grouping built once from EN (clean category strings).
// `id` is parallel across data.ts / data-fr.ts / data-ar.ts.
const BREAKFAST_IDS = new Set(
  shopProductsEN.filter((p) => p.category === "Breakfast").map((p) => p.id),
);
const PASTRY_IDS = new Set(
  shopProductsEN
    .filter((p) => p.category === "Pastries & Desserts")
    .map((p) => p.id),
);
const COFFEES_IDS = new Set(
  shopProductsEN.filter((p) => p.category === "Coffees").map((p) => p.id),
);
const COLD_DRINKS_IDS = new Set(
  shopProductsEN.filter((p) => p.category === "Cold Drinks").map((p) => p.id),
);
const HOT_DRINKS_IDS = new Set(
  shopProductsEN.filter((p) => p.category === "Hot Drinks").map((p) => p.id),
);
const JUICE_IDS = new Set(
  shopProductsEN.filter((p) => p.category === "Juices").map((p) => p.id),
);
const EXTRA_IDS = new Set(
  shopProductsEN.filter((p) => p.category === "Extras").map((p) => p.id),
);
const BAKERY_IDS = new Set(
  shopProductsEN.filter((p) => p.category === "Bakery").map((p) => p.id),
);

function inCollection(p: Product, key: FilterKey) {
  if (key === "all") return true;
  if (key === "breakfast") return BREAKFAST_IDS.has(p.id);
  if (key === "pastries_desserts") return PASTRY_IDS.has(p.id);
  if (key === "coffees") return COFFEES_IDS.has(p.id);
  if (key === "cold_drinks") return COLD_DRINKS_IDS.has(p.id);
  if (key === "hot_drinks") return HOT_DRINKS_IDS.has(p.id);
  if (key === "juices") return JUICE_IDS.has(p.id);
  if (key === "extras") return EXTRA_IDS.has(p.id);
  if (key === "bakery") return BAKERY_IDS.has(p.id);
  return true;
}

export default function ShopPremium() {
  const { data, t } = useLanguage();
  // Translated products — switches EN/FR/AR via LanguageProvider.
  const products = data.shopProducts as Product[];
  const [cat, setCat] = useState<FilterKey>("all");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("featured");
  const [selected, setSelected] = useState<Product | null>(null);
  const [visible, setVisible] = useState(12);

  // Keep quick-view in sync when language changes (same product `id`,
  // translated fields).
  useEffect(() => {
    setSelected((prev) =>
      prev ? (products.find((p) => p.id === prev.id) ?? null) : null,
    );
    setVisible(12);
  }, [products]);

  const filtered = useMemo(() => {
    let list = products.filter((p) => inCollection(p, cat));
    if (q) {
      const s = q.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(s) ||
          p.description.toLowerCase().includes(s),
      );
    }
    if (sort === "price-asc")
      list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc")
      list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === "featured") list = [...list];
    return list;
  }, [products, cat, q, sort]);

  const shown = filtered.slice(0, visible);
  const hero = cat === "all" && !q ? filtered[0] : null;
  const gridItems = hero ? shown.slice(1) : shown;

  const handleLoadMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const btn = e.currentTarget;
    // 1. Save scroll position and button top before appending items
    const savedButtonTop = btn.getBoundingClientRect().top;
    const savedScrollY = window.scrollY;

    // Append items
    setVisible((v) => v + 12);

    // 2. Restore scroll position inside requestAnimationFrame so viewport doesn't move
    requestAnimationFrame(() => {
      window.scrollTo({ top: savedScrollY, behavior: "instant" });
      const lenis = (
        window as unknown as {
          __lenis?: {
            scrollTo: (target: number, opts?: { immediate?: boolean }) => void;
          };
        }
      ).__lenis;
      if (lenis) {
        lenis.scrollTo(savedScrollY, { immediate: true });
      }

      requestAnimationFrame(() => {
        window.scrollTo({ top: savedScrollY, behavior: "instant" });
        if (lenis) {
          lenis.scrollTo(savedScrollY, { immediate: true });
        }
      });
    });
  };

  return (
    <div className="bg-ivory" style={{ overflowAnchor: "auto" }}>
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        {/* Toolbar */}
        <ScrollReveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-sm">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/35"
              />
              <input
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setVisible(12);
                }}
                placeholder={t("shopPremiumSearchPlaceholder")}
                className="w-full rounded-full border border-dark/10 bg-white/80 py-3 pl-11 pr-4 text-[14px] outline-none transition-all placeholder:text-dark/35 focus:border-primary focus:ring-4 focus:ring-primary/15"
              />
            </div>
            <div className="flex items-center gap-3">
              <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-dark/45">
                {t("shopPremiumSortLabel")}
              </label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="cursor-pointer appearance-none rounded-full border border-dark/10 bg-white/80 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] outline-none focus:border-primary"
              >
                <option value="featured">{t("shopPremiumSortFeatured")}</option>
                <option value="rating">{t("shopPremiumSortRating")}</option>
                <option value="price-asc">
                  {t("shopPremiumSortPriceAsc")}
                </option>
                <option value="price-desc">
                  {t("shopPremiumSortPriceDesc")}
                </option>
              </select>
            </div>
          </div>
          <div className="mt-5 flex gap-2.5 overflow-x-auto pb-1 no-scrollbar">
            {COLLECTIONS.map((c) => (
              <button
                type="button"
                key={c.key}
                onClick={() => {
                  setCat(c.key);
                  setVisible(12);
                }}
                className={`shrink-0 rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] transition-all ${
                  cat === c.key
                    ? "bg-dark text-cream shadow-lg"
                    : "border border-dark/10 bg-white/60 text-dark/60 hover:text-dark"
                }`}
              >
                {t(c.i18nKey)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <p className="mt-8 text-[12px] uppercase tracking-[0.2em] text-dark/45">
          <span className="font-bold text-dark">{filtered.length}</span>{" "}
          {t("shopPremiumResults")}
        </p>

        {/* Hero feature */}
        {hero && (
          <ScrollReveal className="mt-6">
            <button
              type="button"
              onClick={() => setSelected(hero)}
              className="group grid w-full overflow-hidden rounded-[32px] bg-dark text-left text-cream lg:grid-cols-2"
            >
              <span className="relative block min-h-[320px] overflow-hidden lg:min-h-[440px]">
                <Image
                  src={hero.image}
                  alt={hero.name}
                  fill
                  loading="lazy"
                  decoding="async"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <span className="absolute left-5 top-5 rounded-full bg-primary px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-dark">
                  {t("shopPremiumHeroBadge")}
                </span>
              </span>
              <span className="flex flex-col justify-center p-8 md:p-12">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
                  {hero.category}
                </span>
                <span className="mt-3 block font-serif text-4xl leading-[1.02] md:text-5xl">
                  {hero.name}
                </span>
                <span className="mt-4 line-clamp-3 block max-w-md text-[15px] leading-relaxed text-cream/65">
                  {hero.description}
                </span>
                <span className="mt-6 flex flex-wrap items-center gap-5">
                  <span className="font-serif text-3xl text-primary">
                    {hero.price.toFixed(2).replace(".", ",")} DH
                  </span>
                  <span className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < Math.round(hero.rating)
                            ? "fill-primary text-primary"
                            : "text-cream/20"
                        }
                      />
                    ))}
                  </span>
                  <span className="btn-gold !py-3">
                    {t("shopPremiumViewProduct")} <ArrowRight size={15} />
                  </span>
                </span>
              </span>
            </button>
          </ScrollReveal>
        )}

        {/* Commerce grid */}
        <div
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          style={{ overflowAnchor: "auto" }}
        >
          {gridItems.map((p) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[26px] border border-dark/8 bg-[#fffdf9] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_60px_-20px_rgba(28,22,19,0.3)]"
              onClick={() => setSelected(p)}
              style={{ willChange: "transform, opacity", overflowAnchor: "auto" }}
            >
              <span
                className="relative block w-full overflow-hidden bg-[#f0e9df]"
                style={{ width: "100%", aspectRatio: "4 / 3" }}
              >
                {/* Skeleton placeholder with exact dimensions to eliminate layout shift */}
                <span
                  className="absolute inset-0 block bg-[#f0e9df] pointer-events-none"
                  aria-hidden="true"
                />
                <Image
                  src={p.image}
                  alt={p.name}
                  width={400}
                  height={300}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="relative h-full w-full object-cover transition-transform duration-700 group-hover:scale-107"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    aspectRatio: "4 / 3",
                  }}
                />
                <span className="absolute left-4 top-4 rounded-full bg-dark/80 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-cream backdrop-blur pointer-events-none">
                  {p.category}
                </span>
                <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-primary text-dark opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none">
                  <Plus size={18} strokeWidth={2.5} />
                </span>
              </span>
              <span className="flex flex-1 flex-col p-6">
                <span className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className={
                        i < Math.round(p.rating)
                          ? "fill-primary text-primary"
                          : "text-dark/15"
                      }
                    />
                  ))}
                  <span className="ml-1.5 text-[12px] font-semibold text-dark/45">
                    {p.rating.toFixed(1)}
                  </span>
                </span>
                <span className="mt-2.5 block min-h-[3.8rem] font-serif text-[26px] leading-tight text-dark transition-colors group-hover:text-primary-dark line-clamp-2">
                  {p.name}
                </span>
                <span className="mt-2 block min-h-[2.6rem] text-[13.5px] leading-relaxed text-muted line-clamp-2">
                  {p.description}
                </span>
                <span className="mt-auto flex items-center justify-between border-t border-dark/8 pt-4">
                  <span className="font-serif text-[22px] font-semibold text-primary-dark">
                    {p.price.toFixed(2).replace(".", ",")} DH
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-dark/50 transition-all group-hover:gap-3 group-hover:text-dark">
                    {t("shopPremiumViewProduct")} →
                  </span>
                </span>
              </span>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-3xl border border-dashed border-dark/15 py-20 text-center">
            <p className="font-serif text-3xl text-dark/40">
              {t("shopPremiumEmptyTitle", { query: q })}
            </p>
            <p className="mt-2 text-[14px] text-muted">
              {t("shopPremiumEmptyHint")}
            </p>
          </div>
        )}

        <div className="mt-12 text-center" style={{ overflowAnchor: "auto" }}>
          {visible < filtered.length ? (
            <div>
              <button
                type="button"
                onClick={handleLoadMore}
                className="btn-primary"
              >
                {t("shopPremiumLoadMore")}
              </button>
              <p className="mt-3 text-[12px] uppercase tracking-[0.2em] text-dark/40">
                {shown.length} / {filtered.length}
              </p>
            </div>
          ) : (
            <p className="text-[12px] uppercase tracking-[0.2em] text-dark/40">
              {shown.length} / {filtered.length}
            </p>
          )}
        </div>
      </div>

      {/* Quick view */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-dark/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="relative z-10 grid max-h-[92dvh] w-full max-w-3xl overflow-y-auto rounded-t-[28px] bg-ivory sm:rounded-[28px] md:grid-cols-2"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label={t("shopPremiumQuickViewClose")}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow transition-all hover:bg-dark hover:text-cream"
              >
                <X size={18} />
              </button>
              <span className="relative block min-h-[280px] md:min-h-full">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </span>
              <span className="flex flex-col p-7 md:p-9">
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-dark">
                  {selected.category}
                </span>
                <span className="mt-2 block font-serif text-3xl leading-tight text-dark md:text-4xl">
                  {selected.name}
                </span>
                <span className="mt-3 flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className={
                        i < Math.round(selected.rating)
                          ? "fill-primary text-primary"
                          : "text-dark/15"
                      }
                    />
                  ))}
                  <span className="ml-1 text-[13px] font-semibold text-dark/50">
                    {selected.rating.toFixed(1)} / 5
                  </span>
                </span>
                <span className="mt-5 block border-y border-dark/10 py-5 text-[15px] leading-relaxed text-dark/70">
                  {selected.description}
                </span>
                <span className="mt-6 flex items-center justify-between">
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.2em] text-dark/40">
                      {t("shopPremiumPrice")}
                    </span>
                    <span className="font-serif text-4xl font-medium text-primary-dark">
                      {selected.price.toFixed(2).replace(".", ",")} DH
                    </span>
                  </span>
                  <span className="rounded-full bg-emerald-900/10 px-4 py-2 text-[12px] font-bold text-emerald-900">
                    ● {t("shopPremiumInShowcase")}
                  </span>
                </span>
                <span className="mt-7 grid gap-3">
                  <Link href="/contact" className="btn-gold w-full">
                    {t("shopPremiumOrder")} <ArrowRight size={15} />
                  </Link>
                  <Link href="/menu" className="btn-ghost w-full">
                    {t("shopPremiumViewMenu")}
                  </Link>
                </span>
              </span>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
