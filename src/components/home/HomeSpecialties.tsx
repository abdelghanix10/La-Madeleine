"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal, {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/ScrollReveal";
import { Eyebrow } from "../ui/Brand";
import { ArrowUpRight } from "lucide-react";

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

export default function HomeSpecialties() {
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
