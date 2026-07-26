"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";

export default function CookiePolicyHero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative h-[50vh] min-h-100 flex items-center bg-dark overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/background/bg-faq.webp')",
        }}
      />
      <div className="absolute inset-0 bg-dark/50" />
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.p
          className="text-primary font-script text-2xl md:text-3xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {t("cookiePolicyEyebrow")}
        </motion.p>
        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream tracking-wide leading-[0.95]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {t("cookiePolicyTitle")}
        </motion.h1>
        <motion.div
          className="w-20 h-0.5 bg-primary mt-8"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        />
      </div>
    </section>
  );
}
