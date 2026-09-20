"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Eyebrow } from "@/components/ui/Brand";

export default function HomeIntro() {
  return (
    <section className="overflow-visible bg-ivory py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 xl:gap-16">
        {/* ——— Left : manifesto ——— */}
        <ScrollReveal>
          <Eyebrow>Notre manifeste</Eyebrow>
          <h2 className="mt-6 font-serif text-[clamp(3rem,6.2vw,4.9rem)] font-medium leading-[0.98] tracking-[-0.015em] text-dark">
            Bien plus
            <br />
            qu&apos;une{" "}
            <em className="font-normal italic text-primary-dark">
              pâtisserie.
            </em>
          </h2>
          <p className="mt-7 max-w-[540px] text-[16.5px] leading-[1.75] text-muted">
            Pâtisseries faites à la main, pain artisanal et café exceptionnel —
            une expérience authentique de boulangerie française et marocaine
            depuis 2019. Une maison où la tradition française rencontre la
            générosité marocaine — croissants feuilletés le matin, café qui
            rassemble l&apos;après-midi.
          </p>
          <div className="mt-10 flex items-center gap-6 md:gap-8">
            <Link
              href="/about"
              className="group flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.22em] text-dark transition-colors hover:text-primary-dark"
            >
              Notre histoire
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-dark/15 transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-cream">
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300"
                />
              </span>
            </Link>
            <span className="h-12 w-px bg-dark/10" aria-hidden />
            <div className="flex items-center gap-3">
              <span className="font-serif text-[44px] font-medium leading-none text-dark">
                7+
              </span>
              <span className="text-[11px] font-semibold uppercase leading-[1.5] tracking-[0.22em] text-dark/50">
                Ans de
                <br />
                passion
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* ——— Right : editorial imagery ——— */}
        <ScrollReveal
          variant="fadeRight"
          delay={0.12}
          className="relative mt-4 lg:mt-0"
        >
          <div className="relative">
            {/* EST badge — floating in the gap, like the reference */}
            <div className="absolute -top-9 left-6 z-20 flex h-[92px] w-[92px] rotate-[-8deg] flex-col items-center justify-center rounded-full border border-dark/10 bg-ivory text-center shadow-[0_10px_30px_-12px_rgba(28,22,19,0.25)] lg:left-[-3.2rem] lg:top-[0.4rem]">
              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-dark/50">
                Est.
              </span>
              <span className="my-0.5 font-serif text-[26px] font-medium italic leading-none text-dark">
                2019
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-primary-dark">
                Agadir
              </span>
            </div>

            {/* Main image */}
            <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-[26px] bg-dark shadow-[0_40px_80px_-30px_rgba(28,22,19,0.45)] md:aspect-[16/11]">
              <Image
                src="/images/background/bg-bread.webp"
                alt="Pains artisanaux La Madeleine — farine, feu et patience"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 620px"
                priority
              />
            </div>

            {/* Small overlapping coffee card */}
            <div className="absolute -bottom-8 -left-3 z-20 h-[124px] w-[124px] overflow-hidden rounded-2xl border-[5px] border-white bg-white shadow-[0_24px_50px_-16px_rgba(28,22,19,0.45)] md:-bottom-10 md:-left-10 md:h-[148px] md:w-[148px]">
              <Image
                src="/images/shop/cappuccino.webp"
                alt="Cappuccino — latte art"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
          </div>
          {/* spacer for the overlapping card on mobile */}
          <div className="h-8 md:h-10" aria-hidden />
        </ScrollReveal>
      </div>
    </section>
  );
}




