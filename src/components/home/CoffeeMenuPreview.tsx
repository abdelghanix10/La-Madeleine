"use client";

import { motion } from "framer-motion";
import ScrollReveal, {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/ScrollReveal";
import { coffeeMenu } from "@/lib/data";

export default function CoffeeMenuPreview() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="text-primary font-script text-2xl md:text-3xl mb-3">
            Crafted with Care
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark tracking-wide mb-4">
            Our Coffees
          </h2>
          <p className="text-dark/50 max-w-xl mx-auto">
            Single-origin beans roasted in-house. Every cup is a journey from
            farm to flavor.
          </p>
        </ScrollReveal>

        <StaggerChildren className="max-w-4xl mx-auto" staggerDelay={0.08}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
            {coffeeMenu.map((item) => (
              <StaggerItem key={item.id}>
                <motion.div
                  className="flex items-start gap-4 py-6 border-b border-dark/10 group cursor-pointer"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-xl shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-serif text-lg text-dark tracking-wide group-hover:text-primary transition-colors duration-300">
                        {item.name}
                      </h3>
                      <span className="flex-1 border-b border-dotted border-dark/20 mb-1" />
                      <span className="font-serif text-lg text-dark shrink-0">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-sm text-dark/50 mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
