"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { faqData } from "@/lib/data";

const faqCategories = ["All", ...Array.from(new Set(faqData.map((f) => f.category)))];

export default function FAQContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    let items = faqData;
    if (activeCategory !== "All")
      items = items.filter((f) => f.category === activeCategory);
    if (search)
      items = items.filter(
        (f) =>
          f.question.toLowerCase().includes(search.toLowerCase()) ||
          f.answer.toLowerCase().includes(search.toLowerCase())
      );
    return items;
  }, [activeCategory, search]);

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        {/* Search */}
        <ScrollReveal className="mb-12">
          <div className="relative max-w-lg mx-auto">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/40"
            />
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-cream border border-dark/10 text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </ScrollReveal>

        {/* Category tabs */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs tracking-[0.15em] uppercase transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-dark text-cream border-dark"
                    : "bg-transparent text-dark/50 border-dark/10 hover:border-dark/30 hover:text-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Accordion */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + search}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-dark/10 bg-cream mb-4 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-primary text-lg shrink-0">
                        {String(filtered.indexOf(faq) + 1).padStart(2, "0")}.
                      </span>
                      <h3 className="font-serif text-lg text-dark group-hover:text-primary transition-colors duration-300">
                        {faq.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: openId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 ml-4"
                    >
                      <ChevronDown size={20} className="text-dark/40" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        <div className="px-6 pb-6 pl-16">
                          <p className="text-dark/60 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="font-serif text-2xl text-dark/30">
                No questions found
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
