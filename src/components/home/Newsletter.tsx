"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";

export default function Newsletter() {
  const { data, t } = useLanguage();

  const contactDetails = [
    {
      icon: Phone,
      label: t("newsletterPhone"),
      value: data.siteConfig.phone,
      href: `tel:${data.siteConfig.phone}`,
    },
    {
      icon: Mail,
      label: t("newsletterEmail"),
      value: data.siteConfig.email,
      href: `mailto:${data.siteConfig.email}`,
    },
    {
      icon: MapPin,
      label: t("newsletterAddress"),
      value: data.siteConfig.address,
      href: "#",
    },
    {
      icon: Clock,
      label: t("newsletterHours"),
      value: Array.isArray(data.siteConfig.hours)
        ? data.siteConfig.hours.map((h) => `${h.day}: ${h.time}`).join(" | ")
        : `${(data.siteConfig.hours as { day: string; time: string }).day}: ${(data.siteConfig.hours as { day: string; time: string }).time}`,
      href: "#",
    },
  ];
  return (
    <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-primary font-script text-2xl md:text-3xl mb-3">
              {t("getInTouch")}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark tracking-wide mb-4">
              {t("contactUs")}
            </h2>
            <p className="text-dark/50 max-w-md mx-auto">
              {t("newsletterDescription")}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactDetails.map((item) => (
              <motion.a
                key={item.label}
                {...(item.href !== "#" && { href: item.href })}
                className="block bg-white p-6 rounded-2xl border border-dark/8 hover:border-primary/40 hover:shadow-lg text-center transition-all duration-300 group shadow-xs h-full flex flex-col items-center"
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
                  <item.icon size={22} className="text-primary" />
                </div>
                <p className="text-dark/40 text-[11px] tracking-[0.2em] uppercase font-semibold mb-1 font-sans">
                  {item.label}
                </p>
                <p className="text-dark font-medium text-sm font-sans mt-auto">{item.value}</p>
              </motion.a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <motion.a
              href="/contact"
              className="inline-block bg-primary text-dark font-semibold px-9 py-4 text-xs tracking-[0.2em] uppercase rounded-full hover:brightness-105 shadow-md shadow-primary/20 transition-all active:scale-95"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t("sendUsAMessage")}
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
