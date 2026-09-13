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
      <main className="relative z-10 bg-ivory lg:mb-[62vh]">
        <PageHero
          variant="faq"
          eyebrow="Aide · Réponses claires"
          title={
            <>
              Questions
              <br />
              <span className="italic text-primary-dark">fréquentes</span>
            </>
          }
          description="Commande, carte, livraison, cafés, produits, paiement — tout ce que vous nous demandez souvent, au même endroit."
        />
        <FaqPremium />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
