import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import { PageHero } from "@/components/ui/PageHero";
import ShopPremium from "@/components/shop/ShopPremium";

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
      <main className="relative z-10 bg-ivory lg:mb-[var(--footer-h,60vh)]">
        <PageHero variant="shop" image="/images/background/bg-shop.webp" />
        <ShopPremium />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
