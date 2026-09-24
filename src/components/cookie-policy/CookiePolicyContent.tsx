"use client";

import { useLanguage } from "@/providers/LanguageProvider";

const SECTIONS = [1, 2, 3, 4, 5] as const;

export default function CookiePolicyContent() {
  const { t } = useLanguage();

  return (
    <section className="bg-ivory px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-dark/40">
          {t("cookiePolicyEffectiveDate")}
        </p>
        <p className="mt-4 text-[16px] leading-relaxed text-muted">
          {t("cookiePolicyIntro")}
        </p>
        <div className="mt-10 space-y-5">
          {SECTIONS.map((sectionNumber, i) => (
            <article
              key={sectionNumber}
              className="rounded-3xl border border-dark/8 bg-[#fffdf9] p-7 md:p-8"
            >
              <h2 className="flex items-center gap-3 font-serif text-2xl text-dark">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 font-sans text-[12px] font-bold text-primary-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {t(
                  `cookiePolicySectionTitle${sectionNumber}` as keyof typeof import("@/providers/LanguageProvider").translations.en,
                )}
              </h2>
              <p className="mt-3 pl-11 text-[15px] leading-relaxed text-dark/70">
                {t(
                  `cookiePolicySectionText${sectionNumber}` as keyof typeof import("@/providers/LanguageProvider").translations.en,
                )}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
