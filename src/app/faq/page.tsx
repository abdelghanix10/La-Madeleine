import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import { PageHero } from "@/components/ui/PageHero";
import FaqPremium from "@/components/faq/FaqPremium";

export const metadata: Metadata = {
  title: "Questions fréquentes",
  description:
    "Commande, menu, livraison, nos cafés, produits, paiement — toutes les réponses sur La Madeleine Agadir.",
  openGraph: {
    title: "Questions fréquentes | La Madeleine Agadir",
    description: "Commande, menu, livraison, cafés, produits, paiement.",
  },
};

export default function FAQPage() {
  return (
    <>
      <main className="relative z-10 bg-ivory lg:mb-[60vh]">
        <PageHero variant="faq" />
        <FaqPremium />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
