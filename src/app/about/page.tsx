import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutWhyChoose from "@/components/about/AboutWhyChoose";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story behind La Boulangerie La Madeleine — three decades of French artisan baking tradition in the heart of Paris.",
};

export default function AboutPage() {
  return (
    <>
        <main className="relative z-10 lg:mb-[60vh] bg-background">
          <AboutHero />
          <AboutStory />
          <AboutWhyChoose />
          <AboutCTA />
        </main>
        <Footer />
        <BackToTop />
    </>
  );
}
