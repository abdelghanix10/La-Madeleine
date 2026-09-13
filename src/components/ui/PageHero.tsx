"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PageTag } from "@/components/ui/Brand";

export type HeroVariant =
  | "home"
  | "menu"
  | "shop"
  | "about"
  | "cafes"
  | "faq"
  | "contact"
  | "legal";

export function PageHero({
  variant,
  eyebrow,
  title,
  description,
  image,
  secondaryImage,
  meta,
  children,
}: {
  variant: HeroVariant;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  image?: string;
  secondaryImage?: string;
  meta?: React.ReactNode;
  children?: React.ReactNode;
}) {
  if (variant === "faq") {
    return (
      <header className="page-enter relative overflow-hidden bg-cream pt-36 pb-20 md:pt-44 md:pb-28">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 select-none font-serif text-[26vw] leading-none text-dark/[0.04] md:text-[18vw]"
        >
          FAQ
        </span>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 flex justify-center">
            <PageTag>{eyebrow}</PageTag>
          </div>
          <h1 className="display-page font-serif font-medium text-dark">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
              {description}
            </p>
          )}
          {children}
        </div>
      </header>
    );
  }

  if (variant === "legal") {
    return (
      <header className="page-enter bg-cream pt-36 pb-14 md:pt-44 md:pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <PageTag>{eyebrow}</PageTag>
          <h1 className="mt-6 font-serif text-4xl font-medium text-dark md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-muted">{description}</p>
          )}
        </div>
      </header>
    );
  }

  if (variant === "menu") {
    return (
      <header className="page-enter relative overflow-hidden bg-dark pt-32 pb-0 md:pt-40">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-14 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:pb-20">
          <div>
            <PageTag>{eyebrow}</PageTag>
            <h1 className="display-page mt-6 font-serif font-medium text-cream">
              {title}
            </h1>
            {description && (
              <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-cream/65">
                {description}
              </p>
            )}
            <div className="mt-8">{meta}</div>
            {children}
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 1.5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="img-zoom relative aspect-[4/3] overflow-hidden rounded-[28px] border border-cream/10"
            >
              {image && (
                <Image
                  src={image}
                  alt="Notre menu"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
            </motion.div>
            {secondaryImage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="absolute -bottom-6 -left-4 hidden w-44 overflow-hidden rounded-2xl border-4 border-dark shadow-2xl md:block lg:-left-10 lg:w-56"
              >
                <div className="relative aspect-square">
                  <Image
                    src={secondaryImage}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
        <div className="border-t border-cream/10 bg-dark">
          <div className="mx-auto flex max-w-7xl items-center gap-8 overflow-x-auto px-6 py-4 no-scrollbar md:px-10">
            {[
              "Viennoiseries",
              "Pâtisseries",
              "Petit-déjeuner",
              "Salé",
              "Café",
              "Boissons",
              "Jus frais",
            ].map((c, i) => (
              <span
                key={c}
                className="flex shrink-0 items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/45"
              >
                <span className="text-primary">0{i + 1}</span> {c}
              </span>
            ))}
          </div>
        </div>
      </header>
    );
  }

  if (variant === "shop") {
    return (
      <header className="page-enter relative overflow-hidden bg-[#efe6d6] pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-terracotta/10 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <PageTag>{eyebrow}</PageTag>
            <h1 className="display-page mt-6 font-serif font-medium text-dark">
              {title}
            </h1>
            {description && (
              <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted">
                {description}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-4">{children}</div>
            {meta && <div className="mt-8">{meta}</div>}
          </div>
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-2xl">
                <Image
                  src={image}
                  alt="La Boutique"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 440px"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-dark px-6 py-4 text-cream shadow-xl">
                <p className="font-serif text-3xl leading-none">
                  150<span className="text-primary">+</span>
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-cream/60">
                  Créations artisanales
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </header>
    );
  }

  if (variant === "about") {
    return (
      <header className="page-enter relative flex min-h-[92dvh] items-end overflow-hidden bg-dark pt-32">
        {image && (
          <Image
            src={image}
            alt="Notre histoire"
            fill
            priority
            className="object-cover opacity-70"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/45 to-dark/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-20 md:px-10 md:pb-24">
          <PageTag>{eyebrow}</PageTag>
          <h1 className="display-hero mt-6 max-w-4xl font-serif font-medium text-cream">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-cream/75">
              {description}
            </p>
          )}
          <div className="mt-8 flex flex-wrap items-center gap-6">
            {meta}
            {children}
          </div>
        </div>
      </header>
    );
  }

  if (variant === "cafes") {
    return (
      <header className="page-enter bg-ivory pt-32 md:pt-40">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="pb-4 lg:pb-14">
            <PageTag>{eyebrow}</PageTag>
            <h1 className="display-page mt-6 font-serif font-medium text-dark">
              {title}
            </h1>
            {description && (
              <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted">
                {description}
              </p>
            )}
            <div className="mt-8">{children}</div>
            {meta}
          </div>
          {image && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="img-zoom relative aspect-[16/11] overflow-hidden rounded-[28px] lg:aspect-[4/3]"
            >
              <Image
                src={image}
                alt="Nos cafés"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-cream/95 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-dark backdrop-blur">
                Agadir — Tilila
              </div>
            </motion.div>
          )}
        </div>
      </header>
    );
  }

  // contact
  return (
    <header className="page-enter relative overflow-hidden bg-dark pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-10 lg:grid-cols-2">
        <div>
          <PageTag>{eyebrow}</PageTag>
          <h1 className="display-page mt-6 font-serif font-medium text-cream">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-cream/65">
              {description}
            </p>
          )}
          <div className="mt-8">{meta}</div>
          {children}
        </div>
        {image && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            <div className="img-zoom relative aspect-[4/5] max-h-[560px] w-full overflow-hidden rounded-[32px]">
              <Image
                src={image}
                alt="Contact"
                fill
                priority
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 max-w-[240px] rounded-2xl bg-primary p-6 text-dark shadow-2xl">
              <p className="font-script text-2xl leading-none">Fait maison</p>
              <p className="mt-2 text-[13px] leading-relaxed">
                Chaque message est lu avec attention. Réponse sous 24h.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
