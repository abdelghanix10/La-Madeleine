"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  UtensilsCrossed,
  ShoppingBag,
  Info,
  Mail,
  HelpCircle,
  ArrowLeft,
  ArrowRight,
  Compass,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

export default function NotFoundContent() {
  const { t, dir } = useLanguage();
  const isRtl = dir === "rtl";

  const quickLinks = [
    { href: "/", label: t("home"), icon: Home, desc: "Return to main page" },
    { href: "/menu", label: t("menu"), icon: UtensilsCrossed, desc: "Explore our creations" },
    { href: "/shop", label: t("shop"), icon: ShoppingBag, desc: "Take home delicacies" },
    { href: "/about", label: t("about"), icon: Info, desc: "Our French heritage" },
    { href: "/contact", label: t("contact"), icon: Mail, desc: "Get in touch with us" },
    { href: "/faq", label: t("faq"), icon: HelpCircle, desc: "Frequently asked questions" },
  ];

  return (
    <section className="relative min-h-[90vh] pt-32 pb-24 flex items-center justify-center overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-dark/5 rounded-full blur-2xl" />
        
        {/* Subtle decorative grid/lines */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#c89a2b_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="container relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Animated Badge & Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="relative mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-dashed border-primary/30"
            />
            <div className="w-24 h-24 rounded-full bg-cream shadow-inner border border-primary/20 flex items-center justify-center relative z-10">
              <span className="font-serif text-3xl font-bold text-primary tracking-wider">
                404
              </span>
            </div>
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 bg-primary text-cream p-1.5 rounded-full shadow-md z-20"
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
          </div>

          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-3">
            {t("notFoundEyebrow")}
          </span>
        </motion.div>

        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-4 tracking-tight leading-tight">
            {t("notFoundTitle")}
          </h1>
          <p className="text-base sm:text-lg text-text/80 max-w-xl mx-auto leading-relaxed font-sans">
            {t("notFoundDescription")}
          </p>
        </motion.div>

        {/* Main CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-cream font-medium text-sm tracking-wide shadow-lg shadow-primary/25 hover:bg-primary-light transition-all duration-300 transform hover:-translate-y-0.5"
          >
            {isRtl ? (
              <>
                <span>{t("notFoundBackHome")}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            ) : (
              <>
                <ArrowLeft className="w-4 h-4" />
                <span>{t("notFoundBackHome")}</span>
              </>
            )}
          </Link>

          <Link
            href="/menu"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-primary/40 bg-white/60 backdrop-blur-sm text-dark font-medium text-sm tracking-wide hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            <UtensilsCrossed className="w-4 h-4 text-primary" />
            <span>{t("notFoundExploreMenu")}</span>
          </Link>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-primary/15 pt-12"
        >
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-text/60 uppercase mb-8">
            <Compass className="w-4 h-4 text-primary" />
            <span>{t("notFoundQuickLinks")}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {quickLinks.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 + idx * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="group flex flex-col items-center p-5 rounded-2xl bg-white/80 border border-primary/10 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1 text-center h-full"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cream group-hover:bg-primary group-hover:text-cream text-primary flex items-center justify-center mb-3 transition-colors duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-serif font-semibold text-dark text-base group-hover:text-primary transition-colors duration-300">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
