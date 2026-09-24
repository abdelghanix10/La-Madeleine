"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Eyebrow } from "@/components/ui/Brand";
import { useLanguage } from "@/providers/LanguageProvider";

const TIMELINE = [
  {
    year: "2018",
    image: "/images/background/bg-about.webp",
    titleKey: "aboutPremiumTimelineTitle1",
    textKey: "aboutPremiumTimelineText1",
  },
  {
    year: "2021",
    image: "/images/background/bg-breakfast.webp",
    titleKey: "aboutPremiumTimelineTitle2",
    textKey: "aboutPremiumTimelineText2",
  },
  {
    year: "2023",
    image: "/images/background/bg-pastries.webp",
    titleKey: "aboutPremiumTimelineTitle3",
    textKey: "aboutPremiumTimelineText3",
  },
  {
    year: "2026",
    image: "/images/background/bg-coffee.webp",
    titleKey: "aboutPremiumTimelineTitle4",
    textKey: "aboutPremiumTimelineText4",
  },
] as const;

const VALUES = [
  {
    n: "01",
    titleKey: "aboutPremiumValueTitle1",
    textKey: "aboutPremiumValueText1",
  },
  {
    n: "02",
    titleKey: "aboutPremiumValueTitle2",
    textKey: "aboutPremiumValueText2",
  },
  {
    n: "03",
    titleKey: "aboutPremiumValueTitle3",
    textKey: "aboutPremiumValueText3",
  },
] as const;

const INGREDIENTS = [
  ["aboutPremiumIngredient1", "aboutPremiumIngredient1Description"],
  ["aboutPremiumIngredient2", "aboutPremiumIngredient2Description"],
  ["aboutPremiumIngredient3", "aboutPremiumIngredient3Description"],
  ["aboutPremiumIngredient4", "aboutPremiumIngredient4Description"],
] as const;

export default function AboutPremium() {
  const { t } = useLanguage();

  return (
    <div className="bg-ivory">
      {/* Philosophy split */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <Eyebrow>{t("aboutPremiumPhilosophyEyebrow")}</Eyebrow>
            <h2 className="display-section mt-5 font-serif font-medium text-dark">
              {t("aboutPremiumPhilosophyTitleLineOne")}
              <br />
              {t("aboutPremiumPhilosophyTitleLineTwo")}
            </h2>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-muted">
              {t("aboutPremiumPhilosophyDescription")}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                ["5h30", "aboutPremiumOvenLabel"],
                ["100%", "aboutPremiumMadeHereLabel"],
              ].map(([value, label]) => (
                <div key={label} className="border-l-2 border-primary pl-5">
                  <p className="font-serif text-4xl text-dark">{value}</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-dark/50">
                    {t(
                      label as
                        | "aboutPremiumOvenLabel"
                        | "aboutPremiumMadeHereLabel",
                    )}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.12} variant="fadeRight">
            <div className="grid grid-cols-2 gap-4">
              <div className="img-zoom relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image
                  src="/images/shop/bread.webp"
                  alt="Pain artisanal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 45vw, 260px"
                />
              </div>
              <div className="mt-10 flex flex-col gap-4">
                <div className="img-zoom relative aspect-square overflow-hidden rounded-3xl">
                  <Image
                    src="/images/shop/croissant.webp"
                    alt="Croissant"
                    fill
                    className="object-cover"
                    sizes="260px"
                  />
                </div>
                <div className="rounded-3xl bg-dark p-6 text-cream">
                  <p className="font-script text-2xl text-primary">
                    {t("aboutPremiumCraftTitle")}
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-cream/65">
                    {t("aboutPremiumCraftDescription")}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-dark py-20 text-cream md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ScrollReveal>
            <Eyebrow light>{t("aboutPremiumTimelineEyebrow")}</Eyebrow>
            <h2 className="display-section mt-5 font-serif font-medium">
              {t("aboutPremiumTimelineTitleLineOne")}
              <br />
              {t("aboutPremiumTimelineTitleLineTwo")}
            </h2>
          </ScrollReveal>
          <div className="mt-14 space-y-6">
            {TIMELINE.map((item, i) => (
              <ScrollReveal key={item.year} delay={0.05}>
                <article
                  className={`grid overflow-hidden rounded-[28px] border border-cream/10 bg-cream/[0.03] lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative min-h-[280px] lg:min-h-[360px]">
                    <Image
                      src={item.image}
                      alt={t(item.titleKey)}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <span className="absolute left-6 top-6 rounded-full bg-primary px-5 py-2 font-serif text-lg font-semibold text-dark">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-12">
                    <p className="font-serif text-7xl leading-none text-cream/10 md:text-8xl">
                      {item.year.slice(2)}
                    </p>
                    <h3 className="-mt-6 font-serif text-3xl md:-mt-8 md:text-4xl">
                      {t(item.titleKey)}
                    </h3>
                    <p className="mt-4 max-w-md text-[15px] leading-relaxed text-cream/65">
                      {t(item.textKey)}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients + values */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="overflow-hidden rounded-[32px] bg-[#efe6d6]">
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            <div className="relative min-h-[320px] lg:min-h-full">
              <Image
                src="/images/background/bg-juices.webp"
                alt={t("aboutPremiumIngredientsEyebrow")}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className="p-8 md:p-12">
              <Eyebrow>{t("aboutPremiumIngredientsEyebrow")}</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl font-medium text-dark md:text-[42px] md:leading-[1.02]">
                {t("aboutPremiumIngredientsTitleLineOne")}
                <br />
                {t("aboutPremiumIngredientsTitleLineTwo")}
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {INGREDIENTS.map(([titleKey, descriptionKey]) => (
                  <li
                    key={titleKey}
                    className="rounded-2xl border border-dark/8 bg-ivory/80 p-5"
                  >
                    <p className="font-serif text-xl text-dark">
                      {t(titleKey)}
                    </p>
                    <p className="mt-1 text-[13px] text-muted">
                      {t(descriptionKey)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <ScrollReveal key={v.n} delay={i * 0.08}>
              <div className="h-full rounded-[24px] border border-dark/8 bg-[#fffdf9] p-8 transition-all hover:-translate-y-1 hover:shadow-xl">
                <p className="font-serif text-5xl text-primary">{v.n}</p>
                <h3 className="mt-4 font-serif text-2xl text-dark">
                  {t(v.titleKey)}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">
                  {t(v.textKey)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-[28px] bg-dark p-8 text-center text-cream md:flex-row md:p-10 md:text-left">
          <div>
            <p className="font-script text-3xl text-primary">
              {t("aboutPremiumCtaScript")}
            </p>
            <p className="mt-1 font-serif text-3xl md:text-4xl">
              {t("aboutPremiumCtaTitle")}
            </p>
          </div>
          <Link href="/menu" className="btn-gold shrink-0">
            {t("aboutHeroCta")} <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
