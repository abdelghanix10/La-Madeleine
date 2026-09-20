import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import PrivacyPolicyHero from "@/components/privacy-policy/PrivacyPolicyHero";
import PrivacyPolicyContent from "@/components/privacy-policy/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment La Madeleine Agadir collecte, utilise et protège vos données personnelles. Simple et transparent.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="relative z-10 bg-ivory lg:mb-[60vh]">
        <PrivacyPolicyHero />
        <PrivacyPolicyContent />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
