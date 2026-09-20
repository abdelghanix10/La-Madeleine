"use client";

import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Eyebrow, ArrowLink } from "@/components/ui/Brand";

export default function HomeStoryPreview() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-10 lg:grid-cols-2">
        <ScrollReveal
          variant="fadeLeft"
          className="relative order-2 lg:order-1"
        >
          <div className="img-zoom relative aspect-[4/5] max-h-[600px] w-full overflow-hidden rounded-[32px]">
            <Image
              src="/images/background/bg-story.webp"
              alt="L'atelier La Madeleine"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 520px"
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 flex items-center gap-5 rounded-2xl bg-dark p-5 text-cream shadow-2xl md:left-10 md:right-auto">
            <p className="font-serif text-5xl leading-none text-primary">06</p>
            <p className="text-[12px] uppercase leading-relaxed tracking-[0.18em] text-cream/70">
              ans de passion,
              <br />
              chaque matin à 5h30
            </p>
          </div>
        </ScrollReveal>
        <div className="order-1 lg:order-2">
          <ScrollReveal>
            <Eyebrow>Notre histoire</Eyebrow>
            <h2 className="display-section mt-5 font-serif font-medium text-dark">
              Une histoire
              <br />
              de passion.
            </h2>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-muted">
              En 2019, une conviction simple : Agadir méritait un lieu où la
              viennoiserie française rencontre l&apos;hospitalité marocaine.
              Depuis, nos fours ne se sont jamais vraiment éteints.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                [
                  "Farine, beurre fin & patience",
                  "Des ingrédients choisis, des gestes précis.",
                ],
                [
                  "Le four comme cœur battant",
                  "Pain, msemmen et brioches sortent toute la journée.",
                ],
                [
                  "Le café comme rituel",
                  "Une carte courte, maîtrisée, servie avec soin.",
                ],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4 border-b border-dark/8 pb-4">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    <span className="block font-serif text-xl text-dark">
                      {t}
                    </span>
                    <span className="block text-[14px] text-muted">{d}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ArrowLink href="/about">Lire notre histoire</ArrowLink>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

