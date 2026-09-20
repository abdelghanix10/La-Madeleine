import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import { PageHero } from "@/components/ui/PageHero";
import ShopPremium from "@/components/shop/ShopPremium";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "La Boutique",
  description:
    "Pâtisseries, coffrets, viennoiseries et spécialités de saison. Parcourez la boutique La Madeleine Agadir.",
  openGraph: {
    title: "La Boutique | La Madeleine Agadir",
    description:
      "Pâtisseries, coffrets, viennoiseries et spécialités. La boutique gourmande d'Agadir.",
    images: [
      {
        url: "/images/background/bg-shop.webp",
        width: 1200,
        height: 630,
        alt: "La Boutique — La Madeleine",
      },
    ],
  },
};

export default function ShopPage() {
  return (
    <>
      <main className="relative z-10 bg-ivory lg:mb-[60vh]">
        <PageHero
          variant="shop"
          eyebrow="Boutique · À emporter"
          title={
            <>
              La <span className="italic text-primary-dark">Boutique</span>
            </>
          }
          description="Pâtisseries, coffrets et créations de saison — préparés chaque matin, photographiés avec amour, prêts à emporter."
          image="/images/background/bg-shop.webp"
          meta={
            <p className="text-[12px] uppercase tracking-[0.22em] text-dark/45">
              Retrait sur place · Tilila, Agadir · 6h00 — 22h00
            </p>
          }
        >
          <Link href="/menu" className="btn-primary">
            Voir le menu <ArrowRight size={15} />
          </Link>
          <Link href="/contact" className="btn-ghost">
            Commander
          </Link>
        </PageHero>
        <ShopPremium />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
