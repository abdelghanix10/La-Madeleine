import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import HomeHero from "@/components/home/HomeHero";
import {
  HomeIntro,
  HomeSpecialties,
  HomeSignatures,
  HomeStats,
} from "@/components/home/HomeEditorial";
import BakeryStory, {
  HomeStoryPreview,
  HomeCafesPreview,
  HomeTestimonials,
  HomeSocial,
  HomeFinalCTA,
} from "@/components/home/HomeStory";

export const metadata: Metadata = {
  title: "Accueil — Le goût du fait maison",
  description:
    "Depuis 2019, La Madeleine célèbre la pâtisserie, le café et les saveurs qui rassemblent. Viennoiseries, pâtisseries et café de spécialité à Agadir.",
  openGraph: {
    title: "La Madeleine Agadir — Le goût du fait maison",
    description:
      "Depuis 2019, La Madeleine célèbre la pâtisserie, le café et les saveurs qui rassemblent.",
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
      <main className="relative z-10 bg-ivory lg:mb-[62vh]">
        <HomeHero />
        <HomeIntro />
        <HomeSpecialties />
        <HomeSignatures />
        <HomeStats />
        <HomeStoryPreview />
        <BakeryStory />
        <HomeCafesPreview />
        <HomeTestimonials />
        <HomeSocial />
        <HomeFinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
