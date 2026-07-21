"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { menuCategories, menuItems } from "@/lib/data";

export default function MenuContent() {
  const [active, setActive] = useState("All");

  const categories = ["All", ...menuCategories];
  const filtered =
    active === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === active);

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Category tabs */}
        <ScrollReveal className="mb-16">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 text-sm tracking-[0.15em] uppercase cursor-pointer transition-all duration-300 border ${
                  active === cat
                    ? "bg-dark text-cream border-dark"
                    : "bg-transparent text-dark/50 border-dark/10 hover:border-dark/30 hover:text-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          {active === "Coffee" && (
            <motion.div
              key="coffee-slide"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-12 overflow-hidden border border-dark/10 bg-dark"
            >
              <div className="relative min-h-65 md:min-h-90">
                <Image
                  src="/images/background/bg-coffee.jpg"
                  alt="Coffee slide background"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
                <div className="absolute inset-0 bg-linear-to-r from-dark/75 via-dark/40 to-dark/15" />
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-xl px-6 md:px-12 lg:px-16">
                    <p className="text-primary font-script text-2xl md:text-3xl mb-3">
                      Coffee House
                    </p>
                    <h3 className="font-serif text-4xl md:text-5xl text-cream tracking-wide mb-4">
                      Brewed to slow the moment.
                    </h3>
                    <p className="text-cream/75 max-w-lg leading-relaxed">
                      Explore our espresso drinks, milk-based classics, and rich
                      signature brews crafted for every coffee mood.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menu items */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
                {filtered.map((item) => (
                  <motion.div
                    key={item.id}
                    className="flex items-start gap-4 py-6 border-b border-dark/10 group cursor-pointer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300 overflow-hidden">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <span className="text-xl">🍽️</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-3">
                        <h3 className="font-serif text-lg text-dark tracking-wide group-hover:text-primary transition-colors duration-300">
                          {item.name}
                          {item.popular && (
                            <span className="text-primary text-xs ml-2">★</span>
                          )}
                        </h3>
                        <span className="flex-1 border-b border-dotted border-dark/20 mb-1" />
                        <span className="font-serif text-lg text-dark shrink-0">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-sm text-dark/50 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
