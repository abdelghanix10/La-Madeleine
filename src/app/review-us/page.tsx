import type { Metadata } from "next";
import BackToTop from "@/components/layout/BackToTop";
import { PageHero } from "@/components/ui/PageHero";
import GoogleReviewCta from "@/components/review-us/GoogleReviewCta";
import ReviewForm from "@/components/ReviewForm";

export const metadata: Metadata = {
  title: "Avis clients",
  description:
    "Votre avis compte : laissez-nous un avis sur Google ou partagez vos remarques avec l'équipe de La Madeleine Agadir.",
  openGraph: {
    title: "Avis clients | La Madeleine Agadir",
    description:
      "Un avis sur Google ou quelques mots via notre formulaire — chaque retour nous aide à mieux vous servir.",
  },
};

export default function ReviewUsPage() {
  return (
    <>
      <main className="relative z-10 bg-ivory lg:mb-[var(--footer-h,60vh)]">
        <PageHero variant="review" />
        <GoogleReviewCta />
        <ReviewForm />
      </main>
      <BackToTop />
    </>
  );
}
