"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import ScrollReveal, {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/ScrollReveal";
import { locations } from "@/lib/data";

export default function Locations() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="text-primary font-script text-2xl md:text-3xl mb-3">
            Visit Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark tracking-wide">
            Our Locations
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <ScrollReveal className="w-full lg:flex-7">
            <div className="relative h-64 md:h-96 bg-cream overflow-hidden border border-dark/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-primary/40 mx-auto mb-4" />
                  <p className="text-dark/40 text-sm tracking-wider">
                    Interactive Map
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <StaggerChildren
            className="w-full lg:flex-3 flex flex-col gap-8"
            staggerDelay={0.15}
          >
            {locations.map((loc) => (
              <StaggerItem key={loc.id}>
                <motion.div
                  className="bg-cream p-8 md:p-10 border border-dark/5 hover:border-primary/20 transition-all duration-500 group"
                  whileHover={{ y: -4 }}
                >
                  <h3 className="font-serif text-2xl text-dark mb-6 tracking-wide group-hover:text-primary transition-colors duration-300">
                    {loc.name}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 text-dark/60">
                      <MapPin
                        size={18}
                        className="text-primary mt-0.5 shrink-0"
                      />
                      <span className="text-sm">{loc.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-dark/60">
                      <Phone size={18} className="text-primary shrink-0" />
                      <a
                        href={`tel:${loc.phone}`}
                        className="text-sm hover:text-primary transition-colors"
                      >
                        {loc.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-3 text-dark/60">
                      <Clock
                        size={18}
                        className="text-primary mt-0.5 shrink-0"
                      />
                      <span className="text-sm">{loc.hours}</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-dark/5">
                    <a
                      href={loc.mapUrl}
                      className="text-primary text-sm tracking-wider uppercase hover:text-dark transition-colors duration-300 inline-flex items-center gap-2"
                    >
                      Get Directions
                      <span className="w-4 h-px bg-current group-hover:w-6 transition-all duration-300" />
                    </a>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
