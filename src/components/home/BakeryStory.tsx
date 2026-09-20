"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";
import { Eyebrow } from "../ui/Brand";

function TimelineEntry({
  year,
  title,
  text,
  image,
  alt,
  flip,
}: {
  year: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  flip?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14 lg:gap-20"
    >
      <div className={flip ? "md:order-2 md:pl-10" : "md:pr-10"}>
        <ScrollReveal>
          <p className="font-serif text-[clamp(4rem,9vw,7.5rem)] leading-none font-light text-primary/80 italic">
            {year}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <span className="h-px w-12 bg-dark/30" />
            <span className="h-2 w-2 rounded-full bg-primary" />
          </div>
          <h3 className="text-title mt-6 max-w-md font-serif font-medium text-balance text-dark">
            {title}
          </h3>
          <p className="mt-5 max-w-md text-lg leading-7 text-text/60">{text}</p>
        </ScrollReveal>
      </div>

      <motion.div style={{ y }} className={flip ? "md:order-1" : ""}>
        <ScrollReveal variant="scaleUp" duration={1}>
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream">
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(max-width: 768px) 92vw, 46vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>
      </motion.div>
    </div>
  );
}

export default function BakeryStory() {
  const { t } = useLanguage();

  return (
    <section id="histoire" className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        {/* Header */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:mb-28 lg:grid-cols-12 lg:items-end">
          <ScrollReveal className="lg:col-span-7">
            <Eyebrow>{t("storyEyebrow")}</Eyebrow>
            <h2 className="text-display mt-6 font-serif font-medium text-dark">
              {t("storyTitleOne")}{" "}
              <span className="italic font-normal text-primary">
                {t("storyTitleTwo")}
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="lg:col-span-5 lg:pb-3">
            <p className="max-w-sm text-lg leading-7 text-text/60">
              {t("storyDescription")}
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-24 md:gap-36">
          {/* vertical thread */}
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-[3px] hidden w-px bg-dark/12 md:left-1/2 md:block"
          />
          <TimelineEntry
            year="2019"
            title="La naissance de La Madeleine"
            text="Un amour du fait maison ouvre ses portes à Tilila, Agadir — fournil artisanal, salon de thé, café de quartier."
            image="/images/background/bg-about.webp"
            alt="La première boutique La Madeleine à Agadir"
          />
          <TimelineEntry
            year="2020+"
            title="Une passion qui grandit"
            text="La carte s'étoffe : petits-déjeuners marocains, viennoiseries françaises, jus frais et cafés de spécialité."
            image="/images/shop/bread.webp"
            alt="Pains artisanaux sortis du four"
            flip
          />
          <TimelineEntry
            year="Aujourd'hui"
            title="Des cafés et des moments partagés"
            text="Chaque matin, la même promesse : des créations fraîches, un café soigné, un lieu où l'on revient."
            image="/images/shop/breakfast.webp"
            alt="Table de brunch La Madeleine"
          />
        </div>
      </div>
    </section>
  );
}