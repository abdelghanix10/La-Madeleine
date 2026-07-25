"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import * as dataEN from "@/lib/data";
import * as dataFR from "@/lib/data-fr";
import * as dataAR from "@/lib/data-ar";

export type Language = "en" | "fr" | "ar";

export const translations = {
  en: {
    // Nav
    home: "Home",
    menu: "Menu",
    about: "About",
    shop: "Shop",
    contact: "Contact",
    faq: "FAQ",
    orderOnline: "Order Online",
    hours: "Hours",
    phone: "Phone",
    address: "Address",
    language: "Language",

    // Shop & Menu
    searchProducts: "Search products...",
    searchMenu: "Search menu items...",
    searchQuestions: "Search questions...",
    all: "All",
    allCategories: "All Categories",
    defaultSort: "Default",
    priceAsc: "Price: Low to High",
    priceDesc: "Price: High to Low",
    nameSort: "Name",
    showing: "Showing",
    of: "of",
    results: "results",
    totalAvailable: "total available",
    noProductsFound: "No products found",
    noMenuItemsMatch: "No menu items match your search.",
    loadingMore: "Loading more products...",
    loadMore: "Load More Products",
    viewedAll: "You've viewed all products",
    inStock: "In Stock",
    description: "Description",
    price: "Price",
    quickView: "Quick View",
    popular: "Popular",
    viewMenuBook: "View Menu PDF",

    // Footer
    quickLinks: "Quick Links",
    support: "Support",
    ourStory: "Our Story",
    ourMenu: "Our Menu",
    locations: "Locations",
    contactUs: "Contact Us",
    cookiePolicy: "Cookie Policy",
    privacyPolicy: "Privacy Policy",
    allRightsReserved: "All rights reserved.",

    // Home / Hero / Specials
    todaysSpecials: "Today's Specials",
    dontMiss: "Don't Miss",
    viewFullMenu: "View Full Menu",
    exploreShop: "Explore Shop",
    ourCategories: "Our Categories",

    // Contact
    getInTouch: "Get In Touch",
    sendMessage: "Send Us a Message",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    send: "Send Message",
    openingHours: "Opening Hours",
    visitUs: "Visit Us",

    // FAQ
    frequentlyAsked: "Frequently Asked Questions",
    haveQuestions: "Have Questions?",
  },
  fr: {
    // Nav
    home: "Accueil",
    menu: "Menu",
    about: "À Propos",
    shop: "Boutique",
    contact: "Contact",
    faq: "FAQ",
    orderOnline: "Commander",
    hours: "Horaires",
    phone: "Téléphone",
    address: "Adresse",
    language: "Langue",

    // Shop & Menu
    searchProducts: "Rechercher des produits...",
    searchMenu: "Rechercher dans le menu...",
    searchQuestions: "Rechercher des questions...",
    all: "Tous",
    allCategories: "Toutes les catégories",
    defaultSort: "Par défaut",
    priceAsc: "Prix : Croissant",
    priceDesc: "Prix : Décroissant",
    nameSort: "Nom",
    showing: "Affichage de",
    of: "sur",
    results: "résultats",
    totalAvailable: "au total disponibles",
    noProductsFound: "Aucun produit trouvé",
    noMenuItemsMatch: "Aucun article ne correspond à votre recherche.",
    loadingMore: "Chargement de plus de produits...",
    loadMore: "Charger plus de produits",
    viewedAll: "Vous avez vu tous les produits",
    inStock: "En stock",
    description: "Description",
    price: "Prix",
    quickView: "Aperçu rapide",
    popular: "Populaire",
    viewMenuBook: "Voir le Menu PDF",

    // Footer
    quickLinks: "Liens Rapides",
    support: "Support",
    ourStory: "Notre Histoire",
    ourMenu: "Notre Menu",
    locations: "Nos Adresses",
    contactUs: "Nous Contacter",
    cookiePolicy: "Politique de cookies",
    privacyPolicy: "Politique de confidentialité",
    allRightsReserved: "Tous droits réservés.",

    // Home / Hero / Specials
    todaysSpecials: "Spécialités du Jour",
    dontMiss: "À Ne Pas Manquer",
    viewFullMenu: "Voir Tout Le Menu",
    exploreShop: "Explorer La Boutique",
    ourCategories: "Nos Catégories",

    // Contact
    getInTouch: "Contactez-nous",
    sendMessage: "Envoyez-nous un message",
    name: "Nom",
    email: "E-mail",
    subject: "Sujet",
    message: "Message",
    send: "Envoyer le message",
    openingHours: "Heures d'ouverture",
    visitUs: "Rendez-nous visite",

    // FAQ
    frequentlyAsked: "Foire Aux Questions",
    haveQuestions: "Des questions ?",
  },
  ar: {
    // Nav
    home: "الرئيسية",
    menu: "القائمة",
    about: "من نحن",
    shop: "المتجر",
    contact: "اتصل بنا",
    faq: "الأسئلة الشائعة",
    orderOnline: "اطلب الآن",
    hours: "أوقات العمل",
    phone: "الهاتف",
    address: "العنوان",
    language: "اللغة",

    // Shop & Menu
    searchProducts: "ابحث عن المنتجات...",
    searchMenu: "ابحث في قائمة الطعام...",
    searchQuestions: "ابحث في الأسئلة...",
    all: "الكل",
    allCategories: "جميع الفئات",
    defaultSort: "افتراضي",
    priceAsc: "السعر: من الأقل للأعلى",
    priceDesc: "السعر: من الأعلى للأقل",
    nameSort: "الاسم",
    showing: "عرض",
    of: "من أصل",
    results: "نتيجة",
    totalAvailable: "إجمالي المتاح",
    noProductsFound: "لم يتم العثور على منتجات",
    noMenuItemsMatch: "لا توجد عناصر تطابق بحثك.",
    loadingMore: "جاري تحميل المزيد من المنتجات...",
    loadMore: "تحميل المزيد من المنتجات",
    viewedAll: "لقد عرضت جميع المنتجات",
    inStock: "متوفر",
    description: "الوصف",
    price: "السعر",
    quickView: "نظرة سريعة",
    popular: "الأكثر طلباً",
    viewMenuBook: "عرض كتاب القائمة PDF",

    // Footer
    quickLinks: "روابط سريعة",
    support: "الدعم والخدمة",
    ourStory: "قصتنا",
    ourMenu: "قائمتنا",
    locations: "فروعنا",
    contactUs: "تواصل معنا",
    cookiePolicy: "سياسة ملفات تعريف الارتباط",
    privacyPolicy: "سياسة الخصوصية",
    allRightsReserved: "جميع الحقوق محفوظة.",

    // Home / Hero / Specials
    todaysSpecials: "عروض اليوم الخاصة",
    dontMiss: "لا تفوتها",
    viewFullMenu: "عرض القائمة الكاملة",
    exploreShop: "تصفح المتجر",
    ourCategories: "فئاتنا",

    // Contact
    getInTouch: "تواصل معنا",
    sendMessage: "أرسل لنا رسالة",
    name: "الاسم",
    email: "البريد الإلكتروني",
    subject: "الموضوع",
    message: "الرسالة",
    send: "إرسال الرسالة",
    openingHours: "ساعات العمل",
    visitUs: "قم بزيارتنا",

    // FAQ
    frequentlyAsked: "الأسئلة الأكثر تكراراً",
    haveQuestions: "لديك أسئلة؟",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: "ltr" | "rtl";
  data: typeof dataEN;
  t: (key: keyof typeof translations.en) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("lamadeleine_lang") as Language;
    if (saved && (saved === "en" || saved === "fr" || saved === "ar")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("lamadeleine_lang", lang);
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language, dir]);

  const data = language === "ar" ? dataAR : language === "fr" ? dataFR : dataEN;

  const t = (key: keyof typeof translations.en): string => {
    return translations[language]?.[key] || translations.en[key] || String(key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, data, t }}>
      <div dir={dir}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
