"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollReveal, {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/ScrollReveal";
import { Eyebrow } from "@/components/ui/Brand";
import { useLanguage } from "@/providers/LanguageProvider";
import { useRef, useState } from "react";

const formatPrice = (n: number) =>
  `${n.toLocaleString("fr-MA", { maximumFractionDigits: 2 })} DH`;

type Card = {
  index: string;
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  span: string;
  height: string;
};

const CARDS: Card[] = [
  {
    index: "01",
    label: "Pâtisserie",
    title: "Douceurs d'atelier",
    description:
      "Tartes aux fruits, mille-feuille, entremets — la vitrine qui donne envie.",
    image: "/images/today-specials/today-4.webp",
    alt: "Tarte aux fruits La Madeleine",
    span: "lg:col-span-7",
    height: "h-[420px] md:h-[520px]",
  },
  {
    index: "02",
    label: "Viennoiserie",
    title: "Feuilletage du matin",
    description: "Croissants au beurre, pains au chocolat, pliés à la main.",
    image: "/images/today-specials/today-1.webp",
    alt: "Croissant au beurre artisanal",
    span: "lg:col-span-5",
    height: "h-[420px] md:h-[520px]",
  },
  {
    index: "03",
    label: "Sandwiches",
    title: "Frais & généreux",
    description: "Croissants garnis et pains du jour, préparés minute.",
    image: "/images/shop/sandwich.webp",
    alt: "Sandwich frais La Madeleine",
    span: "lg:col-span-4",
    height: "h-[380px] md:h-[440px]",
  },
  {
    index: "04",
    label: "Café",
    title: "Espresso & créations",
    description:
      "Cortado signature, cappuccino, flat white — torréfié avec soin.",
    image: "/images/today-specials/today-6.webp",
    alt: "Café signature La Madeleine",
    span: "lg:col-span-4",
    height: "h-[380px] md:h-[440px]",
  },
  {
    index: "05",
    label: "Salé",
    title: "Saveurs marocaines",
    description: "Briouats, pastillas, msemmen — le salé qui rassemble.",
    image: "/images/shop/briouat.webp",
    alt: "Briouats au fromage",
    span: "lg:col-span-4",
    height: "h-[380px] md:h-[440px]",
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

export function HomeSpecialties() {
  return (
    <section
      id="produits"
      className="bg-cream/50 border-y border-dark/10 py-24 md:py-32 scroll-mt-20"
      aria-label="Nos spécialités"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <ScrollReveal>
            <Eyebrow light>La carte</Eyebrow>
            <h2 className="display-section text-dark mt-5">
              Nos <span className="italic">spécialités</span>
            </h2>
            <p className="mt-4 max-w-lg text-dark/60 text-base md:text-lg">
              Des recettes préparées avec passion, chaque jour.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <Link
              href="/menu"
              className="group inline-flex items-center gap-3 rounded-full border border-dark/20 px-7 py-3.5 text-xs font-sans font-semibold tracking-[0.18em] uppercase text-dark hover:bg-dark hover:text-cream transition-all"
            >
              Voir la carte
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:rotate-45"
              />
            </Link>
          </ScrollReveal>
        </div>

        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5"
          staggerDelay={0.1}
        >
          {CARDS.map((card) => (
            <StaggerItem key={card.index} className={`${card.span}`}>
              <Link
                href="/menu"
                className={`group relative block overflow-hidden rounded-[24px] ${card.height} img-frame shadow-[0_24px_60px_-30px_rgba(34,20,16,0.4)]`}
                aria-label={`${card.label} — ${card.title}`}
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent"
                  aria-hidden="true"
                />
                <span className="absolute top-5 left-5 rounded-full bg-background/90 backdrop-blur px-4 py-1.5 text-[10px] font-sans font-semibold tracking-[0.25em] uppercase text-dark">
                  {card.index} · {card.label}
                </span>
                <span className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-cream/15 backdrop-blur border border-cream/30 text-cream transition-all duration-300 group-hover:bg-primary group-hover:text-dark group-hover:border-primary">
                  <ArrowUpRight size={18} />
                </span>
                <span className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                  <span className="block font-serif text-3xl md:text-4xl text-cream leading-none">
                    {card.title}
                  </span>
                  <span className="mt-2 block max-w-sm text-sm text-cream/70 leading-relaxed">
                    {card.description}
                  </span>
                </span>
              </Link>
            </StaggerItem>
          ))}

          {/* Editorial small card — Spécialités du jour */}
          <StaggerItem className="md:col-span-2 lg:col-span-12">
            <Link
              href="/menu"
              className="group flex flex-col md:flex-row items-stretch gap-0 overflow-hidden rounded-[24px] bg-dark text-cream"
            >
              <span className="relative h-64 md:h-auto md:w-[42%] shrink-0 overflow-hidden">
                <Image
                  src="/images/today-specials/today-5.webp"
                  alt="Mille-feuille aux amandes — spécialité du jour"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </span>
              <span className="flex flex-1 flex-col justify-center p-8 md:p-12">
                <span className="eyebrow text-primary">
                  06 · Spécialités du jour
                </span>
                <span className="mt-4 block font-serif text-3xl md:text-5xl leading-[1.02]">
                  La vitrine change,{" "}
                  <span className="italic text-primary-light">
                    l&apos;envie reste.
                  </span>
                </span>
                <span className="mt-4 block max-w-xl text-sm md:text-base text-cream/65 leading-relaxed">
                  Chaque jour, nos pâtissiers mettent en avant le meilleur du
                  fournil — mille-feuille aux amandes, créations de saison,
                  éditions limitées.
                </span>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-[0.22em] uppercase text-primary">
                  Découvrir
                  <span className="inline-block transition-transform group-hover:translate-x-1.5">
                    →
                  </span>
                </span>
              </span>
            </Link>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  );
}

export function HomeSignatures() {
  const { data } = useLanguage();
  const items = data.todaysSpecials.slice(0, 6);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = Math.min(track.clientWidth * 0.8, 480);
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const onScrollTrack = () => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setProgress(max > 0 ? track.scrollLeft / max : 0);
  };

  return (
    <section
      className="relative bg-dark text-cream py-24 md:py-32 overflow-hidden"
      aria-label="Les signatures de La Madeleine"
    >
      {/* ambient glow */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[720px] rounded-full bg-primary/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <p
        className="pointer-events-none select-none absolute top-8 left-1/2 -translate-x-1/2 font-serif italic text-[18vw] leading-none text-cream/[0.04] whitespace-nowrap"
        aria-hidden="true"
      >
        Signatures
      </p>

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
          <ScrollReveal>
            <p className="eyebrow text-primary">Les incontournables</p>
            <h2 className="display-section mt-5 text-balance">
              Les signatures <br className="hidden md:block" />
              de <span className="italic text-primary-light">La Madeleine</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12} className="lg:text-right">
            <div className="flex gap-3">
              <p className="max-w-sm text-cream/60 text-base leading-relaxed lg:ml-auto">
                Nos meilleures ventes, préparées chaque matin dans notre atelier
                d&apos;Agadir.
              </p>
              <div className="hidden items-center gap-3 md:flex">
                <button
                  onClick={() => scrollBy(-1)}
                  aria-label="Previous"
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-cream/25 text-cream transition-all hover:border-primary hover:bg-primary hover:text-dark"
                >
                  <ArrowRight size={17} className="rotate-180" />
                </button>
                <button
                  onClick={() => scrollBy(1)}
                  aria-label="Next"
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-cream/25 text-cream transition-all hover:border-primary hover:bg-primary hover:text-dark"
                >
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
            <Link
              href="/menu"
              className="mt-5 inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-[0.22em] uppercase text-primary hover:text-cream transition-colors"
            >
              Voir toute la carte <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>

        {/* Horizontal track */}
        <div
          ref={trackRef}
          onScroll={onScrollTrack}
          data-lenis-prevent
          className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
        >
          {items.map((item, i) => (
            <article
              key={item.id}
              className="group relative w-[78%] shrink-0 snap-start sm:w-[58%] md:w-[420px]"
            >
              <div className="img-zoom relative aspect-[4/5] w-full overflow-hidden bg-dark">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 78vw, 420px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-chocolate/95 via-chocolate/25 to-transparent" />

                <span className="absolute top-5 left-5 font-serif text-4xl text-cream/40 italic">
                  0{i + 1}
                </span>
                <span className="eyebrow absolute top-7 right-5 text-[9px] text-primary-light">
                  {item.category}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-serif text-[1.7rem] leading-tight font-medium text-cream">
                    {item.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[13px] leading-6 text-cream/60">
                    {item.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-cream/15 pt-4">
                    <span className="font-serif text-2xl text-primary-light">
                      {item.price.toFixed(2).replace(/\.00$/, "")}{" "}
                      <span className="font-sans text-xs tracking-widest text-cream/60">
                        DH
                      </span>
                    </span>
                    <Link
                      href="/menu"
                      className="inline-flex items-center gap-1.5 font-sans text-[10px] font-semibold tracking-[0.2em] text-cream uppercase transition-colors hover:text-primary"
                    >
                      Découvrir
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:rotate-45"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-8 flex items-center gap-4" aria-hidden="true">
          <span className="font-sans text-[10px] tracking-[0.3em] text-cream/40 uppercase">
            {String(
              Math.min(
                items.length,
                Math.round(progress * (items.length - 3)) + 3,
              ),
            ).padStart(2, "0")}
          </span>
          <div className="h-px flex-1 bg-cream/15">
            <div
              className="h-px bg-primary transition-[width] duration-150"
              style={{ width: `${Math.max(12, progress * 100)}%` }}
            />
          </div>
          <span className="font-sans text-[10px] tracking-[0.3em] text-cream/40 uppercase">
            {String(items.length).padStart(2, "0")}
          </span>
        </div>

        <p className="lg:hidden mt-4 text-center text-[11px] tracking-[0.25em] uppercase text-cream/40 font-sans">
          Faites défiler →
        </p>
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
              {v.includes("+") && <span className="text-primary">+</span>}
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
