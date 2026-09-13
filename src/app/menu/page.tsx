import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import { PageHero } from "@/components/ui/PageHero";
import MenuPremium from "@/components/menu/MenuPremium";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      <main className="relative z-10 bg-ivory lg:mb-[62vh]">
        <PageHero
          variant="menu"
          eyebrow="La carte · Fait maison"
          title={
            <>
              Notre
              <br />
              <span className="italic text-primary">menu</span>
            </>
          }
          description="Des créations préparées chaque jour avec passion. Feuilletés à l'aube, café soyeux, jus pressés à la minute."
          image="/images/background/bg-menu.webp"
          secondaryImage="/images/shop/croissant.webp"
          meta={
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold">
                Commander <ArrowRight size={15} />
              </Link>
              <Link
                href="/shop"
                className="btn-ghost-light"
              >
                Voir la boutique
              </Link>
            </div>
          }
        />
        <MenuPremium />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
