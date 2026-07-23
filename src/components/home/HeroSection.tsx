"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides, siteConfig } from "@/lib/data";

function BrushArrow({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 269 38.6"
      aria-hidden="true"
      className={`h-3 w-16 fill-current ${direction === "left" ? "rotate-180" : ""}`}
    >
      <path d="M238.3,21.2c0.2,0,0.3,0.1,0.5,0.1c0.3,0,0.6,0.1,0.7-0.2c0-0.1,0.3-0.2,0.5-0.3c0.2-0.1,0.5-0.2,0.7-0.4c-0.2,0-0.5,0.1-0.8,0.2c0.2-0.6,1-0.7,1.7-0.8c0.1,0.1,0.2,0.2,0.3,0.2c-0.3,0.1-0.5,0.2-0.7,0.3c0,0,0,0.1,0.1,0.1c0.3,0,0.5-0.1,0.8-0.1c0.4-0.1,0.7-0.3,1.1-0.4c-0.1,0-0.2-0.1-0.4-0.2c0.3-0.1,0.6-0.2,0.8-0.3c0,0,0,0,0-0.1c-1,0.1-2,0.1-3,0.2c-1.6,0.1-3.1,0.2-4.7,0.3c-2.1,0.1-4.2,0.2-6.3,0.3c-1.1,0-2.3,0.1-3.4,0.2c-0.7,0-1.4,0-2.1,0c-2.4,0.1-4.8,0.3-7.2,0.4c-2.3,0.1-4.6,0.2-6.8,0.3c-1.6,0.1-3.2,0.2-4.8,0.3c-1.2,0.1-2.4,0.1-3.6,0.2c-2.6,0.1-5.2,0.3-7.8,0.5c-1.3,0.1-2.6,0.1-4,0.2c-1,0.1-2,0.2-3,0.2c-2.6,0.1-5.1,0.2-7.7,0.4c-0.8,0-1.5,0.1-2.3,0.2c-1.1,0.1-2.2,0.1-3.3,0.2c-1.6,0.1-3.2,0.2-4.7,0.3c-0.7,0-1.5-0.1-2.2-0.1c-0.2,0-0.3,0-0.6,0c0.2,0.1,0.3,0.1,0.5,0.2c-0.3,0-0.5,0.1-0.7,0.1c-1.1,0-2.2,0.1-3.4,0.1c-0.4,0-0.8-0.1-1.2,0c-0.3,0-0.7,0.1-1,0.1c-1.7,0.1-3.4,0.2-5.1,0.3c-1.1,0.1-2.1,0.1-3.2,0.2c-1.8,0.1-3.6,0.1-5.4,0.2c-1.1,0-2.3,0.2-3.4,0.2c-0.6,0-1.1,0-1.7,0c-1.1,0-2.2,0.1-3.3,0.1c-0.9,0-1.8,0.1-2.8,0.1c0.1-0.1,0.2-0.1,0.3-0.2c0,0,0,0,0-0.1c-0.2,0.1-0.4,0.1-0.6,0.2c-0.6,0.1-1.1,0.1-1.7,0.1c-1.8,0-3.5,0.1-5.3,0.2c-1.7,0.1-3.4,0.1-5,0.2c-1,0-2,0-2.9,0c-0.7,0-1.4,0.1-2.2,0.1c-1.4,0-2.8,0-4.2,0.1c-0.6,0-1.2-0.1-1.9,0c-0.9,0.1-1.9,0.1-2.9,0.1c-1.5,0-2.9,0.1-4.4,0.1c-1,0-2,0-2.9,0c-1.1,0-2.1,0.1-3.2,0.1c-1.5,0-3,0-4.6,0c-1.4,0-2.8,0-4.3,0c-0.8,0-1.7,0.1-2.5,0.1c-1.4,0-2.7,0-4.1,0c-1.1,0-2.3,0-3.4-0.1c-0.7,0-1.5,0-2.2,0c-1.1,0-2.2,0-3.3,0c-1,0-1.9,0.1-2.9,0.1c-2.1,0-4.2-0.1-6.3-0.1c-2,0-4,0-6,0c-1.5,0-3,0-4.5,0c-1.6,0-3.1,0-4.7,0.1c-1.1,0-2.3,0-3.4,0c-1.6,0-3.2,0.1-4.8,0.1c-1.6,0-3.3-0.1-4.9-0.1c-1.1,0-2.2,0-3.3,0c-0.7,0-1.3,0-2,0c-1.2,0-2.4,0-3.7,0c-0.8,0-1.6,0-2.3,0c-1.5,0-2.9,0.1-4.4,0.2c-0.4,0-0.7,0-1.1-0.1c-0.1,0-0.1,0-0.2,0C18,26,17,26,15.9,26.1c-1.8,0.1-3.5,0.1-5.3,0.2c-0.9,0-1.8,0.1-2.6,0.1c-0.1,0-0.2,0-0.2,0c-0.5,0.4-1.2,0.2-2,0.1c-0.5-0.1-1.1-0.1-1.5-0.4c-0.5-0.3-1.1-0.6-1.2-1.1c-0.1-0.5-0.1-0.8,0.1-1.3c0.2-0.3,0.2-0.7,0.4-1.1c0.2-0.5,0.5-0.9,0.7-1.4c0.2-0.4,0.5-0.9,0.9-1.3c0,0,0.1-0.1,0.1-0.1c-0.2-0.3,0.1-0.5,0.4-0.7C6,19.2,6.5,19.1,7,19.1c1,0,2.1,0,3.1,0c1.2,0,2.4,0,3.5,0c1.5,0,3-0.1,4.6-0.1c0.6,0,1.2,0,1.8,0c1.6,0,3.2,0,4.7,0c0.8,0,1.5-0.1,2.2-0.1c0.9,0,1.9,0,2.8,0.1c0.7,0,1.4,0,2.1,0c1.7,0,3.5,0,5.2,0c1.1,0,2.2-0.1,3.3-0.1c1.2,0,2.3,0,3.5,0.1c0.3,0,0.6,0,0.9,0c1.4,0,2.7-0.1,4.1-0.1c1.9,0,3.8,0.1,5.6,0.1c1.5,0,2.9-0.1,4.4-0.1c1.4,0,2.7,0,4.1,0c2.2,0,4.4,0,6.6,0c2.3,0,4.5-0.1,6.8-0.1c1.4,0,2.9,0,4.4,0c0.6,0,1.1-0.1,1.7-0.1c0.8,0,1.6,0,2.4,0c0.5,0,0.9,0,1.4,0c1.3,0,2.7,0,4,0c1.1,0,2.1,0,3.2-0.1c1,0,2,0,3,0c2.2,0,4.4-0.1,6.5-0.1c0.6,0,1.1,0.1,1.7,0.1c0.2,0,0.4,0,0.5,0c0.8-0.1,1.7,0.1,2.3-0.2c0,0,0.1,0,0.2,0c1,0.1,1.9,0,2.9,0c0.9,0,1.8,0,2.7,0c1.1,0,2.2,0,3.2-0.1c1.2,0,2.3,0,3.5,0c1.1,0,2.2-0.1,3.4-0.2c0.7,0,1.5,0,2.2-0.1c0.3,0,0.5,0,0.8,0c0.4,0,0.8-0.1,1.3,0.1c0,0,0.1,0,0.1,0c0.5-0.1,1.1-0.1,1.7-0.2c0.4,0.3,0.8,0.1,1.2,0c0.6,0,1.1-0.1,1.7-0.1c0.9,0,1.8,0,2.6,0c0.3,0,0.5-0.1,0.8-0.2c0.2,0,0.4,0.1,0.6,0.1c0.5,0,1.1-0.1,1.6-0.2c0.2,0,0.4,0,0.5,0c1,0.2,2,0,2.9-0.1c0.7-0.1,1.5-0.1,2.3-0.1c0.4,0,0.7,0,1.1,0c0.1,0,0.1,0,0.2,0c0.6-0.4,1.5,0,2.2-0.1c0.3,0,0.6,0,0.9-0.1c1.7-0.1,3.3-0.2,5-0.3c0.5,0,1,0,1.5,0c0.4,0,0.7,0.1,1-0.1c0.2-0.1,0.5,0,0.8,0c0.6,0,1.2-0.3,2,0c0.1,0,0.3,0,0.3,0c0.2-0.3,0.6-0.1,1-0.1c0.6,0,1.3,0.1,1.7-0.1c0.4-0.2,0.8,0.1,1.2,0c0.4-0.1,0.9,0,1.4-0.1c0.1,0,0.2,0,0.3,0c0.5-0.3,1.2-0.1,1.8-0.2c0.6-0.1,1.2,0,1.8-0.1c1-0.2,2,0,3-0.1c0,0,0.1,0,0.1,0c0.5-0.1,0.9-0.1,1.4-0.2c0.2,0,0.4,0,0.6,0c0.6,0,1.3-0.2,1.8-0.1c0.7,0.1,1.2,0.1,1.8,0c0.3,0,0.6-0.1,0.9-0.1c0,0,0.2,0.1,0.2,0.1c0.3,0,0.8,0.1,0.8-0.3c0.1,0.1,0.1,0.2,0.1,0.2c0.9-0.1,1.6-0.1,2.4-0.2c0.6,0,1.3-0.1,1.9-0.2c0.2,0,0.3,0,0.5,0c0.1,0,0.4,0.1,0.4,0c0.4-0.3,1.2-0.3,1.7-0.2c0.7,0.1,1.3-0.1,1.9-0.1c0.7,0,1.3,0,2,0c0.1,0,0.1,0,0.2,0c0.8-0.2,1.8,0,2.7-0.1c0.6,0,1.3-0.1,1.9-0.2c0-0.1-0.1-0.1-0.2-0.2c1.3,0,2.5,0,3.7,0c0.1,0,0.2,0,0.2,0c0.7-0.2,1.6,0,2.3-0.2c0.9-0.2,1.8,0,2.7-0.1c0.5,0,1-0.1,1.5-0.2c1.2-0.1,2.4-0.1,3.5-0.2c0.5,0,0.9-0.1,1.4-0.1c1.9-0.1,3.9-0.2,5.8-0.3c1.1-0.1,2.2-0.1,3.3-0.1c1.6-0.1,3.2-0.2,4.8-0.3c0.3,0,0.6,0,0.9,0c1.4-0.1,2.8-0.3,4.2-0.4c1-0.1,2-0.1,3-0.1c0.3,0,0.6-0.1,0.9-0.1c0,0,0-0.1,0-0.1c-0.5-0.1-0.9-0.1-1.4-0.2c-2.2-0.3-4.4-0.6-6.7-0.8c-1.3-0.1-2.6-0.2-3.9-0.4c-1.1-0.1-2.2-0.2-3.2-0.4c-1.2-0.1-2.5-0.3-3.7-0.4c-1.8-0.2-3.5-0.3-5.3-0.5c-0.8-0.1-1.6-0.1-2.4-0.2c-1.1-0.1-2.1-0.2-3.2-0.4c-1.3-0.1-2.6-0.2-3.9-0.3c-0.8-0.1-1.7-0.2-2.5-0.3c-0.8-0.1-1.7-0.2-2.5-0.3c-1.3-0.1-2.6-0.2-4-0.3c-0.8-0.1-1.6-0.2-2.4-0.3c-0.8-0.1-1.5-0.3-1.9-0.8c-0.1-0.1-0.2-0.1-0.5-0.2c0.4-0.1,0.7-0.2,1-0.3c0.3-0.1,0.3-0.2,0.1-0.3c-0.3-0.2-0.2-0.4,0-0.6c0.4-0.3,0.6-0.7,0.9-1.1c0,0,0,0,0,0c0.7-0.1,0.3-1,1.4-0.9c0.3,0,0.6-0.2,0.9-0.3c0.3-0.1,0.6-0.1,0.8-0.1c0.1,0,0.3,0,0.4-0.1c0-0.3,0.5-0.2,0.8-0.3c1-0.1,2-0.2,3-0.3c0.1,0,0.3,0,0.5,0c0.7,0.1,1.4,0.1,2.1,0.2c0.5,0,1.1,0,1.6,0c0.9,0,1.8,0.1,2.6,0.2c0.2,0,0.5,0.1,0.3-0.2c0.3,0,0.5-0.1,0.8-0.1c1.5,0.1,3.1,0.3,4.6,0.4c1.5,0.1,3,0.2,4.4,0.3c1.4,0.1,2.9,0.2,4.3,0.3c1.2,0.1,2.4,0.2,3.5,0.3c1.6,0.2,3.3,0.3,4.9,0.5c0.7,0.1,1.5,0.2,2.2,0.3c0.5,0.1,0.9,0.1,1.4,0.2c1.5,0.2,2.9,0.3,4.4,0.5c1.2,0.1,2.3,0.2,3.5,0.4c1,0.1,2,0.3,3.1,0.5c1,0.1,2,0.3,3,0.4c1.3,0.2,2.6,0.4,3.9,0.6c1.1,0.2,2.1,0.3,3.2,0.4c0.6,0.1,1.2,0.2,1.8,0.3c0.8,0.2,1.5,0.3,2.3,0.5c2,0.3,3.9,0.8,5.8,1.4c1.3,0.4,2.5,0.8,3.6,1.4c1.2,0.6,1.9,1.5,2.3,2.3c0.4,0.8,0.4,1.7,0.7,2.6c0,0.2,0.2,0.3,0.2,0.5c0.2,0.8,0.4,1.6,0.5,2.4c0,0.4-0.3,0.7-0.7,1c-0.9,0.7-2.2,1.2-3.4,1.6c-1.3,0.5-2.6,0.9-3.9,1.3c-1.1,0.4-2.2,0.7-3.3,1c-0.9,0.3-1.9,0.6-2.8,0.9c-1.1,0.3-2.2,0.6-3.3,1c-1,0.3-1.9,0.6-2.9,0.9c-1.2,0.4-2.5,0.7-3.7,1.1c-0.8,0.2-1.6,0.5-2.4,0.8c-1.3,0.4-2.6,0.7-3.9,1.1c-1.1,0.3-2.1,0.6-3.2,1c-1.2,0.4-2.4,0.7-3.6,1.1c-1.6,0.5-3.2,1-4.8,1.5c-1.1,0.3-2.2,0.6-3.3,1c-1.6,0.5-3.2,1.1-4.9,1.6c-1.4,0.4-2.7,0.8-4.1,1.2c-1,0.3-1.9,0.5-2.9,0.7c-0.4,0.1-1,0-1.5-0.2c-0.5-0.2-1.2-0.3-1.6-0.6c-0.3-0.4-0.7-0.7-0.5-1.1c0.3-0.6,0.3-1.2,0.4-1.8c0-0.2,0.2-0.3,0.2-0.5c0-0.5,0.3-0.8,0.6-1.2c0.5-0.6,1-1.2,1.8-1.6c0.1-0.1,0.2-0.2,0.4-0.3c-0.1-0.1-0.2-0.1-0.4-0.1c0.1-0.1,0.3-0.1,0.4-0.2c-0.1-0.1-0.3-0.1-0.4-0.2c0,0,0-0.1,0.1-0.1c1-0.3,2-0.5,3-0.8c0.5-0.1,1-0.3,1.5-0.4c1-0.3,2-0.6,3-0.9c0.5-0.2,1.1-0.3,1.7-0.4c0.3,0,0.4-0.3,0.7-0.4c0.7-0.2,1.5-0.3,2.2-0.6c0.4-0.1,0.7-0.4,1.1-0.4c0.4-0.1,0.9,0.1,1.3,0c0.5,0,0.8-0.2,1-0.5c-0.1,0-0.2-0.1-0.4-0.1c2.3-0.6,4.5-1.2,6.7-1.8c0,0,0.1,0.1,0.1,0.1c-0.1,0.1-0.1,0.2-0.2,0.2c0.7-0.1,1.4-0.2,2.1-0.3c0,0-0.2-0.1-0.4-0.2c0.5-0.1,1-0.1,1.4-0.1c0.4-0.1,0.9-0.2,1.2-0.4c0.6-0.4,1.2-0.6,2.1-0.7c0.3,0,0.6-0.2,0.9-0.3c0.4-0.1,0.9-0.3,1.3-0.4C238.2,21.4,238.2,21.3,238.3,21.2C238.3,21.2,238.3,21.2,238.3,21.2z" />
    </svg>
  );
}

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  const slideVariants = {
    enter: (d: number) => ({
      x: d > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({
      x: d > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section className="relative min-h-svh overflow-x-hidden bg-[#f4f0e7] text-text lg:min-h-190 lg:overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 20%, rgba(59,35,20,0.12) 0 1px, transparent 1.4px), radial-gradient(circle at 70% 65%, rgba(59,35,20,0.08) 0 1px, transparent 1.4px)",
          backgroundSize: "28px 28px, 36px 36px",
        }}
      />

      <a
        href={`tel:${siteConfig.phone}`}
        className="absolute -left-8 top-9 z-20 hidden rotate-[-31deg] bg-primary px-9 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white shadow-sm before:absolute before:-right-5.5 before:top-0 before:border-y-20 before:border-l-22 before:border-y-transparent before:border-l-primary md:block"
      >
        Call us {siteConfig.phone}
      </a>

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={slide.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative inset-0 lg:absolute"
        >
          <div className="mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-28 pt-20 md:px-10 md:pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4 lg:pb-0 lg:pt-10">
            <div className="relative z-10 mx-auto w-full max-w-xl lg:ml-24 lg:mt-16">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.45 }}
              >
                <p className="font-script text-3xl leading-none text-primary sm:text-4xl md:text-5xl">
                  {slide.subtitle}
                </p>
                <h2 className="mt-2 font-serif text-4xl font-medium uppercase leading-[0.92] tracking-[0.06em] text-black sm:text-5xl md:text-7xl lg:text-[4.9rem]">
                  {slide.title}
                </h2>
              </motion.div>

              <div className="mt-8 space-y-8 md:mt-10 md:space-y-10">
                {slide.products.map((product, index) => (
                  <motion.div
                    key={product.title}
                    className="grid grid-cols-[64px_1fr] items-start gap-4 sm:grid-cols-[72px_1fr] sm:gap-5 md:grid-cols-[88px_1fr] md:gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.12, duration: 0.45 }}
                  >
                    <div className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24">
                      <Image
                        src={product.icon}
                        alt=""
                        fill
                        sizes="96px"
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold uppercase leading-none tracking-[0.02em] text-black sm:text-[2rem]">
                        {product.title}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-6 text-black/80 md:mt-4 md:text-base md:leading-7">
                        {product.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative z-0 mx-auto h-72 w-full max-w-xl sm:h-85 sm:max-w-2xl lg:h-142.5 lg:max-w-180">
              <motion.div
                className="absolute left-[12%] top-[8%] hidden h-[48%] w-[78%] opacity-60 md:block lg:left-[5%] lg:top-[9%]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ delay: 0.28, duration: 0.5 }}
              >
                <Image
                  src={slide.bgText}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 70vw, 620px"
                  className="object-contain"
                />
              </motion.div>

              <motion.div
                className="absolute right-[8%] top-[20%] hidden h-16 w-16 md:block lg:right-[14%] lg:top-[22%]"
                initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ delay: 0.42, duration: 0.45 }}
              >
                <Image
                  src={slide.bgIcon}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-1/2 h-[78%] w-full -translate-x-1/2 lg:h-[78%]"
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.65 }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 1024px) 90vw, 720px"
                  className="object-contain object-bottom"
                  fetchPriority={current === 0 ? "high" : "auto"}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute cursor-pointer left-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-start gap-1 font-serif text-sm uppercase text-black transition-colors hover:text-primary lg:flex"
        aria-label="Previous slide"
      >
        <span>Prev</span>
        <BrushArrow direction="left" />
      </button>
      <button
        onClick={next}
        className="absolute cursor-pointer right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-end gap-1 font-serif text-sm uppercase text-black transition-colors hover:text-primary lg:flex"
        aria-label="Next slide"
      >
        <span>Next</span>
        <BrushArrow />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 lg:hidden">
        <button
          onClick={prev}
          className="flex cursor-pointer h-10 w-20 items-center justify-center text-black hover:text-primary"
          aria-label="Previous slide"
        >
          <BrushArrow direction="left" />
        </button>
        <button
          onClick={next}
          className="flex cursor-pointer h-10 w-20 items-center justify-center text-black hover:text-primary"
          aria-label="Next slide"
        >
          <BrushArrow />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`cursor-pointer transition-all duration-500 ${
              i === current
                ? "w-10 h-0.5 bg-primary"
                : "w-6 h-0.5 bg-black/40 hover:bg-black/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
