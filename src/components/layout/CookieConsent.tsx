"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/providers/LanguageProvider";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("lamadeleine_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("lamadeleine_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("lamadeleine_cookie_consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto bg-dark border border-cream/10 rounded-2xl shadow-2xl p-6 md:p-8 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <h3 className="font-serif text-xl md:text-2xl text-cream mb-2">
                  {t("cookieConsentTitle")}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed">
                  {t("cookieConsentMessage")}{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors"
                  >
                    {t("cookiePolicy")}
                  </Link>{" "}
                  {t("and")}{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors"
                  >
                    {t("privacyPolicy")}
                  </Link>
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <button
                  onClick={handleDecline}
                  className="px-6 py-2.5 text-sm font-medium text-cream/70 border border-cream/20 rounded-full hover:bg-cream/5 transition-colors duration-300"
                >
                  {t("decline")}
                </button>
                <button
                  onClick={handleAccept}
                  className="px-6 py-2.5 text-sm font-medium text-dark bg-primary rounded-full hover:bg-primary-light transition-colors duration-300"
                >
                  {t("accept")}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
