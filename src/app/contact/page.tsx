import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import { PageHero } from "@/components/ui/PageHero";
import ContactPremium from "@/components/contact/ContactPremium";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlons-nous. Téléphone, email, adresse et horaires — contactez La Madeleine Agadir, réponse sous 24h.",
  openGraph: {
    title: "Contact | La Madeleine Agadir",
    description: "Parlons-nous. Tilila, Agadir — 6h00 à 22h00, 7j/7.",
    images: [
      {
        url: "/images/background/bg-contact.webp",
        width: 1200,
        height: 630,
        alt: "Contact — La Madeleine",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <main className="relative z-10 bg-ivory lg:mb-[60vh]">
        <PageHero
          variant="contact"
          eyebrow="Contact · Réponse sous 24h"
          title={
            <>
              Parlons-
              <span className="italic text-primary">nous.</span>
            </>
          }
          description="Commande, devis mariage, question sur la carte — appelez, écrivez ou passez. La porte est grande ouverte."
          image="/images/background/bg-contact.webp"
          meta={
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-[14px] text-cream/75">
              <a
                href="tel:0528264344"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Phone size={15} className="text-primary" /> 05 28 26 43 44
              </a>
              <span>contact@lamadeleine.ma</span>
            </div>
          }
        />
        <ContactPremium />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
