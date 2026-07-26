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
          className="fixed inset-x-0 bottom-0 z-50 p-2.5 sm:p-4 md:p-6 max-w-full"
        >
          <div className="w-full max-w-6xl mx-auto bg-dark/95 border border-cream/10 rounded-xl sm:rounded-2xl shadow-2xl p-3.5 sm:p-5 md:p-6 backdrop-blur-md box-border overflow-hidden">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3.5 sm:gap-5 max-w-full">
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-base sm:text-lg md:text-xl text-cream mb-1 sm:mb-1.5">
                  {t("cookieConsentTitle")}
                </h3>
                <p className="text-cream/70 text-xs sm:text-sm leading-normal sm:leading-relaxed">
                  {t("cookieConsentMessage")}{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors inline"
                  >
                    {t("cookiePolicy")}
                  </Link>{" "}
                  {t("and")}{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors inline"
                  >
                    {t("privacyPolicy")}
                  </Link>
                </p>
              </div>

              <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full md:w-auto shrink-0 min-w-0">
                <button
                  onClick={handleDecline}
                  className="w-full sm:w-auto px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-cream/70 border border-cream/20 rounded-full hover:bg-cream/5 active:scale-95 transition-all duration-300 text-center"
                >
                  {t("decline")}
                </button>
                <button
                  onClick={handleAccept}
                  className="w-full sm:w-auto px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-dark bg-primary rounded-full hover:bg-primary-light active:scale-95 transition-all duration-300 text-center shadow-lg shadow-primary/10"
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
