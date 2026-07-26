import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import PrivacyPolicyHero from "@/components/privacy-policy/PrivacyPolicyHero";
import PrivacyPolicyContent from "@/components/privacy-policy/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Understand how La Madeleine collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="relative z-10 lg:mb-[60vh] bg-background">
        <PrivacyPolicyHero />
        <PrivacyPolicyContent />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
