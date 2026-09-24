import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import { PageHero } from "@/components/ui/PageHero";
import ContactPremium from "@/components/contact/ContactPremium";

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
      <main className="relative z-10 bg-ivory lg:mb-[var(--footer-h,60vh)]">
        <PageHero
          variant="contact"
          image="/images/background/bg-contact.webp"
        />
        <ContactPremium />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
