"use client";

import { ArrowUpRight, Star } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";

export default function GoogleReviewCta() {
  const { data, t } = useLanguage();

  return (
    <section
      aria-label={t("reviewUsGoogleButton")}
      className="relative bg-ivory pt-4 pb-14 md:pt-6 md:pb-20"
    >
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[28px] bg-dark px-7 py-10 text-center text-cream shadow-xl md:px-12 md:py-14">
            {/* Soft gold glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
            />
            <div className="relative">
              <p className="font-script text-3xl text-primary">
                {t("reviewUsGoogleScript")}
              </p>
              <div
                aria-hidden
                className="mt-4 flex items-center justify-center gap-1.5"
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    size={18}
                    strokeWidth={1.5}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>
              <h2 className="mt-4 font-serif text-3xl font-medium text-cream md:text-5xl">
                {t("reviewUsGoogleTitle")}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-cream/65">
                {t("reviewUsGoogleDescription")}
              </p>
              <div className="mt-8 flex flex-col items-center gap-3">
                <a
                  href={data.siteConfig.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("reviewUsGoogleAria")}
                  className="btn-gold !px-8 !py-4 text-center"
                >
                  <Star size={16} strokeWidth={2} className="fill-current" />
                  {t("reviewUsGoogleButton")}
                  <ArrowUpRight size={16} strokeWidth={2.4} />
                </a>
                <p className="text-[12px] uppercase tracking-[0.22em] text-cream/45">
                  {t("reviewUsGoogleNote")}
                </p>
              </div>
              <p className="mt-7 text-[11px] uppercase tracking-[0.25em] text-cream/35">
                {t("reviewUsGoogleRatingLabel")}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
