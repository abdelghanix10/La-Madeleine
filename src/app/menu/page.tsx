import type { Metadata } from "next";
import SmoothScroll from "@/components/layout/SmoothScroll";
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
    <>
        <main className="relative z-10 lg:mb-[60vh] bg-background">
          <MenuHero />
          <MenuContent />
        </main>
        <Footer />
        <BackToTop />
    </>
  );
}
