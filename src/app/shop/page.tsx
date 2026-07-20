import type { Metadata } from "next";
import SmoothScroll from "@/components/layout/SmoothScroll";
import PageTransition from "@/components/animations/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import ShopHero from "@/components/shop/ShopHero";
import ShopContent from "@/components/shop/ShopContent";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse our selection of artisan breads, premium coffee blends, and French pastries available for order at La Madeleine.",
};

export default function ShopPage() {
  return (
    <SmoothScroll>
      <PageTransition>
        <Navbar />
        <main className="relative z-10 mb-[60vh] bg-background">
          <ShopHero />
          <ShopContent />
        </main>
        <Footer />
        <BackToTop />
      </PageTransition>
    </SmoothScroll>
  );
}
