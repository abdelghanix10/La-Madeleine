"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

function InstagramIcon({
  size = 24,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
import ScrollReveal, {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/ScrollReveal";

const galleryItems = [
  {
    id: 1,
    src: "/images/gallery/gallery-1.jpg",
    alt: "Fresh croissants cooling on a tray",
  },
  {
    id: 2,
    src: "/images/gallery/gallery-2.jpg",
    alt: "A tray of assorted pastries being served",
  },
  {
    id: 3,
    src: "/images/gallery/gallery-3.jpg",
    alt: "Chocolate chip cookies beside a coffee cup",
  },
  {
    id: 4,
    src: "/images/gallery/gallery-4.jpg",
    alt: "Two croissants with chocolate drizzle",
  },
  {
    id: 5,
    src: "/images/gallery/gallery-5.jpg",
    alt: "Espresso machine pouring a fresh cup of coffee",
  },
];

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

        <StaggerChildren
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          staggerDelay={0.08}
        >
          {galleryItems.map((item) => (
            <StaggerItem key={item.id}>
              <motion.a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-square bg-linear-to-br overflow-hidden group relative"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-linear-to-br from-dark/10 via-transparent to-dark/20" />
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
