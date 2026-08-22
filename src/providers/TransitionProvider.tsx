"use client";
import { useEffect, useRef, useCallback } from "react";
import { TransitionRouter } from "next-transition-router";
import { gsap } from "gsap";

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathsRef = useRef<SVGPathElement[]>([]);

  const getPathLength = useCallback((path: SVGPathElement): number => {
    try {
      const length = path.getTotalLength();
      if (length && !isNaN(length) && length > 100) {
        return length;
      }
    } catch {
      // Fallback if SVG isn't yet rendered in layout
    }
    return 10500;
  }, []);

  const initPaths = useCallback(() => {
    if (!svgRef.current) return;
    pathsRef.current = Array.from(svgRef.current.querySelectorAll("path"));

    pathsRef.current.forEach((path) => {
      const length = getPathLength(path);
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    });
  }, [getPathLength]);

  useEffect(() => {
    initPaths();
    window.addEventListener("resize", initPaths);
    return () => window.removeEventListener("resize", initPaths);
  }, [initPaths]);

  return (
    <TransitionRouter
      auto
      leave={(next) => {
        let called = false;
        const done = () => {
          if (!called) {
            called = true;
            next();
          }
        };

        const tl = gsap.timeline({ onComplete: done });

        // Safety timeout for mobile devices if animation is throttled
        const safetyTimeout = setTimeout(done, 1200);

        if (!pathsRef.current.length && svgRef.current) {
          pathsRef.current = Array.from(svgRef.current.querySelectorAll("path"));
        }

        if (pathsRef.current.length > 0) {
          pathsRef.current.forEach((path) => {
            const length = getPathLength(path);
            path.style.strokeDasharray = `${length}`;
            
            tl.to(
              path,
              {
                strokeDashoffset: 0,
                strokeWidth: 700,
                attr: { "stroke-width": 700 },
                duration: 0.85,
                ease: "power2.inOut",
              },
              0,
            );
          });
        } else {
          done();
        }

        return () => {
          clearTimeout(safetyTimeout);
          tl.kill();
        };
      }}
      enter={(next) => {
        let called = false;
        const done = () => {
          if (!called) {
            called = true;
            next();
          }
        };

        const tl = gsap.timeline({ onComplete: done });
        const safetyTimeout = setTimeout(done, 1200);

        if (!pathsRef.current.length && svgRef.current) {
          pathsRef.current = Array.from(svgRef.current.querySelectorAll("path"));
        }

        if (pathsRef.current.length > 0) {
          pathsRef.current.forEach((path) => {
            const length = getPathLength(path);
            tl.to(
              path,
              {
                strokeDashoffset: -length,
                strokeWidth: 200,
                attr: { "stroke-width": 200 },
                duration: 0.85,
                ease: "power2.inOut",
                onComplete: () => {
                  gsap.set(path, { strokeDashoffset: length });
                },
              },
              0,
            );
          });
        } else {
          done();
        }

        return () => {
          clearTimeout(safetyTimeout);
          tl.kill();
        };
      }}
    >
      <div className="transition-svg" aria-hidden="true">
        <svg
          ref={svgRef}
          viewBox="0 0 2453 2535"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M227.549 1818.76C227.549 1818.76 406.016 2207.75 569.049 2130.26C843.431 1999.85 -264.104 1002.3 227.549 876.262C552.918 792.849 773.647 2456.11 1342.05 2130.26C1885.43 1818.76 14.9644 455.772 760.548 137.262C1342.05 -111.152 1663.5 2266.35 2209.55 1972.76C2755.6 1679.18 1536.63 384.467 1826.55 137.262C2013.5 -22.1463 2209.55 381.262 2209.55 381.262"
            stroke="var(--transition-stroke-1)"
            strokeWidth="200"
            strokeLinecap="round"
          />
          <path
            d="M1661.28 2255.51C1661.28 2255.51 2311.09 1960.37 2111.78 1817.01C1944.47 1696.67 718.456 2870.17 499.781 2255.51C308.969 1719.17 2457.51 1613.83 2111.78 963.512C1766.05 313.198 427.949 2195.17 132.281 1455.51C-155.219 736.292 2014.78 891.514 1708.78 252.012C1437.81 -314.29 369.471 909.169 132.281 566.512C18.1772 401.672 244.781 193.012 244.781 193.012"
            stroke="var(--transition-stroke-2)"
            strokeWidth="200"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {children}
    </TransitionRouter>
  );
}

