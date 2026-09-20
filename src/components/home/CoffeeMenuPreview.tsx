"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Coffee,
  Milk,
  Wine,
  Cookie,
  Droplets,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import ScrollReveal, {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";
import { Eyebrow } from "@/components/ui/Brand";

const iconMap: Record<string, React.ElementType> = {
  Coffee,
  Milk,
  Wine,
  Cookie,
  Droplets,
  Sparkles,
};

interface DoodleProps {
  className?: string;
  strokeWidth?: number;
}

function Base({
  className,
  strokeWidth = 2,
  viewBox = "0 0 120 120",
  children,
}: DoodleProps & { viewBox?: string; children: React.ReactNode }) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}
/** Coffee cup with steam and saucer. */
export function CoffeeCupDoodle(props: DoodleProps) {
  return (
    <Base {...props}>
      <path d="M34 56 C34 52 46 50 60 50 C74 50 86 52 86 56" />
      <path d="M34 56 L41 86 C42 91 46 93 60 93 C74 93 78 91 79 86 L86 56" />
      <path d="M86 62 C95 62 97 72 88 75 C86 76 84 76 82 75" />
      <path d="M28 101 C44 105 76 105 92 101" />
      <path d="M53 41 C51 36 55 32 53 26" />
      <path d="M67 41 C65 36 69 32 67 26" />
    </Base>
  );
}

export default function CoffeeMenuPreview() {
  const { data, t } = useLanguage();
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* sticky editorial intro */}
          <div className="lg:sticky lg:top-32 lg:self-start!">
            <ScrollReveal>
              <CoffeeCupDoodle
                className="mb-6 h-20 w-20 text-accent/70"
                strokeWidth={1.5}
              />
              <Eyebrow>{t("coffeeEyebrow")}</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl text-dark tracking-wide mb-4">
                {t("coffeeTitle").split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-primary">
                  {t("coffeeTitle").split(" ").slice(-1)}
                </span>
              </h2>
              <p className="text-dark/50 mx-auto mt-6">
                {t("coffeeDescription")}
              </p>
              <div className="gold-rule my-8 w-full" />
              <Link
                href="/menu"
                className="group inline-flex items-center gap-3 rounded-full bg-dark px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-cream transition-all hover:bg-primary hover:text-text active:scale-95"
              >
                {t("viewMenu")}
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </ScrollReveal>
          </div>

          <StaggerChildren className="flex flex-col" staggerDelay={0.08}>
            {data.coffeeMenu.map((item, i) => (
              <StaggerItem key={item.id}>
                <motion.div
                  className="group flex items-baseline gap-4 py-4 px-3  border-b border-dark/6 hover:bg-cream/50 hover:border-primary/50 first:border-t cursor-pointer transition-all duration-200"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-[11px] font-bold tracking-[0.2em] text-primary shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center shrink-0 group-hover:ring-2 group-hover:ring-primary/40 transition-all duration-300 shadow-xs">
                    {(() => {
                      const IconComponent = iconMap[item.icon] || Coffee;
                      return <IconComponent className="w-5 h-5 text-primary" />;
                    })()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-serif text-lg text-dark tracking-wide group-hover:text-primary transition-colors duration-200 truncate">
                        {item.name}
                      </h3>
                      <span className="flex-1 border-b border-dotted border-dark/20 mb-1" />
                      <span className="shrink-0 text-base font-black text-primary">
                        {item.price.toFixed(0)}{" "}
                        <span className="text-xs font-bold text-primary">
                          DH
                        </span>
                      </span>
                    </div>
                    <p className="text-dark/55 text-xs mt-0.5 line-clamp-1 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
