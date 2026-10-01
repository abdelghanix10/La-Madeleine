"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpenText,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  UtensilsCrossed,
  X,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useLanguage, type Language } from "@/providers/LanguageProvider";
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
  const { data, t, language, dir } = useLanguage();
  const {
    hidden: navHidden,
    atTop: navAtTop,
    navHeight,
  } = useNavbarVisibility();
  const [activeCategoryKey, setActiveCategoryKey] = useState(ALL_CATEGORY_KEY);
  const [bookOpen, setBookOpen] = useState(false);

  // Horizontal scroll tracking for category navbar
  const navScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = navScrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 2) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    const isRtl = dir === "rtl" || language === "ar" || document.dir === "rtl";
    if (!isRtl) {
      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft < maxScroll - 4);
      return;
    }

    // In RTL:
    // Chromium/Firefox/Safari modern standard: scrollLeft is 0 at start (right) and negative as it scrolls left.
    if (scrollLeft <= 0) {
      const abs = Math.abs(scrollLeft);
      setCanScrollLeft(abs < maxScroll - 4);
      setCanScrollRight(abs > 4);
    } else {
      // Legacy WebKit positive RTL (maxScroll at right, 0 at left):
      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft < maxScroll - 4);
    }
  }, [language, dir]);

  const scrollNav = (direction: "left" | "right") => {
    const el = navScrollRef.current;
    if (!el) return;
    const scrollAmount = 280;
    const delta = direction === "left" ? -scrollAmount : scrollAmount;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  const scrollToTab = (buttonEl: HTMLElement) => {
    const container = navScrollRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const elRect = buttonEl.getBoundingClientRect();
    const currentScroll = container.scrollLeft;
    const targetOffset =
      elRect.left -
      containerRect.left +
      currentScroll -
      containerRect.width / 2 +
      elRect.width / 2;
    container.scrollTo({ left: targetOffset, behavior: "smooth" });
  };

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

  // Parent sections: several original item categories merge into one
  // board section (e.g. "Coffee" + "Iced Coffee" → "Coffee"), while the
  // original category is kept as the item's subcategory and shown as a
  // sub-header inside the section.
  type SectionKey = "breakfast" | "pastry" | "coffee" | "milkTea" | "cold";

 const SECTION_LABEL: Record<SectionKey, Record<Language, string>> = {
   breakfast: {
     en: "Breakfast",
     fr: "Petit-Déjeuner",
     ar: "وجبات الفطور",
   },
   pastry: {
     en: "Pastry",
     fr: "Pâtisserie",
     ar: "المعجنات والحلويات",
   },
   coffee: {
     en: "Coffee",
     fr: "Cafés",
     ar: "القهوة",
   },
   milkTea: {
     en: "Milk & Tea",
     fr: "Laits & Thés",
     ar: "الحليب والشاي",
   },
   cold: {
     en: "Cold Drinks",
     fr: "Boissons Fraîches",
     ar: "المشروبات الباردة",
   },
 };

 const SECTION_OF: Record<Language, Record<string, SectionKey>> = {
   en: {
     Breakfast: "breakfast",
     Omelets: "breakfast",
     Soup: "breakfast",
     Extras: "breakfast",
     "Waffles, Crepes & Pancakes": "pastry",
     "Pastries & Desserts": "pastry",
     Coffee: "coffee",
     "Iced Coffee": "coffee",
     "Milk & Tea": "milkTea",
     "Smoothies & Milkshakes": "cold",
     Mojito: "cold",
     Juices: "cold",
     "Cocktails & Fruit Salads": "cold",
     "Soft Drinks": "cold",
   },
   fr: {
     "Petit-Déjeuner": "breakfast",
     Omelettes: "breakfast",
     Soupes: "breakfast",
     Suppléments: "breakfast",
     "Gaufres, Crêpes & Pancakes": "pastry",
     "Pâtisseries & Desserts": "pastry",
     Cafés: "coffee",
     "Cafés Glacés": "coffee",
     "Laits & Thés": "milkTea",
     "Smoothies & Milkshakes": "cold",
     Mojitos: "cold",
     "Jus Frais": "cold",
     "Cocktails & Salades de Fruits": "cold",
     "Boissons Gazeuses & Eaux": "cold",
   },
   ar: {
     "وجبات الفطور": "breakfast",
     الأومليت: "breakfast",
     "الشوربة والحساء": "breakfast",
     إضافات: "breakfast",
     "الوافل، الكريب والبانكيك": "pastry",
     "المعجنات والحلويات": "pastry",
     القهوة: "coffee",
     "القهوة المثلجة": "coffee",
     "الحليب والشاي": "milkTea",
     "السموذي والميلك شيك": "cold",
     الموهيتو: "cold",
     "العصائر الطبيعية": "cold",
     "الكوكتيلات وسلطات الفواكه": "cold",
     "المشروبات الغازية والمياه": "cold",
   },
 };

  // Resolve an item's original category to its parent section label.
  // Unknown categories fall back to a section of their own name.
  const resolveSection = (
    category: string,
  ): { label: string; sub: string | null } => {
    const key = SECTION_OF[language]?.[category];
    if (!key) return { label: category, sub: null };
    return { label: SECTION_LABEL[key][language] || category, sub: category };
  };

  // Highlight banners keyed by section label (titles always match the
  // localized section name, so they stay correct in every language).
  const highlightsByLabel = useMemo(() => {
    const map: Record<string, CategoryHighlight> = {};
    const put = (
      key: SectionKey,
      highlight: Omit<CategoryHighlight, "title">,
    ) => {
      const label = SECTION_LABEL[key][language];
      if (label) map[label] = { ...highlight, title: label };
    };
    put("breakfast", {
      image: "/images/background/bg-breakfast.webp",
      eyebrow: t("breakfastEyebrow"),
      description: t("breakfastDescription"),
    });
    put("pastry", {
      image: "/images/background/bg-pastries.webp",
      eyebrow: t("pastriesEyebrow"),
      description: t("pastriesDescription"),
    });
    put("coffee", {
      image: "/images/background/bg-coffee.webp",
      eyebrow: t("coffeesEyebrow"),
      description: t("coffeesDescription"),
    });
    put("milkTea", {
      image: "/images/background/bg-contact.webp",
      eyebrow: t("milkTeaEyebrow"),
      description: t("milkTeaDescription"),
    });
    put("cold", {
      image: "/images/background/bg-juices.webp",
      eyebrow: t("juicesEyebrow"),
      description: t("juicesDescription"),
    });
    return map;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, t]);

  const activeTabIndex = tabIndexForKey(activeCategoryKey);

  // Tabs are the catalogue categories themselves — filter by direct
  // category equality (items and categories come from the same locale).
  const tabs = [
    { key: ALL_CATEGORY_KEY, label: t("menuPremiumTabAll") },
    ...categories.map((c, i) => ({ key: tabKeyForIndex(i), label: c })),
  ];

  useEffect(() => {
    const el = navScrollRef.current;
    if (!el) return;

    updateScrollState();

    const handleScroll = () => updateScrollState();
    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => updateScrollState());
      ro.observe(el);
    }

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      ro?.disconnect();
    };
  }, [updateScrollState, tabs]);

  const filtered = useMemo(() => {
    const section = activeTabIndex === null ? null : categories[activeTabIndex];
    const list =
      section == null
        ? items
        : items.filter((i) => resolveSection(i.category).label === section);
    // Popular first, then rest.
    return [...list].sort((a, b) => Number(b.popular) - Number(a.popular));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, categories, activeTabIndex, language]);

  // Featured popular products (popular: true)
  const popularItems = useMemo(() => {
    if (activeTabIndex !== null) {
      const inCat = filtered.filter((i) => i.popular);
      if (inCat.length > 0) return inCat;
    }
    return items.filter((i) => i.popular);
  }, [items, filtered, activeTabIndex]);

  // Horizontal scroll tracking for featured products carousel
  const featuredScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollFeaturedLeft, setCanScrollFeaturedLeft] = useState(false);
  const [canScrollFeaturedRight, setCanScrollFeaturedRight] = useState(false);

  const updateFeaturedScrollState = useCallback(() => {
    const el = featuredScrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 2) {
      setCanScrollFeaturedLeft(false);
      setCanScrollFeaturedRight(false);
      return;
    }

    const isRtl = dir === "rtl" || language === "ar" || document.dir === "rtl";
    if (!isRtl) {
      setCanScrollFeaturedLeft(scrollLeft > 4);
      setCanScrollFeaturedRight(scrollLeft < maxScroll - 4);
      return;
    }

    // In RTL:
    if (scrollLeft <= 0) {
      const abs = Math.abs(scrollLeft);
      setCanScrollFeaturedLeft(abs < maxScroll - 4);
      setCanScrollFeaturedRight(abs > 4);
    } else {
      setCanScrollFeaturedLeft(scrollLeft > 4);
      setCanScrollFeaturedRight(scrollLeft < maxScroll - 4);
    }
  }, [language, dir]);

  const scrollFeatured = (direction: "left" | "right") => {
    const el = featuredScrollRef.current;
    if (!el) return;
    const scrollAmount = 340;
    const delta = direction === "left" ? -scrollAmount : scrollAmount;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  useEffect(() => {
    const el = featuredScrollRef.current;
    if (!el) return;
    updateFeaturedScrollState();
    const handleScroll = () => updateFeaturedScrollState();
    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [updateFeaturedScrollState, popularItems]);

  // Reset scroll to start when language changes
  useEffect(() => {
    if (navScrollRef.current) {
      navScrollRef.current.scrollTo({ left: 0, behavior: "instant" });
      updateScrollState();
    }
    if (featuredScrollRef.current) {
      featuredScrollRef.current.scrollTo({ left: 0, behavior: "instant" });
      updateFeaturedScrollState();
    }
  }, [language, dir, updateScrollState, updateFeaturedScrollState]);

  interface SubGroup {
    sub: string | null;
    items: Item[];
  }

  interface SectionGroup {
    category: string;
    subGroups: SubGroup[];
    showSubs: boolean;
  }

  // Group into parent sections (keeps the catalogue order) so each section
  // can carry its own highlight banner. Inside a section, items are split
  // by their original (sub)category — sub-headers render only when a
  // section holds more than one subcategory. All products are shown.
  const groupedItems = useMemo<SectionGroup[]>(() => {
    return categories
      .map((category) => {
        const inSection = filtered.filter(
          (i) => resolveSection(i.category).label === category,
        );
        const subs: SubGroup[] = [];
        for (const item of inSection) {
          const { sub } = resolveSection(item.category);
          const existing = subs.find((s) => s.sub === sub);
          if (existing) existing.items.push(item);
          else subs.push({ sub, items: [item] });
        }
        return {
          category,
          subGroups: subs,
          showSubs: subs.filter((s) => s.sub !== null).length > 1,
        };
      })
      .filter((g) => g.subGroups.length > 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, filtered, language]);

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
        <div className="relative mx-auto max-w-7xl">
          {/* Left shadow fade + scroll arrow */}
          <div
            className={`pointer-events-none absolute left-0 top-0 bottom-0 z-20 flex items-center pl-2 md:pl-4 transition-all duration-300 ${
              canScrollLeft
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-2 pointer-events-none"
            }`}
            aria-hidden={!canScrollLeft}
          >
            {/* Pure ivory gradient fade without dark inset shadow (prevents color distortion) */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-28"
              style={{
                background:
                  "linear-gradient(to right, #fbf8f2 0%, rgba(251, 248, 242, 0.92) 50%, rgba(251, 248, 242, 0) 100%)",
              }}
            />
            <button
              type="button"
              onClick={() => scrollNav("left")}
              disabled={!canScrollLeft}
              tabIndex={canScrollLeft ? 0 : -1}
              aria-label="Défiler vers la gauche"
              className="pointer-events-auto relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-dark text-primary shadow-[0_4px_16px_rgba(28,22,19,0.25),0_0_10px_rgba(200,154,43,0.18)] transition-all duration-200 hover:scale-110 hover:border-primary hover:bg-[#2b1d14] hover:text-primary-light hover:shadow-[0_6px_22px_rgba(200,154,43,0.35)] active:scale-95 disabled:pointer-events-none cursor-pointer md:h-8.5 md:w-8.5"
            >
              <ChevronLeft size={16} strokeWidth={2.5} />
            </button>
          </div>

          {/* Right shadow fade + scroll arrow */}
          <div
            className={`pointer-events-none absolute right-0 top-0 bottom-0 z-20 flex items-center justify-end pr-2 md:pr-4 transition-all duration-300 ${
              canScrollRight
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-2 pointer-events-none"
            }`}
            aria-hidden={!canScrollRight}
          >
            {/* Pure ivory gradient fade without dark inset shadow (prevents color distortion) */}
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-28"
              style={{
                background:
                  "linear-gradient(to left, #fbf8f2 0%, rgba(251, 248, 242, 0.92) 50%, rgba(251, 248, 242, 0) 100%)",
              }}
            />
            <button
              type="button"
              onClick={() => scrollNav("right")}
              disabled={!canScrollRight}
              tabIndex={canScrollRight ? 0 : -1}
              aria-label="Défiler vers la droite"
              className="pointer-events-auto relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-dark text-primary shadow-[0_4px_16px_rgba(28,22,19,0.25),0_0_10px_rgba(200,154,43,0.18)] transition-all duration-200 hover:scale-110 hover:border-primary hover:bg-[#2b1d14] hover:text-primary-light hover:shadow-[0_6px_22px_rgba(200,154,43,0.35)] active:scale-95 disabled:pointer-events-none cursor-pointer md:h-8.5 md:w-8.5"
            >
              <ChevronRight size={16} strokeWidth={2.5} />
            </button>
          </div>

          {/* Scrollable category list */}
          <div
            ref={navScrollRef}
            className="flex items-center gap-2.5 overflow-x-auto px-6 py-4 no-scrollbar scroll-smooth md:px-10"
          >
            {tabs.map((x) => (
              <button
                key={x.key}
                onClick={(e) => {
                  setActiveCategoryKey(x.key);
                  scrollToTab(e.currentTarget);
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

        {/* Featured Popular Products Showcase */}
        {popularItems.length > 0 && (
          <div className="mt-10 mb-14">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-dark">
                  <Sparkles size={12} className="text-primary" />
                  <span>{t("menuFeaturedBadge")}</span>
                </div>
                <h3 className="mt-2.5 font-serif text-2xl font-medium tracking-tight text-dark md:text-3xl">
                  {t("menuFeaturedTitle")}
                </h3>
                <p className="mt-1 max-w-xl text-xs text-dark/60 md:text-sm">
                  {t("menuFeaturedSubtitle")}
                </p>
              </div>

              {/* Slider controls */}
              <div className="flex items-center gap-2" dir="ltr">
                <button
                  type="button"
                  onClick={() => scrollFeatured("left")}
                  disabled={!canScrollFeaturedLeft}
                  aria-label={language === "ar" ? "السابق" : "Précédent"}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-dark/12 bg-white/90 text-dark/75 shadow-[0_2px_8px_rgba(28,22,19,0.06)] backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-dark hover:bg-dark hover:text-cream active:scale-95 disabled:pointer-events-none disabled:opacity-25 cursor-pointer"
                >
                  <ChevronLeft size={16} strokeWidth={2.5} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollFeatured("right")}
                  disabled={!canScrollFeaturedRight}
                  aria-label={language === "ar" ? "التالي" : "Suivant"}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-dark/12 bg-white/90 text-dark/75 shadow-[0_2px_8px_rgba(28,22,19,0.06)] backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-dark hover:bg-dark hover:text-cream active:scale-95 disabled:pointer-events-none disabled:opacity-25 cursor-pointer"
                >
                  <ChevronRight size={16} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Featured Cards Track */}
            <div className="relative">
              <div
                ref={featuredScrollRef}
                className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4 pt-2 -mx-2 px-2"
              >
              {popularItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="group relative flex w-[285px] sm:w-[325px] md:w-[355px] shrink-0 snap-start flex-col overflow-hidden rounded-[26px] border border-primary/20 bg-gradient-to-b from-white/95 via-[#fcfaf7] to-[#f7f2ea]/90 p-4 shadow-[0_12px_36px_-16px_rgba(28,22,19,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/45 hover:shadow-[0_24px_50px_-16px_rgba(200,154,43,0.25)]"
                >
                  {/* Photo Stage */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[20px] bg-cream/70 shadow-xs">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 285px, 355px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-ivory">
                        <UtensilsCrossed size={32} className="text-primary/40" />
                      </div>
                    )}

                    {/* Ambient subtle vignette */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

                    {/* Popular Star Badge */}
                    <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-primary/35 bg-dark/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#d9b25e] shadow-md backdrop-blur-md">
                      <Sparkles size={11} className="text-primary animate-pulse" />
                      <span>{t("menuPremiumSignature")}</span>
                    </div>

                    {/* Price Tag Pill */}
                    <div className="absolute right-3 bottom-3 inline-flex items-baseline rounded-full border border-dark/8 bg-white/95 px-3.5 py-1 text-[13px] font-bold text-dark shadow-md backdrop-blur-md">
                      <span className="font-extrabold text-primary-dark">
                        {formatPrice(item.price)}
                      </span>
                      <span className="ml-1 text-[10px] font-bold text-dark/60">DH</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="mt-3.5 flex flex-1 flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary-dark/85">
                      {item.category}
                    </span>
                    <h4 className="mt-1 line-clamp-1 font-serif text-xl font-medium tracking-tight text-dark transition-colors duration-200 group-hover:text-primary">
                      {item.name}
                    </h4>
                    {item.description && (
                      <p className="mt-1.5 line-clamp-2 min-h-[2.5em] text-xs leading-relaxed text-dark/65">
                        {item.description}
                      </p>
                    )}

                    {/* Action Footer */}
                    <div className="mt-auto flex items-center justify-between border-t border-dark/6 pt-3.5">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 rounded-full bg-dark px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-cream shadow-sm transition-all duration-200 group-hover:bg-primary group-hover:text-dark"
                      >
                        <span>{t("menuHeroOrderCta")}</span>
                        <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                      </Link>
                      <span className="font-serif text-xs italic text-dark/40">
                        № {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>

            {/* Subtle decorative separator before catalogue categories */}
            <div className="mt-12 flex items-center gap-4">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-dark/12 to-transparent" />
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-dark/40">
                {t("menuPremiumPaperTitle")}
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-dark/12 to-transparent" />
            </div>
          </div>
        )}

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
                {groupedItems.map(({ category, subGroups, showSubs }, gi) => (
                  <div key={category}>
                    {highlightsByLabel[category] ? (
                      <MenuHighlight
                        categoryLabel={category}
                        highlight={highlightsByLabel[category]!}
                        priority={gi === 0}
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
                    {showSubs ? (
                      <div className="space-y-9">
                        {subGroups.map((sg) => (
                          <div key={sg.sub ?? category}>
                            <h4 className="mb-3 flex items-center gap-3 text-[14px] md:text-[16px] lg:text-[18px] font-bold uppercase tracking-[0.22em] text-primary-dark">
                              <span className="shrink-0">{sg.sub}</span>
                              <span
                                aria-hidden
                                className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent"
                              />
                            </h4>
                            <div className="grid grid-cols-1 items-stretch gap-x-12 gap-y-3 md:grid-cols-2">
                              {sg.items.map((item) => (
                                <MenuItemRow key={item.id} item={item} />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 items-stretch gap-x-12 gap-y-3 md:grid-cols-2">
                        {subGroups
                          .flatMap((sg) => sg.items)
                          .map((item) => (
                            <MenuItemRow key={item.id} item={item} />
                          ))}
                      </div>
                    )}
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
