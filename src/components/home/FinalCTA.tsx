"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";
import { Eyebrow } from "../ui/Brand";

export default function FinalCTA() {
  const { data } = useLanguage();

  return (
    <section id="contact" className="relative bg-espresso text-cream overflow-hidden grain scroll-mt-20" aria-label="Une petite pause gourmande ?">
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 h-[480px] w-[480px] rounded-full bg-primary/10 blur-[130px] pointer-events-none" aria-hidden="true" />
      <p
        className="pointer-events-none select-none absolute -top-4 left-1/2 -translate-x-1/2 font-serif italic text-[16vw] leading-none text-cream/[0.04] whitespace-nowrap"
        aria-hidden="true"
      >
        gourmande
      </p>

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <ScrollReveal>
            <Eyebrow>À tout de suite</Eyebrow>
            <h2 className="display-section mt-5 text-balance">
              Une petite pause <span className="italic text-primary-light">gourmande ?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 max-w-xl text-cream/65 text-base md:text-lg leading-relaxed">
              Retrouvez-nous dans nos cafés et découvrez nos spécialités —
              servies avec le sourire, de 6h à 22h, 7j/7.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/cafes"
                className="group inline-flex items-center gap-3 rounded-full bg-primary text-dark pl-7 pr-2.5 py-2.5 text-xs font-sans font-semibold tracking-[0.18em] uppercase hover:brightness-105 transition-all active:scale-[0.97]"
              >
                Trouver un café
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-dark text-cream transition-transform group-hover:translate-x-1">
                  <ArrowRight size={17} />
                </span>
              </Link>
              <a
                href={`tel:${data.siteConfig.phone}`}
                className="inline-flex items-center gap-2.5 rounded-full border border-cream/25 px-7 py-3.5 text-xs font-sans font-semibold tracking-[0.18em] uppercase hover:border-primary hover:text-primary transition-all"
              >
                <Phone size={15} className="text-primary" />
                {data.siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="text-xs font-sans font-semibold tracking-[0.22em] uppercase text-cream/60 hover:text-primary transition-colors underline-offset-8 hover:underline"
              >
                Nous contacter
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <dl className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl border-t border-cream/12 pt-8 text-sm">
              <div>
                <dt className="text-[10px] tracking-[0.28em] uppercase font-sans font-semibold text-cream/45">Adresse</dt>
                <dd className="mt-2 text-cream/80 leading-relaxed">{data.siteConfig.address}</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.28em] uppercase font-sans font-semibold text-cream/45">Horaires</dt>
                <dd className="mt-2 text-cream/80">Lun — Dim<br />6h00 — 22h00</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.28em] uppercase font-sans font-semibold text-cream/45">Contact</dt>
                <dd className="mt-2 text-cream/80 break-all">{data.siteConfig.email}</dd>
              </div>
            </dl>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="scaleUp" className="lg:col-span-5">
          <div className="relative">
            <div className="img-frame rounded-[28px] aspect-[4/5] max-h-[560px] w-full rotate-2 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.7)]">
              <Image
                src="/images/today-specials/today-2.webp"
                alt="Croissant sandwich signature La Madeleine"
                fill
                sizes="(max-width: 1024px) 90vw, 35vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/35 via-transparent to-transparent" aria-hidden="true" />
            </div>
            <div className="absolute -left-4 md:-left-8 -bottom-6 rounded-2xl bg-background text-dark px-6 py-4 shadow-2xl -rotate-3">
              <p className="font-script text-3xl text-caramel leading-none">bon appétit</p>
              <p className="text-[10px] tracking-[0.28em] uppercase font-sans font-semibold text-dark/55 mt-1.5">
                Servi chaud · Tous les jours
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* sticky mobile CTA */}
      <div className="lg:hidden sticky bottom-0 z-30 border-t border-cream/12 bg-espresso/95 backdrop-blur-xl px-4 py-3 flex gap-2.5">
        <Link
          href="/shop"
          className="flex-1 text-center rounded-full bg-primary text-dark py-3.5 text-xs font-sans font-bold tracking-[0.18em] uppercase active:scale-[0.98] transition-transform"
        >
          Commander
        </Link>
        <Link
          href="/cafes"
          className="flex-1 text-center rounded-full border border-cream/30 text-cream py-3.5 text-xs font-sans font-bold tracking-[0.18em] uppercase active:scale-[0.98] transition-transform"
        >
          Trouver un café
        </Link>
      </div>
    </section>
  );
}
