"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollReveal, {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/ScrollReveal";
import { Eyebrow, SectionHeader, ArrowLink } from "@/components/ui/Brand";

const SPECIALTIES = [
  {
    n: "01",
    title: "Viennoiseries",
    text: "Croissants feuilletés, pains au chocolat, pains suisses — pliés à la main, cuits à l'aube.",
    image: "/images/shop/croissant.webp",
    href: "/menu",
  },
  {
    n: "02",
    title: "Pâtisseries",
    text: "Mille-feuille, tartes aux fruits, madeleines. La précision française, le cœur marocain.",
    image: "/images/shop/millefeuille.webp",
    href: "/menu",
  },
  {
    n: "03",
    title: "Café de spécialité",
    text: "Espresso, cortado, flat white, cappuccino — des gestes justes, un lait soyeux.",
    image: "/images/background/bg-coffee.webp",
    href: "/menu",
  },
  {
    n: "04",
    title: "Saveurs du Maroc",
    text: "Msemmen, harcha, amlou, harira. Les classiques qui rassemblent, servis toute la journée.",
    image: "/images/shop/msemmen.webp",
    href: "/menu",
  },
];

const SIGNATURES = [
  {
    name: "Croissant au beurre",
    price: "2,50 DH",
    desc: "72h de fermentation, beurre fin, feuilletage caramélisé.",
    image: "/images/today-specials/today-1.webp",
    tag: "L'icône",
  },
  {
    name: "Mille-feuille aux amandes",
    price: "10 DH",
    desc: "Trois couches caramélisées, crème légère aux amandes grillées.",
    image: "/images/today-specials/today-5.webp",
    tag: "Signature",
  },
  {
    name: "Petit-déjeuner La Madeleine",
    price: "55 DH",
    desc: "Le rituel complet : hssoua, omelette au choix, amlou, crêpe, jus d'orange.",
    image: "/images/shop/breakfast.webp",
    tag: "Le rituel",
  },
];

export function HomeIntro() {
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
            <em className="font-normal italic text-primary-dark">pâtisserie.</em>
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

export function HomeSpecialties() {
  return (
    <section className="bg-cream/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            index="01"
            eyebrow="Nos spécialités"
            title={
              <>
                Quatre univers,
                <br />
                une même exigence.
              </>
            }
          />
          <ScrollReveal delay={0.1}>
            <ArrowLink href="/menu">Voir tout le menu</ArrowLink>
          </ScrollReveal>
        </div>

        {/* Desktop: asymmetric editorial grid / Mobile: horizontal snap */}
        <StaggerChildren
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 no-scrollbar lg:grid lg:grid-cols-12 lg:overflow-visible lg:pb-0"
          staggerDelay={0.08}
        >
          {SPECIALTIES.map((s, i) => (
            <StaggerItem
              key={s.title}
              className={`snap-start shrink-0 basis-[82%] sm:basis-[58%] lg:shrink lg:basis-auto ${
                i === 0
                  ? "lg:col-span-5 lg:row-span-2"
                  : i === 1
                    ? "lg:col-span-7"
                    : "lg:col-span-7 lg:grid lg:grid-cols-2 lg:gap-5"
              } ${i >= 2 ? "lg:[&>*]:col-span-1" : ""}`}
            >
              {i >= 2 ? (
                <Link
                  href={s.href}
                  className="group grid h-full grid-cols-[120px_1fr] items-center gap-4 rounded-3xl border border-dark/8 bg-[#fffdf9] p-4 transition-all hover:-translate-y-1 hover:shadow-xl lg:col-span-1"
                >
                  <span className="relative block aspect-square overflow-hidden rounded-2xl">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="200px"
                    />
                  </span>
                  <span>
                    <span className="font-serif text-xs tracking-[0.25em] text-primary-dark">
                      {s.n}
                    </span>
                    <span className="mt-1 block font-serif text-2xl text-dark">
                      {s.title}
                    </span>
                    <span className="mt-2 line-clamp-2 block text-[13px] leading-relaxed text-muted">
                      {s.text}
                    </span>
                  </span>
                </Link>
              ) : (
                <Link
                  href={s.href}
                  className={`group relative block overflow-hidden rounded-[28px] ${
                    i === 0 ? "aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[520px]" : "aspect-[16/9]"
                  }`}
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 80vw, 500px"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                    <span className="font-serif text-xs tracking-[0.3em] text-primary-light">
                      {s.n}
                    </span>
                    <span className="mt-2 block font-serif text-3xl text-cream md:text-4xl">
                      {s.title}
                    </span>
                    <span className="mt-2 block max-w-md text-[14px] leading-relaxed text-cream/70">
                      {s.text}
                    </span>
                    <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-cream">
                      Explorer
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </span>
                </Link>
              )}
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

export function HomeSignatures() {
  return (
    <section className="bg-dark py-20 text-cream md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow light>Signatures</Eyebrow>
            <h2 className="display-section mt-5 font-serif font-medium">
              Les incontournables
              <br />
              de la vitrine.
            </h2>
          </div>
          <Link
            href="/shop"
            className="link-arrow text-cream hover:text-primary"
          >
            Découvrir la boutique <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {SIGNATURES.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.1}>
              <Link
                href="/shop"
                className={`group block overflow-hidden rounded-[28px] border border-cream/10 bg-cream/[0.04] transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl ${
                  i === 1 ? "lg:mt-10" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 90vw, 380px"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-primary px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-dark">
                    {p.tag}
                  </span>
                  <span className="absolute bottom-4 right-4 rounded-full bg-dark/85 px-4 py-2 font-serif text-lg text-primary backdrop-blur">
                    {p.price}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl tracking-wide md:text-[28px]">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-cream/60">
                    {p.desc}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeStats() {
  return (
    <section className="border-y border-dark/8 bg-ivory">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-14 md:px-10 lg:grid-cols-4">
        {[
          ["2019", "Naissance à Agadir"],
          ["150+", "Produits à la carte"],
          ["16h", "D'ouverture, 7j/7"],
          ["100%", "Fait maison"],
        ].map(([v, l], i) => (
          <ScrollReveal key={l} delay={i * 0.07}>
            <p className="font-serif text-5xl font-medium text-dark md:text-6xl">
              {v.replace("+", "")}
              {v.includes("+") && (
                <span className="text-primary">+</span>
              )}
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
