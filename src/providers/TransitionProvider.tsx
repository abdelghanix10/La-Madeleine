"use client";
import { useRef } from "react";
import { TransitionRouter } from "next-transition-router";
import { gsap } from "gsap";
import Image from "next/image";

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

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

        const safetyTimeout = setTimeout(done, 1200);

        if (!containerRef.current || !layer1Ref.current || !layer2Ref.current) {
          done();
          return () => clearTimeout(safetyTimeout);
        }

        const tl = gsap.timeline({ onComplete: done });

        // Show container and prepare layers below viewport
        gsap.set(containerRef.current, {
          display: "block",
          pointerEvents: "auto",
        });
        gsap.set([layer1Ref.current, layer2Ref.current], {
          yPercent: 100,
        });
        if (badgeRef.current) {
          gsap.set(badgeRef.current, {
            opacity: 0,
            scale: 0.88,
          });
        }

        // Layer 1 (Gold) sweeps up first, closely followed by Layer 2 (Dark Chocolate)
        tl.to(layer1Ref.current, {
          yPercent: 0,
          duration: 0.55,
          ease: "power3.inOut",
        }).to(
          layer2Ref.current,
          {
            yPercent: 0,
            duration: 0.55,
            ease: "power3.inOut",
          },
          0.08,
        );

        if (badgeRef.current) {
          tl.to(
            badgeRef.current,
            {
              opacity: 1,
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            },
            0.28,
          );
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
            if (containerRef.current) {
              gsap.set(containerRef.current, {
                display: "none",
                pointerEvents: "none",
              });
            }
            next();
          }
        };

        const safetyTimeout = setTimeout(done, 1200);

        if (!containerRef.current || !layer1Ref.current || !layer2Ref.current) {
          done();
          return () => clearTimeout(safetyTimeout);
        }

        const tl = gsap.timeline({ onComplete: done });

        if (badgeRef.current) {
          tl.to(badgeRef.current, {
            opacity: 0,
            scale: 0.92,
            duration: 0.2,
            ease: "power2.in",
          });
        }

        // Dark Layer lifts off first upward, unveiling Gold underneath as both exit
        tl.to(
          layer2Ref.current,
          {
            yPercent: -100,
            duration: 0.55,
            ease: "power3.inOut",
          },
          badgeRef.current ? 0.08 : 0,
        ).to(
          layer1Ref.current,
          {
            yPercent: -100,
            duration: 0.55,
            ease: "power3.inOut",
          },
          badgeRef.current ? 0.16 : 0.08,
        );

        return () => {
          clearTimeout(safetyTimeout);
          tl.kill();
        };
      }}
    >
      {/* Seamless GPU-accelerated Luxury Transition Screen */}
      <div
        ref={containerRef}
        className="fixed inset-0 z-[99999] pointer-events-none hidden overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* Layer 1: Warm Gold Primary Layer */}
        <div
          ref={layer1Ref}
          className="absolute inset-0 w-full h-[120vh] -top-[10vh] bg-primary flex flex-col justify-between"
          style={{ willChange: "transform" }}
        >
          {/* Top Organic Wave Curve */}
          <div className="w-full h-[8vh] text-primary shrink-0 -translate-y-[99%]">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full fill-current block"
              preserveAspectRatio="none"
            >
              <path d="M0,120 C480,0 960,0 1440,120 L1440,120 L0,120 Z" />
            </svg>
          </div>
          <div className="flex-1" />
          {/* Bottom Organic Wave Curve */}
          <div className="w-full h-[8vh] text-primary shrink-0 translate-y-[99%]">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full fill-current block"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C480,120 960,120 1440,0 L1440,0 L0,0 Z" />
            </svg>
          </div>
        </div>

        {/* Layer 2: Rich Dark Chocolate Foreground */}
        <div
          ref={layer2Ref}
          className="absolute inset-0 w-full h-[120vh] -top-[10vh] bg-dark flex flex-col justify-between items-center"
          style={{ willChange: "transform" }}
        >
          {/* Top Organic Wave Curve */}
          <div className="w-full h-[8vh] text-dark shrink-0 -translate-y-[99%]">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full fill-current block"
              preserveAspectRatio="none"
            >
              <path d="M0,120 C480,0 960,0 1440,120 L1440,120 L0,120 Z" />
            </svg>
          </div>

          {/* Center Brand Monogram & Emblem */}
          <div
            ref={badgeRef}
            className="flex flex-col items-center justify-center my-auto text-center px-6 opacity-0"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full ring-2 ring-primary/50 p-2 bg-cream/10 shadow-2xl flex items-center justify-center mb-3">
              <Image
                src="/images/logo.webp"
                alt="La Madeleine"
                width={56}
                height={56}
                className="object-contain w-auto h-auto"
                priority
              />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-cream tracking-widest uppercase">
              La Madeleine
            </h2>
            <p className="text-primary font-script text-xl sm:text-2xl mt-1 tracking-wide">
              Agadir
            </p>
          </div>

          {/* Bottom Organic Wave Curve */}
          <div className="w-full h-[8vh] text-dark shrink-0 translate-y-[99%]">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full fill-current block"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C480,120 960,120 1440,0 L1440,0 L0,0 Z" />
            </svg>
          </div>
        </div>
      </div>

      {children}
    </TransitionRouter>
  );
}
