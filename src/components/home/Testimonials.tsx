"use client";

import { Quote } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Eyebrow } from "@/components/ui/Brand";
import { useLanguage } from "@/providers/LanguageProvider";

export default function HomeTestimonials() {
  const { t } = useLanguage();
  const items = [
    {
      quote: t("homeTestimonialsQuote1"),
      name: t("homeTestimonialsName1"),
      role: t("homeTestimonialsRole1"),
    },
    {
      quote: t("homeTestimonialsQuote2"),
      name: t("homeTestimonialsName2"),
      role: t("homeTestimonialsRole2"),
    },
    {
      quote: t("homeTestimonialsQuote3"),
      name: t("homeTestimonialsName3"),
      role: t("homeTestimonialsRole3"),
    },
  ];
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <ScrollReveal>
            <Eyebrow>{t("homeTestimonialsEyebrow")}</Eyebrow>
            <h2 className="display-section mt-5 font-serif font-medium text-dark">
              {t("homeTestimonialsTitle")}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <span className="font-serif text-6xl leading-none text-dark/10">
              &ldquo;
            </span>
          </ScrollReveal>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.08}>
              <figure
                className={`flex h-full flex-col justify-between rounded-[24px] border p-7 transition-all hover:-translate-y-1 hover:shadow-xl ${
                  i === 1
                    ? "border-dark bg-dark text-cream"
                    : "border-dark/8 bg-[#fffdf9] text-dark"
                }`}
              >
                <div>
                  <Quote
                    size={22}
                    className={i === 1 ? "text-primary" : "text-primary-dark"}
                  />
                  <blockquote
                    className={`mt-4 font-serif text-[21px] leading-snug ${
                      i === 1 ? "text-cream" : "text-dark"
                    }`}
                  >
                    {t.quote}
                  </blockquote>
                </div>
                <figcaption
                  className={`mt-6 border-t pt-4 text-[12px] uppercase tracking-[0.18em] ${
                    i === 1
                      ? "border-cream/10 text-cream/60"
                      : "border-dark/8 text-dark/50"
                  }`}
                >
                  <span className="font-bold">{t.name}</span> — {t.role}
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
