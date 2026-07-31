import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import NotFoundContent from "@/components/not-found/NotFoundContent";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description:
    "The page or delicacy you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <main className="relative z-10 lg:mb-[60vh] bg-background min-h-screen flex flex-col justify-between">
        <NotFoundContent />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
