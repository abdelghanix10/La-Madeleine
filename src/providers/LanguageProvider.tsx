"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import * as dataEN from "@/lib/data";
import * as dataFR from "@/lib/data-fr";
import * as dataAR from "@/lib/data-ar";

export type Language = "en" | "fr" | "ar";

export const translations = {
  en: {
    // About
    // Page Hero
    aboutHeroEyebrow: "Our story · Since",
    aboutHeroTitleLineOne: "A story of",
    aboutHeroTitleLineTwo: "passion.",
    aboutHeroDescription:
      "An oven lit at dawn, expert hands, and Agadir as our muse. This is the house of La Madeleine.",
    aboutHeroCta: "Discover our specialties",
    aboutHeroLocation: "Tilila — Agadir",
    // Premium
    aboutPremiumPhilosophyEyebrow: "Philosophy",
    aboutPremiumPhilosophyTitleLineOne: "Time, touch,",
    aboutPremiumPhilosophyTitleLineTwo: "and matter.",
    aboutPremiumPhilosophyDescription:
      "We rise before the sun so you only have to sit down. Slow fermentation, quality butter, seasonal fruit, and carefully made coffee: luxury, to us, is getting it right.",
    aboutPremiumOvenLabel: "The oven starts",
    aboutPremiumMadeHereLabel: "Made on site",
    aboutPremiumCraftTitle: "Craftsmanship",
    aboutPremiumCraftDescription:
      "Lamination, kneading, roasting — passed down, repeated, perfected.",
    aboutPremiumTimelineEyebrow: "Since 2018",
    aboutPremiumTimelineTitleLineOne: "The evolution",
    aboutPremiumTimelineTitleLineTwo: "of our house.",
    aboutPremiumTimelineTitle1: "The birth of La Madeleine",
    aboutPremiumTimelineText1:
      "A small shopfront in Tilila, an oven that never sleeps, and one conviction: bringing French viennoiserie together with Moroccan hospitality.",
    aboutPremiumTimelineTitle2: "The morning ritual",
    aboutPremiumTimelineText2:
      "The La Madeleine breakfast becomes an institution: steaming hssoua, flaky msemen, freshly pressed orange juice, and silky coffee.",
    aboutPremiumTimelineTitle3: "The workshop grows",
    aboutPremiumTimelineText3:
      "New ovens, new hands, the same standards. The menu expands: almond mille-feuille, argan amlou, and seasonal creations.",
    aboutPremiumTimelineTitle4: "A neighborhood house",
    aboutPremiumTimelineText4:
      "Families, students, travelers: La Madeleine has become Agadir's living room. And every morning, it all starts again at 5:30.",
    aboutPremiumIngredientsEyebrow: "Ingredients",
    aboutPremiumIngredientsTitleLineOne: "Simple ingredients,",
    aboutPremiumIngredientsTitleLineTwo: "chosen obsessively.",
    aboutPremiumIngredient1: "Fine butter",
    aboutPremiumIngredient1Description: "Caramelized laminations",
    aboutPremiumIngredient2: "Amlou & argan",
    aboutPremiumIngredient2Description: "The Souss on the plate",
    aboutPremiumIngredient3: "Seasonal fruit",
    aboutPremiumIngredient3Description: "Juice pressed to order",
    aboutPremiumIngredient4: "Carefully made coffee",
    aboutPremiumIngredient4Description: "Precise extractions",
    aboutPremiumValueTitle1: "Homemade, truly",
    aboutPremiumValueText1:
      "Pastry folded by hand, bread kneaded on site, juice pressed to order. Nothing industrial, ever.",
    aboutPremiumValueTitle2: "Two cultures, one table",
    aboutPremiumValueText2:
      "Fine butter and argan oil, vanilla and orange blossom, baguette and batbout. The French-Moroccan meeting is our signature.",
    aboutPremiumValueTitle3: "Welcome comes first",
    aboutPremiumValueText3:
      "We remember your name, your favorite table, your usual coffee. Here, you are never just a ticket.",
    aboutPremiumCtaScript: "The next chapter is tasted",
    aboutPremiumCtaTitle: "Discover our specialties.",

    // Contact
    // Page Hero
    contactHeroEyebrow: "Get in touch · Reply within 24h",
    contactHeroTitleLineOne: "Let's talk",
    contactHeroTitleLineTwo: " to us.",
    contactHeroDescription:
      "Orders, wedding quotes, or a question about the menu — call, write, or drop by. Our door is always open.",
    contactHeroBadgeTitle: "Handmade",
    contactHeroBadgeText: "Every message is read with care. Reply within 24h.",
    // Premium
    contactPremiumPhoneLabel: "Phone",
    contactPremiumEmailLabel: "Email",
    contactPremiumDirections: "Directions",
    contactPremiumMapTitle: "La Madeleine — map",
    contactPremiumWriteTitle: "Write to us",
    contactPremiumFormTitle: "We'll reply within 24h.",
    contactPremiumSuccessTitle: "Thank you!",
    contactPremiumSuccessMessage:
      "Your message has been prepared. Call us for an immediate reply, or come and see us in Tilila.",
    contactPremiumAnotherMessage: "Send another message",
    contactPremiumNameLabel: "Name *",
    contactPremiumNamePlaceholder: "Your name",
    contactPremiumPhonePlaceholder: "06 XX XX XX XX",
    contactPremiumEmailPlaceholder: "you@example.com",
    contactPremiumSubjectLabel: "Subject *",
    contactPremiumSubjectPlaceholder: "Choose...",
    contactPremiumSubjectOrder: "Order / quote",
    contactPremiumSubjectEvent: "Wedding / event",
    contactPremiumSubjectMenu: "Question about the menu",
    contactPremiumSubjectPartnership: "Partnership",
    contactPremiumSubjectOther: "Other",
    contactPremiumMessageLabel: "Message *",
    contactPremiumMessagePlaceholder:
      "Tell us what you have in mind: date, number of portions, favorite flavors...",
    contactPremiumSend: "Send message",
    contactPremiumSending: "Sending...",
    contactPremiumConsent:
      "By sending this form, you agree to be contacted by La Madeleine. See our privacy policy.",

    // FAQ
    // Page Hero
    faqHeroEyebrow: "Help · Clear answers",
    faqHeroTitleLineOne: "Frequently",
    faqHeroTitleLineTwo: "asked",
    faqHeroDescription:
      "Orders, menu, delivery, coffee, products, payments — everything you often ask us, all in one place.",
    // Premium
    faqSearchPlaceholder: "Search a question... (e.g. delivery, terrace)",
    faqCategoryAll: "All",
    faqCategoryOrder: "Orders",
    faqCategoryMenu: "Menu",
    faqCategoryDelivery: "Delivery",
    faqCategoryCafes: "Our cafes",
    faqCategoryProducts: "Products",
    faqCategoryPayment: "Payment",
    faqQuestion1: "How do I place an order?",
    faqAnswer1:
      "Call us or come directly to Tilila. For large orders such as weddings and events, contact us at least one week in advance through the Contact page.",
    faqQuestion2: "Do you make custom cakes?",
    faqAnswer2:
      "Yes: birthdays, weddings, and corporate events. Send us your idea, number of portions, flavors, and date, and we will prepare a quote within 24 hours.",
    faqQuestion3: "What do you serve in the morning?",
    faqAnswer3:
      "Moroccan and continental breakfasts: hssoua, omelets, msemen, harcha, amlou, fresh orange juice, and coffee. Served from 6am to noon, every day.",
    faqQuestion4: "Do you have vegetarian options?",
    faqAnswer4:
      "Yes. The menu includes omelets, fruit salads, fresh juices, harcha, msemen, amlou, cheeses, and most viennoiseries.",
    faqQuestion5: "Do you deliver in Agadir?",
    faqAnswer5:
      "For now, pickup is preferred to guarantee freshness. Call us and we will prepare your order in advance for express pickup.",
    faqQuestion6: "Do you offer event catering?",
    faqAnswer6:
      "With pleasure: weddings, seminars, and private parties. We offer custom menus, mini viennoiseries, and cocktail pieces with quotes within 24 hours.",
    faqQuestion7: "Where can we find you?",
    faqAnswer7:
      "Av. Al Oulfa, Tilila, Agadir 80000. Open Monday to Sunday, 6am to 10pm. Find a direct route from the cafes page.",
    faqQuestion8: "Is there a terrace? Can I work there?",
    faqAnswer8:
      "Yes: a sunny terrace and a quiet room, perfect for working, reading, or brunching with family.",
    faqQuestion9: "Is everything homemade?",
    faqAnswer9:
      "Yes, 100%: laminated pastry, bread, crepes, and juice pressed to order. Nothing industrial, ever.",
    faqQuestion10: "Do you offer gluten-free or lactose-free products?",
    faqAnswer10:
      "Some creations, such as fruit salads, juices, and amlou, are naturally suitable. Ask us in the shop and we will guide you according to your intolerances.",
    faqQuestion11: "Which payment methods do you accept?",
    faqAnswer11:
      "Cash on site. For large event orders, a deposit may be possible; please discuss it with us directly.",
    faqQuestion12: "Can I reserve a table?",
    faqAnswer12:
      "Reservations are not required: come whenever you like. For groups of eight or more, a quick call helps us keep the best table for you.",
    faqNoResultsTitle: "No answer found",
    faqNoResultsDescription: "Try another keyword, or write to us.",
    faqCtaScript: "Still have a question?",
    faqCtaTitle: "Write to us, we reply quickly.",
    faqCtaButton: "Contact us",

    // Menu
    // Page Hero
    menuHeroEyebrow: "The menu · Homemade",
    menuHeroTitleLineOne: "Our",
    menuHeroTitleLineTwo: "menu",
    menuHeroDescription:
      "Creations prepared every day with passion. Pastries folded at dawn, silky coffee, and juices pressed to order.",
    menuHeroOrderCta: "Order now",
    menuHeroShopCta: "Visit the shop",

    // Shop
    // Page Hero
    shopHeroEyebrow: "Shop · Takeaway",
    shopHeroTitleLineOne: "The",
    shopHeroTitleLineTwo: "shop",
    shopHeroDescription:
      "Pastries, gift boxes, and seasonal creations — prepared every morning, lovingly made, and ready to take away.",
    shopHeroMenuCta: "View the menu",
    shopHeroOrderCta: "Order now",
    shopHeroPickup: "Pickup available · Tilila, Agadir",
    shopHeroCreations: "Artisanal creations",

    // Cookie
    cookiePolicyLegal: "Legal",
    cookiePolicyTitle: "Cookie Policy",
    cookiePolicyHeroDescription:
      "What we store, why we store it, and how to refuse it. Updated: January 2025.",
    cookiePolicyEffectiveDate: "Effective: January 2025",
    cookiePolicyIntro:
      "We use very few cookies, and only what helps your visit. Here are the details, transparently.",
    cookiePolicySectionTitle1: "What is a cookie?",
    cookiePolicySectionText1:
      "A small text file placed on your device to remember preferences, measure visits, and keep the site working properly.",
    cookiePolicySectionTitle2: "What we use",
    cookiePolicySectionText2:
      "Essential cookies for cart, security, and consent. Anonymous audience measurement. Language preference. No intrusive advertising cookies.",
    cookiePolicySectionTitle3: "Third-party cookies",
    cookiePolicySectionText3:
      "Google Maps on the Cafes and Contact pages, plus audience measurement. These services have their own privacy policies.",
    cookiePolicySectionTitle4: "Managing your cookies",
    cookiePolicySectionText4:
      "Refuse or delete cookies through your browser (Chrome, Safari, Firefox: Settings > Privacy). The site remains usable without non-essential cookies.",
    cookiePolicySectionTitle5: "Contact us",
    cookiePolicySectionText5:
      "Have a question? contact@lamadeleine.ma — Av. Al Oulfa, Tilila, Agadir.",
    // Cookie Consent
cookieConsentTitle: "We value your privacy",
    cookieConsentText:
      "We use cookies to enhance your browsing experience. By continuing to use our site, you agree to our",
    cookieConsentAnd: "and",
    cookieConsentAccept: "Accept all",
    cookieConsentDecline: "Decline",
    cookieConsentPolicyLink: "Cookie Policy",
    cookieConsentPrivacyLink: "Privacy Policy",

    // Legal / utility
    legalPageEyebrow: "Legal",
    legalPageTitle: "Privacy Policy",
    legalPageDescription:
      "Simple, readable, without jargon. Last updated: January 2025.",

    // Privacy Policy
    privacyPolicyLegal: "Legal",
    privacyPolicyTitle: "Privacy Policy",
    privacyPolicyEffectiveDate: "Effective: January 2025",
    privacyPolicyIntro:
      "Your privacy matters as much as your breakfast. Here is, simply and clearly, how we handle your data when you visit lamadeleine.ma or get in touch with us.",
    privacyPolicySectionTitle1: "Data we collect",
    privacyPolicySectionText1:
      "Name, email, phone number when you contact us via the contact form. Anonymous browsing data (pages visited, device, browser) to improve the site. No sensitive data is collected.",
    privacyPolicySectionTitle2: "How we use your data",
    privacyPolicySectionText2:
      "Reply to your messages within 24 hours. Prepare your orders and quotes. Improve our menu and customer experience. You will never receive marketing without your explicit consent.",
    privacyPolicySectionTitle3: "Sharing data",
    privacyPolicySectionText3:
      "We do not sell or rent your data. It is only shared with strictly necessary technical providers (hosting), and only if required by law.",
    privacyPolicySectionTitle4: "Retention",
    privacyPolicySectionText4:
      "Messages: up to 3 years. Browsing data: up to 13 months. Once these periods expire, your data is deleted or anonymized.",
    privacyPolicySectionTitle5: "Your rights",
    privacyPolicySectionText5:
      "Access, correction, deletion, objection, portability. Write to contact@lamadeleine.ma — response within 30 days. You may also file a complaint with the CNDP.",
    privacyPolicySectionTitle6: "Security",
    privacyPolicySectionText6:
      "HTTPS encryption, restricted access, regular backups. No system is infallible: in the event of an incident, we will notify you without delay.",
    privacyPolicySectionTitle7: "Contact us",
    privacyPolicySectionText7:
      "La Madeleine Agadir — Av. Al Oulfa, Tilila, Agadir 80000 — contact@lamadeleine.ma — 05 28 26 43 44.",

    // Not Found
    notFoundEyebrow: "The oven is warm, but…",
    notFoundTitleLineOne: "Oops",
    notFoundTitleLineTwo: "...",
    notFoundDescription:
      "This page seems to have vanished before it even left the oven.",
    notFoundHomeCta: "Back to home",
    notFoundMenuCta: "See the menu",

    // Footer
    footerBrandName: "La Madeleine",
    footerBrandSince: "Agadir · Since 2018",
    footerBrandDescription:
      "Artisanal pastry, bakery and café in the heart of Agadir. The taste of homemade food, every day.",
    footerExplore: "Explore",
    footerNavHome: "Home",
    footerNavMenu: "Our products",
    footerNavAbout: "Our story",
    footerNavShop: "Order",
    footerNavContact: "Contact",
    footerOurCafes: "Our cafés",
    footerLocationLabel: "La Madeleine — Tilila",
    footerSeeRoute: "See the route",
    footerHours: "Opening hours",
    footerContact: "Contact",
    footerContactCta: "Contact us",
    footerRights: "All rights reserved",
    footerCookiePolicy: "Cookie Policy",
    footerPrivacyPolicy: "Privacy Policy",
    footerFaq: "FAQ",
    footerTagline: "The taste of homemade",
    footerInstagram: "Instagram",
    footerFacebook: "Facebook",
    footerGoogleMaps: "Google Maps",

    // Navbar
    navbarAddress: "Av. Al Oulfa, Tilila — Agadir",
    navbarHours: "Mon — Sun · 6:00am — 10:00pm",
    navbarBrandTagline: "Agadir · Since 2018",
    navbarOrderCta: "Order",
    navbarFindCafe: "Find a café",
    navbarLanguageLabel: "Language",
    navbarNavigationLabel: "Navigation",
    navbarMenuTagline: "Homemade, every day",
    navbarMobileClose: "Close menu",
    navbarMobileOpen: "Open menu",
  },

  fr: {
    // About
    // Page Hero
    aboutHeroEyebrow: "Notre histoire · Depuis",
    aboutHeroTitleLineOne: "Une histoire",
    aboutHeroTitleLineTwo: "de passion.",
    aboutHeroDescription:
      "Un four allumé à l'aube, des mains expertes, et Agadir comme muse. Voici la maison La Madeleine.",
    aboutHeroCta: "Découvrir nos spécialités",
    aboutHeroLocation: "Tilila — Agadir",
    aboutPremiumPhilosophyEyebrow: "Philosophie",
    aboutPremiumPhilosophyTitleLineOne: "Le temps, le geste,",
    aboutPremiumPhilosophyTitleLineTwo: "la matière.",
    aboutPremiumPhilosophyDescription:
      "Nous nous levons avant le soleil pour que vous n'ayez qu'à vous asseoir. Fermentation lente, beurre de qualité, fruits de saison, café maîtrisé : le luxe, pour nous, c'est la justesse.",
    aboutPremiumOvenLabel: "Le four s'allume",
    aboutPremiumMadeHereLabel: "Fait sur place",
    aboutPremiumCraftTitle: "Savoir-faire",
    aboutPremiumCraftDescription:
      "Feuilletage, pétrissage, torréfaction — transmis, répétés, perfectionnés.",
    aboutPremiumTimelineEyebrow: "Depuis 2018",
    aboutPremiumTimelineTitleLineOne: "L'évolution",
    aboutPremiumTimelineTitleLineTwo: "de la maison.",
    aboutPremiumTimelineTitle1: "La naissance de La Madeleine",
    aboutPremiumTimelineText1:
      "Une petite vitrine à Tilila, un four qui ne dort jamais, et une conviction : marier la viennoiserie française à l'hospitalité marocaine.",
    aboutPremiumTimelineTitle2: "Le rituel du matin",
    aboutPremiumTimelineText2:
      "Le petit-déjeuner La Madeleine devient une institution : hssoua fumante, msemmen feuilleté, jus d'orange pressé, café soyeux.",
    aboutPremiumTimelineTitle3: "L'atelier s'agrandit",
    aboutPremiumTimelineText3:
      "Nouveaux tours, nouvelles mains, même exigence. La carte s'étoffe : mille-feuille aux amandes, amlou à l'argan, créations de saison.",
    aboutPremiumTimelineTitle4: "Une maison de quartier",
    aboutPremiumTimelineText4:
      "Familles, étudiants, voyageurs : La Madeleine est devenue le salon d'Agadir. Et chaque matin, tout recommence à 5h30.",
    aboutPremiumIngredientsEyebrow: "Ingrédients",
    aboutPremiumIngredientsTitleLineOne: "Des matières simples,",
    aboutPremiumIngredientsTitleLineTwo: "choisies avec obsession.",
    aboutPremiumIngredient1: "Beurre fin",
    aboutPremiumIngredient1Description: "Feuilletages caramélisés",
    aboutPremiumIngredient2: "Amlou & argan",
    aboutPremiumIngredient2Description: "Le Souss dans l'assiette",
    aboutPremiumIngredient3: "Fruits de saison",
    aboutPremiumIngredient3Description: "Jus pressés minute",
    aboutPremiumIngredient4: "Café maîtrisé",
    aboutPremiumIngredient4Description: "Extractions précises",
    aboutPremiumValueTitle1: "Le fait maison, vraiment",
    aboutPremiumValueText1:
      "Pâtes feuilletées pliées à la main, pains pétris sur place, jus pressés à la minute. Rien d'industriel, jamais.",
    aboutPremiumValueTitle2: "Deux cultures, une table",
    aboutPremiumValueText2:
      "Beurre fin et huile d'argan, vanille et fleur d'oranger, baguette et batbout. La rencontre franco-marocaine est notre signature.",
    aboutPremiumValueTitle3: "L'accueil avant tout",
    aboutPremiumValueText3:
      "On retient votre prénom, votre table préférée, votre café habituel. Ici, on n'est jamais un simple ticket.",
    aboutPremiumCtaScript: "La suite se goûte",
    aboutPremiumCtaTitle: "Découvrez nos spécialités.",

    // Contact
    // Page Hero
    contactHeroEyebrow: "Prendre contact · Réponse sous 24h",
    contactHeroTitleLineOne: "Parlons-",
    contactHeroTitleLineTwo: "nous.",
    contactHeroDescription:
      "Commande, devis mariage, question sur la carte — appelez, écrivez ou passez. La porte est grande ouverte.",
    contactHeroBadgeTitle: "Fait maison",
    contactHeroBadgeText:
      "Chaque message est lu avec attention. Réponse sous 24h.",
    // Premium
    contactPremiumPhoneLabel: "Téléphone",
    contactPremiumEmailLabel: "Email",
    contactPremiumDirections: "Itinéraire",
    contactPremiumMapTitle: "La Madeleine — carte",
    contactPremiumWriteTitle: "Écrivez-nous",
    contactPremiumFormTitle: "On vous répond sous 24h.",
    contactPremiumSuccessTitle: "Merci !",
    contactPremiumSuccessMessage:
      "Votre message a bien été préparé. Appelez-nous pour une réponse immédiate, ou passez nous voir à Tilila.",
    contactPremiumAnotherMessage: "Envoyer un autre message",
    contactPremiumNameLabel: "Nom *",
    contactPremiumNamePlaceholder: "Votre nom",
    contactPremiumPhonePlaceholder: "06 XX XX XX XX",
    contactPremiumEmailPlaceholder: "vous@exemple.com",
    contactPremiumSubjectLabel: "Sujet *",
    contactPremiumSubjectPlaceholder: "Choisir...",
    contactPremiumSubjectOrder: "Commande / devis",
    contactPremiumSubjectEvent: "Mariage / événement",
    contactPremiumSubjectMenu: "Question sur la carte",
    contactPremiumSubjectPartnership: "Partenariat",
    contactPremiumSubjectOther: "Autre",
    contactPremiumMessageLabel: "Message *",
    contactPremiumMessagePlaceholder:
      "Racontez-nous votre envie : date, nombre de parts, parfums aimés...",
    contactPremiumSend: "Envoyer le message",
    contactPremiumSending: "Envoi...",
    contactPremiumConsent:
      "En envoyant ce formulaire, vous acceptez d'être recontacté par La Madeleine. Voir notre politique de confidentialité.",

    // FAQ
    // Page Hero
    faqHeroEyebrow: "Aide · Réponses claires",
    faqHeroTitleLineOne: "Questions",
    faqHeroTitleLineTwo: "fréquentes",
    faqHeroDescription:
      "Commande, carte, livraison, cafés, produits, paiement — tout ce que vous nous demandez souvent, au même endroit.",
    // Premium
    faqSearchPlaceholder:
      "Rechercher une question... (ex : livraison, terrasse)",
    faqCategoryAll: "Tout",
    faqCategoryOrder: "Commande",
    faqCategoryMenu: "Menu",
    faqCategoryDelivery: "Livraison",
    faqCategoryCafes: "Nos cafés",
    faqCategoryProducts: "Produits",
    faqCategoryPayment: "Paiement",
    faqQuestion1: "Comment passer une commande ?",
    faqAnswer1:
      "Appelez-nous ou passez directement à Tilila. Pour les grandes pièces comme les mariages et événements, contactez-nous au moins une semaine à l'avance via la page Contact.",
    faqQuestion2: "Faites-vous des gâteaux sur mesure ?",
    faqAnswer2:
      "Oui : anniversaires, mariages et événements d'entreprise. Envoyez-nous votre idée, le nombre de parts, les parfums et la date pour recevoir un devis sous 24h.",
    faqQuestion3: "Que proposez-vous le matin ?",
    faqAnswer3:
      "Des petits-déjeuners marocains et continentaux : hssoua, omelettes, msemmen, harcha, amlou, jus d'orange pressé et café. Servis de 6h à 12h, 7j/7.",
    faqQuestion4: "Avez-vous des options végétariennes ?",
    faqAnswer4:
      "Oui, une grande partie de la carte : omelettes, salades de fruits, jus frais, harcha, msemmen, amlou, fromages et la plupart des viennoiseries.",
    faqQuestion5: "Livrez-vous à Agadir ?",
    faqAnswer5:
      "Pour le moment, le retrait sur place est privilégié pour garantir la fraîcheur. Appelez-nous : nous préparons votre commande à l'avance pour un retrait express.",
    faqQuestion6: "Proposez-vous le traiteur événementiel ?",
    faqAnswer6:
      "Avec plaisir : mariages, séminaires et fêtes privées. Formules sur mesure, mini-viennoiseries et pièces cocktail, avec devis sous 24h.",
    faqQuestion7: "Où vous trouver ?",
    faqAnswer7:
      "Av. Al Oulfa, Tilila, Agadir 80000. Ouvert du lundi au dimanche, de 6h à 22h. Itinéraire direct depuis la page Nos cafés.",
    faqQuestion8: "Y a-t-il une terrasse ? Peut-on travailler sur place ?",
    faqAnswer8:
      "Oui : une terrasse ensoleillée et une salle calme, parfaites pour travailler, bouquiner ou bruncher en famille.",
    faqQuestion9: "Tout est-il fait maison ?",
    faqAnswer9:
      "Oui, à 100% : pâtes feuilletées, pains, crêpes et jus pressés minute. Rien d'industriel, jamais.",
    faqQuestion10: "Proposez-vous des produits sans gluten ou sans lactose ?",
    faqAnswer10:
      "Certaines créations, comme les salades de fruits, les jus et l'amlou, conviennent naturellement. Demandez-nous en boutique : nous vous guidons selon vos intolérances.",
    faqQuestion11: "Quels moyens de paiement acceptez-vous ?",
    faqAnswer11:
      "Espèces sur place. Pour les grosses commandes événementielles, un acompte est parfois possible : discutons-en directement.",
    faqQuestion12: "Puis-je réserver une table ?",
    faqAnswer12:
      "Aucune réservation obligatoire : passez quand vous voulez. Pour les groupes de 8 personnes ou plus, un petit appel nous aide à vous garder la meilleure table.",
    faqNoResultsTitle: "Aucune réponse trouvée",
    faqNoResultsDescription: "Essayez un autre mot-clé, ou écrivez-nous.",
    faqCtaScript: "Encore une question ?",
    faqCtaTitle: "Écrivez-nous, on répond vite.",
    faqCtaButton: "Nous contacter",

    // Menu
    // Page Hero
    menuHeroEyebrow: "La carte · Fait maison",
    menuHeroTitleLineOne: "Notre",
    menuHeroTitleLineTwo: "menu",
    menuHeroDescription:
      "Des créations préparées chaque jour avec passion. Feuilletés à l'aube, café soyeux, jus pressés à la minute.",
    menuHeroOrderCta: "Commander",
    menuHeroShopCta: "Voir la boutique",

    // Shop
    // Page Hero
    shopHeroEyebrow: "Boutique · À emporter",
    shopHeroTitleLineOne: "La",
    shopHeroTitleLineTwo: "Boutique",
    shopHeroDescription:
      "Pâtisseries, coffrets et créations de saison — préparés chaque matin, photographiés avec amour, prêts à emporter.",
    shopHeroMenuCta: "Voir le menu",
    shopHeroOrderCta: "Commander",
    shopHeroPickup: "Retrait sur place · Tilila, Agadir",
    shopHeroCreations: "Créations artisanales",

    // Cookie
    cookiePolicyLegal: "Légal",
    cookiePolicyTitle: "Politique cookies",
    cookiePolicyHeroDescription:
      "Ce que nous déposons, pourquoi, et comment le refuser. Mise à jour : janvier 2025.",
    cookiePolicyEffectiveDate: "En vigueur : janvier 2025",
    cookiePolicyIntro:
      "Nous utilisons peu de cookies, et uniquement pour ce qui sert votre visite. Voici le détail, en toute transparence.",
    cookiePolicySectionTitle1: "Ce qu'est un cookie",
    cookiePolicySectionText1:
      "Un petit fichier texte déposé sur votre appareil pour mémoriser vos préférences, mesurer l'audience et faire fonctionner le site correctement.",
    cookiePolicySectionTitle2: "Ce que nous utilisons",
    cookiePolicySectionText2:
      "Cookies essentiels (panier, sécurité, consentement). Mesure d'audience anonymisée. Préférence de langue. Aucun cookie publicitaire intrusif.",
    cookiePolicySectionTitle3: "Cookies tiers",
    cookiePolicySectionText3:
      "Carte Google Maps sur les pages Cafés et Contact, et mesure d'audience. Ces services ont leurs propres politiques de confidentialité.",
    cookiePolicySectionTitle4: "Gérer vos cookies",
    cookiePolicySectionText4:
      "Refusez ou supprimez les cookies depuis votre navigateur (Chrome, Safari, Firefox : Réglages > Confidentialité). Le site reste utilisable sans cookies non essentiels.",
    cookiePolicySectionTitle5: "Nous contacter",
    cookiePolicySectionText5:
      "Une question ? contact@lamadeleine.ma — Av. Al Oulfa, Tilila, Agadir.",
    // Cookie Consent
    cookieConsentTitle: "Votre vie privée compte",
    cookieConsentText:
      "Nous utilisons des cookies pour améliorer votre expérience de navigation. En continuant d'utiliser notre site, vous acceptez notre",
    cookieConsentAnd: "et",
    cookieConsentAccept: "Tout accepter",
    cookieConsentDecline: "Refuser",
    cookieConsentPolicyLink: "Politique cookies",
    cookieConsentPrivacyLink: "Politique de confidentialité",

    // Legal / utility
    legalPageEyebrow: "Légal",
    legalPageTitle: "Politique de confidentialité",
    legalPageDescription:
      "Simple, lisible, sans jargon. Dernière mise à jour : janvier 2025.",

    // Privacy Policy
    privacyPolicyLegal: "Légal",
    privacyPolicyTitle: "Politique de confidentialité",
    privacyPolicyEffectiveDate: "En vigueur : janvier 2025",
    privacyPolicyIntro:
      "Votre vie privée compte autant que votre petit-déjeuner. Voici, simplement et sans jargon, comment nous traitons vos données lorsque vous visitez lamadeleine.ma ou nous écrivez.",
    privacyPolicySectionTitle1: "Données que nous collectons",
    privacyPolicySectionText1:
      "Nom, email, téléphone lorsque vous nous écrivez via le formulaire de contact. Données de navigation anonymisées (pages visitées, appareil, navigateur) pour améliorer le site. Aucune donnée sensible n'est collectée.",
    privacyPolicySectionTitle2: "Utilisation de vos données",
    privacyPolicySectionText2:
      "Répondre à vos messages sous 24h. Préparer vos commandes et devis. Améliorer la carte et l'accueil. Vous ne recevrez jamais de prospection sans votre accord explicite.",
    privacyPolicySectionTitle3: "Partage des données",
    privacyPolicySectionText3:
      "Nous ne vendons ni ne louons vos données. Elles ne sont partagées qu'avec nos prestataires techniques strictement nécessaires (hébergement), et uniquement si la loi l'exige.",
    privacyPolicySectionTitle4: "Conservation",
    privacyPolicySectionText4:
      "Messages : 3 ans maximum. Données de navigation : 13 mois maximum. Passé ces délais, vos données sont supprimées ou anonymisées.",
    privacyPolicySectionTitle5: "Vos droits",
    privacyPolicySectionText5:
      "Accès, rectification, suppression, opposition, portabilité. Écrivez à contact@lamadeleine.ma — réponse sous 30 jours. Réclamation possible auprès de la CNDP.",
    privacyPolicySectionTitle6: "Sécurité",
    privacyPolicySectionText6:
      "Chiffrement HTTPS, accès restreint, sauvegardes régulières. Aucun système n'est infaillible : en cas d'incident, nous vous préviendrons sans délai.",
    privacyPolicySectionTitle7: "Nous contacter",
    privacyPolicySectionText7:
      "La Madeleine Agadir — Av. Al Oulfa, Tilila, Agadir 80000 — contact@lamadeleine.ma — 05 28 26 43 44.",

    // Not Found
    notFoundEyebrow: "Le four est chaud, mais…",
    notFoundTitleLineOne: "Oups",
    notFoundTitleLineTwo: "...",
    notFoundDescription:
      "Cette page semble avoir disparu avant même de sortir du four.",
    notFoundHomeCta: "Retour à l'accueil",
    notFoundMenuCta: "Voir le menu",

    // Footer
    footerBrandName: "La Madeleine",
    footerBrandSince: "Agadir · Depuis 2018",
    footerBrandDescription:
      "Pâtisserie artisanale, boulangerie et café au cœur d'Agadir. Le goût du fait maison, chaque jour.",
    footerExplore: "Explorer",
    footerNavHome: "Accueil",
    footerNavMenu: "Nos produits",
    footerNavAbout: "Notre histoire",
    footerNavShop: "Commander",
    footerNavContact: "Contact",
    footerOurCafes: "Nos cafés",
    footerLocationLabel: "La Madeleine — Tilila",
    footerSeeRoute: "Voir l'itinéraire",
    footerHours: "Horaires",
    footerContact: "Contact",
    footerContactCta: "Nous contacter",
    footerRights: "Tous droits réservés",
    footerCookiePolicy: "Politique cookies",
    footerPrivacyPolicy: "Politique de confidentialité",
    footerFaq: "FAQ",
    footerTagline: "Le goût du fait maison",
    footerInstagram: "Instagram",
    footerFacebook: "Facebook",
    footerGoogleMaps: "Google Maps",

    // Navbar
    navbarAddress: "Av. Al Oulfa, Tilila — Agadir",
    navbarHours: "Lun — Dim · 6h00 — 22h00",
    navbarBrandTagline: "Agadir · Depuis 2018",
    navbarOrderCta: "Commander",
    navbarFindCafe: "Trouver un café",
    navbarLanguageLabel: "Langue",
    navbarNavigationLabel: "Navigation",
    navbarMenuTagline: "Fait maison, chaque jour",
    navbarMobileClose: "Fermer le menu",
    navbarMobileOpen: "Ouvrir le menu",
  },

  ar: {
    // About
    // Page Hero
    aboutHeroEyebrow: "قصتنا · منذ",
    aboutHeroTitleLineOne: "قصة",
    aboutHeroTitleLineTwo: "من الشغف.",
    aboutHeroDescription:
      "فرن يُشعل عند الفجر، وأيدٍ خبيرة، وأكادير مصدر إلهامنا. هذه هي دار لا مادلين.",
    aboutHeroCta: "اكتشف تخصصاتنا",
    aboutHeroLocation: "تيليلا — أكادير",
    aboutPremiumPhilosophyEyebrow: "فلسفتنا",
    aboutPremiumPhilosophyTitleLineOne: "الوقت، اللمسة،",
    aboutPremiumPhilosophyTitleLineTwo: "والمادة.",
    aboutPremiumPhilosophyDescription:
      "نستيقظ قبل الشمس لتكتفي أنت بالجلوس. تخمير بطيء، زبدة عالية الجودة، فواكه موسمية، وقهوة متقنة: الفخامة بالنسبة لنا هي إتقان التفاصيل.",
    aboutPremiumOvenLabel: "يُشعل الفرن",
    aboutPremiumMadeHereLabel: "مصنوع في المكان",
    aboutPremiumCraftTitle: "حرفية",
    aboutPremiumCraftDescription:
      "التوريق، العجن، والتحميص — موروثة ومتكررة ومتقنة.",
    aboutPremiumTimelineEyebrow: "منذ 2018",
    aboutPremiumTimelineTitleLineOne: "تطور",
    aboutPremiumTimelineTitleLineTwo: "دارنا.",
    aboutPremiumTimelineTitle1: "ولادة لا مادلين",
    aboutPremiumTimelineText1:
      "واجهة صغيرة في تيليلا، وفرن لا ينام، وقناعة واحدة: الجمع بين المخبوزات الفرنسية والضيافة المغربية.",
    aboutPremiumTimelineTitle2: "طقوس الصباح",
    aboutPremiumTimelineText2:
      "أصبح فطور لا مادلين تقليداً راسخاً: حسوة ساخنة، مسمن مورق، عصير برتقال طازج، وقهوة ناعمة.",
    aboutPremiumTimelineTitle3: "توسع الورشة",
    aboutPremiumTimelineText3:
      "أفران جديدة، وأيدٍ جديدة، ونفس المعايير. تتوسع القائمة: ميل فوي باللوز، أملو بالأركان، وإبداعات موسمية.",
    aboutPremiumTimelineTitle4: "دار الحي",
    aboutPremiumTimelineText4:
      "العائلات والطلاب والمسافرون: أصبحت لا مادلين صالون أكادير. وكل صباح، يبدأ كل شيء من جديد في الخامسة والنصف.",
    aboutPremiumIngredientsEyebrow: "المكونات",
    aboutPremiumIngredientsTitleLineOne: "مكونات بسيطة،",
    aboutPremiumIngredientsTitleLineTwo: "مختارة بعناية شديدة.",
    aboutPremiumIngredient1: "زبدة فاخرة",
    aboutPremiumIngredient1Description: "عجائن مورقة ومكرملة",
    aboutPremiumIngredient2: "أملو وأركان",
    aboutPremiumIngredient2Description: "منطقة سوس في طبقك",
    aboutPremiumIngredient3: "فواكه موسمية",
    aboutPremiumIngredient3Description: "عصائر طازجة عند الطلب",
    aboutPremiumIngredient4: "قهوة متقنة",
    aboutPremiumIngredient4Description: "استخلاصات دقيقة",
    aboutPremiumValueTitle1: "مصنوع في المنزل حقاً",
    aboutPremiumValueText1:
      "عجائن مورقة تُطوى يدوياً، وخبز يُعجن في المكان، وعصائر طازجة عند الطلب. لا شيء صناعياً، أبداً.",
    aboutPremiumValueTitle2: "ثقافتان، مائدة واحدة",
    aboutPremiumValueText2:
      "زبدة فاخرة وزيت أركان، فانيلا وماء زهر، باغيت وبطبوط. اللقاء الفرنسي المغربي هو توقيعنا.",
    aboutPremiumValueTitle3: "الترحيب أولاً",
    aboutPremiumValueText3:
      "نتذكر اسمك، وطاولتك المفضلة، وقهوتك المعتادة. هنا، لست مجرد طلب.",
    aboutPremiumCtaScript: "الفصل القادم يُذاق",
    aboutPremiumCtaTitle: "اكتشف تخصصاتنا.",

    // Contact
    // Page Hero
    contactHeroEyebrow: "تواصل معنا · الرد خلال 24 ساعة",
    contactHeroTitleLineOne: "لنتحدث",
    contactHeroTitleLineTwo: " معاً.",
    contactHeroDescription:
      "للطلبات أو عروض حفلات الزفاف أو أي سؤال عن القائمة، اتصل بنا أو اكتب إلينا أو زرنا. أبوابنا مفتوحة دائماً.",
    contactHeroBadgeTitle: "مصنوع يدويًا",
    contactHeroBadgeText: "يتم قراءة كل رسالة بعناية. الرد خلال 24 ساعة.",
    // Premium
    contactPremiumPhoneLabel: "الهاتف",
    contactPremiumEmailLabel: "البريد الإلكتروني",
    contactPremiumDirections: "الاتجاهات",
    contactPremiumMapTitle: "لا مادلين — الخريطة",
    contactPremiumWriteTitle: "اكتب إلينا",
    contactPremiumFormTitle: "سنرد عليك خلال 24 ساعة.",
    contactPremiumSuccessTitle: "شكراً لك!",
    contactPremiumSuccessMessage:
      "تم تجهيز رسالتك. اتصل بنا للحصول على رد فوري، أو قم بزيارتنا في تيليلا.",
    contactPremiumAnotherMessage: "إرسال رسالة أخرى",
    contactPremiumNameLabel: "الاسم *",
    contactPremiumNamePlaceholder: "اسمك",
    contactPremiumPhonePlaceholder: "06 XX XX XX XX",
    contactPremiumEmailPlaceholder: "you@example.com",
    contactPremiumSubjectLabel: "الموضوع *",
    contactPremiumSubjectPlaceholder: "اختر...",
    contactPremiumSubjectOrder: "طلب / عرض سعر",
    contactPremiumSubjectEvent: "زفاف / مناسبة",
    contactPremiumSubjectMenu: "سؤال عن القائمة",
    contactPremiumSubjectPartnership: "شراكة",
    contactPremiumSubjectOther: "أخرى",
    contactPremiumMessageLabel: "الرسالة *",
    contactPremiumMessagePlaceholder:
      "أخبرنا بما تفكر فيه: التاريخ، عدد الحصص، والنكهات المفضلة...",
    contactPremiumSend: "إرسال الرسالة",
    contactPremiumSending: "جارٍ الإرسال...",
    contactPremiumConsent:
      "بإرسال هذا النموذج، توافق على أن تتواصل معك لا مادلين. راجع سياسة الخصوصية.",

    // FAQ
    // Page Hero
    faqHeroEyebrow: "مساعدة · إجابات واضحة",
    faqHeroTitleLineOne: "الأسئلة",
    faqHeroTitleLineTwo: "الشائعة",
    faqHeroDescription:
      "الطلبات، القائمة، التوصيل، القهوة، المنتجات، والدفع — كل ما تسألوننا عنه غالباً في مكان واحد.",
    // Premium
    faqSearchPlaceholder: "ابحث عن سؤال... (مثال: التوصيل، التراس)",
    faqCategoryAll: "الكل",
    faqCategoryOrder: "الطلبات",
    faqCategoryMenu: "القائمة",
    faqCategoryDelivery: "التوصيل",
    faqCategoryCafes: "مقاهينا",
    faqCategoryProducts: "المنتجات",
    faqCategoryPayment: "الدفع",
    faqQuestion1: "كيف يمكنني تقديم طلب؟",
    faqAnswer1:
      "اتصلوا بنا أو تفضلوا مباشرة إلى تيليلا. للطلبات الكبيرة مثل الأعراس والمناسبات، تواصلوا معنا قبل أسبوع على الأقل عبر صفحة التواصل.",
    faqQuestion2: "هل تصنعون حلويات حسب الطلب؟",
    faqAnswer2:
      "نعم: أعياد الميلاد والأعراس ومناسبات الشركات. أرسلوا فكرتكم وعدد الحصص والنكهات والتاريخ لتحصلوا على عرض سعر خلال 24 ساعة.",
    faqQuestion3: "ماذا تقدمون في الصباح؟",
    faqAnswer3:
      "فطور مغربي وكونتيننتال: حسوة، عجة، مسمن، حرشة، أملو، عصير برتقال طازج وقهوة. نقدمها من السادسة حتى الظهر، كل يوم.",
    faqQuestion4: "هل لديكم خيارات نباتية؟",
    faqAnswer4:
      "نعم، جزء كبير من القائمة: العجة، سلطات الفواكه، العصائر الطازجة، الحرشة، المسمن، الأملو، الأجبان ومعظم المخبوزات.",
    faqQuestion5: "هل توصلون إلى أكادير؟",
    faqAnswer5:
      "حالياً نفضل الاستلام من المتجر لضمان الطزاجة. اتصلوا بنا لنجهز طلبكم مسبقاً للاستلام السريع.",
    faqQuestion6: "هل تقدمون خدمة تموين المناسبات؟",
    faqAnswer6:
      "بكل سرور: الأعراس والندوات والحفلات الخاصة. نقدم قوائم مخصصة ومخبوزات صغيرة وقطع كوكتيل مع عرض سعر خلال 24 ساعة.",
    faqQuestion7: "أين نجدكم؟",
    faqAnswer7:
      "شارع الألفة، تيليلا، أكادير 80000. مفتوحون من الإثنين إلى الأحد، من السادسة صباحاً حتى العاشرة مساءً. تجدون الاتجاهات في صفحة مقاهينا.",
    faqQuestion8: "هل توجد شرفة؟ وهل يمكن العمل من المكان؟",
    faqAnswer8:
      "نعم: تراس مشمس وقاعة هادئة، مثالية للعمل أو القراءة أو الفطور مع العائلة.",
    faqQuestion9: "هل كل شيء مصنوع في المنزل؟",
    faqAnswer9:
      "نعم، بنسبة 100%: العجائن المورقة والخبز والكريب والعصائر الطازجة. لا شيء صناعياً، أبداً.",
    faqQuestion10: "هل تقدمون منتجات خالية من الغلوتين أو اللاكتوز؟",
    faqAnswer10:
      "بعض الإبداعات مثل سلطات الفواكه والعصائر والأملو مناسبة طبيعياً. اسألونا في المتجر وسنرشدكم حسب حساسيتكم.",
    faqQuestion11: "ما طرق الدفع التي تقبلونها؟",
    faqAnswer11:
      "الدفع نقداً في المكان. للطلبات الكبيرة الخاصة بالمناسبات، يمكن مناقشة دفع عربون معنا مباشرة.",
    faqQuestion12: "هل يمكنني حجز طاولة؟",
    faqAnswer12:
      "لا حاجة للحجز: تفضلوا متى شئتم. للمجموعات التي تضم 8 أشخاص أو أكثر، يساعدنا اتصال سريع على تجهيز أفضل طاولة لكم.",
    faqNoResultsTitle: "لم يتم العثور على إجابة",
    faqNoResultsDescription: "جرب كلمة أخرى أو اكتب إلينا.",
    faqCtaScript: "هل لديك سؤال آخر؟",
    faqCtaTitle: "اكتب إلينا، سنرد بسرعة.",
    faqCtaButton: "اتصل بنا",

    // Menu
    // Page Hero
    menuHeroEyebrow: "القائمة · محضّرة في المنزل",
    menuHeroTitleLineOne: "قائمتنا",
    menuHeroTitleLineTwo: "المميزة",
    menuHeroDescription:
      "إبداعات تُحضّر كل يوم بشغف. معجنات تُطوى عند الفجر، وقهوة ناعمة، وعصائر طازجة عند الطلب.",
    menuHeroOrderCta: "اطلب الآن",
    menuHeroShopCta: "زيارة المتجر",

    // Shop
    // Page Hero
    shopHeroEyebrow: "المتجر · للاستلام",
    shopHeroTitleLineOne: "متجرنا",
    shopHeroTitleLineTwo: "المميز",
    shopHeroDescription:
      "معجنات وعلب هدايا وإبداعات موسمية تُحضّر كل صباح بحب، وجاهزة لأخذها معك.",
    shopHeroMenuCta: "عرض القائمة",
    shopHeroOrderCta: "اطلب الآن",
    shopHeroPickup: "الاستلام من المتجر · تيليلا، أكادير",
    shopHeroCreations: "إبداعات حرفية",

    // Cookie
    cookiePolicyLegal: "قانوني",
    cookiePolicyTitle: "سياسة ملفات تعريف الارتباط",
    cookiePolicyHeroDescription:
      "ما نضعه، ولماذا، وكيفية رفضه. آخر تحديث: يناير 2025.",
    cookiePolicyEffectiveDate: "ساري منذ: يناير 2025",
    cookiePolicyIntro:
      "نستخدم عدداً قليلاً من ملفات تعريف الارتباط، وفقط بما يخدم زيارتك. إليك التفاصيل بكل شفافية.",
    cookiePolicySectionTitle1: "ما هي ملفات تعريف الارتباط؟",
    cookiePolicySectionText1:
      "ملف نصي صغير يُحفظ على جهازك لتذكر تفضيلاتك، وقياس الزيارات، وضمان عمل الموقع بشكل صحيح.",
    cookiePolicySectionTitle2: "ما الذي نستخدمه؟",
    cookiePolicySectionText2:
      "ملفات أساسية للسلة والأمان والموافقة. قياس مجهول للزيارات. تفضيل اللغة. لا نستخدم ملفات إعلانية مزعجة.",
    cookiePolicySectionTitle3: "ملفات تعريف الارتباط التابعة لجهات أخرى",
    cookiePolicySectionText3:
      "خرائط Google في صفحتي المقاهي والتواصل، بالإضافة إلى قياس الزيارات. لهذه الخدمات سياسات خصوصية خاصة بها.",
    cookiePolicySectionTitle4: "إدارة ملفات تعريف الارتباط",
    cookiePolicySectionText4:
      "ارفض أو احذف ملفات تعريف الارتباط من متصفحك (Chrome وSafari وFirefox: الإعدادات > الخصوصية). يظل الموقع قابلاً للاستخدام دون الملفات غير الأساسية.",
    cookiePolicySectionTitle5: "اتصل بنا",
    cookiePolicySectionText5:
      "لديك سؤال؟ contact@lamadeleine.ma — شارع الألفة، تيليلا، أكادير.",
    // Cookie Consent
    cookieConsentTitle: "خصوصيتك مهمة لنا",
    cookieConsentText:
      "نستخدم ملفات تعريف الارتباط لتحسين تجربتك في التصفح. من خلال الاستمرار في استخدام الموقع، فإنك توافق على",
    cookieConsentAnd: "و",
    cookieConsentAccept: "قبول الكل",
    cookieConsentDecline: "رفض",
    cookieConsentPolicyLink: "سياسة ملفات تعريف الارتباط",
    cookieConsentPrivacyLink: "سياسة الخصوصية",

    // Legal / utility
    legalPageEyebrow: "قانوني",
    legalPageTitle: "سياسة الخصوصية",
    legalPageDescription: "بسيط، واضح، بدون تعقيد. آخر تحديث: يناير 2025.",

    // Privacy Policy
    privacyPolicyLegal: "قانوني",
    privacyPolicyTitle: "سياسة الخصوصية",
    privacyPolicyEffectiveDate: "ساري منذ: يناير 2025",
    privacyPolicyIntro:
      "خصوصيتك مهمة بقدر أهمية إفطارتك. إليك، بطريقة بسيطة وواضحة، كيف نتعامل مع بياناتك عندما تزور lamadeleine.ma أو تكتب إلينا.",
    privacyPolicySectionTitle1: "البيانات التي نجمعها",
    privacyPolicySectionText1:
      "الاسم والبريد الإلكتروني والهاتف عندما تكتب إلينا عبر نموذج الاتصال. بيانات التصفح المجهولة (الصفحات التي تمت زيارتها، الجهاز، المتصفح) لتحسين الموقع. لا نقوم بجمع أي بيانات حساسة.",
    privacyPolicySectionTitle2: "استخدام بياناتك",
    privacyPolicySectionText2:
      "الرد على رسائلك خلال 24 ساعة. تجهيز طلباتك وعروض الأسعار. تحسين القائمة وتجربة الاستقبال. لن تتلقى أي ترويج دون موافقتك الصريحة.",
    privacyPolicySectionTitle3: "مشاركة البيانات",
    privacyPolicySectionText3:
      "نحن لا نبيع أو نستأجر بياناتك. ولا نشاركها إلا مع مزودينا التقنيين الضروريين فقط (الاستضافة)، وبالقدر الذي يطلبه القانون.",
    privacyPolicySectionTitle4: "الاحتفاظ بالبيانات",
    privacyPolicySectionText4:
      "الرسائل: حتى 3 سنوات كحد أقصى. بيانات التصفح: حتى 13 شهرًا كحد أقصى. بعد هذه الفترات، يتم حذف بياناتك أو إخفاء هويتها.",
    privacyPolicySectionTitle5: "حقوقك",
    privacyPolicySectionText5:
      "الوصول، التصحيح، الحذف، الاعتراض، النقل. اكتب إلى contact@lamadeleine.ma — رد خلال 30 يومًا. ويمكنك أيضًا تقديم شكوى إلى CNDP.",
    privacyPolicySectionTitle6: "الأمان",
    privacyPolicySectionText6:
      "تشفير HTTPS، وصول مقيد، نسخ احتياطية منتظمة. لا يوجد نظام مثالي: في حال حدوث حادث، سنقوم بإعلامك فورًا.",
    privacyPolicySectionTitle7: "اتصل بنا",
    privacyPolicySectionText7:
      "لا مادلين أكادير — شارع الألفة، تيليلا، أكادير 80000 — contact@lamadeleine.ma — 05 28 26 43 44.",

    // Not Found
    notFoundEyebrow: "الفرن دافئ، لكن…",
    notFoundTitleLineOne: "عذراً",
    notFoundTitleLineTwo: "...",
    notFoundDescription: "يبدو أن هذه الصفحة اختفت قبل أن تخرج من الفرن.",
    notFoundHomeCta: "العودة إلى الصفحة الرئيسية",
    notFoundMenuCta: "عرض القائمة",

    // Footer
    footerBrandName: "لا مادلين",
    footerBrandSince: "أكادير · منذ 2018",
    footerBrandDescription:
      "مخبوزات حرفية، مخبز وقهوة في قلب أكادير. طعم المطبوع منزلياً، كل يوم.",
    footerExplore: "استكشف",
    footerNavHome: "الرئيسية",
    footerNavMenu: "منتجاتنا",
    footerNavAbout: "قصتنا",
    footerNavShop: "اطلب",
    footerNavContact: "تواصل",
    footerOurCafes: "مقاهينا",
    footerLocationLabel: "لا مادلين — تيليلا",
    footerSeeRoute: "عرض الاتجاهات",
    footerHours: "أوقات العمل",
    footerContact: "تواصل",
    footerContactCta: "اتصل بنا",
    footerRights: "جميع الحقوق محفوظة",
    footerCookiePolicy: "سياسة ملفات تعريف الارتباط",
    footerPrivacyPolicy: "سياسة الخصوصية",
    footerFaq: "الأسئلة الشائعة",
    footerTagline: "طعم المصنوع يدويًا",
    footerInstagram: "إنستغرام",
    footerFacebook: "فيسبوك",
    footerGoogleMaps: "خرائط جوجل",

    // Navbar
    navbarAddress: "شارع الألفة، تيليلا — أكادير",
    navbarHours: "الإثنين — الأحد · 6:00 صباحًا — 10:00 مساءً",
    navbarBrandTagline: "أكادير · منذ 2018",
    navbarOrderCta: "اطلب",
    navbarFindCafe: "ابحث عن مقهى",
    navbarLanguageLabel: "اللغة",
    navbarNavigationLabel: "التنقل",
    navbarMenuTagline: "مصنوع يدويًا، كل يوم",
    navbarMobileClose: "إغلاق القائمة",
    navbarMobileOpen: "فتح القائمة",
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
