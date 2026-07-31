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
    language: "Language",

    // Footer
    quickLinks: "Quick Links",
    support: "Support",
    // Href
    ourStory: "Our Story",
    ourMenu: "Our Menu",
    shopFooter: "Shop",
    locations: "Locations",
    faqFooter: "FAQ",
    contactUsFooter: "Contact Us",
    cookiePolicy: "Cookie Policy",
    privacyPolicy: "Privacy Policy",
    // Copyright
    allRightsReserved: "All rights reserved.",

    // Home
    // Hero
    next: "Next",
    prev: "Previous",
    // Story
    storyEyebrow: "Our Story",
    storyTitleOne: "A Legacy of",
    storyTitleTwo: "Artisanal Passion",
    storyDescription:
      "In 2019, a deep love for traditional baking brought the charm of a classic French salon de thé to the heart of Agadir. Armed with perfected recipes, a commitment to exceptional coffee, and an uncompromising dedication to quality, La Madeline opened its doors to a community that appreciates the finer details.",
    storyDescriptionTwo:
      "Today, we still rise before the sun. We still fold every croissant by hand. We still pair our meticulously crafted pastries with perfectly pulled shots of espresso. Because at La Madeline, creating the perfect café experience isn't about rushing the process — it's about time, precision, and an enduring love for the craft.",
    storySince: "Since",
    storyYears: "Years of Craft",
    storyProducts: "Unique Products",
    storyCustomers: "Happy Customers",
    // Category
    categoryTitle: "Our Specialties",
    categoryEyebrow: "Explore",
    // Coffee
    coffeeEyebrow: "Crafted with Care",
    coffeeTitle: "Our Coffees",
    coffeeDescription:
      "Single-origin beans roasted in-house. Every cup is a journey from farm to flavor.",
    // Instagram
    instagramTitle: "Follow Our Journey",
    instagramEyebrow: "@lamadeleine",
    // Location
    locationTitle: "Visit Us",
    locationEyebrow: "Our Locations",
    getDirections: "Get Directions",
    // Newsletter
    getInTouch: "Get in Touch",
    contactUs: "Contact Us",
    newsletterDescription:
      "We'd love to hear from you. Reach out for reservations, catering inquiries, or just to say bonjour.",
    sendUsAMessage: "Send Us a Message",
    newsletterPhone: "Phone",
    newsletterEmail: "Email",
    newsletterAddress: "Address",
    newsletterHours: "Hours",
    // Testimonials
    testimonialsTitle: "Testimonials",
    testimonialsEyebrow: "What They Say",
    // Today's Specials
    todaysSpecials: "Today's Specials",
    dontMiss: "Don't Miss",

    // Shop
    // Hero
    shopTitle: "Our Shop",
    shopDescription: "Take Home",
    // Content
    all: "All",
    searchProducts: "Search products...",
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
    loadingMore: "Loading more products...",
    loadMore: "Load More Products",
    viewedAll: "You've viewed all products",
    inStock: "In Stock",
    description: "Description",
    price: "Price",

    // Menu
    // Hero
    menuTitle: "Our Menu",
    menuDescription: "Curated Selection",
    // Content
    viewMenuBook: "View Menu PDF",
    breakfastTitle: "Breakfast worth lingering over.",
    breakfastEyebrow: "Morning table",
    breakfastDescription:
      "Hearty plates, warm breads, and classic Moroccan breakfast favorites served to start the day slowly.",
    bakeryTitle: "Bread baked for the center of the table.",
    bakeryEyebrow: "Fresh from the oven",
    bakeryDescription:
      "Loaves, rolls, and rustic favorites with the kind of texture and warmth that make every bite count.",
    pastriesTitle: "Pastries made to pause for.",
    pastriesEyebrow: "Sweet finish",
    pastriesDescription:
      "Flaky, delicate, and layered with cream, fruit, and chocolate for a dessert case that invites a second look.",
    juicesTitle: "Juices with bright, clean flavor.",
    juicesEyebrow: "Fresh pour",
    juicesDescription:
      "Chilled blends and fresh citrus pours that bring a light, refreshing break between richer dishes.",
    coffeesTitle: "Brewed to slow the moment.",
    coffeesEyebrow: "Coffee house",
    coffeesDescription:
      "Explore our espresso drinks, milk-based classics, and rich signature brews crafted for every coffee mood.",
    bookMenuTitle: "La Madeleine Menu",

    // Contact
    // Hero
    getInTouchContact: "Get In Touch",
    contactUsContact: "Contact Us",
    // Content
    phone: "Phone",
    email: "Email",
    address: "Address",
    hours: "Hours",
    sendMessage: "Send Us a Message",
    emailForm: "Your email *",
    name: "Your name *",
    subject: "Subject *",
    message: "Your message *",
    send: "Send Message",
    sending: "Sending...",
    thankYou: "Thank You!",
    yourMessageHasBeenSent:
      "Your message has been sent. We'll get back to you within 24 hours.",

    // About
    // CTA
    comeVisit: "Come Visit",
    tasteTheDifference: "Taste the Difference",
    aboutCTA:
      "Words can only say so much. Visit us, taste our bread, sip our coffee, and experience the warmth of La Madeleine firsthand.",
    findUs: "Find Us",
    // Hero
    ourStoryAbout: "Our Story",
    aboutLaMadeleine: "About La Madeleine",
    // Story
    since: "Since",
    yearsOfExcellence: "Years of Excellence",
    uniqueProducts: "Unique Products",
    satisfiedCustomers: "Satisfied Customers",
    aLegacyOf: "A Legacy of",
    artisanalPassion: "Artisanal Passion",
    storyOne:
      "In 2019, a deep love for traditional baking brought the charm of a classic French salon de thé to the heart of Agadir. Armed with perfected recipes, a commitment to exceptional coffee, and an uncompromising dedication to quality, La Madeline opened its doors to a community that appreciates the finer details.",
    storyTwo:
      "Today, we still rise before the sun. We still fold every croissant by hand. We still pair our meticulously crafted pastries with perfectly pulled shots of espresso. Because at La Madeline, creating the perfect café experience isn't about rushing the process — it's about time, precision, and an enduring love for the craft.",
    // Why Choose
    whyUs: "Why Us",
    theLaMadeleineDifference: "The LaMadeleine Difference",
    finestIngredients: "Finest Ingredients",
    finestIngredientsDescription:
      "We select premium butter, fresh cream, Belgian chocolate, seasonal fruits, and carefully sourced ingredients to create exceptional pastries every day.",
    freshlyCraftedDaily: "Freshly Crafted Daily",
    freshlyCraftedDailyDescription:
      "Every cake, croissant, tart, and dessert is handcrafted each morning to ensure perfect freshness, texture, and flavor.",
    signatureCreations: "Signature Creations",
    signatureCreationsDescription:
      "From elegant entremets to flaky viennoiseries and artisan desserts, each creation is made with precision, creativity, and passion.",
    unforgettableTaste: "Unforgettable Taste",
    unforgettableTasteDescription:
      "Every bite combines refined craftsmanship with premium ingredients, delivering a memorable experience for every celebration and everyday indulgence.",

    // FAQ
    // Hero
    frequentlyAsked: "Frequently Asked",
    questionsAndAnswers: "Questions & Answers",
    // Content
    searchQuestions: "Search questions...",
    noQuestionsFound: "No questions found",

    // Cookie Consent
    cookieConsentTitle: "We Value Your Privacy",
    cookieConsentMessage:
      "We use cookies to enhance your browsing experience. By continuing to use our site, you agree to our",
    accept: "Accept All",
    decline: "Decline",
    and: "and",

    // Privacy Policy
    privacyPolicyTitle: "Privacy Policy",
    privacyPolicyEyebrow: "Legal Information",

    // Cookie Policy
    cookiePolicyTitle: "Cookie Policy",
    cookiePolicyEyebrow: "Legal Information",

    // 404
    notFoundEyebrow: "Error 404",
    notFoundTitle: "Recipe Not Found",
    notFoundDescription:
      "Oops! The page or delicacy you are looking for seems to have been eaten or moved to another oven.",
    notFoundBackHome: "Back to Home",
    notFoundExploreMenu: "Explore Our Menu",
    notFoundQuickLinks: "Or visit one of our popular pages:",
  },

  fr: {
    // Nav
    home: "Accueil",
    menu: "Menu",
    about: "À propos",
    shop: "Boutique",
    contact: "Contact",
    faq: "FAQ",
    language: "Langue",

    // Footer
    quickLinks: "Liens Rapides",
    support: "Assistance",
    // Href
    ourStory: "Notre Histoire",
    ourMenu: "Notre Menu",
    shopFooter: "Boutique",
    locations: "Emplacements",
    faqFooter: "FAQ",
    contactUsFooter: "Contactez-nous",
    cookiePolicy: "Politique des Cookies",
    privacyPolicy: "Politique de Confidentialité",
    // Copyright
    allRightsReserved: "Tous droits réservés.",

    // Home
    // Hero
    next: "Suivant",
    prev: "Précédent",
    // Story
    storyEyebrow: "Notre Histoire",
    storyTitleOne: "Un Héritage de",
    storyTitleTwo: "Passion Artisanale",
    storyDescription:
      "En 2019, un amour profond pour la boulangerie traditionnelle a apporté le charme d'un salon de thé français classique au cœur d'Agadir. Armée de recettes perfectionnées, d'un engagement envers un café exceptionnel et d'un dévouement sans compromis à la qualité, La Madeleine a ouvert ses portes à une communauté qui apprécie les moindres détails.",
    storyDescriptionTwo:
      "Aujourd'hui, nous nous levons toujours avant le soleil. Nous plions toujours chaque croissant à la main. Nous accompagnons toujours nos pâtisseries méticuleusement conçues de doses d'espresso parfaitement tirées. Car chez La Madeleine, créer l'expérience de café parfaite ne consiste pas à précipiter le processus — il s'agit de temps, de précision et d'un amour durable pour l'artisanat.",
    storySince: "Depuis",
    storyYears: "Années d'Artisanat",
    storyProducts: "Produits Uniques",
    storyCustomers: "Clients Satisfaits",
    // Category
    categoryTitle: "Nos Spécialités",
    categoryEyebrow: "Explorer",
    // Coffee
    coffeeEyebrow: "Préparé avec Soin",
    coffeeTitle: "Nos Cafés",
    coffeeDescription:
      "Des grains d'origine unique torréfiés sur place. Chaque tasse est un voyage de la ferme à la saveur.",
    // Instagram
    instagramTitle: "Suivez Notre Aventure",
    instagramEyebrow: "@lamadeleine",
    // Location
    locationTitle: "Rendez-nous Visite",
    locationEyebrow: "Nos Emplacements",
    getDirections: "Obtenir l'itinéraire",
    // Newsletter
    getInTouch: "Restons en Contact",
    contactUs: "Contactez-nous",
    newsletterDescription:
      "Nous serions ravis d'échanger avec vous. Contactez-nous pour des réservations, des demandes de traiteur, ou simplement pour dire bonjour.",
    sendUsAMessage: "Envoyez-nous un Message",
    newsletterPhone: "Téléphone",
    newsletterEmail: "E-mail",
    newsletterAddress: "Adresse",
    newsletterHours: "Horaires",
    // Testimonials
    testimonialsTitle: "Témoignages",
    testimonialsEyebrow: "Ce Qu'ils Disent",
    // Today's Specials
    todaysSpecials: "Spécialités du Jour",
    dontMiss: "À Ne Pas Manquer",

    // Shop
    // Hero
    shopTitle: "Notre Boutique",
    shopDescription: "À Emporter",
    // Content
    all: "Tout",
    searchProducts: "Rechercher des produits...",
    allCategories: "Toutes les Catégories",
    defaultSort: "Par défaut",
    priceAsc: "Prix : Croissant",
    priceDesc: "Prix : Décroissant",
    nameSort: "Nom",
    showing: "Affichage de",
    of: "sur",
    results: "résultats",
    totalAvailable: "total disponible",
    noProductsFound: "Aucun produit trouvé",
    loadingMore: "Chargement de plus de produits...",
    loadMore: "Charger Plus de Produits",
    viewedAll: "Vous avez vu tous les produits",
    inStock: "En Stock",
    description: "Description",
    price: "Prix",

    // Menu
    // Hero
    menuTitle: "Notre Menu",
    menuDescription: "Sélection Soignée",
    // Content
    viewMenuBook: "Voir le Menu PDF",
    breakfastTitle: "Un petit-déjeuner qui vaut la peine de s'attarder.",
    breakfastEyebrow: "Table du matin",
    breakfastDescription:
      "Assiettes copieuses, pains chauds et grands classiques du petit-déjeuner marocain servis pour commencer la journée en douceur.",
    bakeryTitle: "Du pain cuit pour être au centre de la table.",
    bakeryEyebrow: "Sorti du four",
    bakeryDescription:
      "Pains, petits pains et favoris rustiques avec une texture et une chaleur qui font compter chaque bouchée.",
    pastriesTitle: "Des pâtisseries qui invitent à la pause.",
    pastriesEyebrow: "Touche sucrée",
    pastriesDescription:
      "Feuilletées, délicates et superposées de crème, de fruits et de chocolat pour une vitrine de desserts qui invite à y regarder à deux fois.",
    juicesTitle: "Des jus aux saveurs vives et nettes.",
    juicesEyebrow: "Versement frais",
    juicesDescription:
      "Mélanges glacés et agrumes frais qui offrent une pause légère et rafraîchissante entre des plats plus riches.",
    coffeesTitle: "Infusé pour ralentir le moment.",
    coffeesEyebrow: "Maison de café",
    coffeesDescription:
      "Découvrez nos boissons à base d'espresso, nos classiques au lait et nos riches infusions signatures élaborées pour toutes vos envies de café.",
    bookMenuTitle: "Menu La Madeleine",

    // Contact
    // Hero
    getInTouchContact: "Prendre Contact",
    contactUsContact: "Nous Contacter",
    // Content
    phone: "Téléphone",
    email: "E-mail",
    address: "Adresse",
    hours: "Horaires",
    sendMessage: "Envoyez-nous un Message",
    emailForm: "Votre e-mail *",
    name: "Votre nom *",
    subject: "Sujet *",
    message: "Votre message *",
    send: "Envoyer le Message",
    sending: "Envoi en cours...",
    thankYou: "Merci !",
    yourMessageHasBeenSent:
      "Votre message a été envoyé. Nous vous répondrons dans les 24 heures.",

    // About
    // CTA
    comeVisit: "Venez Visiter",
    tasteTheDifference: "Goûtez la Différence",
    aboutCTA:
      "Les mots ne suffisent pas. Rendez-nous visite, goûtez notre pain, savourez notre café et découvrez la chaleur de La Madeleine par vous-même.",
    findUs: "Où Nous Trouver",
    // Hero
    ourStoryAbout: "Notre Histoire",
    aboutLaMadeleine: "À Propos de La Madeleine",
    // Story
    since: "Depuis",
    yearsOfExcellence: "Années d'Excellence",
    uniqueProducts: "Produits Uniques",
    satisfiedCustomers: "Clients Satisfaits",
    aLegacyOf: "Un Héritage de",
    artisanalPassion: "Passion Artisanale",
    storyOne:
      "En 2019, un amour profond pour la boulangerie traditionnelle a apporté le charme d'un salon de thé français classique au cœur d'Agadir. Armée de recettes perfectionnées, d'un engagement envers un café exceptionnel et d'un dévouement sans compromis à la qualité, La Madeleine a ouvert ses portes à une communauté qui apprécie les moindres détails.",
    storyTwo:
      "Aujourd'hui, nous nous levons toujours avant le soleil. Nous plions toujours chaque croissant à la main. Nous accompagnons toujours nos pâtisseries méticuleusement conçues de doses d'espresso parfaitement tirées. Car chez La Madeleine, créer l'expérience de café parfaite ne consiste pas à précipiter le processus — il s'agit de temps, de précision et d'un amour durable pour l'artisanat.",
    // Why Choose
    whyUs: "Pourquoi Nous",
    theLaMadeleineDifference: "La Différence La Madeleine",
    finestIngredients: "Les Meilleurs Ingrédients",
    finestIngredientsDescription:
      "Nous sélectionnons du beurre de qualité supérieure, de la crème fraîche, du chocolat belge, des fruits de saison et des ingrédients soigneusement choisis pour créer des pâtisseries exceptionnelles au quotidien.",
    freshlyCraftedDaily: "Fraîchement Préparé Tous les Jours",
    freshlyCraftedDailyDescription:
      "Chaque gâteau, croissant, tarte et dessert est fabriqué à la main chaque matin pour garantir une fraîcheur, une texture et une saveur parfaites.",
    signatureCreations: "Créations Signatures",
    signatureCreationsDescription:
      "Des entremets élégants aux viennoiseries feuilletées en passant par les desserts artisanaux, chaque création est réalisée avec précision, créativité et passion.",
    unforgettableTaste: "Un Goût Inoubliable",
    unforgettableTasteDescription:
      "Chaque bouchée allie un savoir-faire raffiné à des ingrédients de première qualité, offrant une expérience mémorable pour chaque célébration et pour les petits plaisirs du quotidien.",

    // FAQ
    // Hero
    frequentlyAsked: "Foire Aux Questions",
    questionsAndAnswers: "Questions & Réponses",
    // Content
    searchQuestions: "Rechercher des questions...",
    noQuestionsFound: "Aucune question trouvée",

    // Cookie Consent
    cookieConsentTitle: "Nous Valorisons Votre Vie Privée",
    cookieConsentMessage:
      "Nous utilisons des cookies pour améliorer votre expérience de navigation. En continuant à utiliser notre site, vous acceptez notre",
    accept: "Tout Accepter",
    decline: "Refuser",
    and: "et",

    // Privacy Policy
    privacyPolicyTitle: "Politique de confidentialité",
    privacyPolicyEyebrow: "Informations légales",

    // Cookie Policy
    cookiePolicyTitle: "Politique relative aux cookies",
    cookiePolicyEyebrow: "Informations légales",

    // 404
    notFoundEyebrow: "Erreur 404",
    notFoundTitle: "Recette Introuvable",
    notFoundDescription:
      "Oups ! La page ou la gourmandise que vous cherchez semble avoir été dégustée ou déplacée vers un autre four.",
    notFoundBackHome: "Retour à l'Accueil",
    notFoundExploreMenu: "Découvrir Notre Carte",
    notFoundQuickLinks: "Ou visitez l'une de nos pages populaires :",
  },

  ar: {
    // Nav
    home: "الرئيسية",
    menu: "القائمة",
    about: "من نحن",
    shop: "المتجر",
    contact: "اتصل بنا",
    faq: "الأسئلة الشائعة",
    language: "اللغة",

    // Footer
    quickLinks: "روابط سريعة",
    support: "الدعم",
    // Href
    ourStory: "قصتنا",
    ourMenu: "قائمتنا",
    shopFooter: "المتجر",
    locations: "مواقعنا",
    faqFooter: "الأسئلة الشائعة",
    contactUsFooter: "اتصل بنا",
    cookiePolicy: "سياسة ملفات تعريف الارتباط",
    privacyPolicy: "سياسة الخصوصية",
    // Copyright
    allRightsReserved: "جميع الحقوق محفوظة.",

    // Home
    // Hero
    next: "التالي",
    prev: "السابق",
    // Story
    storyEyebrow: "قصتنا",
    storyTitleOne: "إرث من",
    storyTitleTwo: "الشغف الحرفي",
    storyDescription:
      "في عام 2019، جلب الحب العميق للمخبوزات التقليدية سحر صالون الشاي الفرنسي الكلاسيكي إلى قلب مدينة أكادير. بفضل الوصفات المتقنة، والالتزام بتقديم قهوة استثنائية، والتفاني الذي لا هوادة فيه في الجودة، فتحت لا مادلين أبوابها لمجتمع يقدر أدق التفاصيل.",
    storyDescriptionTwo:
      "اليوم، لا زلنا نستيقظ قبل شروق الشمس. لا زلنا نطوي كل كرواسون يدوياً. ولا زلنا نقدم معجناتنا المصنوعة بدقة مع أكواب إسبريسو مثالية. لأنه في لا مادلين، ابتكار تجربة المقهى المثالية لا يعني التسرع في العملية — بل يتعلق بالوقت، والدقة، والحب الدائم للحرفة.",
    storySince: "منذ",
    storyYears: "سنوات من الحرفة",
    storyProducts: "منتجات فريدة",
    storyCustomers: "عملاء سعداء",
    // Category
    categoryTitle: "تخصصاتنا",
    categoryEyebrow: "استكشف",
    // Coffee
    coffeeEyebrow: "صُنعت بعناية",
    coffeeTitle: "قهوتنا",
    coffeeDescription:
      "حبوب قهوة أحادية المنشأ محمصة محلياً. كل كوب هو رحلة من المزرعة إلى النكهة.",
    // Instagram
    instagramTitle: "تابع رحلتنا",
    instagramEyebrow: "@lamadeleine",
    // Location
    locationTitle: "قم بزيارتنا",
    locationEyebrow: "مواقعنا",
    getDirections: "احصل على الاتجاهات",
    // Newsletter
    getInTouch: "ابق على تواصل",
    contactUs: "اتصل بنا",
    newsletterDescription:
      "نود أن نسمع منك. تواصل معنا للحجوزات، أو استفسارات الحفلات، أو فقط لقول مرحباً.",
    sendUsAMessage: "أرسل لنا رسالة",
    newsletterPhone: "الهاتف",
    newsletterEmail: "البريد الإلكتروني",
    newsletterAddress: "العنوان",
    newsletterHours: "ساعات العمل",
    // Testimonials
    testimonialsTitle: "الآراء",
    testimonialsEyebrow: "ماذا يقولون",
    // Today's Specials
    todaysSpecials: "عروض اليوم",
    dontMiss: "لا تفوت",

    // Shop
    // Hero
    shopTitle: "متجرنا",
    shopDescription: "خذها معك",
    // Content
    all: "الكل",
    searchProducts: "ابحث عن المنتجات...",
    allCategories: "جميع الفئات",
    defaultSort: "الافتراضي",
    priceAsc: "السعر: من الأقل للأعلى",
    priceDesc: "السعر: من الأعلى للأقل",
    nameSort: "الاسم",
    showing: "عرض",
    of: "من",
    results: "نتائج",
    totalAvailable: "الإجمالي المتاح",
    noProductsFound: "لم يتم العثور على منتجات",
    loadingMore: "جاري تحميل المزيد من المنتجات...",
    loadMore: "تحميل المزيد من المنتجات",
    viewedAll: "لقد شاهدت جميع المنتجات",
    inStock: "متوفر في المخزون",
    description: "الوصف",
    price: "السعر",

    // Menu
    // Hero
    menuTitle: "قائمتنا",
    menuDescription: "تشكيلة مختارة",
    // Content
    viewMenuBook: "عرض قائمة PDF",
    breakfastTitle: "فطور يستحق الاستمتاع به طويلاً.",
    breakfastEyebrow: "مائدة الصباح",
    breakfastDescription:
      "أطباق شهية، خبز دافئ، وكلاسيكيات الفطور المغربي لتبدأ يومك بهدوء.",
    bakeryTitle: "خبز مخبوز ليتوسط مائدتك.",
    bakeryEyebrow: "طازج من الفرن",
    bakeryDescription:
      "أرغفة ولفائف كلاسيكية بقوام وحرارة تجعل كل قضمة لا تُنسى.",
    pastriesTitle: "معجنات تستحق التوقف من أجلها.",
    pastriesEyebrow: "لمسة حلوة",
    pastriesDescription:
      "هشة ورقيقة ومحشوة بالكريمة والفواكه والشوكولاتة لواجهة حلويات تخطف الأنظار.",
    juicesTitle: "عصائر بنكهة منعشة وصافية.",
    juicesEyebrow: "مشروب طازج",
    juicesDescription:
      "خلطات مثلجة وعصائر حمضيات طازجة تمنحك استراحة خفيفة ومنعشة بين الأطباق الدسمة.",
    coffeesTitle: "مُحضّرة لتبطئ اللحظة.",
    coffeesEyebrow: "بيت القهوة",
    coffeesDescription:
      "استكشف مشروبات الإسبريسو، والكلاسيكيات بالحليب، والمشروبات المميزة المصممة لتناسب كل أمزجة القهوة.",
    bookMenuTitle: "قائمة لا مادلين",

    // Contact
    // Hero
    getInTouchContact: "ابق على تواصل",
    contactUsContact: "اتصل بنا",
    // Content
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    address: "العنوان",
    hours: "ساعات العمل",
    sendMessage: "أرسل لنا رسالة",
    emailForm: "البريد الإلكتروني *",
    name: "الاسم *",
    subject: "الموضوع *",
    message: "الرسالة *",
    send: "إرسال الرسالة",
    sending: "جاري الإرسال...",
    thankYou: "شكراً لك!",
    yourMessageHasBeenSent: "تم إرسال رسالتك. سنرد عليك في غضون 24 ساعة.",

    // About
    // CTA
    comeVisit: "تفضل بزيارتنا",
    tasteTheDifference: "تذوق الفرق",
    aboutCTA:
      "الكلمات لا تكفي. قم بزيارتنا، تذوق خبزنا، ارتشف قهوتنا، واختبر دفء لا مادلين بنفسك.",
    findUs: "أين تجدنا",
    // Hero
    ourStoryAbout: "قصتنا",
    aboutLaMadeleine: "عن لا مادلين",
    // Story
    since: "منذ",
    yearsOfExcellence: "سنوات من التميز",
    uniqueProducts: "منتجات فريدة",
    satisfiedCustomers: "عملاء راضون",
    aLegacyOf: "إرث من",
    artisanalPassion: "الشغف الحرفي",
    storyOne:
      "في عام 2019، جلب الحب العميق للمخبوزات التقليدية سحر صالون الشاي الفرنسي الكلاسيكي إلى قلب مدينة أكادير. بفضل الوصفات المتقنة، والالتزام بتقديم قهوة استثنائية، والتفاني الذي لا هوادة فيه في الجودة، فتحت لا مادلين أبوابها لمجتمع يقدر أدق التفاصيل.",
    storyTwo:
      "اليوم، لا زلنا نستيقظ قبل شروق الشمس. لا زلنا نطوي كل كرواسون يدوياً. ولا زلنا نقدم معجناتنا المصنوعة بدقة مع أكواب إسبريسو مثالية. لأنه في لا مادلين، ابتكار تجربة المقهى المثالية لا يعني التسرع في العملية — بل يتعلق بالوقت، والدقة، والحب الدائم للحرفة.",
    // Why Choose
    whyUs: "لماذا نحن",
    theLaMadeleineDifference: "اختلاف لا مادلين",
    finestIngredients: "أجود المكونات",
    finestIngredientsDescription:
      "نختار الزبدة الفاخرة، والكريمة الطازجة، والشوكولاتة البلجيكية، والفواكه الموسمية، والمكونات المختارة بعناية لصنع معجنات استثنائية كل يوم.",
    freshlyCraftedDaily: "يُحضر طازجاً كل يوم",
    freshlyCraftedDailyDescription:
      "تُصنع كل كعكة، وكرواسون، وتارت، وحلوى يدوياً كل صباح لضمان الطزاجة، والقوام، والنكهة المثالية.",
    signatureCreations: "إبداعات مميزة",
    signatureCreationsDescription:
      "من الحلويات الأنيقة إلى المخبوزات الهشة والحلويات الحرفية، يُصنع كل إبداع بدقة، وإبداع، وشغف.",
    unforgettableTaste: "طعم لا يُنسى",
    unforgettableTasteDescription:
      "تجمع كل قضمة بين الحرفية الراقية والمكونات الفاخرة، لتقدم تجربة لا تُنسى لكل احتفال ومتعة يومية.",

    // FAQ
    // Hero
    frequentlyAsked: "الأسئلة الشائعة",
    questionsAndAnswers: "أسئلة وأجوبة",
    // Content
    searchQuestions: "البحث في الأسئلة...",
    noQuestionsFound: "لم يتم العثور على أسئلة",

    // Cookie Consent
    cookieConsentTitle: "نحترم خصوصيتك",
    cookieConsentMessage:
      "نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح الخاصة بك. باستخدام موقعنا، أنت توافق على",
    accept: "قبول الكل",
    decline: "رفض",
    and: "و",

    // Privacy Policy
    privacyPolicyTitle: "سياسة الخصوصية",
    privacyPolicyEyebrow: "معلومات قانونية",

    // Cookie Policy
    cookiePolicyTitle: "سياسة ملفات تعريف الارتباط",
    cookiePolicyEyebrow: "معلومات قانونية",

    // 404
    notFoundEyebrow: "خطأ 404",
    notFoundTitle: "الوصفة غير موجودة",
    notFoundDescription:
      "عذراً! يبدو أن الصفحة أو الحلوى التي تبحث عنها قد أُكلت أو نُقلت إلى فرن آخر.",
    notFoundBackHome: "العودة إلى الرئيسية",
    notFoundExploreMenu: "استكشف قائمتنا",
    notFoundQuickLinks: "أو قم بزيارة إحدى صفحة من صفحاتنا الشائعة:",
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
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved =
      typeof window !== "undefined"
        ? (localStorage.getItem("lamadeleine_lang") as Language)
        : null;
    return saved && (saved === "en" || saved === "fr" || saved === "ar")
      ? saved
      : "fr";
  });

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
