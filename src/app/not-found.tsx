import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import NotFoundContent from "@/components/not-found/NotFoundContent";

export const metadata: Metadata = {
  title: "Oups... Page introuvable",
  description:
    "Cette page semble avoir disparu avant même de sortir du four. Retour à l'accueil La Madeleine Agadir.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <main className="relative z-10 flex min-h-screen flex-col justify-between bg-dark lg:mb-[62vh]">
        <NotFoundContent />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
