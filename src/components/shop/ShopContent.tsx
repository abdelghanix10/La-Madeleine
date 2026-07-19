"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Star, ShoppingCart } from "lucide-react";
import ScrollReveal, {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/ScrollReveal";
import { shopProducts } from "@/lib/data";

const allCategories = ["All", ...Array.from(new Set(shopProducts.map((p) => p.category)))];

export default function ShopContent() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const filtered = useMemo(() => {
    let items = shopProducts;
    if (category !== "All") items = items.filter((p) => p.category === category);
    if (search) items = items.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    if (sort === "price-asc") items = [...items].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") items = [...items].sort((a, b) => b.price - a.price);
    if (sort === "name") items = [...items].sort((a, b) => a.name.localeCompare(b.name));
    return items;
  }, [category, search, sort]);

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Toolbar */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/40" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-cream border border-dark/10 text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              {/* Category filter */}
              <div className="flex flex-wrap gap-2 flex-1 md:flex-initial">
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 text-xs tracking-wider uppercase transition-all duration-300 border ${
                      category === cat
                        ? "bg-dark text-cream border-dark"
                        : "bg-transparent text-dark/50 border-dark/10 hover:border-dark/30"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-4 py-3 bg-cream border border-dark/10 text-sm text-dark focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
              >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
        </ScrollReveal>

        {/* Product count */}
        <p className="text-dark/40 text-sm mb-8">
          Showing {filtered.length} of {shopProducts.length} results
        </p>

        {/* Products grid */}
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {filtered.map((product) => (
            <StaggerItem key={product.id}>
              <motion.div
                className="group bg-cream border border-dark/5 hover:border-primary/20 transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                {/* Image */}
                <div className="aspect-square bg-background relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-5xl text-dark/10 group-hover:text-primary/20 transition-colors duration-500">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                  {/* Sale badge */}
                  {product.salePrice && (
                    <div className="absolute top-4 left-4 bg-primary text-dark text-xs tracking-wider uppercase px-3 py-1 font-medium">
                      Sale
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <motion.button
                      className="bg-cream text-dark px-6 py-3 text-xs tracking-wider uppercase font-medium flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ShoppingCart size={14} />
                      Add to Cart
                    </motion.button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={
                          i < product.rating
                            ? "text-primary fill-primary"
                            : "text-dark/20"
                        }
                      />
                    ))}
                  </div>

                  <h3 className="font-serif text-lg text-dark tracking-wide mb-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-center gap-3">
                    {product.salePrice && (
                      <span className="text-dark/30 line-through text-sm">
                        ${product.salePrice.toFixed(2)}
                      </span>
                    )}
                    <span className="font-serif text-lg text-primary">
                      ${product.price.toFixed(2)}
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
              No products found
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
