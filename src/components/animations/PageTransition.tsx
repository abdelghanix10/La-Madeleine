"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const BLOCK_COUNT = 8;

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    const blocks = blocksRef.current;
    if (!blocks.length) return;

    const tl = gsap.timeline();

    tl.set(blocks, { scaleY: 1, transformOrigin: "top" });
    tl.set(containerRef.current, { visibility: "visible" });

    tl.to(blocks, {
      scaleY: 0,
      transformOrigin: "bottom",
      duration: 0.5,
      stagger: {
        each: 0.05,
        from: "start",
      },
      ease: "power3.inOut",
      delay: 0.1,
    });

    tl.set(containerRef.current, { visibility: "hidden" });
    tl.set(blocks, { scaleY: 0, transformOrigin: "top" });

    return () => {
      tl.kill();
    };
  }, [pathname]);

  return (
    <>
      <div
        ref={containerRef}
        className="fixed inset-0 z-[9998] pointer-events-none hidden"
        style={{ visibility: "hidden" }}
      >
        {Array.from({ length: BLOCK_COUNT }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) blocksRef.current[i] = el;
            }}
            className="absolute top-0 bottom-0"
            style={{
              left: `${(i / BLOCK_COUNT) * 100}%`,
              width: `${100 / BLOCK_COUNT}%`,
              backgroundColor: i % 2 === 0 ? "#3B2314" : "#C89A2B",
            }}
          />
        ))}
      </div>
      {children}
    </>
  );
}
