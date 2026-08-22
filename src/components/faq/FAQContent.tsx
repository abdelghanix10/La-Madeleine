"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";

export default function FAQContent() {
  const { data, t } = useLanguage();
  const faqData = data.faqData;

  const faqCategories = useMemo(() => {
    return [t("all"), ...Array.from(new Set(faqData.map((f) => f.category)))];
  }, [faqData, t]);

  const [activeCategory, setActiveCategory] = useState(() => t("all"));
  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    let items = faqData;
    if (activeCategory !== t("all"))
      items = items.filter((f) => f.category === activeCategory);
    if (search)
      items = items.filter(
        (f) =>
          f.question.toLowerCase().includes(search.toLowerCase()) ||
          f.answer.toLowerCase().includes(search.toLowerCase()),
      );
    return items;
  }, [faqData, activeCategory, search, t]);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        {/* Search */}
        <ScrollReveal className="mb-10">
          <div className="relative max-w-md mx-auto">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/40"
            />
            <input
              type="text"
              placeholder={t("searchQuestions")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-cream/70 border border-dark/10 rounded-full text-sm text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans"
            />
          </div>
        </ScrollReveal>

        {/* Category tabs */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-wrap justify-center gap-2.5">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs tracking-[0.15em] cursor-pointer uppercase rounded-full transition-all duration-200 font-medium ${
                  activeCategory === cat
                    ? "bg-dark text-cream shadow-sm"
                    : "bg-cream/60 text-dark/70 border border-dark/8 hover:border-dark/20 hover:text-dark hover:bg-cream"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Accordion */}
        <div className="space-y-3.5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + search}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
            >
              {filtered.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-dark/8 bg-white rounded-2xl mb-3.5 overflow-hidden shadow-xs hover:border-primary/40 transition-colors duration-200"
                >
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-serif text-xs font-bold flex items-center justify-center shrink-0">
                        {String(filtered.indexOf(faq) + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-serif text-lg text-dark group-hover:text-primary transition-colors duration-200">
                        {faq.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: openId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 ml-4 w-8 h-8 rounded-full bg-cream/70 flex items-center justify-center text-dark/60 group-hover:text-dark transition-colors"
                    >
                      <ChevronDown size={17} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                      >
                        <div className="px-6 pb-6 pt-1 pl-16 border-t border-dark/5">
                          <p className="text-dark/65 text-sm leading-relaxed font-sans">
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
                {t("noQuestionsFound")}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
