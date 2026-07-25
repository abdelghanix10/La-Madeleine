"use client";

import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";

export default function AboutCTA() {
  const { t } = useLanguage();
  return (
    <section className="py-24 md:py-32 bg-cream text-center">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-primary font-script text-2xl md:text-3xl mb-3">
            {t("comeVisit")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark tracking-wide mb-6">
            {t("tasteTheDifference")}
          </h2>
          <p className="text-dark/50 mb-10 max-w-lg mx-auto">{t("aboutCTA")}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-dark hover:bg-primary text-cream hover:text-dark px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 group"
          >
            {t("findUs")}
            <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
