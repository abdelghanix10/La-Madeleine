"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";
import { translations, useLanguage } from "@/providers/LanguageProvider";

const CATS = [
  "all",
  "order",
  "menu",
  "delivery",
  "cafes",
  "products",
  "payment",
] as const;
type Category = (typeof CATS)[number];

const FAQS = [
  { cat: "order", id: 1 },
  { cat: "order", id: 2 },
  { cat: "menu", id: 3 },
  { cat: "menu", id: 4 },
  { cat: "delivery", id: 5 },
  { cat: "delivery", id: 6 },
  { cat: "cafes", id: 7 },
  { cat: "cafes", id: 8 },
  { cat: "products", id: 9 },
  { cat: "products", id: 10 },
  { cat: "payment", id: 11 },
  { cat: "payment", id: 12 },
] as const;

const CATEGORY_KEYS = {
  all: "faqCategoryAll",
  order: "faqCategoryOrder",
  menu: "faqCategoryMenu",
  delivery: "faqCategoryDelivery",
  cafes: "faqCategoryCafes",
  products: "faqCategoryProducts",
  payment: "faqCategoryPayment",
} as const;

const translationKey = (prefix: string, id: number) =>
  `${prefix}${id}` as keyof typeof translations.en;

export default function FaqPremium() {
  const { t } = useLanguage();
  const [cat, setCat] = useState<Category>("all");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<number | null>(0);

  const list = useMemo(() => {
    return FAQS.map((f, i) => ({
      ...f,
      i,
      question: t(translationKey("faqQuestion", f.id)),
      answer: t(translationKey("faqAnswer", f.id)),
    })).filter(
      (f) =>
        (cat === "all" || f.cat === cat) &&
        (!q ||
          f.question.toLowerCase().includes(q.toLowerCase()) ||
          f.answer.toLowerCase().includes(q.toLowerCase())),
    );
  }, [cat, q, t]);

  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 md:px-10">
      {/* Search + cats */}
      <ScrollReveal className="-mt-2">
        <div className="rounded-[28px] border border-dark/8 bg-[#fffdf9] p-5 shadow-sm md:p-7">
          <div className="relative">
            <Search
              size={17}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-dark/35"
            />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t("faqSearchPlaceholder")}
              className="w-full rounded-full border border-dark/10 bg-ivory py-3.5 pl-12 pr-5 text-[15px] outline-none focus:border-primary focus:ring-4 focus:ring-primary/15"
            />
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCat(c);
                  setOpen(null);
                }}
                className={`shrink-0 rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] transition-all ${
                  cat === c
                    ? "bg-dark text-cream"
                    : "border border-dark/10 text-dark/55 hover:text-dark"
                }`}
              >
                {t(CATEGORY_KEYS[c])}
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Accordion */}
      <div className="mt-8 space-y-4">
        <AnimatePresence mode="popLayout">
          {list.map((f) => {
            const isOpen = open === f.i;
            return (
              <motion.div
                layout
                key={f.i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.99 }}
                className={`overflow-hidden rounded-[22px] border transition-all ${
                  isOpen
                    ? "border-dark bg-dark text-cream shadow-xl"
                    : "border-dark/8 bg-[#fffdf9] hover:border-dark/20"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : f.i)}
                  className="flex w-full items-center gap-5 p-6 text-left md:p-7"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`hidden font-serif text-sm tracking-[0.2em] sm:block ${
                      isOpen ? "text-primary" : "text-dark/30"
                    }`}
                  >
                    {String(f.i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span
                      className={`block text-[10px] font-bold uppercase tracking-[0.22em] ${
                        isOpen ? "text-primary" : "text-primary-dark"
                      }`}
                    >
                      {t(CATEGORY_KEYS[f.cat])}
                    </span>
                    <span
                      className={`mt-1.5 block font-serif text-[22px] leading-snug md:text-2xl ${
                        isOpen ? "text-cream" : "text-dark"
                      }`}
                    >
                      {f.question}
                    </span>
                  </span>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-primary text-dark"
                        : "bg-dark/5 text-dark"
                    }`}
                  >
                    <Plus size={18} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.32,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    >
                      <p className="px-6 pb-7 pl-6 text-[15px] leading-relaxed text-cream/70 sm:pl-[68px] md:px-7 md:pl-[68px]">
                        {f.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
        {list.length === 0 && (
          <div className="rounded-3xl border border-dashed border-dark/15 py-16 text-center">
            <p className="font-serif text-2xl text-dark/50">
              {t("faqNoResultsTitle")}
            </p>
            <p className="mt-2 text-[14px] text-muted">
              {t("faqNoResultsDescription")}
            </p>
          </div>
        )}
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[28px] bg-[#efe6d6] p-8 text-center md:flex-row md:p-10 md:text-left">
        <div>
          <p className="font-script text-3xl text-primary-dark">
            {t("faqCtaScript")}
          </p>
          <p className="mt-1 font-serif text-2xl text-dark md:text-3xl">
            {t("faqCtaTitle")}
          </p>
        </div>
        <Link href="/contact" className="btn-primary shrink-0">
          {t("faqCtaButton")} <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
