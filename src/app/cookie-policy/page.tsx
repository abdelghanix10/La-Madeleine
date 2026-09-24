import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import CookiePolicyHero from "@/components/cookie-policy/CookiePolicyHero";
import CookiePolicyContent from "@/components/cookie-policy/CookiePolicyContent";

export const metadata: Metadata = {
  title: "Politique cookies",
  description:
    "Comment La Madeleine Agadir utilise les cookies pour améliorer votre visite. Essentiels uniquement.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <main className="relative z-10 bg-ivory lg:mb-[var(--footer-h,60vh)]">
        <CookiePolicyHero />
        <CookiePolicyContent />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
