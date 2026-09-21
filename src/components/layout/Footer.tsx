"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

export default function Footer() {
  const { data, t } = useLanguage();
  const { siteConfig } = data;

  return (
    <footer className="relative lg:fixed lg:bottom-0 lg:left-0 w-full lg:h-[60vh] bg-espresso text-cream/70 z-0 lg:overflow-hidden flex flex-col">
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
                  La Madeleine
                </span>
                <span className="block text-[10px] tracking-[0.34em] uppercase text-primary font-sans font-semibold mt-2">
                  Agadir · Depuis 2019
                </span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mt-5 text-cream/55 max-w-xs">
              Pâtisserie artisanale, boulangerie et café au cœur d&apos;Agadir.
              Le goût du fait maison, chaque jour.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                {
                  label: "Instagram",
                  href: siteConfig.social.instagram,
                  path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7.5 2h9a5.5 5.5 0 0 1 5.5 5.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z",
                },
                {
                  label: "Facebook",
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
                  className="w-11 h-11 rounded-full border border-cream/20 flex items-center justify-center hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
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
                href="https://maps.app.goo.gl/Z5memQUhJrBtShyx7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                className="w-11 h-11 rounded-full border border-cream/20 flex items-center justify-center hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
              >
                <MapPin size={17} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Pied de page — navigation">
            <h4 className="eyebrow text-primary mb-6">Explorer</h4>
            <ul className="space-y-3">
              {[
                { label: "Accueil", href: "/" },
                { label: "Nos produits", href: "/menu" },
                { label: "Notre histoire", href: "/about" },
                { label: "Commander", href: "/shop" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/65 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-primary transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Cafés */}
          <div>
            <h4 className="eyebrow text-primary mb-6">Nos cafés</h4>
            <ul className="space-y-3 text-sm text-cream/65">
              <li className="font-serif text-xl text-cream">
                La Madeleine — Tilila
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-primary mt-1 shrink-0" />
                {siteConfig.address}
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/Z5memQUhJrBtShyx7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary text-xs tracking-[0.2em] uppercase font-sans font-semibold hover:text-cream transition-colors"
                >
                  Voir l&apos;itinéraire <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
            <h4 className="eyebrow text-primary mt-8 mb-4">Horaires</h4>
            {siteConfig.hours.map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 text-sm text-cream/65"
              >
                <Clock size={15} className="text-primary shrink-0" />
                <span>
                  {h.day} · <span className="text-cream/90">{h.time}</span>
                </span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow text-primary mb-6">{t("contact")}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Phone size={16} className="text-primary shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 hover:text-primary transition-colors break-all"
                >
                  <Mail size={16} className="text-primary shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-[11px] font-sans font-semibold tracking-[0.22em] uppercase text-cream hover:border-primary hover:text-primary transition-all"
            >
              Nous contacter <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} {siteConfig.name}.{" "}
            {t("allRightsReserved")}
          </p>
          <div className="flex items-center gap-5 text-xs text-cream/40">
            <Link
              href="/cookie-policy"
              className="hover:text-primary transition-colors"
            >
              {t("cookiePolicy")}
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              {t("privacyPolicy")}
            </Link>
            <Link href="/faq" className="hover:text-primary transition-colors">
              FAQ
            </Link>
            <p className="font-script text-xl text-primary/80">
              Le goût du fait maison
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
