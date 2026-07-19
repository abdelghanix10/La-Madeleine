"use client";

import { motion } from "framer-motion";
function InstagramIcon({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}
import ScrollReveal, {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/ScrollReveal";

const galleryItems = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  color: [
    "from-primary/20 to-cream",
    "from-dark/10 to-cream",
    "from-primary/10 to-cream",
    "from-dark/5 to-primary/10",
    "from-cream to-primary/15",
    "from-primary/5 to-dark/10",
  ][i],
}));

export default function InstagramGallery() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="text-primary font-script text-2xl md:text-3xl mb-3">
            @lamadeleine
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark tracking-wide">
            Follow Our Journey
          </h2>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" staggerDelay={0.08}>
          {galleryItems.map((item) => (
            <StaggerItem key={item.id}>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-square bg-gradient-to-br overflow-hidden group relative"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/60 transition-all duration-500 flex items-center justify-center">
                  <InstagramIcon
                    size={24}
                    className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
