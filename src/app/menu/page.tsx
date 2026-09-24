import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import { PageHero } from "@/components/ui/PageHero";
import MenuPremium from "@/components/menu/MenuPremium";

export const metadata: Metadata = {
  title: "Notre menu",
  description:
    "Des créations préparées chaque jour avec passion. Viennoiseries, pâtisseries, salé, café, boissons et jus frais — La Madeleine Agadir.",
  openGraph: {
    title: "Notre menu | La Madeleine Agadir",
    description:
      "Des créations préparées chaque jour avec passion. Viennoiseries, pâtisseries, café et jus frais.",
    images: [
      {
        url: "/images/background/bg-menu.webp",
        width: 1200,
        height: 630,
        alt: "Notre menu — La Madeleine",
      },
    ],
  },
};

export default function MenuPage() {
  return (
    <>
      <main className="relative z-10 bg-ivory lg:mb-[var(--footer-h,60vh)]">
        <PageHero
          variant="menu"
          image="/images/background/bg-menu.webp"
          secondaryImage="/images/shop/croissant.webp"
        />
        <MenuPremium />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
