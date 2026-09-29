"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpenText,
  ChevronLeft,
  ChevronRight,
  UtensilsCrossed,
  X,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";
import { useNavbarVisibility } from "@/providers/NavbarVisibilityProvider";
import * as dataFR from "@/lib/data-fr";

type Item = (typeof dataFR.menuItems)[number];

const ALL_CATEGORY_KEY = "all";

// Tabs mirror the catalogue categories 1:1 (src/lib/data*.ts `menuCategories`).
// Keys are index-based (`cat-0`, `cat-1`, …) so they stay stable across
// languages — the category arrays are parallel in every locale.
const tabKeyForIndex = (index: number) => `cat-${index}`;

function tabIndexForKey(key: string): number | null {
  if (!key.startsWith("cat-")) return null;
  const n = Number(key.slice(4));
  return Number.isInteger(n) && n >= 0 ? n : null;
}

function formatPrice(value: number): string {
  return Number.isInteger(value)
    ? value.toFixed(0)
    : value.toFixed(2).replace(".", ",");
}

// Complete paper menu, page by page — files live in public/menu,
// served as-is (do not move or rename them).
const MENU_BOOK_PAGES = Array.from(
  { length: 10 },
  (_, i) => `/menu/menu_page-${String(i + 1).padStart(4, "0")}.webp`,
);

interface CategoryHighlight {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
}

function MenuHighlight({
  categoryLabel,
  highlight,
  priority = false,
}: {
  categoryLabel: string;
  highlight: CategoryHighlight;
  priority?: boolean;
}) {
  return (
    <motion.div
      key={`${categoryLabel}-highlight`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      className="mb-10 overflow-hidden rounded-[24px] border border-dark/10 bg-dark shadow-[0_30px_60px_-30px_rgba(28,22,19,0.45)]"
    >
      <div className="relative min-h-[260px] md:min-h-[360px]">
        <Image
          src={highlight.image}
          alt={`${categoryLabel} background`}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1024px"
          quality={70}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/45 to-dark/10" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-xl px-6 md:px-12 lg:px-16">
            <p className="text-primary-light font-script text-xl md:text-3xl mb-3">
              {highlight.eyebrow}
            </p>
            <h3 className="font-serif text-2xl md:text-5xl text-cream tracking-wide mb-4">
              {highlight.title}
            </h3>
            <p className="text-cream/75 max-w-lg leading-relaxed">
              {highlight.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Fixed-height product row: icon thumb, dotted leader, gold DH price,
// 2-line clamped description + pinned category label so every card
// in the grid measures exactly the same height.
function MenuItemRow({ item }: { item: Item }) {
  return (
    <motion.div
      className="group flex h-full min-h-[138px] cursor-pointer items-start gap-4 rounded-2xl border-b border-dark/6 px-3 py-5 transition-all duration-200 hover:border-primary/50 hover:bg-cream/60"
      whileHover={{ x: 3 }}
      transition={{ duration: 0.2 }}
    >
      <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-cream shadow-xs transition-all duration-300 group-hover:ring-2 group-hover:ring-primary/40">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            width={48}
            height={48}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <UtensilsCrossed size={18} className="text-primary/70" />
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col self-stretch">
        <div className="flex items-baseline gap-2">
          <h3 className="truncate font-serif text-lg tracking-wide text-dark transition-colors duration-200 group-hover:text-primary">
            {item.name}
          </h3>
          <span
            aria-hidden
            className="mx-1 mb-1 flex-1 border-b border-dotted border-dark/20"
          />
          <span className="shrink-0 text-[15px] font-bold text-primary-dark">
            {formatPrice(item.price)}{" "}
            <span className="text-[11px] font-bold">DH</span>
          </span>
        </div>
        {item.description ? (
          <p className="mt-0.5 line-clamp-2 min-h-[2.6em] text-xs leading-relaxed text-dark/55">
            {item.description}
          </p>
        ) : (
          <span className="mt-0.5 min-h-[2.6em]" aria-hidden />
        )}
        <p className="mt-auto pt-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-dark/35">
          {item.category}
        </p>
      </div>
    </motion.div>
  );
}

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
  const {
    hidden: navHidden,
    atTop: navAtTop,
    navHeight,
  } = useNavbarVisibility();
  const [activeCategoryKey, setActiveCategoryKey] = useState(ALL_CATEGORY_KEY);
  const [bookOpen, setBookOpen] = useState(false);

  const items = data.menuItems as Item[];
  const categories: string[] = useMemo(() => {
    const fromData = (data as { menuCategories?: string[] }).menuCategories;
    if (fromData?.length) return fromData;
    const seen: string[] = [];
    for (const i of items) {
      if (!seen.includes(i.category)) seen.push(i.category);
    }
    return seen;
  }, [data, items]);

  const categoryHighlightsByIndex: Partial<Record<number, CategoryHighlight>> =
    {
      0: {
        image: "/images/background/bg-breakfast.webp",
        eyebrow: t("breakfastEyebrow"),
        title: t("breakfastTitle"),
        description: t("breakfastDescription"),
      },
      1: {
        image: "/images/background/bg-pastries.webp",
        eyebrow: t("pastriesEyebrow"),
        title: t("pastriesTitle"),
        description: t("pastriesDescription"),
      },
      2: {
        image: "/images/background/bg-bread.webp",
        eyebrow: t("bakeryEyebrow"),
        title: t("bakeryTitle"),
        description: t("bakeryDescription"),
      },
      3: {
        image: "/images/background/bg-contact.webp",
        eyebrow: t("hotDrinksEyebrow"),
        title: categories[3] ?? "",
        description: t("hotDrinksDescription"),
      },
      4: {
        image: "/images/background/background-testimonials.webp",
        eyebrow: t("coldDrinksEyebrow"),
        title: categories[4] ?? "",
        description: t("coldDrinksDescription"),
      },
      5: {
        image: "/images/background/bg-coffee.webp",
        eyebrow: t("coffeesEyebrow"),
        title: t("coffeesTitle"),
        description: t("coffeesDescription"),
      },
      6: {
        image: "/images/background/bg-juices.webp",
        eyebrow: t("juicesEyebrow"),
        title: t("juicesTitle"),
        description: t("juicesDescription"),
      },
      7: {
        image: "/images/background/bg-about.webp",
        eyebrow: t("extrasEyebrow"),
        title: categories[7] ?? "",
        description: t("extrasDescription"),
      },
    };

  const activeTabIndex = tabIndexForKey(activeCategoryKey);

  // Tabs are the catalogue categories themselves — filter by direct
  // category equality (items and categories come from the same locale).
  const tabs = [
    { key: ALL_CATEGORY_KEY, label: t("menuPremiumTabAll") },
    ...categories.map((c, i) => ({ key: tabKeyForIndex(i), label: c })),
  ];

  const filtered = useMemo(() => {
    const list =
      activeTabIndex === null
        ? items
        : items.filter((i) => i.category === categories[activeTabIndex]);
    // Popular first, then rest.
    return [...list].sort((a, b) => Number(b.popular) - Number(a.popular));
  }, [items, categories, activeTabIndex]);

  // Group into categories (keeps the catalogue order) so each section can
  // carry its own highlight banner. All products are shown — no slicing.
  const groupedItems = useMemo(() => {
    const groups = categories.map((category, index) => ({
      index,
      category,
      items: filtered.filter((i) => i.category === category),
    }));
    return groups.filter((g) => g.items.length > 0);
  }, [categories, filtered]);

  const sectionTitle =
    activeTabIndex === null
      ? t("menuPremiumCurrentMenu")
      : (categories[activeTabIndex] ?? t("menuPremiumCurrentMenu"));

  return (
    // NOTE: overflow-x-clip (not overflow-hidden) — overflow:hidden creates a
    // scroll container on this ancestor and breaks the sticky category nav.
    // overflow:clip still clips the glow without affecting sticky positioning.
    <div className="relative overflow-x-clip bg-ivory text-dark">
      {/* Soft ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 420px at 12% 0%, rgba(200,154,43,0.10), transparent 60%), radial-gradient(800px 500px at 88% 8%, rgba(201,111,74,0.08), transparent 60%)",
        }}
      />

      {/* Sticky category nav — docks to the viewport top while the navbar
          is hidden, slides back underneath it when the navbar returns. */}
      <motion.div
        className="sticky top-0 z-30 border-b border-dark/8 bg-ivory/95 shadow-[0_10px_30px_-18px_rgba(28,22,19,0.35)] backdrop-blur-xl"
        animate={{ top: navHidden ? 0 : navHeight }}
        transition={{
          duration: navAtTop ? 0 : 0.32,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-2.5 overflow-x-auto px-6 py-4 no-scrollbar md:px-10">
          {tabs.map((x) => (
            <button
              key={x.key}
              onClick={() => {
                setActiveCategoryKey(x.key);
              }}
              className={`shrink-0 rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-all ${
                activeCategoryKey === x.key
                  ? "bg-dark text-cream shadow-lg"
                  : "border border-dark/10 bg-white/70 text-dark/60 hover:border-dark/25 hover:text-dark"
              }`}
            >
              {x.label}
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
      </motion.div>

      {/* Paper menu band */}
      <div className="relative border-b border-dark/8 bg-[#f4ecdc]">
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

      <div className="relative mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
        {/* Section heading */}
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-script text-3xl leading-none text-primary-dark md:text-4xl">
                {sectionTitle}
              </p>
              <div className="gold-rule mt-4 !w-24 !justify-start" />
            </div>
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
        </ScrollReveal>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategoryKey}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="space-y-14">
                {groupedItems.map(({ index, category, items: group }) => (
                  <div key={category}>
                    {categoryHighlightsByIndex[index] ? (
                      <MenuHighlight
                        categoryLabel={category}
                        highlight={categoryHighlightsByIndex[index]!}
                        priority={index === 0}
                      />
                    ) : (
                      <div className="mb-6 flex items-baseline gap-4">
                        <h3 className="shrink-0 font-serif text-2xl text-dark md:text-3xl">
                          {category}
                        </h3>
                        <span
                          aria-hidden
                          className="mb-1 hidden flex-1 border-b border-dotted border-dark/20 sm:block"
                        />
                      </div>
                    )}
                    <div className="grid grid-cols-1 items-stretch gap-x-12 gap-y-3 md:grid-cols-2">
                      {group.map((item) => (
                        <MenuItemRow key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {groupedItems.length === 0 && (
                <p className="mt-10 text-center text-[14px] text-dark/50">
                  {t("menuPremiumCreations", { count: 0 })}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 overflow-hidden rounded-[32px] bg-[#efe6d6]">
          <div className="grid items-center gap-8 p-8 xl:grid-cols-[1fr_auto] xl:p-12">
            <div>
              <p className="font-script text-3xl text-primary-dark">
                {t("menuPremiumPaperScript")}
              </p>
              <h3 className="mt-2 font-serif text-3xl text-dark xl:text-4xl">
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
