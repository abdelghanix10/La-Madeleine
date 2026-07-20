import type { Metadata } from "next";
import SmoothScroll from "@/components/layout/SmoothScroll";
import PageTransition from "@/components/animations/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutWhyChoose from "@/components/about/AboutWhyChoose";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story behind La Boulangerie La Madeleine — three decades of French artisan baking tradition in the heart of Paris.",
};

export default function AboutPage() {
  return (
    <SmoothScroll>
      <PageTransition>
        <Navbar />
        <main>
          <AboutHero />
          <AboutStory />
          <AboutTimeline />
          <AboutWhyChoose />
          <AboutCTA />
        </main>
        <Footer />
        <BackToTop />
      </PageTransition>
    </SmoothScroll>
  );
}
