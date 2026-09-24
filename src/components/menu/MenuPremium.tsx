"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpenText,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Flame,
  X,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useLanguage, type translations } from "@/providers/LanguageProvider";
import { useNavbarVisibility } from "@/providers/NavbarVisibilityProvider";
import * as dataFR from "@/lib/data-fr";

type Item = (typeof dataFR.menuItems)[number];
type TranslationKey = keyof typeof translations.en;

const TABS: { key: string; labelKey: TranslationKey }[] = [
  { key: "all", labelKey: "menuPremiumTabAll" },
  { key: "Viennoiseries", labelKey: "menuPremiumTabViennoiseries" },
  { key: "Pâtisseries", labelKey: "menuPremiumTabPastries" },
  { key: "Petit-déjeuner et Salé", labelKey: "menuPremiumTabSavory" },
  { key: "Cafés", labelKey: "menuPremiumTabCafe" },
  { key: "Boissons", labelKey: "menuPremiumTabDrinks" },
  { key: "Jus", labelKey: "menuPremiumTabJuices" },
];

const TAB_MATCH_KEYWORDS: Record<string, string[]> = {
  Viennoiseries: ["croissant", "pain au chocolat", "pain suisse", "danoise", "brioche", "pithiviers", "triangle"],
  Pâtisseries: ["mille-feuille", "tarte", "madeleine", "basboussa", "gâteau", "cupcake", "crêpe", "gaufre", "pancake", "beignet", "chausson"],
};

function matchesFrCatalog(item: Item, tabKey: string): boolean {
  if (tabKey === "all") return true;
  if (tabKey === "Petit-déjeuner et Salé") return item.category === "Petit-déjeuner et Salé";
  if (tabKey === "Cafés") return item.category === "Cafés";
  if (tabKey === "Jus") return item.category === "Jus";
  if (tabKey === "Boissons")
    return item.category === "Boissons Chaudes" || item.category === "Boissons Froides";
  const match = TAB_MATCH_KEYWORDS[tabKey];
  if (!match?.length) return item.category === tabKey;
  const name = item.name.toLowerCase();
  return match.some((k) => name.includes(k));
}

// Tab membership is computed once from the French catalogue — item ids are
// stable across languages (same order, ids 1–156), so filtering by id keeps
// every language in sync without duplicating match rules per locale.
const TAB_ITEM_IDS: Record<string, Set<number>> = Object.fromEntries(
  TABS.map((t) => [
    t.key,
    new Set(
      (dataFR.menuItems as Item[])
        .filter((i) => matchesFrCatalog(i, t.key))
        .map((i) => i.id),
    ),
  ]),
);

function matchesTab(item: Item, tabKey: string): boolean {
  if (tabKey === "all") return true;
  return TAB_ITEM_IDS[tabKey]?.has(item.id) ?? false;
}

function Price({ value }: { value: number }) {
  return (
    <span className="inline-flex items-baseline gap-1 rounded-full bg-primary/12 px-3.5 py-1.5 font-serif text-[17px] font-semibold text-dark">
      {value.toFixed(2).replace(".", ",")}
      <span className="text-[12px] font-sans font-bold">DH</span>
    </span>
  );
}

// Complete paper menu, page by page — files live in public/menu,
// served as-is (do not move or rename them).
const MENU_BOOK_PAGES = Array.from(
  { length: 10 },
  (_, i) => `/menu/menu_page-${String(i + 1).padStart(4, "0")}.webp`,
);

function MenuBookViewer({ onClose }: { onClose: () => void }) {
  const { t, dir } = useLanguage();
  const [page, setPage] = useState(0);
  const [slideDir, setSlideDir] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = MENU_BOOK_PAGES.length;
  const isRtl = dir === "rtl";

  const goTo = (next: number) => {
    const clamped = Math.max(0, Math.min(total - 1, next));
    if (clamped === page) return;
    setSlideDir(clamped > page ? 1 : -1);
    setPage(clamped);
  };
  const prev = () => goTo(page - 1);
  const next = () => goTo(page + 1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") (isRtl ? prev : next)();
      else if (e.key === "ArrowLeft") (isRtl ? next : prev)();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.dispatchEvent(
      new CustomEvent("menu-book-toggle", { detail: { open: true } }),
    );
    return () => {
      document.body.style.overflow = prevOverflow;
      window.dispatchEvent(
        new CustomEvent("menu-book-toggle", { detail: { open: false } }),
      );
    };
  }, []);

  const PrevIcon = isRtl ? ChevronRight : ChevronLeft;
  const NextIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[1000] flex flex-col bg-dark/92 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={t("menuPremiumMenuBookTitle")}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (Math.abs(dx) < 48) return;
        if (dx < 0) (isRtl ? prev : next)();
        else (isRtl ? next : prev)();
      }}
    >
      {/* Top bar */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 pt-4 md:px-8 md:pt-6">
        <p className="font-serif text-xl text-cream md:text-2xl">
          {t("menuPremiumMenuBookTitle")}
        </p>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-cream/10 px-4 py-1.5 text-[12px] font-bold tracking-[0.18em] text-cream/80">
            {page + 1} / {total}
          </span>
          <button
            onClick={onClose}
            aria-label={t("menuPremiumMenuBookClose")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-all hover:border-primary hover:text-primary active:scale-95"
          >
            <X size={19} />
          </button>
        </div>
      </div>

      {/* Page */}
      <div className="relative mx-auto flex min-h-0 w-full max-w-5xl flex-1 items-center justify-center px-4 py-4 md:px-20">
        <button
          onClick={prev}
          disabled={page === 0}
          aria-label={t("menuPremiumMenuBookPrev")}
          className="absolute left-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cream/25 text-cream transition-all hover:border-primary hover:text-primary active:scale-95 disabled:opacity-25 md:flex"
        >
          <PrevIcon size={20} />
        </button>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={page}
            initial={{ opacity: 0, x: slideDir * 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: slideDir * -32 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative h-full max-h-[68dvh] w-full max-w-3xl overflow-hidden rounded-2xl shadow-2xl md:max-h-[72dvh]"
          >
            <Image
              src={MENU_BOOK_PAGES[page]}
              alt={`${t("menuPremiumMenuBookTitle")} — ${page + 1}/${total}`}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 800px"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <button
          onClick={next}
          disabled={page === total - 1}
          aria-label={t("menuPremiumMenuBookNext")}
          className="absolute right-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cream/25 text-cream transition-all hover:border-primary hover:text-primary active:scale-95 disabled:opacity-25 md:flex"
        >
          <NextIcon size={20} />
        </button>
      </div>

      {/* Bottom controls */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-4 pb-5 md:px-8 md:pb-7">
        <div className="flex items-center gap-2.5">
          {MENU_BOOK_PAGES.map((src, i) => (
            <button
              key={src}
              onClick={() => goTo(i)}
              aria-label={`${t("menuPremiumMenuBookTitle")} ${i + 1}/${total}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === page
                  ? "w-7 bg-primary"
                  : "w-2 bg-cream/25 hover:bg-cream/50"
              }`}
            />
          ))}
        </div>
        <div className="flex w-full items-center justify-between gap-3 sm:justify-center sm:gap-4">
          <button
            onClick={prev}
            disabled={page === 0}
            className="btn-ghost-light flex-1 !py-3.5 disabled:opacity-30 sm:flex-none sm:!px-8"
          >
            <PrevIcon size={15} /> {t("menuPremiumMenuBookPrev")}
          </button>
          <button
            onClick={next}
            disabled={page === total - 1}
            className="btn-gold flex-1 !py-3.5 disabled:opacity-30 sm:flex-none sm:!px-8"
          >
            {t("menuPremiumMenuBookNext")} <NextIcon size={15} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function MenuPremium() {
  const { data, t } = useLanguage();
  const { hidden: navHidden } = useNavbarVisibility();
  const [tab, setTab] = useState("all");
  const [expanded, setExpanded] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);

  const items = data.menuItems as Item[];
  const filtered = useMemo(() => {
    const list = items.filter((i) => matchesTab(i, tab));
    // Popular first, then rest
    return [...list].sort((a, b) => Number(b.popular) - Number(a.popular));
  }, [items, tab]);

  const featured = filtered.filter((f) => f.popular).slice(0, 3);
  const rest = filtered.filter((f) => !featured.includes(f));

  const limit = tab === "all" ? 18 : 24;
  const shownRest = expanded ? rest : rest.slice(0, limit);
  const activeTab = TABS.find((x) => x.key === tab) ?? TABS[0];
  const sectionTitle =
    tab === "all" ? t("menuPremiumCurrentMenu") : t(activeTab.labelKey);
  const extraCount = filtered.length - shownRest.length - featured.length;

  return (
    <div className="bg-ivory">
      {/* Sticky category nav — docks to the viewport top while the navbar
          is hidden, slides back underneath it when the navbar returns. */}
      <div
        className={`sticky z-30 border-b border-dark/8 bg-ivory/95 shadow-[0_10px_30px_-18px_rgba(28,22,19,0.35)] backdrop-blur-xl transition-[top] duration-300 ease-out ${
          navHidden ? "top-0" : "top-[64px] lg:top-[72px]"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-2.5 overflow-x-auto px-6 py-4 no-scrollbar md:px-10">
          {TABS.map((x) => (
            <button
              key={x.key}
              onClick={() => {
                setTab(x.key);
                setExpanded(false);
              }}
              className={`shrink-0 rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-all ${
                tab === x.key
                  ? "bg-dark text-cream shadow-lg"
                  : "border border-dark/10 bg-white/70 text-dark/60 hover:border-dark/25 hover:text-dark"
              }`}
            >
              {t(x.labelKey)}
            </button>
          ))}
          <div className="ml-auto hidden shrink-0 items-center gap-2 md:flex">
            <button
              onClick={() => setBookOpen(true)}
              className="btn-ghost shrink-0 !px-5 !py-2.5 !text-[11px]"
            >
              <BookOpenText size={14} /> {t("menuPremiumMenuBookCta")}
            </button>
            <Link
              href="/contact"
              className="btn-gold shrink-0 !px-5 !py-2.5 !text-[11px]"
            >
              {t("menuHeroOrderCta")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
      {/* Menu Book Button */}
      <div className="border-b border-dark/8 bg-[#f4ecdc]">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-7 text-center md:px-10 md:py-8">
          <p className="font-script text-2xl leading-none text-primary-dark md:text-3xl">
            {t("menuPremiumPaperScript")}
          </p>
          <button
            onClick={() => setBookOpen(true)}
            className="btn-gold group mt-4 !px-9 !py-4 shadow-[0_20px_50px_-12px_rgba(200,154,43,0.7)]"
          >
            <BookOpenText
              size={17}
              className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
            />
            {t("menuPremiumMenuBookCta")}
          </button>
          <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.22em] text-dark/45">
            {t("menuPremiumPaperTitle")}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            {/* Editorial featured */}
            {featured.length > 0 && (
              <div className="grid gap-5 lg:grid-cols-2">
                {/* Large feature */}
                <ScrollReveal className="h-full">
                  <article className="group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-[28px] lg:min-h-[560px]">
                    <Image
                      src={featured[0].image}
                      alt={featured[0].name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/25 to-transparent" />
                    <div className="relative p-7 md:p-9">
                      <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-dark">
                        <Flame size={12} /> {t("menuPremiumSignature")}
                      </span>
                      <h3 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
                        {featured[0].name}
                      </h3>
                      <p className="mt-3 max-w-md text-[14px] leading-relaxed text-cream/70">
                        {featured[0].description}
                      </p>
                      <div className="mt-5 flex flex-wrap items-center gap-4">
                        <span className="rounded-full bg-cream px-4 py-2 font-serif text-lg font-semibold text-dark">
                          {featured[0].price.toFixed(2).replace(".", ",")} DH
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-cream/60">
                          {featured[0].category}
                        </span>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
                <div className="grid gap-5">
                  {featured.slice(1, 3).map((f) => (
                    <ScrollReveal key={f.id}>
                      <article className="group grid grid-cols-[140px_1fr] gap-5 rounded-[24px] border border-dark/8 bg-[#fffdf9] p-4 transition-all hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[200px_1fr]">
                        <span className="relative block aspect-square overflow-hidden rounded-2xl">
                          <Image
                            src={f.image}
                            alt={f.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="220px"
                          />
                        </span>
                        <span className="flex flex-col justify-center py-1 pr-2">
                          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary-dark">
                            {f.category}
                          </span>
                          <span className="mt-1.5 block font-serif text-2xl leading-tight text-dark md:text-[28px]">
                            {f.name}
                          </span>
                          <span className="mt-2 line-clamp-2 block text-[13px] leading-relaxed text-muted">
                            {f.description}
                          </span>
                          <span className="mt-3">
                            <Price value={f.price} />
                          </span>
                        </span>
                      </article>
                    </ScrollReveal>
                  ))}
                  {/* Inline CTA card */}
                  <div className="flex flex-col justify-center rounded-[24px] bg-dark p-7 text-cream sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-script text-2xl text-primary">
                        {t("menuPremiumCtaScript")}
                      </p>
                      <p className="mt-1 font-serif text-2xl">
                        {t("menuPremiumCtaTitle")}
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="btn-gold mt-5 shrink-0 sm:mt-0"
                    >
                      {t("menuHeroOrderCta")} <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Editorial list — dotted leaders (desktop) / cards (mobile) */}
            <div className="mt-14">
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <h2 className="font-serif text-3xl text-dark md:text-4xl">
                  {sectionTitle}
                </h2>
                <div className="flex items-center gap-4">
                  <p className="hidden text-[12px] uppercase tracking-[0.2em] text-dark/45 sm:block">
                    {t("menuPremiumCreations", { count: filtered.length })}
                  </p>
                  <button
                    onClick={() => setBookOpen(true)}
                    className="btn-ghost shrink-0 !px-5 !py-2.5 !text-[11px]"
                  >
                    <BookOpenText size={14} /> {t("menuPremiumMenuBookCta")}
                  </button>
                </div>
              </div>

              <div className="grid gap-x-12 lg:grid-cols-2">
                {shownRest.map((item, idx) => (
                  <ScrollReveal key={item.id} delay={Math.min(idx * 0.03, 0.3)}>
                    <article className="group flex items-center gap-4 border-b border-dark/8 py-5">
                      <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="64px"
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-baseline gap-3">
                          <span className="truncate font-serif text-[22px] text-dark transition-colors group-hover:text-primary-dark">
                            {item.name}
                          </span>
                          <span
                            aria-hidden
                            className="mx-1 hidden flex-1 border-b border-dotted border-dark/20 sm:block"
                          />
                          <span className="shrink-0 font-serif text-[18px] font-semibold text-primary-dark">
                            {item.price.toFixed(2).replace(".", ",")} DH
                          </span>
                        </span>
                        <span className="mt-1 line-clamp-1 block text-[13px] text-muted">
                          {item.description}
                        </span>
                        <span className="mt-1.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-dark/35">
                          {item.category}
                        </span>
                      </span>
                    </article>
                  </ScrollReveal>
                ))}
              </div>

              {extraCount > 0 && !expanded && (
                <p className="mt-10 text-center text-[13px] text-dark/50">
                  {t("menuPremiumMoreNote", { count: extraCount })}
                </p>
              )}

              {rest.length > limit && (
                <div className="mt-8 text-center">
                  <button
                    onClick={() => setExpanded((v) => !v)}
                    className={expanded ? "btn-ghost" : "btn-gold"}
                    aria-expanded={expanded}
                  >
                    {expanded
                      ? t("menuPremiumShowLess")
                      : t("menuPremiumShowMore")}
                    {expanded ? (
                      <ChevronUp size={15} />
                    ) : (
                      <ChevronDown size={15} />
                    )}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="mt-16 overflow-hidden rounded-[32px] bg-[#efe6d6]">
          <div className="grid items-center gap-8 p-8 md:grid-cols-[1fr_auto] md:p-12">
            <div>
              <p className="font-script text-3xl text-primary-dark">
                {t("menuPremiumPaperScript")}
              </p>
              <h3 className="mt-2 font-serif text-3xl text-dark md:text-4xl">
                {t("menuPremiumPaperTitle")}
              </h3>
              <p className="mt-3 max-w-lg text-[15px] text-muted">
                {t("menuPremiumPaperDescription")}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setBookOpen(true)} className="btn-gold">
                <BookOpenText size={15} /> {t("menuPremiumMenuBookCta")}
              </button>
              <Link href="/contact" className="btn-primary">
                {t("menuHeroOrderCta")} <ArrowRight size={15} />
              </Link>
              <Link href="/shop" className="btn-ghost">
                {t("menuHeroShopCta")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Menu book viewer */}
      <AnimatePresence>
        {bookOpen && <MenuBookViewer onClose={() => setBookOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
