"use client";

import { motion } from "framer-motion";
import { Leaf, Clock, Heart, Award } from "lucide-react";
import ScrollReveal, {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/ScrollReveal";

const reasons = [
  {
    icon: Leaf,
    title: "Finest Ingredients",
    description: "Stone-milled flour, Normandy butter, wild yeast — we never compromise on quality.",
  },
  {
    icon: Clock,
    title: "72-Hour Ferment",
    description: "Our doughs ferment for three days, developing depth of flavor that quick methods can't achieve.",
  },
  {
    icon: Heart,
    title: "Handcrafted Daily",
    description: "Every croissant is hand-rolled, every baguette scored by hand, every pastry made with devotion.",
  },
  {
    icon: Award,
    title: "Award-Winning",
    description: "Recognized as one of Paris's finest bakeries, with multiple Grand Prix de la Boulangerie awards.",
  },
];

export default function AboutWhyChoose() {
  return (
    <section className="py-24 md:py-32 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2l2 3-2 3zm0-18V0h2v2.5h-2zm0 38v-2h2v-2h-2v2h-2v2h2zM0 22v-2h2v2H0zm0 8v-2h2v2H0z' fill='%23C89A2B' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-primary font-script text-2xl md:text-3xl mb-3">Why Us</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide">
            The La Madeleine Difference
          </h2>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.12}>
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <motion.div
                className="text-center p-6 group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-all duration-500">
                  <reason.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl text-cream mb-3 tracking-wide">
                  {reason.title}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
