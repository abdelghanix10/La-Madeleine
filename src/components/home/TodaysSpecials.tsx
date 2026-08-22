"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal, {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";

export default function TodaysSpecials() {
  const { data, t } = useLanguage();
  const todaysSpecials = data.todaysSpecials;

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
            {t("dontMiss")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide">
            {t("todaysSpecials")}
          </h2>
        </ScrollReveal>

        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          staggerDelay={0.15}
        >
          {todaysSpecials.map((item) => (
            <StaggerItem key={item.id}>
              <motion.div
                className="group bg-white/[0.03] backdrop-blur-xs border border-white/10 rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-300 shadow-lg flex flex-col h-full"
                whileHover={{ y: -6 }}
              >
                <div className="relative h-64 md:h-72 bg-linear-to-br from-cream/10 to-cream/5 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-all duration-500" />
                  <span className="absolute top-4 left-4 bg-dark/80 backdrop-blur-xs text-primary border border-primary/30 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-medium shadow-xs">
                    {item.category}
                  </span>
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-serif text-2xl text-cream mb-2 tracking-wide group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-cream/60 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                    <span className="font-serif text-2xl text-primary font-semibold">
                      ${item.price.toFixed(2)}
                    </span>
                    <Link
                      href="/menu"
                      className="text-xs uppercase tracking-wider font-medium text-cream/70 group-hover:text-primary transition-colors flex items-center gap-1"
                    >
                      {t("viewMenu")} →
                    </Link>
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
