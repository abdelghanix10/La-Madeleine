"use client";

import { motion } from "framer-motion";
import ScrollReveal, {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/ScrollReveal";

const team = [
  {
    name: "Élise Moreau",
    role: "Creative Director",
    description: "Pierre's daughter, carrying the family legacy with modern vision.",
  },
  {
    name: "Pierre Moreau",
    role: "Founder & Master Baker",
    description: "Four generations of baking tradition in his hands.",
  },
  {
    name: "Lucas Bernard",
    role: "Head Barista",
    description: "Specialty coffee expert, latte art champion.",
  },
  {
    name: "Amélie Fontaine",
    role: "Pastry Chef",
    description: "Trained at Le Cordon Bleu, specializing in French pâtisserie.",
  },
];

export default function AboutTeam() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="text-primary font-script text-2xl md:text-3xl mb-3">The People</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark tracking-wide">
            Our Team
          </h2>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <motion.div
                className="group text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square bg-cream mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-5xl text-dark/10 group-hover:text-primary/20 transition-colors duration-500">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
                <h3 className="font-serif text-xl text-dark">{member.name}</h3>
                <p className="text-primary text-xs tracking-[0.2em] uppercase mt-1 mb-3">
                  {member.role}
                </p>
                <p className="text-dark/50 text-sm">{member.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
