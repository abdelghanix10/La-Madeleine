import dynamic from "next/dynamic";
import SmoothScroll from "@/components/layout/SmoothScroll";
import LoadingWrapper from "@/components/layout/LoadingWrapper";
import PageTransition from "@/components/animations/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import TodaysSpecials from "@/components/home/TodaysSpecials";
import CoffeeMenuPreview from "@/components/home/CoffeeMenuPreview";
import BakeryStory from "@/components/home/BakeryStory";
import Testimonials from "@/components/home/Testimonials";
import Locations from "@/components/home/Locations";
import InstagramGallery from "@/components/home/InstagramGallery";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <LoadingWrapper>
      <SmoothScroll>
        <PageTransition>
          <Navbar />
          <main>
            <HeroSection />
            <CategorySection />
            <TodaysSpecials />
            <CoffeeMenuPreview />
            <BakeryStory />
            <Testimonials />
            <Locations />
            <InstagramGallery />
            <Newsletter />
          </main>
          <Footer />
          <BackToTop />
        </PageTransition>
      </SmoothScroll>
    </LoadingWrapper>
  );
}
