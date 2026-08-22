"use client";

import { motion } from "framer-motion";
import { Coffee, Milk, Wine, Cookie, Droplets, Sparkles } from "lucide-react";
import ScrollReveal, {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";

const iconMap: Record<string, React.ElementType> = {
  Coffee,
  Milk,
  Wine,
  Cookie,
  Droplets,
  Sparkles,
};

export default function CoffeeMenuPreview() {
  const { data, t } = useLanguage();
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="text-primary font-script text-2xl md:text-3xl mb-3">
            {t("coffeeEyebrow")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark tracking-wide mb-4">
            {t("coffeeTitle")}
          </h2>
          <p className="text-dark/50 max-w-xl mx-auto">
            {t("coffeeDescription")}
          </p>
        </ScrollReveal>

        <StaggerChildren className="max-w-4xl mx-auto" staggerDelay={0.08}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
            {data.coffeeMenu.map((item) => (
              <StaggerItem key={item.id}>
                <motion.div
                  className="flex items-center gap-4 py-4 px-3 rounded-2xl hover:bg-cream/50 border-b border-dark/6 group cursor-pointer transition-all duration-200"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center shrink-0 group-hover:ring-2 group-hover:ring-primary/40 transition-all duration-300 shadow-xs">
                    {(() => {
                      const IconComponent = iconMap[item.icon] || Coffee;
                      return <IconComponent className="w-5 h-5 text-primary" />;
                    })()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-serif text-lg text-dark tracking-wide group-hover:text-primary transition-colors duration-200 truncate">
                        {item.name}
                      </h3>
                      <span className="flex-1 border-b border-dotted border-dark/20 mb-1" />
                      <span className="font-serif text-sm font-semibold text-primary shrink-0 bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-dark/55 text-xs mt-0.5 line-clamp-1 leading-relaxed font-sans">
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
