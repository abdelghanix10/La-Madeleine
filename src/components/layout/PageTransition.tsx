"use client";

import { useEffect, useRef, useCallback, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";
import LogoAnimated, { LogoAnimatedRef } from "./LogoAnimated";

interface PageTransitionProps {
  children: ReactNode;
}

// Exact time in ms for the fast logo animation (ring, lettering, wheat, gold fill) to complete
const LOGO_ANIM_DURATION = 700;

export default function PageTransition({ children }: PageTransitionProps) {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoOverlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<LogoAnimatedRef>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);
  const isTransitioning = useRef(false);
  const logoFinishedRef = useRef(false);
  const routeReadyRef = useRef(false);
  const targetPathRef = useRef<string | null>(null);
  const safetyTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const logoTimerRef = useRef<NodeJS.Timeout | null>(null);

  const revealPage = useCallback(() => {
    // Scroll to top immediately behind the blocks before revealing new page
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
      duration: 0.22,
      stagger: 0.007,
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
      duration: 0.14,
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

      // 2. Animate curtain blocks closed (fast: ~0.22s)
      gsap.to(blocksRef.current, {
        scaleX: 1,
        duration: 0.2,
        stagger: 0.007,
        ease: "power2.out",
        transformOrigin: "left",
        onComplete: () => {
          // Trigger route push in background once screen is covered
          router.push(url);
        },
      });

      // 3. Fade in logo overlay and trigger fast logo drawing animation
      gsap.to(logoOverlayRef.current, {
        opacity: 1,
        duration: 0.12,
        ease: "power2.out",
        onStart: () => {
          logoRef.current?.play();
        },
      });

      // 4. Timer: Wait until the logo animation has fully completed
      logoTimerRef.current = setTimeout(() => {
        logoFinishedRef.current = true;
        // If route already loaded in background, finish and reveal immediately!
        if (routeReadyRef.current) {
          finishTransition();
        }
      }, LOGO_ANIM_DURATION);

      // Safety timeout: never hang forever if route fails
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

  // When pathname changes (Next.js background render completes):
  useEffect(() => {
    if (!isTransitioning.current) return;

    // Mark route as ready in background
    routeReadyRef.current = true;

    // CRITICAL: DO NOT switch / reveal until the logo animation has completely finished!
    if (logoFinishedRef.current) {
      finishTransition();
    }
  }, [pathname, finishTransition]);

  // Initialize 20 blocks once on mount
  useEffect(() => {
    const createBlocks = () => {
      if (!overlayRef.current) return;
      overlayRef.current.innerHTML = "";
      blocksRef.current = [];

      for (let i = 0; i < 20; i++) {
        const block = document.createElement("div");
        block.className = "transition-block";
        overlayRef.current.appendChild(block);
        blocksRef.current.push(block);
      }
    };

    createBlocks();
    gsap.set(blocksRef.current, { scaleX: 0, transformOrigin: "left" });
  }, []);

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
      <div ref={overlayRef} className="transition-overlay" />
      <div ref={logoOverlayRef} className="logo-overlay">
        <div className="logo-container">
          <LogoAnimated ref={logoRef} />
        </div>
      </div>
      {children}
    </>
  );
}
