"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";

/**
 * Only the animated text overlay is a client component.
 * The LCP image lives in the parent server component (MenuHero)
 * so it's in the initial HTML without waiting for JS hydration.
 */
export default function MenuHeroText() {
  const { t } = useLanguage();
  return (
    <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
      <motion.p
        className="text-primary font-script text-2xl md:text-3xl mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {t("menuDescription")}
      </motion.p>
      <motion.h1
        className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream tracking-wide leading-[0.95]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {t("menuTitle")}
      </motion.h1>
      <motion.div
        className="w-20 h-0.5 bg-primary mt-8"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      />
    </div>
  );
}
