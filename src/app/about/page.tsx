import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import { PageHero } from "@/components/ui/PageHero";
import AboutPremium from "@/components/about/AboutPremium";

export const metadata: Metadata = {
  title: "Notre histoire",
  description:
    "Une histoire de passion depuis 2018. Pâtisserie franco-marocaine, savoir-faire artisanal et accueil chaleureux à Agadir.",
  openGraph: {
    title: "Notre histoire | La Madeleine Agadir",
    description:
      "Une histoire de passion depuis 2018. L'atelier, les ingrédients, les valeurs.",
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
      <main className="relative z-10 bg-ivory lg:mb-[var(--footer-h,60vh)]">
        <PageHero variant="about" image="/images/background/bg-story.webp" />
        <AboutPremium />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
