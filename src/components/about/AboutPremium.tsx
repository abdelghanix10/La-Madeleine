"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Eyebrow } from "@/components/ui/Brand";

const TIMELINE = [
  {
    year: "2019",
    title: "La naissance de La Madeleine",
    text: "Une petite vitrine à Tilila, un four qui ne dort jamais, et une conviction : marier la viennoiserie française à l'hospitalité marocaine.",
    image: "/images/background/bg-about.webp",
  },
  {
    year: "2021",
    title: "Le rituel du matin",
    text: "Le petit-déjeuner La Madeleine devient une institution : hssoua fumante, msemmen feuilleté, jus d'orange pressé, café soyeux.",
    image: "/images/background/bg-breakfast.webp",
  },
  {
    year: "2023",
    title: "L'atelier s'agrandit",
    text: "Nouveaux tours, nouvelles mains, même exigence. La carte s'étoffe : mille-feuille aux amandes, amlou à l'argan, créations de saison.",
    image: "/images/background/bg-pastries.webp",
  },
  {
    year: "2026",
    title: "Une maison de quartier",
    text: "Familles, étudiants, voyageurs : La Madeleine est devenue le salon d'Agadir. Et chaque matin, tout recommence à 5h30.",
    image: "/images/background/bg-coffee.webp",
  },
];

const VALUES = [
  {
    n: "01",
    title: "Le fait maison, vraiment",
    text: "Pâtes feuilletées pliées à la main, pains pétris sur place, jus pressés à la minute. Rien d'industriel, jamais.",
  },
  {
    n: "02",
    title: "Deux cultures, une table",
    text: "Beurre fin et huile d'argan, vanille et fleur d'oranger, baguette et batbout. La rencontre franco-marocaine est notre signature.",
  },
  {
    n: "03",
    title: "L'accueil avant tout",
    text: "On retient votre prénom, votre table préférée, votre café habituel. Ici, on n'est jamais un simple ticket.",
  },
];

export default function AboutPremium() {
  return (
    <div className="bg-ivory">
      {/* Philosophy split */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <Eyebrow>Philosophie</Eyebrow>
            <h2 className="display-section mt-5 font-serif font-medium text-dark">
              Le temps, le geste,
              <br />
              la matière.
            </h2>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-muted">
              Nous nous levons avant le soleil pour que vous n&apos;ayez qu&apos;à
              vous asseoir. Fermentation lente, beurre de qualité, fruits de
              saison, café maîtrisé : le luxe, pour nous, c&apos;est la justesse.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                ["5h30", "Le four s'allume"],
                ["100%", "Fait sur place"],
              ].map(([v, l]) => (
                <div key={l} className="border-l-2 border-primary pl-5">
                  <p className="font-serif text-4xl text-dark">{v}</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-dark/50">
                    {l}
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
                  <p className="font-script text-2xl text-primary">Savoir-faire</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-cream/65">
                    Feuilletage, pétrissage, torréfaction — transmis, répétés,
                    perfectionnés.
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
            <Eyebrow light>Depuis 2019</Eyebrow>
            <h2 className="display-section mt-5 font-serif font-medium">
              L&apos;évolution
              <br />
              de la maison.
            </h2>
          </ScrollReveal>
          <div className="mt-14 space-y-6">
            {TIMELINE.map((t, i) => (
              <ScrollReveal key={t.year} delay={0.05}>
                <article
                  className={`grid overflow-hidden rounded-[28px] border border-cream/10 bg-cream/[0.03] lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative min-h-[280px] lg:min-h-[360px]">
                    <Image
                      src={t.image}
                      alt={t.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <span className="absolute left-6 top-6 rounded-full bg-primary px-5 py-2 font-serif text-lg font-semibold text-dark">
                      {t.year}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-12">
                    <p className="font-serif text-7xl leading-none text-cream/10 md:text-8xl">
                      {t.year.slice(2)}
                    </p>
                    <h3 className="-mt-6 font-serif text-3xl md:-mt-8 md:text-4xl">
                      {t.title}
                    </h3>
                    <p className="mt-4 max-w-md text-[15px] leading-relaxed text-cream/65">
                      {t.text}
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
                alt="Ingrédients frais"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className="p-8 md:p-12">
              <Eyebrow>Ingrédients</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl font-medium text-dark md:text-[42px] md:leading-[1.02]">
                Des matières simples,
                <br />
                choisies avec obsession.
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ["Beurre fin", "Feuilletages caramélisés"],
                  ["Amlou & argan", "Le Souss dans l'assiette"],
                  ["Fruits de saison", "Jus pressés minute"],
                  ["Café maîtrisé", "Extractions précises"],
                ].map(([t, d]) => (
                  <li
                    key={t}
                    className="rounded-2xl border border-dark/8 bg-ivory/80 p-5"
                  >
                    <p className="font-serif text-xl text-dark">{t}</p>
                    <p className="mt-1 text-[13px] text-muted">{d}</p>
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
                <h3 className="mt-4 font-serif text-2xl text-dark">{v.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">
                  {v.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-[28px] bg-dark p-8 text-center text-cream md:flex-row md:p-10 md:text-left">
          <div>
            <p className="font-script text-3xl text-primary">La suite se goûte</p>
            <p className="mt-1 font-serif text-3xl md:text-4xl">
              Découvrez nos spécialités.
            </p>
          </div>
          <Link href="/menu" className="btn-gold shrink-0">
            Découvrir nos spécialités <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
