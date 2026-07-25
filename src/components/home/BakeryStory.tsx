"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";
import { useLanguage } from "@/providers/LanguageProvider";

export default function BakeryStory() {
  const { t } = useLanguage();
  const stats = [
    {
      value: new Date().getFullYear() - 2019,
      suffix: "+",
      label: t("storyYears"),
    },
    { value: 150, suffix: "+", label: t("storyProducts") },
    { value: 100, suffix: "K+", label: t("storyCustomers") },
  ];
  const imageRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal variant="fadeLeft">
            <div ref={imageRef} className="relative">
              <div className="aspect-4/5 relative overflow-hidden rounded-4xl shadow-2xl">
                <motion.div
                  className="absolute inset-0 will-change-transform"
                  style={{ y: imageY }}
                >
                  <Image
                    src="/images/background/bg-story.jpg"
                    alt="Bakery background"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-linear-to-t from-dark/55 via-dark/15 to-transparent" />
                <div className="absolute inset-0 flex items-end p-8 md:p-10">
                  <div>
                    <p className="font-script text-3xl text-cream/90 mb-2">
                      {t("storySince")}
                    </p>
                    <h3 className="font-serif text-5xl md:text-7xl text-cream">
                      2019
                    </h3>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-dark p-6 shadow-xl">
                <span className="font-script text-3xl">{t("storySince")}</span>
                <br />
                <span className="font-serif text-4xl font-bold">2019</span>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal variant="fadeRight">
              <p className="text-primary font-script text-2xl md:text-3xl mb-3">
                {t("storyEyebrow")}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-dark tracking-wide mb-8 leading-tight">
                {t("storyTitleOne")}
                <br />
                {t("storyTitleTwo")}
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.1}>
              <p className="text-dark/60 leading-relaxed mb-6">
                {t("storyDescription")}
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.2}>
              <p className="text-dark/60 leading-relaxed mb-10">
                {t("storyDescriptionTwo")}
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.3}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-dark/10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-serif text-3xl md:text-4xl text-primary mb-1">
                      <CountUp
                        end={stat.value}
                        suffix={stat.suffix}
                        duration={2.5}
                      />
                    </div>
                    <p className="text-dark/50 text-xs tracking-wider uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
