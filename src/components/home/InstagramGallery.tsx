"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal, {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/ScrollReveal";
import { useLanguage, type translations } from "@/providers/LanguageProvider";
import { Eyebrow } from "@/components/ui/Brand";

const SHOTS: {
  src: string;
  altKey: keyof typeof translations.en;
  tall: boolean;
}[] = [
  {
    src: "/images/gallery/gallery-4.webp",
    altKey: "homeInstagramAlt1",
    tall: true,
  },
  {
    src: "/images/today-specials/today-2.webp",
    altKey: "homeInstagramAlt2",
    tall: false,
  },
  {
    src: "/images/gallery/gallery-1.webp",
    altKey: "homeInstagramAlt3",
    tall: false,
  },
  {
    src: "/images/today-specials/today-5.webp",
    altKey: "homeInstagramAlt4",
    tall: true,
  },
  {
    src: "/images/gallery/gallery-5.webp",
    altKey: "homeInstagramAlt5",
    tall: false,
  },
  {
    src: "/images/today-specials/today-4.webp",
    altKey: "homeInstagramAlt6",
    tall: false,
  },
  {
    src: "/images/gallery/gallery-3.webp",
    altKey: "homeInstagramAlt7",
    tall: true,
  },
  {
    src: "/images/gallery/gallery-2.webp",
    altKey: "homeInstagramAlt8",
    tall: false,
  },
];

export default function InstagramGallery() {
  const { data, t } = useLanguage();

  return (
    <section
      className="bg-background py-24 md:py-32 overflow-hidden"
      aria-label={t("homeInstagramAriaLabel")}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <ScrollReveal>
            <Eyebrow>@lamadeleine.agadir</Eyebrow>
            <h2 className="display-section text-dark mt-5">
              {t("homeInstagramTitleLineOne")}{" "}
              <span className="italic">{t("homeInstagramTitleEmphasis")}</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <a
              href={data.siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-dark/20 px-7 py-3.5 text-xs font-sans font-semibold tracking-[0.18em] uppercase text-dark hover:bg-dark hover:text-cream transition-all"
            >
              {t("homeInstagramHandle")}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:rotate-45"
              />
            </a>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <StaggerChildren
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[220px]"
          staggerDelay={0.06}
        >
          {SHOTS.map((s, i) => (
            <StaggerItem key={i} className={s.tall ? "row-span-2" : ""}>
              <a
                href={data.siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block h-full w-full overflow-hidden rounded-[20px] img-frame ${
                  i % 3 === 0
                    ? "md:-rotate-1"
                    : i % 3 === 2
                      ? "md:rotate-1"
                      : ""
                }`}
                aria-label={`${t("homeInstagramViewLabel")} — ${t(s.altKey)}`}
              >
                <Image
                  src={s.src}
                  alt={t(s.altKey)}
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  className="object-cover"
                  loading="lazy"
                />
                <span
                  className="absolute inset-0 bg-dark/0 group-hover:bg-dark/45 transition-colors duration-400 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-dark opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </span>
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
