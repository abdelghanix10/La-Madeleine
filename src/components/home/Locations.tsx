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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.858666837468!2d-9.528228968629396!3d30.402064943861852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c9965a5026d3%3A0x736a8bf5957eefa9!2sCaf%C3%A9%20%26%20P%C3%A2tisserie%20Lamadeleine!5e1!3m2!1sen!2sma!4v1784648271235!5m2!1sen!2sma"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full"
              />
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
