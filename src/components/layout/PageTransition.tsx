"use client";

import { useEffect, useRef, useCallback, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";
import LogoAnimated, { LogoAnimatedRef } from "./LogoAnimated";

interface PageTransitionProps {
  children: ReactNode;
}

const BLOCKS_COUNT = 20;

// Duration in ms for the fast handwriting drawing animation ("La Madeleine Boulanger & Café")
const LOGO_ANIM_DURATION = 680;

export default function PageTransition({ children }: PageTransitionProps) {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoOverlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<LogoAnimatedRef>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);
  const isTransitioning = useRef(true);
  const logoFinishedRef = useRef(false);
  const routeReadyRef = useRef(false);
  const targetPathRef = useRef<string | null>(null);
  const safetyTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const logoTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isInitialMount = useRef(true);

  const revealPage = useCallback(() => {
    // Scroll to top behind the blocks before revealing new page
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      const lenis = (
        window as unknown as {
          __lenis?: {
            scrollTo: (
              target: number,
              options?: { immediate: boolean }
            ) => void;
          };
        }
      ).__lenis;
      lenis?.scrollTo(0, { immediate: true });
    }

    gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: "right" });

    gsap.to(blocksRef.current, {
      scaleX: 0,
      duration: 0.35,
      stagger: 0.012,
      ease: "power2.out",
      transformOrigin: "right",
      onComplete: () => {
        isTransitioning.current = false;
        logoFinishedRef.current = false;
        routeReadyRef.current = false;
        targetPathRef.current = null;
        if (overlayRef.current) {
          overlayRef.current.style.pointerEvents = "none";
        }
        if (logoOverlayRef.current) {
          logoOverlayRef.current.style.pointerEvents = "none";
        }
        logoRef.current?.reset();
      },
    });
  }, []);

  // Called when BOTH conditions are satisfied: logo animation is done AND new route is mounted
  const finishTransition = useCallback(() => {
    if (!logoOverlayRef.current) {
      revealPage();
      return;
    }

    gsap.to(logoOverlayRef.current, {
      opacity: 0,
      duration: 0.16,
      ease: "power2.out",
      onComplete: () => {
        revealPage();
      },
    });
  }, [revealPage]);

  const startTransition = useCallback(
    (url: string, targetPath: string) => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;
      logoFinishedRef.current = false;
      routeReadyRef.current = false;
      targetPathRef.current = targetPath;

      if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
      if (logoTimerRef.current) clearTimeout(logoTimerRef.current);

      if (overlayRef.current) {
        overlayRef.current.style.pointerEvents = "auto";
      }
      if (logoOverlayRef.current) {
        logoOverlayRef.current.style.pointerEvents = "auto";
      }

      // 1. Immediately prefetch route in background
      try {
        router.prefetch(url);
      } catch {}

      // 2. Animate curtain blocks closed (staggered from left to right)
      gsap.to(blocksRef.current, {
        scaleX: 1,
        duration: 0.28,
        stagger: 0.01,
        ease: "power2.out",
        transformOrigin: "left",
        onComplete: () => {
          // Trigger route push in background once screen is covered
          router.push(url);
        },
      });

      // 3. Fade in logo overlay and trigger fast handwriting drawing
      gsap.to(logoOverlayRef.current, {
        opacity: 1,
        duration: 0.14,
        ease: "power2.out",
        onStart: () => {
          logoRef.current?.play();
        },
      });

      // 4. Timer: Wait until the handwriting animation has fully completed
      logoTimerRef.current = setTimeout(() => {
        logoFinishedRef.current = true;
        // If route already loaded in background, finish and reveal immediately!
        if (routeReadyRef.current) {
          finishTransition();
        }
      }, LOGO_ANIM_DURATION);

      // Safety timeout: never hang forever if route takes unusually long
      safetyTimeoutRef.current = setTimeout(() => {
        if (isTransitioning.current) {
          logoFinishedRef.current = true;
          routeReadyRef.current = true;
          finishTransition();
        }
      }, 3500);
    },
    [router, finishTransition]
  );

  // Play intro transition on initial website open / refresh
  const playIntro = useCallback(() => {
    isTransitioning.current = true;
    if (overlayRef.current) overlayRef.current.style.pointerEvents = "auto";
    if (logoOverlayRef.current) {
      logoOverlayRef.current.style.pointerEvents = "auto";
      logoOverlayRef.current.style.opacity = "1";
    }

    // Curtains start covering the screen
    gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: "right" });

    // Play handwriting text animation
    logoRef.current?.play();

    // After handwriting completes, fade out overlay and peel open curtain
    setTimeout(() => {
      if (!logoOverlayRef.current) {
        revealPage();
        return;
      }
      gsap.to(logoOverlayRef.current, {
        opacity: 0,
        duration: 0.16,
        ease: "power2.out",
        onComplete: () => {
          revealPage();
        },
      });
    }, LOGO_ANIM_DURATION);
  }, [revealPage]);

  // When pathname changes (Next.js background render completes):
  useEffect(() => {
    if (isInitialMount.current) return;
    if (!isTransitioning.current) return;

    // Mark route as ready in background
    routeReadyRef.current = true;

    // CRITICAL: DO NOT switch / reveal until the handwriting animation has completely finished!
    if (logoFinishedRef.current) {
      finishTransition();
    }
  }, [pathname, finishTransition]);

  // Trigger intro on initial website open
  useEffect(() => {
    playIntro();
    isInitialMount.current = false;
  }, [playIntro]);

  // Global anchor click listener in capture phase
  useEffect(() => {
    const onAnchorClick = (e: MouseEvent) => {
      if (isTransitioning.current) {
        e.preventDefault();
        return;
      }

      if (
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        e.button !== 0
      ) {
        return;
      }

      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const rawHref = anchor.getAttribute("href");
      if (!rawHref) return;

      if (
        rawHref.startsWith("mailto:") ||
        rawHref.startsWith("tel:") ||
        rawHref.startsWith("javascript:") ||
        rawHref.startsWith("#")
      ) {
        return;
      }

      let targetUrl: URL;
      try {
        targetUrl = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      if (targetUrl.origin !== window.location.origin) {
        return;
      }

      const currentPath = window.location.pathname;
      const targetPath = targetUrl.pathname;

      if (
        targetPath === currentPath &&
        targetUrl.search === window.location.search
      ) {
        return;
      }

      e.preventDefault();
      startTransition(targetPath + targetUrl.search + targetUrl.hash, targetPath);
    };

    document.addEventListener("click", onAnchorClick, { capture: true });

    return () => {
      document.removeEventListener("click", onAnchorClick, { capture: true });
      if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
      if (logoTimerRef.current) clearTimeout(logoTimerRef.current);
    };
  }, [startTransition]);

  return (
    <>
      <div
        ref={overlayRef}
        className="transition-overlay"
        style={{ pointerEvents: "auto" }}
      >
        {Array.from({ length: BLOCKS_COUNT }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) blocksRef.current[i] = el;
            }}
            className="transition-block"
            style={{ transform: "scaleX(1)", transformOrigin: "right" }}
          />
        ))}
      </div>
      <div
        ref={logoOverlayRef}
        className="logo-overlay"
        style={{ opacity: 1, pointerEvents: "auto" }}
      >
        <div className="logo-container">
          <LogoAnimated ref={logoRef} />
        </div>
      </div>
      {children}
    </>
  );
}
