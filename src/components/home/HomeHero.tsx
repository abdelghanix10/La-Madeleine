"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Star, ArrowUpRight } from "lucide-react";

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.9-.1-1.5-.3-2.3H12v4.5h6.5c0 1-.7 2.7-2.7 3.8l-.1.1 3.9 3 .3.1c2.4-2.2 3.6-5.5 3.6-9.2z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.8-2.9c-1 .7-2.4 1.2-4.1 1.2-3.1 0-5.8-2.1-6.8-5l-.1.1-3.9 3v.1C3.2 21.3 7.3 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.2 14.4c-.2-.7-.4-1.5-.4-2.4s.1-1.7.4-2.4l-.1-.1-3.9-3-.1.1C.4 8.2 0 10 0 12s.4 3.8 1.1 5.4l4.1-3z"
      />
      <path
        fill="#EA4335"
        d="M12 4.7c1.8 0 3 .8 3.7 1.4l3.3-3.2C17 1.1 14.9 0 12 0 7.3 0 3.2 2.7 1.1 6.6l4.1 3c1-2.9 3.7-4.9 6.8-4.9z"
      />
    </svg>
  );
}

function GoogleReviewBadge() {
  return (
    <motion.a
      href="https://maps.app.goo.gl/Z5memQUhJrBtShyx7"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16, rotate: -6 }}
      animate={{ opacity: 1, y: 0, rotate: -4 }}
      transition={{ delay: 0.55, duration: 0.6 }}
      className="group block w-[228px] rounded-2xl border border-dark/5 bg-[#fffdf9] px-4 py-3 shadow-[0_18px_45px_-15px_rgba(28,22,19,0.35)]"
      aria-label="Voir nos avis Google — 4,8 sur 5"
    >
      <span className="flex items-center gap-2">
        <GoogleG />
        <span className="font-sans text-[17px] font-extrabold leading-none text-dark">
          4.2
        </span>
        <span className="flex items-center gap-[2px]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={12} className="fill-primary text-primary" />
          ))}
        </span>
        <ArrowUpRight
          size={15}
          className="ml-auto text-dark/35 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-dark"
        />
      </span>
      <span className="mt-1.5 block text-[12px] font-medium leading-snug text-dark/55">
        Loved by 80+ guests
      </span>
    </motion.a>
  );
}

export default function HomeHero() {
  return (
    <header className="page-enter relative overflow-hidden bg-ivory">
      {/* dotted texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(28,22,19,0.10) 0 1px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* Giant background wordmark — sits behind the hero copy */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute hidden lg:block left-1/2 bottom-5 xl:bottom-3.5 z-0 -translate-x-1/2 select-none whitespace-nowrap font-serif italic font-medium leading-none tracking-[0.02em] text-dark/[0.06]"
        style={{ fontSize: "clamp(4.5rem, 13vw, 11.5rem)" }}
      >
        Madeleine
      </span>
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-10 md:px-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-6 lg:pb-24 lg:pt-14">
        {/* Copy */}
        <div className="relative z-10 pt-4 flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-dark/10 bg-white/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-dark/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Agadir · Depuis 2019
            </span>
            <span className="hidden items-center gap-1.5 rounded-full border border-dark/8 bg-[#fffdf9] px-3.5 py-2 text-[12px] font-semibold text-dark/60 shadow-sm sm:flex">
              <GoogleG />
              4.2
              <span className="flex items-center gap-[1px]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={10}
                    className="fill-primary text-primary"
                  />
                ))}
              </span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-script mt-6 text-3xl text-primary-dark md:text-4xl"
          >
            Pâtisserie · Boulangerie · Café
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="display-hero mt-2 font-serif font-medium text-dark"
          >
            Le goût du
            <br />
            <span className="italic text-chocolate">fait maison</span>
            <span className="text-primary">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 max-w-md text-[17px] leading-relaxed text-muted md:text-[19px]"
          >
            Depuis 2019, La Madeleine célèbre la pâtisserie, le café et les
            saveurs qui rassemblent.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <a href="/menu" className="btn-primary">
              Découvrir notre menu
              <ArrowRight size={16} />
            </a>
            <a href="/cafes" className="btn-ghost">
              <MapPin size={15} />
              Trouver un café
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-dark/10 pt-6"
          >
            {[
              ["06", "ans de savoir-faire"],
              ["150+", "créations maison"],
              ["7j/7", "6h — 22h"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-serif text-3xl text-dark md:text-4xl">
                  {v}
                </dt>
                <dd className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-dark/50">
                  {l}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Imagery — arched editorial */}
        <div
          className="relative z-10 mx-auto w-full max-w-[500px] sm:max-w-[520px] lg:max-w-none"
          dir="ltr"
        >
          <div className="relative mx-auto w-full max-w-[500px]">
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-b-[28px] rounded-t-[999px] shadow-[0_40px_80px_-30px_rgba(28,22,19,0.45)] ring-1 ring-dark/10 sm:aspect-[5/5.4] lg:aspect-[4/5.1]"
            >
              <Image
                src="/images/background/bg-pastries.webp"
                alt="Pâtisseries La Madeleine — pains au chocolat"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/20 via-transparent to-transparent" />
            </motion.div>

            {/* Fait maison card — top left, overlapping the arch curve */}
            <motion.div
              initial={{ opacity: 0, y: -16, x: -12 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="absolute left-0 top-[15%] z-20 rounded-2xl border border-dark/5 bg-[#fffdf9]/95 px-5 py-3.5 shadow-[0_20px_50px_-15px_rgba(28,22,19,0.35)] backdrop-blur lg:-left-12 lg:px-6 lg:py-4"
            >
              <p className="font-script text-[26px] leading-none text-[#b08a3c] lg:text-[28px]">
                Fait maison
              </p>
              <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-dark/65 lg:mt-2">
                Chaque jour · Depuis 2019
              </p>
            </motion.div>

            {/* Google review — floating over the photo's lower-left, tilted */}
            <div className="absolute bottom-0 sm:-bottom-5 -left-3 sm:-left-16 z-20 lg:-bottom-4 lg:-left-16">
              <GoogleReviewBadge />
            </div>

            {/* Evening promo photo — bottom-right of arch, tilted polaroid */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 9 }}
              animate={{ opacity: 1, y: 0, rotate: 4 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -bottom-5 -right-5 z-20 w-32  sm:w-44 lg:-bottom-8 lg:-right-6 lg:w-52"
            >
              <div className="overflow-hidden rounded-xl border-[5px] border-white bg-white shadow-[0_20px_50px_-15px_rgba(28,22,19,0.4)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/shop/croissant.webp"
                    alt="Viennoiseries — offre après 21h"
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                </div>
              </div>
            </motion.div>

            {/* Vertical side label */}
            <span
              aria-hidden="true"
              className="absolute -right-8 top-1/2 hidden -translate-y-1/2 select-none text-[10px] font-semibold uppercase text-dark/35 lg:block"
              style={{
                writingMode: "vertical-rl",
                letterSpacing: "0.55em",
                height: "max-content",
              }}
            >
              Boulangerie · Pâtisserie · Café
            </span>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative border-y border-dark/8 bg-cream/60 py-3.5">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
            {[0, 1].map((k) => (
              <div
                key={k}
                className="flex shrink-0 items-center gap-10 text-[11px] font-bold uppercase tracking-[0.3em] text-dark/50"
                aria-hidden={k === 1}
              >
                {[
                  "Viennoiseries",
                  "Mille-feuille",
                  "Café de spécialité",
                  "Msemmen",
                  "Amlou",
                  "Pain au chocolat",
                  "Jus frais",
                ].map((w) => (
                  <span key={w} className="flex items-center gap-10">
                    {w} <span className="text-primary">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
