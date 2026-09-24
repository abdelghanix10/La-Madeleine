import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import HomeHero from "@/components/home/HomeHero";
import HomeIntro from "@/components/home/HomeIntro";
import HomeStats from "@/components/home/HomeStats";
import HomeSignatures from "@/components/home/HomeSignatures";
import HomeSpecialties from "@/components/home/HomeSpecialties";
import BakeryStory from "@/components/home/BakeryStory";
import HomeStoryPreview from "@/components/home/HomeStory";
import HomeTestimonials from "@/components/home/Testimonials";
import ShowcaseBanner from "@/components/home/ShowcaseBanner";
import InstagramGallery from "@/components/home/InstagramGallery";
import FinalCTA from "@/components/home/FinalCTA";
import Locations from "@/components/home/Locations";
import CoffeeMenuPreview from "@/components/home/CoffeeMenuPreview";

export const metadata: Metadata = {
  title: "Accueil — Le goût du fait maison",
  description:
    "Depuis 2018, La Madeleine célèbre la pâtisserie, le café et les saveurs qui rassemblent. Viennoiseries, pâtisseries et café de spécialité à Agadir.",
  openGraph: {
    title: "La Madeleine Agadir — Le goût du fait maison",
    description:
      "Depuis 2018, La Madeleine célèbre la pâtisserie, le café et les saveurs qui rassemblent.",
    images: [
      {
        url: "/images/background/bg-pastries.webp",
        width: 1200,
        height: 630,
        alt: "La Madeleine Agadir",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <main className="relative z-10 bg-ivory lg:mb-[var(--footer-h,60vh)]">
        <HomeHero />
        <HomeIntro />
        <HomeSpecialties />
        <CoffeeMenuPreview />
        <HomeSignatures />
        <HomeStats />
        <HomeStoryPreview />
        <BakeryStory />
        <ShowcaseBanner />
        <Locations />
        <HomeTestimonials />
        <InstagramGallery />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
