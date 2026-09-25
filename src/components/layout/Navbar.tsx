"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X, ArrowRight, Phone, MapPin, Clock } from "lucide-react";
import { useTransitionRouter } from "next-transition-router";
import { useLanguage, type Language } from "@/providers/LanguageProvider";
import { useNavbarVisibility } from "@/providers/NavbarVisibilityProvider";

const LANGS: Language[] = ["fr", "en", "ar"];

function LanguageSwitcher({
  className = "",
  tone = "onLight",
  size = "md",
}: {
  className?: string;
  tone?: "onLight" | "onDark";
  size?: "md" | "sm";
}) {
  const { language, setLanguage } = useLanguage();
  const onDark = tone === "onDark";
  const compact = size === "sm";
  return (
    <div
      className={`flex items-center gap-0.5 rounded-full ${
        compact ? "p-0.5 text-[10px]" : "p-1 text-[11px]"
      } font-bold tracking-[0.08em] ${
        onDark ? "bg-white/10 ring-1 ring-white/15" : "bg-dark"
      } ${className}`}
      role="group"
      aria-label="Language switcher"
    >
      {LANGS.map((l) => {
        const active = language === l;
        return (
          <button
            key={l}
            onClick={() => setLanguage(l)}
            aria-pressed={active}
            className={`rounded-full uppercase transition-all duration-300 ${
              compact ? "px-2 py-1" : "px-2.5 py-1.5"
            } ${
              active
                ? "bg-primary text-dark shadow"
                : onDark
                  ? "text-cream/60 hover:text-cream"
                  : "text-cream/55 hover:text-cream"
            }`}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const NAV_LINKS = [
    { href: "/", label: t("footerNavHome") },
    { href: "/about", label: t("footerNavAbout") },
    { href: "/menu", label: t("footerNavMenu") },
    { href: "/shop", label: t("footerNavShop") },
    { href: "/faq", label: t("footerFaq") },
    { href: "/contact", label: t("footerNavContact") },
  ];
  const transitionRouter = useTransitionRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastYRef = useRef(0);
  const lastGestureRef = useRef<{ dir: 1 | -1; at: number } | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState(0);
  const navHeightRef = useRef(0);
  const {
    setHidden: publishHidden,
    setAtTop: publishAtTop,
    setNavHeight: publishNavHeight,
  } = useNavbarVisibility();
  const [atTop, setAtTop] = useState(true);

  // Refs that mirror the latest value so the scroll handler can do
  // cheap equality checks without closing over stale state.
  const hiddenRef = useRef(false);
  const atTopRef = useRef(true);
  const lastStateChangeRef = useRef(0);
  const isResizingRef = useRef(false);
  const resizeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Synchronised helpers — update local state AND the shared context in
  // the same React batch so that the navbar and category bar animations
  // start on the exact same frame.  Skips no-op updates so every scroll
  // tick that doesn't change direction is free.
  const updateHidden = useCallback(
    (value: boolean) => {
      if (hiddenRef.current === value) return;
      hiddenRef.current = value;
      lastStateChangeRef.current = Date.now();
      setHidden(value);
      publishHidden(value);
    },
    [publishHidden],
  );
  const updateAtTop = useCallback(
    (value: boolean) => {
      if (atTopRef.current === value) return;
      atTopRef.current = value;
      setAtTop(value);
      publishAtTop(value);
    },
    [publishAtTop],
  );

  // Guard against window resize events triggering scroll direction flips.
  // Viewport resize causes layout reflows and scroll anchoring adjustments
  // that do NOT represent user scroll intent.
  useEffect(() => {
    const onResize = () => {
      isResizingRef.current = true;
      lastYRef.current = window.scrollY;
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = setTimeout(() => {
        isResizingRef.current = false;
        lastYRef.current = window.scrollY;
      }, 250);
    };

    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
    };
  }, []);

  // Dynamically track the header height so the negative margin used to
  // collapse its flow space is always exact (responsive-safe).
  // Coalesced via requestAnimationFrame so rapid layout passes during resize
  // run at most once per frame.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    let rafId: number | null = null;
    const update = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (!headerRef.current) return;
        const h = headerRef.current.offsetHeight;
        if (h === navHeightRef.current) return;
        navHeightRef.current = h;
        setNavHeight(h);
        publishNavHeight(h);
      });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      ro.disconnect();
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [publishNavHeight]);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = lastYRef.current;
    lastYRef.current = latest;

    // ── TOP STATE — highest priority ──────────────────────────────
    // When the page is at the very top, force the original layout
    // immediately. Clear any stale gesture so momentum can't re-hide.
    if (latest <= 0) {
      updateHidden(false);
      setScrolled(false);
      updateAtTop(true);
      lastGestureRef.current = null;
      return;
    }

    updateAtTop(false);
    // Hysteresis prevents flickering between scrolled states near the threshold.
    setScrolled((wasScrolled) => (wasScrolled ? latest > 12 : latest > 28));

    if (mobileOpen) {
      updateHidden(false);
      return;
    }
    if (latest < 120) {
      updateHidden(false);
      return;
    }

    // While the user is resizing the browser window, layout reflows and
    // scroll adjustments are active — do not toggle hidden state.
    if (isResizingRef.current) {
      return;
    }

    // A recent wheel/touch gesture owns hide/show — scrollY may still carry
    // old Lenis momentum in the opposite direction, so the fallback stays
    // out of the way until it settles. It only ever acts for input the
    // gesture listeners can't see (keyboard, scrollbar, programmatic).
    const gesture = lastGestureRef.current;
    if (gesture && Date.now() - gesture.at < 600) return;

    // Require a minimum scroll delta to filter out subpixel jitter,
    // browser momentum bounce, and layout shifts from animations.
    const diff = latest - prev;
    if (Math.abs(diff) < 10) return;

    // Cooldown: if navbar visibility just changed, let its animation complete
    // before fallback scroll direction can toggle it in reverse.
    if (Date.now() - lastStateChangeRef.current < 400) return;

    updateHidden(diff > 0);
  });

  // React to scroll INTENT instantly. With Lenis smoothing, window.scrollY
  // keeps gliding through old downward momentum for ~1s after the user
  // reverses direction — waiting on scrollY alone is what delayed the
  // navbar. wheel/touch fire on the same frame as the gesture instead.
  useEffect(() => {
    let lastTouchY: number | null = null;

    const noteGesture = (dir: 1 | -1) => {
      lastGestureRef.current = { dir, at: Date.now() };
      if (dir === -1) updateHidden(false);
      else if (window.scrollY >= 120) updateHidden(true);
    };
    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || Math.abs(e.deltaY) < 2 || mobileOpen) return;
      noteGesture(e.deltaY < 0 ? -1 : 1);
    };
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) lastTouchY = e.touches[0].clientY;
      else lastTouchY = null;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 1 || lastTouchY === null || mobileOpen) return;
      const y = e.touches[0].clientY;
      if (Math.abs(y - lastTouchY) < 4) return;
      // Dragging down pulls the page toward the top → show immediately.
      noteGesture(y > lastTouchY ? -1 : 1);
      lastTouchY = y;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [mobileOpen, updateHidden]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("nav-open");
    } else {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("nav-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("nav-open");
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const handleNavigate = useCallback(
    (href: string) => {
      if (pathname === href) {
        closeMobile();
        return;
      }
      closeMobile();
      setTimeout(() => transitionRouter.push(href), 80);
    },
    [pathname, closeMobile, transitionRouter],
  );

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <>
      {/* Announcement bar — scrolls away with the page */}
      <div className="relative z-[45] hidden bg-dark text-cream/80 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1 text-[11px] uppercase tracking-[0.2em] lg:px-10">
          <span className="hidden items-center gap-2 lg:flex">
            <MapPin size={12} className="text-primary" />
            {t("navbarAddress")}
          </span>
          <span className="hidden items-center gap-2 md:flex lg:hidden">
            <MapPin size={12} className="text-primary" />
            {t("navbarAddress")}
          </span>
          <span className="flex items-center gap-4 lg:gap-5">
            <span className="hidden items-center gap-2 xl:flex">
              <Clock size={12} className="text-primary" />
              {t("navbarHours")}
            </span>
            <a
              href="tel:0528264344"
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Phone size={12} className="text-primary" />
              05 28 26 43 44
            </a>
            <span className="h-4 w-px bg-cream/15" aria-hidden />
            <LanguageSwitcher tone="onDark" size="sm" />
          </span>
        </div>
      </div>

      <motion.header
        ref={headerRef}
        animate={{
          y: hidden && !mobileOpen ? "-110%" : "0%",
          // Collapse the sticky element's reserved flow space at the same
          // rate it slides out.  Without this, position:sticky keeps the
          // original height in the document, leaving a visible empty gap.
          marginBottom: hidden && !mobileOpen ? -navHeight : 0,
        }}
        // atTop forces duration 0 so the navbar snaps back instantly when
        // the user scrolls to the very top (Home key, scrollbar drag, etc).
        transition={{
          duration: atTop ? 0 : scrolled ? 0.32 : 0,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={`sticky top-0 z-40 w-full transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
          scrolled
            ? "bg-ivory/92 shadow-[0_10px_40px_-15px_rgba(28,22,19,0.25)] backdrop-blur-xl"
            : "bg-ivory/60 backdrop-blur-md"
        } border-b border-dark/8`}
        style={{
          backgroundColor: scrolled
            ? "rgba(251,248,242,0.94)"
            : "rgba(251,248,242,0.75)",
        }}
      >
        <nav
          aria-label="Navigation principale"
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 md:px-8 lg:px-10 ${
            scrolled ? "h-16 lg:h-[72px]" : "h-[72px] lg:h-20"
          }`}
        >
          {/* LEFT: logo */}
          <button
            onClick={() => handleNavigate("/")}
            className="group flex shrink-0 items-center gap-3"
            aria-label={`${t("footerBrandName")} — ${t("footerNavHome")}`}
          >
            <span className="relative block h-10 w-10 overflow-hidden lg:w-11">
              <Image
                src="/images/logo.webp"
                alt="La Madeleine Agadir"
                fill
                className="object-fit transition-transform duration-500"
                sizes="48px"
              />
            </span>
            <span className="flex flex-col items-start leading-none">
              <span className="font-serif text-[22px] font-medium tracking-wide text-dark lg:text-2xl">
                {t("footerBrandName")}
              </span>
              <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.35em] text-primary-dark">
                {t("navbarBrandTagline")}
              </span>
            </span>
          </button>

          {/* CENTER: desktop nav */}
          <ul className="hidden items-center gap-6 lg:flex xl:gap-7">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleNavigate(l.href)}
                  className={`nav-link whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                    isActive(l.href)
                      ? "active text-primary-dark"
                      : "text-dark/70 hover:text-dark"
                  }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* RIGHT: CTA + burger */}
          <div className="flex shrink-0 items-center gap-3">
            <button
              onClick={() => handleNavigate("/menu")}
              className="!hidden xl:flex! btn-gold !px-5 !py-2.5 sm:!px-6 sm:!py-3"
            >
              {t("navbarOrderCta")}
              <ArrowRight size={15} strokeWidth={2.4} />
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={
                mobileOpen ? t("navbarMobileClose") : t("navbarMobileOpen")
              }
              aria-expanded={mobileOpen}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-dark/10 bg-white/70 text-dark transition-all hover:border-dark/25 active:scale-95 lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="m"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMobile}
              className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 flex h-[100dvh] w-[88vw] max-w-sm flex-col overflow-hidden bg-ivory shadow-2xl"
              aria-label="Menu mobile"
            >
              <div className="flex items-center justify-between border-b border-dark/8 px-6 py-5">
                <span className="flex items-center gap-3">
                  <span className="relative block h-9 w-9 overflow-hidden rounded-full">
                    <Image
                      src="/images/logo.webp"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </span>
                  <span className="font-serif text-xl text-dark">
                    {t("footerBrandName")}
                  </span>
                </span>
                <button
                  onClick={closeMobile}
                  aria-label="Fermer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-dark/5 active:scale-95"
                >
                  <X size={19} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-6 py-6">
                <p className="eyebrow mb-4 text-primary-dark">
                  {t("navbarNavigationLabel")}
                </p>
                <ul className="flex flex-col">
                  {NAV_LINKS.map((l, i) => {
                    const active = isActive(l.href);
                    return (
                      <motion.li
                        key={l.href}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + i * 0.05 }}
                      >
                        <button
                          onClick={() => handleNavigate(l.href)}
                          className={`group flex w-full items-center justify-between border-b border-dark/6 py-4 text-left ${
                            active ? "text-primary-dark" : "text-dark"
                          }`}
                        >
                          <span className="flex items-baseline gap-4">
                            <span className="font-serif text-xs tracking-[0.2em] text-dark/30">
                              0{i + 1}
                            </span>
                            <span
                              className={`font-serif text-[28px] leading-none transition-transform duration-300 group-active:translate-x-1 ${
                                active ? "italic" : ""
                              }`}
                            >
                              {l.label}
                            </span>
                          </span>
                          <ArrowRight
                            size={18}
                            className={`${active ? "text-primary" : "text-dark/25 group-hover:text-dark"} transition-colors`}
                          />
                        </button>
                      </motion.li>
                    );
                  })}
                </ul>

                <div className="mt-6 rounded-2xl bg-dark p-5 text-cream">
                  <p className="font-script text-2xl text-primary">
                    {t("navbarMenuTagline")}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-cream/65">
                    {t("navbarAddress")}
                    <br />
                    {t("navbarHours")}
                  </p>
                  <a
                    href="tel:0528264344"
                    className="mt-3 inline-flex items-center gap-2 text-[13px] font-semibold text-cream hover:text-primary"
                  >
                    <Phone size={14} /> 05 28 26 43 44
                  </a>
                </div>
              </nav>

              <div className="border-t border-dark/8 bg-ivory p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-dark/50">
                    {t("navbarLanguageLabel")}
                  </span>
                  <LanguageSwitcher />
                </div>
                <button
                  onClick={() => handleNavigate("/menu")}
                  className="btn-gold w-full !py-4"
                >
                  {t("navbarOrderCta")} <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => handleNavigate("/contact")}
                  className="btn-ghost mt-3 w-full !py-3.5"
                >
                  {t("navbarFindCafe")}
                </button>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
