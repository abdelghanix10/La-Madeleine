"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal, {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/ScrollReveal";
import { todaysSpecials } from "@/lib/data";

export default function TodaysSpecials() {
  return (
    <section className="py-24 md:py-32 bg-dark relative overflow-hidden">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2l2 3-2 3zm0-18V0h2v2.5h-2zm0 38v-2h2v-2h-2v2h-2v2h2zM0 22v-2h2v2H0zm0 8v-2h2v2H0z' fill='%23C89A2B' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-primary font-script text-2xl md:text-3xl mb-3">
            Don&apos;t Miss
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide">
            Today&apos;s Specials
          </h2>
        </ScrollReveal>

        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          staggerDelay={0.15}
        >
          {todaysSpecials.map((item) => (
            <StaggerItem key={item.id}>
              <motion.div
                className="group bg-background/5 backdrop-blur-sm border border-cream/10 overflow-hidden hover:border-primary/30 transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64 md:h-72 bg-linear-to-br from-cream/10 to-cream/5 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-dark/10 group-hover:bg-dark/0 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-6xl text-cream/10 italic group-hover:text-cream/20 transition-all duration-500 group-hover:scale-110 transform">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">
                    {item.category}
                  </p>
                  <h3 className="font-serif text-2xl text-cream mb-3 tracking-wide">
                    {item.name}
                  </h3>
                  <p className="text-cream/50 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl text-primary">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
