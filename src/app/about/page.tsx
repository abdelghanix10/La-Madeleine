import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import { PageHero } from "@/components/ui/PageHero";
import AboutPremium from "@/components/about/AboutPremium";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Notre histoire",
  description:
    "Une histoire de passion depuis 2019. Pâtisserie franco-marocaine, savoir-faire artisanal et accueil chaleureux à Agadir.",
  openGraph: {
    title: "Notre histoire | La Madeleine Agadir",
    description: "Une histoire de passion depuis 2019. L'atelier, les ingrédients, les valeurs.",
    images: [
      {
        url: "/images/background/bg-story.webp",
        width: 1200,
        height: 630,
        alt: "Notre histoire — La Madeleine",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <main className="relative z-10 bg-ivory lg:mb-[62vh]">
        <PageHero
          variant="about"
          eyebrow="Notre histoire · Depuis 2019"
          title={
            <>
              Une histoire
              <br />
              de <span className="italic text-primary">passion.</span>
            </>
          }
          description="Un four allumé à l'aube, des mains expertes, et Agadir comme muse. Voici la maison La Madeleine."
          image="/images/background/bg-story.webp"
          meta={
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/menu" className="btn-gold">
                Découvrir nos spécialités <ArrowRight size={15} />
              </Link>
              <p className="text-[11px] uppercase tracking-[0.25em] text-cream/55">
                Tilila — Agadir · 6h00 — 22h00
              </p>
            </div>
          }
        />
        <AboutPremium />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
