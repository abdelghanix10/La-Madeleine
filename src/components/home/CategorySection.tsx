"use client";

import { motion } from "framer-motion";
import {
  Sunrise,
  Wheat,
  CakeSlice,
  Coffee,
  Cherry,
  Sandwich,
} from "lucide-react";
import ScrollReveal, {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/ScrollReveal";
import { categories } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  sunrise: <Sunrise size={28} />,
  wheat: <Wheat size={28} />,
  cake: <CakeSlice size={28} />,
  coffee: <Coffee size={28} />,
  cherry: <Cherry size={28} />,
  sandwich: <Sandwich size={28} />,
};

export default function CategorySection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="text-primary font-script text-2xl md:text-3xl mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark tracking-wide">
            Our Specialties
          </h2>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" staggerDelay={0.08}>
          {categories.map((cat) => (
            <StaggerItem key={cat.id}>
              <motion.div
                className="group relative p-6 md:p-8 bg-cream rounded-sm text-center cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-primary border border-transparent"
                whileHover={{ y: -8 }}
              >
                {/* Decorative circle behind icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-dark/5 flex items-center justify-center text-dark group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500">
                  {iconMap[cat.icon] || <Coffee size={28} />}
                </div>
                <h3 className="font-serif text-lg md:text-xl text-dark mb-2 tracking-wide">
                  {cat.name}
                </h3>
                <p className="text-sm text-dark/50 leading-relaxed hidden md:block">
                  {cat.description}
                </p>
                {/* Golden bottom line on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-500" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
