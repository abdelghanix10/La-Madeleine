import type { Metadata } from "next";
import SmoothScroll from "@/components/layout/SmoothScroll";
import PageTransition from "@/components/animations/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import MenuHero from "@/components/menu/MenuHero";
import MenuContent from "@/components/menu/MenuContent";

export const metadata: Metadata = {
  title: "Our Menu",
  description:
    "Explore our complete menu of artisan pastries, fresh bread, exceptional coffees, and French delicacies at La Madeleine.",
};

export default function MenuPage() {
  return (
    <SmoothScroll>
      <PageTransition>
        <Navbar />
        <main>
          <MenuHero />
          <MenuContent />
        </main>
        <Footer />
        <BackToTop />
      </PageTransition>
    </SmoothScroll>
  );
}
