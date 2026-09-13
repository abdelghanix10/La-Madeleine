import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import { PageHero } from "@/components/ui/PageHero";
import CafesPremium from "@/components/cafes/CafesPremium";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nos cafés",
  description:
    "Trouvez votre café La Madeleine à Agadir. Adresses, horaires, itinéraires — Tilila et bientôt le centre-ville.",
  openGraph: {
    title: "Nos cafés | La Madeleine Agadir",
    description: "Adresses, horaires et itinéraires. Trouvez le café le plus proche.",
    images: [
      {
        url: "/images/background/bg-breakfast.webp",
        width: 1200,
        height: 630,
        alt: "Nos cafés — La Madeleine",
      },
    ],
  },
};

export default function CafesPage() {
  return (
    <>
      <main className="relative z-10 bg-ivory lg:mb-[62vh]">
        <PageHero
          variant="cafes"
          eyebrow="Nos cafés · Agadir"
          title={
            <>
              Nos <span className="italic text-primary-dark">cafés</span>
            </>
          }
          description="Une maison à Tilila, une seconde en chemin. Terrasse, salon de thé et vitrine pleine dès 6h00."
          image="/images/background/bg-breakfast.webp"
        >
          <div className="flex flex-wrap gap-4">
            <Link href="/menu" className="btn-primary">
              Voir le menu <ArrowRight size={15} />
            </Link>
            <a
              href="https://maps.app.goo.gl/Z5memQUhJrBtShyx7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Itinéraire →
            </a>
          </div>
        </PageHero>
        <CafesPremium />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
