"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.85,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    (window as unknown as { __lenis: Lenis }).__lenis = lenis;

    lenis.on("scroll", (e) => {
      window.dispatchEvent(
        new CustomEvent("lenis-scroll", {
          detail: {
            scroll: e.scroll,
            direction: e.direction,
            velocity: e.velocity,
          },
        }),
      );
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Full-screen overlays (menu book viewer) lock page scroll —
    // body overflow alone doesn't stop Lenis' smoothed wheel handling.
    const handleOverlayToggle = (e: Event) => {
      const open = (e as CustomEvent<{ open: boolean }>).detail?.open;
      if (open) lenis.stop();
      else lenis.start();
    };

    window.addEventListener("menu-book-toggle", handleOverlayToggle);

    return () => {
      window.removeEventListener("menu-book-toggle", handleOverlayToggle);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return <>{children}</>;
}
