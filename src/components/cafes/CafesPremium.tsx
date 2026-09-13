"use client";

import Image from "next/image";
import { MapPin, Phone, Clock, ArrowUpRight, Coffee, Wifi, Sun } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Eyebrow } from "@/components/ui/Brand";

const CAFES = [
  {
    name: "La Madeleine — Tilila",
    address: "Av. Al Oulfa, Tilila, Agadir 80000",
    phone: "05 28 26 43 44",
    hours: "Lun — Dim · 6h00 — 22h00",
    image: "/images/background/bg-breakfast.webp",
    mapUrl: "https://maps.app.goo.gl/Z5memQUhJrBtShyx7",
    tags: ["Terrasse", "Salon de thé", "À emporter"],
    desc: "Notre maison mère : vitrine généreuse, salle lumineuse et terrasse pour les matins doux d'Agadir.",
  },
  {
    name: "Le Comptoir — Centre-ville",
    address: "Bientôt · Centre Agadir",
    phone: "05 28 26 43 44",
    hours: "Ouverture prochaine",
    image: "/images/background/bg-coffee.webp",
    mapUrl: "https://maps.app.goo.gl/Z5memQUhJrBtShyx7",
    tags: ["Café de spécialité", "Brunch"],
    desc: "Un second lieu en préparation, pensé pour les amateurs de café filtre et de brunchs lents.",
  },
];

export default function CafesPremium() {
  return (
    <div className="bg-ivory pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-6 pt-12 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <ScrollReveal className="overflow-hidden rounded-[28px] border border-dark/8 bg-white shadow-sm">
            <iframe
              title="Carte — La Madeleine Agadir"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.858666837468!2d-9.528228968629396!3d30.402064943861852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c9965a5026d3%3A0x736a8bf5957eefa9!2sCaf%C3%A9%20%26%20P%C3%A2tisserie%20Lamadeleine!5e1!3m2!1sen!2sma!4v1784648271235!5m2!1sen!2sma"
              className="h-[380px] w-full md:h-[480px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex h-full flex-col justify-center rounded-[28px] bg-dark p-8 text-cream md:p-10">
              <Eyebrow light>Trouver la maison</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
                À 10 minutes
                <br />
                de partout à Agadir.
              </h2>
              <ul className="mt-7 space-y-5 text-[14px]">
                {[
                  [Coffee, "Petit-déjeuner servi jusqu'à 12h, 7j/7"],
                  [Sun, "Terrasse ensoleillée, salle climatisée"],
                  [Wifi, "Parfait pour travailler ou bouquiner"],
                ].map(([Icon, t]: any) => (
                  <li key={t} className="flex items-center gap-3 text-cream/75">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/8 text-primary">
                      <Icon size={17} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href="https://maps.app.goo.gl/Z5memQUhJrBtShyx7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-8"
              >
                Ouvrir dans Maps <ArrowUpRight size={15} />
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {CAFES.map((c, i) => (
            <ScrollReveal key={c.name} delay={i * 0.08}>
              <article className="group h-full overflow-hidden rounded-[28px] border border-dark/8 bg-[#fffdf9] transition-all hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/45 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-cream/95 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-dark backdrop-blur"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="absolute right-4 top-4 rounded-full bg-dark/85 px-4 py-2 font-serif text-lg text-primary backdrop-blur">
                    0{i + 1}
                  </span>
                </div>
                <div className="p-7 md:p-8">
                  <h3 className="font-serif text-3xl text-dark">{c.name}</h3>
                  <p className="mt-2 max-w-md text-[14px] leading-relaxed text-muted">
                    {c.desc}
                  </p>
                  <ul className="mt-6 space-y-3 text-[14px] text-dark/75">
                    <li className="flex items-start gap-3">
                      <MapPin size={17} className="mt-0.5 shrink-0 text-primary-dark" />
                      {c.address}
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone size={17} className="shrink-0 text-primary-dark" />
                      {c.phone}
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock size={17} className="shrink-0 text-primary-dark" />
                      {c.hours}
                    </li>
                  </ul>
                  <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-dark/8 pt-6">
                    <a
                      href={c.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-arrow text-dark"
                    >
                      Itinéraire
                    </a>
                    <a
                      href={`tel:${c.phone.replace(/\s/g, "")}`}
                      className="ml-auto text-[12px] font-bold uppercase tracking-[0.18em] text-dark/50 hover:text-dark"
                    >
                      Appeler
                    </a>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
