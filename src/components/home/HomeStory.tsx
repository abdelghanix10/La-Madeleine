"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Clock, Quote, Camera } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Eyebrow, ArrowLink } from "@/components/ui/Brand";
import { useLanguage } from "@/providers/LanguageProvider";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HomeStoryPreview() {
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

export function HomeCafesPreview() {

  return (
    <section className="bg-cream/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 overflow-hidden rounded-[32px] bg-dark text-cream lg:grid-cols-[1fr_1fr]">
          <div className="p-8 md:p-12 lg:p-14">
            <ScrollReveal>
              <Eyebrow light>Nos cafés</Eyebrow>
              <h2 className="display-section mt-5 font-serif font-medium">
                À deux pas,
                <br />
                toujours chaud.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-cream/65">
                Notre adresse de Tilila vous accueille du petit-déjeuner au
                goûter tardif — en salle, en terrasse ou à emporter.
              </p>
              <div className="mt-8 space-y-4 text-[14px]">
                <p className="flex items-start gap-3 text-cream/80">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-primary" />
                  Av. Al Oulfa, Tilila, Agadir 80000
                </p>
                <p className="flex items-center gap-3 text-cream/80">
                  <Clock size={17} className="shrink-0 text-primary" />
                  Lun — Dim · 6h00 — 22h00
                </p>
                <p className="flex items-center gap-3 text-cream/80">
                  <Phone size={17} className="shrink-0 text-primary" />
                  05 28 26 43 44
                </p>
              </div>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/cafes" className="btn-gold">
                  Voir nos cafés <ArrowRight size={15} />
                </Link>
                <a
                  href="https://maps.app.goo.gl/Z5memQUhJrBtShyx7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-light"
                >
                  Itinéraire
                </a>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal
            variant="fadeRight"
            className="relative min-h-[320px] lg:min-h-full"
          >
            <div className="absolute inset-0">
              <iframe
                title="Carte — La Madeleine Tilila, Agadir"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.858666837468!2d-9.528228968629396!3d30.402064943861852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c9965a5026d3%3A0x736a8bf5957eefa9!2sCaf%C3%A9%20%26%20P%C3%A2tisserie%20Lamadeleine!5e1!3m2!1sen!2sma!4v1784648271235!5m2!1sen!2sma"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full"
              />
              <div className="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-dark via-dark/5 to-transparent lg:bg-linear-to-r" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export function HomeTestimonials() {
  const items = [
    {
      quote:
        "Un charmant salon de thé, des pâtisseries excellentes et des jus frais remarquables.",
      name: "Ryu Z.",
      role: "Habitué",
    },
    {
      quote:
        "Service adorable, lieu très propre, nourriture absolument délicieuse. On y revient.",
      name: "Halima E.",
      role: "Cliente",
    },
    {
      quote: "Endroit calme, bon service, gens sympathiques. Parfait le matin.",
      name: "Soufiane",
      role: "Habitué",
    },
  ];
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <ScrollReveal>
            <Eyebrow>Ils nous aiment</Eyebrow>
            <h2 className="display-section mt-5 font-serif font-medium text-dark">
              Paroles d&apos;habitués.
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
