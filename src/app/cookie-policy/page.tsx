import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import CookiePolicyHero from "@/components/cookie-policy/CookiePolicyHero";
import CookiePolicyContent from "@/components/cookie-policy/CookiePolicyContent";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Learn about how La Madeleine uses cookies and similar technologies to enhance your browsing experience.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <main className="relative z-10 lg:mb-[60vh] bg-background">
        <CookiePolicyHero />
        <CookiePolicyContent />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
