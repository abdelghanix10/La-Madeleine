"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function ShowcaseBanner() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      aria-label="Chaque matin commence avec une bonne raison"
    >
      <div className="relative min-h-[85vh] md:min-h-[92vh] flex items-end">
        {/* full-bleed photo */}
        <motion.div
          style={{ y }}
          className="absolute inset-y-[-14%] inset-x-0"
          aria-hidden="true"
        >
          <Image
            src="/images/background/bg-bread.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            loading="lazy"
          />
        </motion.div>
        <div
          className="absolute inset-0 bg-linear-to-t from-dark via-espresso/45 to-espresso/10"
          aria-hidden="true"
        />

        <div className="relative w-full max-w-350 mx-auto px-5 md:px-8 pb-14 md:pb-20 pt-40">
          <ScrollReveal>
            <p className="eyebrow text-primary">Du fournil, chaque matin</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="display-section text-cream mt-5 max-w-4xl text-balance">
              Chaque matin commence avec une{" "}
              <span className="italic text-primary-light">bonne raison.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/menu"
                className="group inline-flex items-center gap-3 rounded-full bg-primary text-dark pl-7 pr-2.5 py-2.5 text-xs font-sans font-semibold tracking-[0.18em] uppercase hover:brightness-105 transition-all active:scale-[0.97]"
              >
                Voir la carte
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-dark text-cream transition-transform group-hover:translate-x-1">
                  <ArrowRight size={17} />
                </span>
              </Link>
              <span className="text-cream/60 text-sm font-sans">
                Baguettes · Brioches · Pains marocains
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
