"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";

export default function HomeStats() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-dark/8 bg-ivory">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-14 md:px-10 lg:grid-cols-4">
        {[
          ["2018", t("homeStatsBirthLabel")],
          ["150+", t("homeStatsProductsLabel")],
          ["16h", t("homeStatsHoursLabel")],
          ["100%", t("homeStatsHomemadeLabel")],
        ].map(([v, l], i) => (
          <ScrollReveal key={l} delay={i * 0.07}>
            <p className="font-serif text-5xl font-medium text-dark md:text-6xl">
              {v.replace("+", "")}
              {v.includes("+") && <span className="text-primary">+</span>}
            </p>
            <p className="mt-2 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-dark/50">
              <span className="inline-block h-px w-6 bg-primary" />
              {l}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
