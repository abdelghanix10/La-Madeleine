import type { Metadata } from "next";
import SmoothScroll from "@/components/layout/SmoothScroll";
import PageTransition from "@/components/animations/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import ContactHero from "@/components/contact/ContactHero";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with La Madeleine. Visit us, call us, or send a message — we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <SmoothScroll>
      <PageTransition>
        <Navbar />
        <main className="relative z-10 mb-[60vh] bg-background">
          <ContactHero />
          <ContactContent />
        </main>
        <Footer />
        <BackToTop />
      </PageTransition>
    </SmoothScroll>
  );
}
