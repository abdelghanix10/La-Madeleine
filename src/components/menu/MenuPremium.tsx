"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Flame } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import * as dataFR from "@/lib/data-fr";

type Item = (typeof dataFR.menuItems)[number];

const TABS = [
  { key: "all", label: "Tout" },
  { key: "Viennoiseries", label: "Viennoiseries", match: ["croissant", "pain au chocolat", "pain suisse", "danoise", "brioche", "pithiviers", "triangle"] },
  { key: "Pâtisseries", label: "Pâtisseries", match: ["mille-feuille", "tarte", "madeleine", "basboussa", "gâteau", "cupcake", "crêpe", "gaufre", "pancake", "beignet", "chausson"] },
  { key: "Petit-déjeuner et Salé", label: "Salé", match: [] },
  { key: "Cafés", label: "Café", match: [] },
  { key: "Boissons", label: "Boissons", match: [] },
  { key: "Jus", label: "Jus frais", match: [] },
];

function matchesTab(item: Item, tabKey: string): boolean {
  if (tabKey === "all") return true;
  if (tabKey === "Petit-déjeuner et Salé") return item.category === "Petit-déjeuner et Salé";
  if (tabKey === "Cafés") return item.category === "Cafés";
  if (tabKey === "Jus") return item.category === "Jus";
  if (tabKey === "Boissons")
    return item.category === "Boissons Chaudes" || item.category === "Boissons Froides";
  const tab = TABS.find((t) => t.key === tabKey);
  if (!tab?.match?.length) return item.category === tabKey;
  const name = item.name.toLowerCase();
  return tab.match.some((k) => name.includes(k));
}

function Price({ value }: { value: number }) {
  return (
    <span className="inline-flex items-baseline gap-1 rounded-full bg-primary/12 px-3.5 py-1.5 font-serif text-[17px] font-semibold text-dark">
      {value.toFixed(2).replace(".", ",")}
      <span className="text-[12px] font-sans font-bold">DH</span>
    </span>
  );
}

export default function MenuPremium() {
  const [tab, setTab] = useState("all");

  const filtered = useMemo(() => {
    const items = (dataFR.menuItems as Item[]).filter((i) => matchesTab(i, tab));
    // Popular first, then rest
    return [...items].sort((a, b) => Number(b.popular) - Number(a.popular));
  }, [tab]);

  const featured = filtered.filter((f) => f.popular).slice(0, 3);
  const rest = filtered.filter((f) => !featured.includes(f));

  const shownRest = tab === "all" ? rest.slice(0, 18) : rest.slice(0, 24);

  return (
    <div className="bg-ivory">
      {/* Sticky category nav */}
      <div className="sticky top-[64px] z-30 border-b border-dark/8 bg-ivory/92 backdrop-blur-xl lg:top-[72px]">
        <div className="mx-auto flex max-w-7xl items-center gap-2.5 overflow-x-auto px-6 py-4 no-scrollbar md:px-10">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-all ${
                tab === t.key
                  ? "bg-dark text-cream shadow-lg"
                  : "border border-dark/10 bg-white/70 text-dark/60 hover:border-dark/25 hover:text-dark"
              }`}
            >
              {t.label}
            </button>
          ))}
          <Link
            href="/contact"
            className="btn-gold ml-auto hidden shrink-0 !px-5 !py-2.5 !text-[11px] md:inline-flex"
          >
            Commander <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            {/* Editorial featured */}
            {featured.length > 0 && (
              <div className="grid gap-5 lg:grid-cols-2">
                {/* Large feature */}
                <ScrollReveal className="h-full">
                  <article className="group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-[28px] lg:min-h-[560px]">
                    <Image
                      src={featured[0].image}
                      alt={featured[0].name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/25 to-transparent" />
                    <div className="relative p-7 md:p-9">
                      <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-dark">
                        <Flame size={12} /> Signature
                      </span>
                      <h3 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
                        {featured[0].name}
                      </h3>
                      <p className="mt-3 max-w-md text-[14px] leading-relaxed text-cream/70">
                        {featured[0].description}
                      </p>
                      <div className="mt-5 flex flex-wrap items-center gap-4">
                        <span className="rounded-full bg-cream px-4 py-2 font-serif text-lg font-semibold text-dark">
                          {featured[0].price.toFixed(2).replace(".", ",")} DH
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-cream/60">
                          {featured[0].category}
                        </span>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
                <div className="grid gap-5">
                  {featured.slice(1, 3).map((f) => (
                    <ScrollReveal key={f.id}>
                      <article className="group grid grid-cols-[140px_1fr] gap-5 rounded-[24px] border border-dark/8 bg-[#fffdf9] p-4 transition-all hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[200px_1fr]">
                        <span className="relative block aspect-square overflow-hidden rounded-2xl">
                          <Image
                            src={f.image}
                            alt={f.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="220px"
                          />
                        </span>
                        <span className="flex flex-col justify-center py-1 pr-2">
                          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary-dark">
                            {f.category}
                          </span>
                          <span className="mt-1.5 block font-serif text-2xl leading-tight text-dark md:text-[28px]">
                            {f.name}
                          </span>
                          <span className="mt-2 line-clamp-2 block text-[13px] leading-relaxed text-muted">
                            {f.description}
                          </span>
                          <span className="mt-3">
                            <Price value={f.price} />
                          </span>
                        </span>
                      </article>
                    </ScrollReveal>
                  ))}
                  {/* Inline CTA card */}
                  <div className="flex flex-col justify-center rounded-[24px] bg-dark p-7 text-cream sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-script text-2xl text-primary">
                        Une petite faim ?
                      </p>
                      <p className="mt-1 font-serif text-2xl">
                        Commandez, on s&apos;occupe du reste.
                      </p>
                    </div>
                    <Link href="/contact" className="btn-gold mt-5 shrink-0 sm:mt-0">
                      Commander <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Editorial list — dotted leaders (desktop) / cards (mobile) */}
            <div className="mt-14">
              <div className="mb-8 flex items-baseline justify-between gap-6">
                <h2 className="font-serif text-3xl text-dark md:text-4xl">
                  {TABS.find((t) => t.key === tab)?.label === "Tout"
                    ? "La carte du moment"
                    : TABS.find((t) => t.key === tab)?.label}
                </h2>
                <p className="hidden text-[12px] uppercase tracking-[0.2em] text-dark/45 sm:block">
                  {filtered.length} créations
                </p>
              </div>

              <div className="grid gap-x-12 lg:grid-cols-2">
                {shownRest.map((item, idx) => (
                  <ScrollReveal key={item.id} delay={Math.min(idx * 0.03, 0.3)}>
                    <article className="group flex items-center gap-4 border-b border-dark/8 py-5">
                      <span className="relative hidden h-16 w-16 shrink-0 overflow-hidden rounded-2xl sm:block">
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="64px"
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-baseline gap-3">
                          <span className="truncate font-serif text-[22px] text-dark transition-colors group-hover:text-primary-dark">
                            {item.name}
                          </span>
                          <span
                            aria-hidden
                            className="mx-1 hidden flex-1 border-b border-dotted border-dark/20 sm:block"
                          />
                          <span className="shrink-0 font-serif text-[18px] font-semibold text-primary-dark">
                            {item.price.toFixed(2).replace(".", ",")} DH
                          </span>
                        </span>
                        <span className="mt-1 line-clamp-1 block text-[13px] text-muted">
                          {item.description}
                        </span>
                        <span className="mt-1.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-dark/35">
                          {item.category}
                        </span>
                      </span>
                    </article>
                  </ScrollReveal>
                ))}
              </div>

              {filtered.length > shownRest.length + featured.length && (
                <p className="mt-10 text-center text-[13px] text-dark/50">
                  + {filtered.length - shownRest.length - featured.length} autres
                  créations à découvrir sur place — la vitrine change chaque jour.
                </p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="mt-16 overflow-hidden rounded-[32px] bg-[#efe6d6]">
          <div className="grid items-center gap-8 p-8 md:grid-cols-[1fr_auto] md:p-12">
            <div>
              <p className="font-script text-3xl text-primary-dark">
                La carte papier, en grand
              </p>
              <h3 className="mt-2 font-serif text-3xl text-dark md:text-4xl">
                Feuilletez le menu complet, page par page.
              </h3>
              <p className="mt-3 max-w-lg text-[15px] text-muted">
                Petit-déjeuners, salé, jus frais, cafés — 10 pages de gourmandises,
                avec photos et prix.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Commander <ArrowRight size={15} />
              </Link>
              <Link href="/shop" className="btn-ghost">
                Voir la boutique
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
