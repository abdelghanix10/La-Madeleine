"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

const NAV = [
  { label: "Accueil", href: "/" },
  { label: "Notre histoire", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Boutique", href: "/shop" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-0 flex w-full flex-col bg-dark text-cream/70 lg:fixed lg:bottom-0 lg:left-0 lg:h-[62vh] lg:overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Big brand line */}
      <div className="overflow-hidden border-b border-cream/8">
        <p
          aria-hidden
          className="mx-auto max-w-7xl whitespace-nowrap px-6 pt-8 font-serif text-[13vw] leading-[0.9] text-cream/[0.07] lg:px-10 lg:text-[7.5rem]"
        >
          La Madeleine — Agadir
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pb-8 pt-12 lg:px-10">
        <div className="grid flex-1 grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr] lg:gap-10">
          <div>
            <Link href="/" className="flex items-center gap-4">
              <span className="relative block h-14 w-14 overflow-hidden rounded-full ring-1 ring-cream/15">
                <Image
                  src="/images/logo.webp"
                  alt="La Madeleine Agadir"
                  fill
                  className="object-cover"
                />
              </span>
              <span>
                <span className="block font-serif text-3xl tracking-wide text-cream">
                  La Madeleine
                </span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
                  Agadir · Depuis 2019
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-cream/55">
              Pâtisserie, boulangerie et café. Le goût du fait maison, célébré
              chaque jour depuis 2019.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com/lamadeleine.agadir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-[11px] font-bold tracking-wider transition-all hover:border-primary hover:text-primary"
              >
                IG
              </a>
              <a
                href="https://facebook.com/lamadeleine.agadir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-[11px] font-bold tracking-wider transition-all hover:border-primary hover:text-primary"
              >
                FB
              </a>
              <a
                href="https://maps.app.goo.gl/Z5memQUhJrBtShyx7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 transition-all hover:border-primary hover:text-primary"
                aria-label="Google Maps"
              >
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <nav aria-label="Pages">
            <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-cream/40">
              Maison
            </h4>
            <ul className="space-y-3">
              {NAV.slice(0, 4).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-[14px] transition-colors hover:text-primary"
                  >
                    <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Aide">
            <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-cream/40">
              Explorer
            </h4>
            <ul className="space-y-3">
              {NAV.slice(4).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-[14px] transition-colors hover:text-primary"
                  >
                    <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-[13px] text-cream/45 transition-colors hover:text-primary"
                >
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-[13px] text-cream/45 transition-colors hover:text-primary"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-cream/40">
              Nous trouver
            </h4>
            <ul className="space-y-4 text-[14px]">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                Av. Al Oulfa, Tilila,
                <br />
                Agadir 80000
              </li>
              <li>
                <a
                  href="tel:0528264344"
                  className="flex items-center gap-3 transition-colors hover:text-primary"
                >
                  <Phone size={16} className="shrink-0 text-primary" />
                  05 28 26 43 44
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@lamadeleine.ma"
                  className="flex items-center gap-3 transition-colors hover:text-primary"
                >
                  <Mail size={16} className="shrink-0 text-primary" />
                  contact@lamadeleine.ma
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="shrink-0 text-primary" />
                Lun — Dim · 6h00 — 22h00
              </li>
            </ul>
            <Link
              href="/menu"
              className="btn-gold mt-6 !px-6 !py-3 text-[11px]"
            >
              Commander
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 md:flex-row">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} La Madeleine Agadir. Tous droits
            réservés.
          </p>
          <p className="font-script text-xl text-primary/80">
            Le goût du fait maison
          </p>
        </div>
      </div>
    </footer>
  );
}
