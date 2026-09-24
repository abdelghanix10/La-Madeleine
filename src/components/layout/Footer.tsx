"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

export default function Footer() {
  const { data, t } = useLanguage();
  const { siteConfig } = data;

  return (
    <footer className="relative lg:fixed lg:bottom-0 lg:left-0 w-full lg:h-[60lvh] bg-espresso text-cream/70 z-0 lg:overflow-hidden flex flex-col">
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-10 pt-14 md:pt-16 pb-8 flex-1 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 lg:gap-8 flex-1">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.webp"
                alt={siteConfig.name}
                width={56}
                height={56}
              />
              <span>
                <span className="block font-serif text-3xl text-cream leading-none">
                  {t("footerBrandName")}
                </span>
                <span className="mt-2 block text-[10px] tracking-[0.34em] uppercase text-primary font-sans font-semibold">
                  {t("footerBrandSince")}
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/55">
              {t("footerBrandDescription")}
            </p>
            <div className="mt-6 flex gap-3">
              {[
                {
                  label: t("footerInstagram"),
                  href: siteConfig.social.instagram,
                  path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7.5 2h9a5.5 5.5 0 0 1 5.5 5.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z",
                },
                {
                  label: t("footerFacebook"),
                  href: siteConfig.social.facebook,
                  path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                },
              ].map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={path} />
                  </svg>
                </a>
              ))}
              <a
                href={data.siteConfig.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footerGoogleMaps")}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                <MapPin size={17} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h4 className="eyebrow mb-6 text-primary">{t("footerExplore")}</h4>
            <ul className="space-y-3">
              {[
                { label: t("footerNavHome"), href: "/" },
                { label: t("footerNavMenu"), href: "/menu" },
                { label: t("footerNavAbout"), href: "/about" },
                { label: t("footerNavShop"), href: "/shop" },
                { label: t("footerNavContact"), href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-cream/65 transition-colors hover:text-primary group"
                  >
                    <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Cafés */}
          <div>
            <h4 className="eyebrow mb-6 text-primary">{t("footerOurCafes")}</h4>
            <ul className="space-y-3 text-sm text-cream/65">
              <li className="font-serif text-xl text-cream">
                {t("footerLocationLabel")}
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-1 shrink-0 text-primary" />
                {siteConfig.address}
              </li>
              <li>
                <a
                  href={data.siteConfig.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:text-cream"
                >
                  {t("footerSeeRoute")} <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
            <h4 className="eyebrow mt-8 mb-4 text-primary">
              {t("footerHours")}
            </h4>
            {siteConfig.hours.map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 text-sm text-cream/65"
              >
                <Clock size={15} className="shrink-0 text-primary" />
                <span>
                  {h.day} · <span className="text-cream/90">{h.time}</span>
                </span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow mb-6 text-primary">{t("footerContact")}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 transition-colors hover:text-primary"
                >
                  <Phone size={16} className="shrink-0 text-primary" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 break-all transition-colors hover:text-primary"
                >
                  <Mail size={16} className="shrink-0 text-primary" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-cream transition-all hover:border-primary hover:text-primary"
            >
              {t("footerContactCta")} <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 md:flex-row">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} {siteConfig.name}. {t("footerRights")}
          </p>
          <div className="flex items-center gap-5 text-xs text-cream/40">
            <Link
              href="/cookie-policy"
              className="transition-colors hover:text-primary"
            >
              {t("footerCookiePolicy")}
            </Link>
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-primary"
            >
              {t("footerPrivacyPolicy")}
            </Link>
            <Link href="/faq" className="transition-colors hover:text-primary">
              {t("footerFaq")}
            </Link>
            <p className="font-script text-xl text-primary/80">
              {t("footerTagline")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
