import type { Metadata } from "next";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import FAQHero from "@/components/faq/FAQHero";
import FAQContent from "@/components/faq/FAQContent";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers to common questions about La Madeleine — opening hours, menu options, delivery, catering, and more.",
};

export default function FAQPage() {
  return (
    <>
        <main className="relative z-10 lg:mb-[60vh] bg-background">
          <FAQHero />
          <FAQContent />
        </main>
        <Footer />
        <BackToTop />
    </>
  );
}
