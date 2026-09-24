"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/providers/LanguageProvider";
import { useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Eyebrow } from "@/components/ui/Brand";

export default function HomeSignatures() {
  const { data, t } = useLanguage();
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
      aria-label={t("homeSignaturesAriaLabel")}
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
        {t("homeSignaturesDecorativeWord")}
      </p>

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
          <ScrollReveal>
            <Eyebrow>{t("homeSignaturesEyebrow")}</Eyebrow>
            <h2 className="display-section mt-5 text-balance">
              {t("homeSignaturesTitleLineOne")}{" "}
              <br className="hidden md:block" />
              {t("homeSignaturesTitleLineTwo")}{" "}
              <span className="italic text-primary-light">
                {t("homeSignaturesTitleEmphasis")}
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12} className="lg:text-right">
            <div className="flex gap-3">
              <p className="max-w-sm text-cream/60 text-base leading-relaxed lg:ml-auto">
                {t("homeSignaturesDescription")}
              </p>
              <div className="hidden items-center gap-3 md:flex">
                <button
                  onClick={() => scrollBy(-1)}
                  aria-label={t("homeSignaturesPrevious")}
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-cream/25 text-cream transition-all hover:border-primary hover:bg-primary hover:text-dark"
                >
                  <ArrowRight size={17} className="rotate-180" />
                </button>
                <button
                  onClick={() => scrollBy(1)}
                  aria-label={t("homeSignaturesNext")}
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
              {t("homeSignaturesViewMenu")} <ArrowRight size={16} />
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
                      {t("homeSignaturesDiscover")}
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
          {t("homeSignaturesScrollHint")}
        </p>
      </div>
    </section>
  );
}
