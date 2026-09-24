"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import * as dataEN from "@/lib/data";
import * as dataFR from "@/lib/data-fr";
import * as dataAR from "@/lib/data-ar";

export type Language = "en" | "fr" | "ar";

export const translations = {
  en: {
    // Home
    // Intro
    homeIntroEyebrow: "Our manifesto",
    homeIntroTitleLineOne: "Much more",
    homeIntroTitleLineTwo: "than a",
    homeIntroTitleEmphasis: "bakery.",
    homeIntroDescription:
      "Handmade pastries, artisanal bread and exceptional coffee — an authentic experience of French and Moroccan bakery since 2018. A house where French tradition meets Moroccan generosity — flaky croissants in the morning, coffee that brings people together in the afternoon.",
    homeIntroLink: "Our story",
    homeIntroYearsLabel: "Years of",
    homeIntroYearsValue: "passion",
    homeIntroImageAlt: "Artisanal breads La Madeleine — flour, fire, and patience",
    homeIntroCoffeeAlt: "Cappuccino — latte art",
    // Hero
    homeHeroGoogleReviewAria: "See our Google reviews — 4.2 out of 5",
    homeHeroGoogleReviewText: "Loved by 80+ guests",
    homeHeroLocation: "Agadir · Since 2018",
    homeHeroCategory: "Pastry · Bakery · Café",
    homeHeroTitleLineOne: "The taste of",
    homeHeroTitleLineTwo: "homemade",
    homeHeroDescription:
      "Since 2018, La Madeleine has celebrated pastry, coffee, and the flavors that bring people together.",
    homeHeroMenuCta: "Discover our menu",
    homeHeroFindCafeCta: "Find a café",
    homeHeroStatCraftLabel: "years of craft",
    homeHeroStatCreationsLabel: "homemade creations",
    homeHeroStatHoursLabel: "6am — 10pm",
    homeHeroHomemadeLabel: "Homemade",
    homeHeroHomemadeSince: "Every day · Since 2018",
    homeHeroPastryImageAlt: "La Madeleine pastries — pain au chocolat",
    homeHeroCroissantImageAlt: "Viennoiseries — after 9pm offer",
    homeHeroSideLabel: "Bakery · Pastry · Café",
    homeHeroMarqueeViennoiseries: "Viennoiseries",
    homeHeroMarqueeMilleFeuille: "Mille-feuille",
    homeHeroMarqueeCoffee: "Specialty coffee",
    homeHeroMarqueeMsemmen: "Msemmen",
    homeHeroMarqueeAmlou: "Amlou",
    homeHeroMarqueePainAuChocolat: "Pain au chocolat",
    homeHeroMarqueeJuices: "Fresh juices",
    // BakeryStory
    bakeryStoryEyebrow: "Our story",
    bakeryStoryTitleLineOne: "A legacy of",
    bakeryStoryTitleEmphasis: "artisanal passion",
    bakeryStoryIntroduction:
      "In 2019, a deep love for traditional baking brought the charm of a classic French salon de thé to the heart of Agadir. Armed with perfected recipes, a commitment to exceptional coffee, and an uncompromising dedication to quality, La Madeleine opened its doors to a community that appreciates the finer details.",
    bakeryStoryTimelineTitle1: "The birth of La Madeleine",
    bakeryStoryTimelineText1:
      "A love of homemade food opens its doors in Tilila, Agadir — an artisanal bakery, salon de thé, and neighborhood café.",
    bakeryStoryTimelineAlt1: "The first La Madeleine shop in Agadir",
    bakeryStoryTimelineTitle2: "A growing passion",
    bakeryStoryTimelineText2:
      "The menu expands: Moroccan breakfasts, French viennoiseries, fresh juices, and specialty coffee.",
    bakeryStoryTimelineAlt2: "Artisanal breads fresh from the oven",
    bakeryStoryTimelineYear3: "Today",
    bakeryStoryTimelineTitle3: "Cafés and shared moments",
    bakeryStoryTimelineText3:
      "Every morning, the same promise: fresh creations, carefully made coffee, and a place to return to.",
    bakeryStoryTimelineAlt3: "La Madeleine brunch table",
    // CoffeeMenuPreview
    coffeeMenuPreviewEyebrow: "Crafted with care",
    coffeeMenuPreviewTitleLineOne: "Our",
    coffeeMenuPreviewTitleEmphasis: "coffees",
    coffeeMenuPreviewDescription:
      "Single-origin beans roasted in-house. Every cup is a journey from farm to flavor.",
    coffeeMenuPreviewCta: "View menu",
    // FinalCTA
    finalCtaAriaLabel: "A little gourmet break?",
    finalCtaDecorativeWord: "gourmet",
    finalCtaEyebrow: "See you soon",
    finalCtaTitleLineOne: "A little",
    finalCtaTitleEmphasis: "gourmet break?",
    finalCtaDescription:
      "Find us in our cafés and discover our specialties — served with a smile, from 6am to 10pm, every day.",
    finalCtaFindCafe: "Find a café",
    finalCtaContact: "Contact us",
    finalCtaAddressLabel: "Address",
    finalCtaHoursLabel: "Opening hours",
    finalCtaDays: "Mon — Sun",
    finalCtaTime: "6am — 10pm",
    finalCtaContactLabel: "Contact",
    finalCtaImageAlt: "La Madeleine signature croissant sandwich",
    finalCtaBadgeTitle: "Bon appétit",
    finalCtaBadgeSubtitle: "Served warm · Every day",
    finalCtaOrder: "Order",
    // HomeSignatures
    homeSignaturesAriaLabel: "La Madeleine signatures",
    homeSignaturesDecorativeWord: "Signatures",
    homeSignaturesEyebrow: "The essentials",
    homeSignaturesTitleLineOne: "The signatures",
    homeSignaturesTitleLineTwo: "of",
    homeSignaturesTitleEmphasis: "La Madeleine",
    homeSignaturesDescription:
      "Our best sellers, prepared every morning in our Agadir workshop.",
    homeSignaturesPrevious: "Previous",
    homeSignaturesNext: "Next",
    homeSignaturesViewMenu: "View the full menu",
    homeSignaturesDiscover: "Discover",
    homeSignaturesScrollHint: "Scroll →",
    // HomeSpecialties
    homeSpecialtiesAriaLabel: "Our specialties",
    homeSpecialtiesEyebrow: "The menu",
    homeSpecialtiesTitleLineOne: "Our",
    homeSpecialtiesTitleEmphasis: "specialties",
    homeSpecialtiesDescription: "Recipes prepared with passion, every day.",
    homeSpecialtiesViewMenu: "View the menu",
    homeSpecialtiesCard1Label: "Pastry",
    homeSpecialtiesCard1Title: "Atelier sweets",
    homeSpecialtiesCard1Description:
      "Fruit tarts, mille-feuille, entremets — the display that makes you linger.",
    homeSpecialtiesCard1Alt: "La Madeleine fruit tart",
    homeSpecialtiesCard2Label: "Viennoiserie",
    homeSpecialtiesCard2Title: "Morning laminations",
    homeSpecialtiesCard2Description:
      "Butter croissants, pain au chocolat, folded by hand.",
    homeSpecialtiesCard2Alt: "Artisanal butter croissant",
    homeSpecialtiesCard3Label: "Sandwiches",
    homeSpecialtiesCard3Title: "Fresh and generous",
    homeSpecialtiesCard3Description:
      "Filled croissants and daily bread, prepared to order.",
    homeSpecialtiesCard3Alt: "Fresh La Madeleine sandwich",
    homeSpecialtiesCard4Label: "Coffee",
    homeSpecialtiesCard4Title: "Espresso and creations",
    homeSpecialtiesCard4Description:
      "Signature cortado, cappuccino, flat white — roasted with care.",
    homeSpecialtiesCard4Alt: "La Madeleine signature coffee",
    homeSpecialtiesCard5Label: "Savory",
    homeSpecialtiesCard5Title: "Moroccan flavors",
    homeSpecialtiesCard5Description:
      "Briouats, pastillas, msemen — savory flavors that bring people together.",
    homeSpecialtiesCard5Alt: "Cheese briouats",
    homeSpecialtiesDailyLabel: "Daily specialties",
    homeSpecialtiesDailyTitleLineOne: "The display changes,",
    homeSpecialtiesDailyTitleEmphasis: "the craving remains.",
    homeSpecialtiesDailyDescription:
      "Every day, our pastry chefs spotlight the best from the bakery — almond mille-feuille, seasonal creations, and limited editions.",
    homeSpecialtiesDiscover: "Discover",
    // HomeStats
    homeStatsBirthLabel: "Born in Agadir",
    homeStatsProductsLabel: "Products on the menu",
    homeStatsHoursLabel: "Open, 7 days a week",
    homeStatsHomemadeLabel: "Homemade",
    // HomeStory
    homeStoryImageAlt: "The La Madeleine bakery workshop",
    homeStoryYearsLabel: "years of passion,",
    homeStoryMorningLabel: "every morning at 5:30",
    homeStoryEyebrow: "Our story",
    homeStoryTitleLineOne: "A story",
    homeStoryTitleLineTwo: "of passion.",
    homeStoryDescription:
      "In 2018, one simple conviction: Agadir deserved a place where French viennoiserie meets Moroccan hospitality. Since then, our ovens have never truly gone out.",
    homeStoryPoint1Title: "Flour, fine butter and patience",
    homeStoryPoint1Description: "Chosen ingredients, precise gestures.",
    homeStoryPoint2Title: "The oven as a beating heart",
    homeStoryPoint2Description:
      "Bread, msemen and brioches come out all day long.",
    homeStoryPoint3Title: "Coffee as a ritual",
    homeStoryPoint3Description:
      "A concise menu, mastered and served with care.",
    homeStoryLink: "Read our story",
    // Locations
    homeLocationsEyebrow: "Our cafés",
    homeLocationsTitleLineOne: "Just around the corner,",
    homeLocationsTitleLineTwo: "always warm.",
    homeLocationsDescription:
      "Our Tilila address welcomes you from breakfast to a late afternoon treat — indoors, on the terrace, or to take away.",
    homeLocationsViewCafes: "See our cafés",
    homeLocationsDirections: "Directions",
    // ShowcaseBanner
    homeShowcaseAriaLabel: "Every morning starts with a good reason",
    homeShowcaseEyebrow: "From the bakery, every morning",
    homeShowcaseTitleLineOne: "Every morning starts with a",
    homeShowcaseTitleEmphasis: "good reason.",
    homeShowcaseViewMenu: "View the menu",
    homeShowcaseProducts: "Baguettes · Brioches · Moroccan breads",
    // Testimonials
    homeTestimonialsEyebrow: "They love us",
    homeTestimonialsTitle: "Regulars' words.",
    homeTestimonialsQuote1: "A charming tea room, excellent pastries, and remarkably fresh juices.",
    homeTestimonialsName1: "Ryu Z.",
    homeTestimonialsRole1: "Regular",
    homeTestimonialsQuote2: "Lovely service, very clean place, absolutely delicious food. We keep coming back.",
    homeTestimonialsName2: "Halima E.",
    homeTestimonialsRole2: "Customer",
    homeTestimonialsQuote3: "Quiet place, good service, friendly people. Perfect in the morning.",
    homeTestimonialsName3: "Soufiane",
    homeTestimonialsRole3: "Regular",
    // InstgramGallery
    homeInstagramAriaLabel: "Follow our journey on Instagram",
    homeInstagramTitleLineOne: "Follow our",
    homeInstagramTitleEmphasis: "journey",
    homeInstagramViewLabel: "View on Instagram",
    homeInstagramHandle: "@LaMadeleineAgadir",
    homeInstagramAlt1: "Chocolate croissants",
    homeInstagramAlt2: "Croissant sandwich",
    homeInstagramAlt3: "Fresh bakery croissants",
    homeInstagramAlt4: "Almond mille-feuille",
    homeInstagramAlt5: "Freshly poured espresso",
    homeInstagramAlt6: "Seasonal fruit tart",
    homeInstagramAlt7: "Pastries and coffee",
    homeInstagramAlt8: "Assorted pastries",

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
    contactPremiumErrorMessage:
      "Something went wrong. Please try again or call us directly.",
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
    // Premium (menu list)
    menuPremiumTabAll: "All",
    menuPremiumTabViennoiseries: "Viennoiseries",
    menuPremiumTabPastries: "Pastries",
    menuPremiumTabBreakfast: "Breakfast",
    menuPremiumTabSavory: "Savory",
    menuPremiumTabCafe: "Coffee",
    menuPremiumTabDrinks: "Drinks",
    menuPremiumTabJuices: "Fresh juices",
    menuPremiumSignature: "Signature",
    menuPremiumCtaScript: "A little craving?",
    menuPremiumCtaTitle: "Order, we take care of the rest.",
    menuPremiumCurrentMenu: "Today's menu",
    menuPremiumCreations: "{count} creations",
    menuPremiumMoreNote:
      "+ {count} more creations to discover on site — the display changes every day.",
    menuPremiumPaperScript: "The paper menu, up close",
    menuPremiumPaperTitle: "Browse the full menu, page by page.",
    menuPremiumPaperDescription:
      "Breakfasts, savory, fresh juices, coffees — 10 pages of treats, with photos and prices.",
    menuPremiumShowMore: "Show more",
    menuPremiumShowLess: "Show less",
    menuPremiumMenuBookCta: "View menu book",
    menuPremiumMenuBookTitle: "Menu book",
    menuPremiumMenuBookClose: "Close",
    menuPremiumMenuBookPrev: "Previous",
    menuPremiumMenuBookNext: "Next",

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
    // Premium
    shopPremiumSearchPlaceholder: "Search a sweet treat…",
    shopPremiumSortLabel: "Sort",
    shopPremiumSortFeatured: "Our favorites",
    shopPremiumSortRating: "Top rated",
    shopPremiumSortPriceAsc: "Price: low to high",
    shopPremiumSortPriceDesc: "Price: high to low",
    shopPremiumFilterAll: "All",
    shopPremiumFilterPastries: "Pastries",
    shopPremiumFilterSavory: "Savory",
    shopPremiumFilterBakery: "Bakery",
    shopPremiumFilterCafes: "Cafés",
    shopPremiumFilterJuices: "Juices",
    shopPremiumFilterDrinks: "Drinks",
    shopPremiumFilterExtras: "Extras",
    shopPremiumResults: "creations — photographed with love",
    shopPremiumHeroBadge: "Favorite",
    shopPremiumViewProduct: "View product",
    shopPremiumViewMenu: "View in the menu",
    shopPremiumLoadMore: "See more sweet treats",
    shopPremiumEmptyTitle: 'No result for "{query}"',
    shopPremiumEmptyHint: 'Try "croissant", "amlou", "juice"…',
    shopPremiumQuickViewClose: "Close",
    shopPremiumInShowcase: "In showcase",
    shopPremiumPrice: "Price",
    shopPremiumOrder: "Order",

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
    // Home
    // Intro
    homeIntroEyebrow: "Notre manifeste",
    homeIntroTitleLineOne: "Bien plus",
    homeIntroTitleLineTwo: "qu'une",
    homeIntroTitleEmphasis: "pâtisserie.",
    homeIntroDescription:
      "Pâtisseries faites à la main, pain artisanal et café exceptionnel — une expérience authentique de boulangerie française et marocaine depuis 2018. Une maison où la tradition française rencontre la générosité marocaine — croissants feuilletés le matin, café qui rassemble l'après-midi.",
    homeIntroLink: "Notre histoire",
    homeIntroYearsLabel: "Ans de",
    homeIntroYearsValue: "passion",
    homeIntroImageAlt: "Pains artisanaux La Madeleine — farine, feu et patience",
    homeIntroCoffeeAlt: "Cappuccino — latte art",
    // Hero
    homeHeroGoogleReviewAria: "Voir nos avis Google — 4,2 sur 5",
    homeHeroGoogleReviewText: "Adoré par plus de 80 clients",
    homeHeroLocation: "Agadir · Depuis 2018",
    homeHeroCategory: "Pâtisserie · Boulangerie · Café",
    homeHeroTitleLineOne: "Le goût du",
    homeHeroTitleLineTwo: "fait maison",
    homeHeroDescription:
      "Depuis 2018, La Madeleine célèbre la pâtisserie, le café et les saveurs qui rassemblent.",
    homeHeroMenuCta: "Découvrir notre menu",
    homeHeroFindCafeCta: "Trouver un café",
    homeHeroStatCraftLabel: "ans de savoir-faire",
    homeHeroStatCreationsLabel: "créations maison",
    homeHeroStatHoursLabel: "6h — 22h",
    homeHeroHomemadeLabel: "Fait maison",
    homeHeroHomemadeSince: "Chaque jour · Depuis 2018",
    homeHeroPastryImageAlt: "Pâtisseries La Madeleine — pains au chocolat",
    homeHeroCroissantImageAlt: "Viennoiseries — offre après 21h",
    homeHeroSideLabel: "Boulangerie · Pâtisserie · Café",
    homeHeroMarqueeViennoiseries: "Viennoiseries",
    homeHeroMarqueeMilleFeuille: "Mille-feuille",
    homeHeroMarqueeCoffee: "Café de spécialité",
    homeHeroMarqueeMsemmen: "Msemmen",
    homeHeroMarqueeAmlou: "Amlou",
    homeHeroMarqueePainAuChocolat: "Pain au chocolat",
    homeHeroMarqueeJuices: "Jus frais",
    // BakeryStory
    bakeryStoryEyebrow: "Notre histoire",
    bakeryStoryTitleLineOne: "Un héritage de",
    bakeryStoryTitleEmphasis: "passion artisanale",
    bakeryStoryIntroduction:
      "En 2019, un amour profond pour la boulangerie traditionnelle a apporté le charme d'un salon de thé français classique au cœur d'Agadir. Forte de recettes perfectionnées, d'un engagement pour un café d'exception et d'une exigence sans compromis, La Madeleine a ouvert ses portes à une communauté qui apprécie les détails qui comptent.",
    bakeryStoryTimelineTitle1: "La naissance de La Madeleine",
    bakeryStoryTimelineText1:
      "Un amour du fait maison ouvre ses portes à Tilila, Agadir — fournil artisanal, salon de thé, café de quartier.",
    bakeryStoryTimelineAlt1: "La première boutique La Madeleine à Agadir",
    bakeryStoryTimelineTitle2: "Une passion qui grandit",
    bakeryStoryTimelineText2:
      "La carte s'étoffe : petits-déjeuners marocains, viennoiseries françaises, jus frais et cafés de spécialité.",
    bakeryStoryTimelineAlt2: "Pains artisanaux sortis du four",
    bakeryStoryTimelineYear3: "Aujourd'hui",
    bakeryStoryTimelineTitle3: "Des cafés et des moments partagés",
    bakeryStoryTimelineText3:
      "Chaque matin, la même promesse : des créations fraîches, un café soigné, un lieu où l'on revient.",
    bakeryStoryTimelineAlt3: "Table de brunch La Madeleine",
    // CoffeeMenuPreview
    coffeeMenuPreviewEyebrow: "Préparé avec soin",
    coffeeMenuPreviewTitleLineOne: "Nos",
    coffeeMenuPreviewTitleEmphasis: "cafés",
    coffeeMenuPreviewDescription:
      "Des grains d'origine unique torréfiés sur place. Chaque tasse est un voyage de la ferme aux arômes.",
    coffeeMenuPreviewCta: "Voir le menu",
    // FinalCTA
    finalCtaAriaLabel: "Une petite pause gourmande ?",
    finalCtaDecorativeWord: "gourmande",
    finalCtaEyebrow: "À tout de suite",
    finalCtaTitleLineOne: "Une petite pause",
    finalCtaTitleEmphasis: "gourmande ?",
    finalCtaDescription:
      "Retrouvez-nous dans nos cafés et découvrez nos spécialités — servies avec le sourire, de 6h à 22h, 7j/7.",
    finalCtaFindCafe: "Trouver un café",
    finalCtaContact: "Nous contacter",
    finalCtaAddressLabel: "Adresse",
    finalCtaHoursLabel: "Horaires",
    finalCtaDays: "Lun — Dim",
    finalCtaTime: "6h00 — 22h00",
    finalCtaContactLabel: "Contact",
    finalCtaImageAlt: "Croissant sandwich signature La Madeleine",
    finalCtaBadgeTitle: "Bon appétit",
    finalCtaBadgeSubtitle: "Servi chaud · Tous les jours",
    finalCtaOrder: "Commander",
    // HomeSignatures
    homeSignaturesAriaLabel: "Les signatures de La Madeleine",
    homeSignaturesDecorativeWord: "Signatures",
    homeSignaturesEyebrow: "Les incontournables",
    homeSignaturesTitleLineOne: "Les signatures",
    homeSignaturesTitleLineTwo: "de",
    homeSignaturesTitleEmphasis: "La Madeleine",
    homeSignaturesDescription:
      "Nos meilleures ventes, préparées chaque matin dans notre atelier d'Agadir.",
    homeSignaturesPrevious: "Précédent",
    homeSignaturesNext: "Suivant",
    homeSignaturesViewMenu: "Voir toute la carte",
    homeSignaturesDiscover: "Découvrir",
    homeSignaturesScrollHint: "Faites défiler →",
    // HomeSpecialties
    homeSpecialtiesAriaLabel: "Nos spécialités",
    homeSpecialtiesEyebrow: "La carte",
    homeSpecialtiesTitleLineOne: "Nos",
    homeSpecialtiesTitleEmphasis: "spécialités",
    homeSpecialtiesDescription: "Des recettes préparées avec passion, chaque jour.",
    homeSpecialtiesViewMenu: "Voir la carte",
    homeSpecialtiesCard1Label: "Pâtisserie",
    homeSpecialtiesCard1Title: "Douceurs d'atelier",
    homeSpecialtiesCard1Description:
      "Tartes aux fruits, mille-feuille, entremets — la vitrine qui donne envie.",
    homeSpecialtiesCard1Alt: "Tarte aux fruits La Madeleine",
    homeSpecialtiesCard2Label: "Viennoiserie",
    homeSpecialtiesCard2Title: "Feuilletage du matin",
    homeSpecialtiesCard2Description: "Croissants au beurre, pains au chocolat, pliés à la main.",
    homeSpecialtiesCard2Alt: "Croissant au beurre artisanal",
    homeSpecialtiesCard3Label: "Sandwiches",
    homeSpecialtiesCard3Title: "Frais et généreux",
    homeSpecialtiesCard3Description: "Croissants garnis et pains du jour, préparés minute.",
    homeSpecialtiesCard3Alt: "Sandwich frais La Madeleine",
    homeSpecialtiesCard4Label: "Café",
    homeSpecialtiesCard4Title: "Espresso et créations",
    homeSpecialtiesCard4Description:
      "Cortado signature, cappuccino, flat white — torréfié avec soin.",
    homeSpecialtiesCard4Alt: "Café signature La Madeleine",
    homeSpecialtiesCard5Label: "Salé",
    homeSpecialtiesCard5Title: "Saveurs marocaines",
    homeSpecialtiesCard5Description: "Briouats, pastillas, msemmen — le salé qui rassemble.",
    homeSpecialtiesCard5Alt: "Briouats au fromage",
    homeSpecialtiesDailyLabel: "Spécialités du jour",
    homeSpecialtiesDailyTitleLineOne: "La vitrine change,",
    homeSpecialtiesDailyTitleEmphasis: "l'envie reste.",
    homeSpecialtiesDailyDescription:
      "Chaque jour, nos pâtissiers mettent en avant le meilleur du fournil — mille-feuille aux amandes, créations de saison, éditions limitées.",
    homeSpecialtiesDiscover: "Découvrir",
    // HomeStats
    homeStatsBirthLabel: "Naissance à Agadir",
    homeStatsProductsLabel: "Produits à la carte",
    homeStatsHoursLabel: "D'ouverture, 7j/7",
    homeStatsHomemadeLabel: "Fait maison",
    // HomeStory
    homeStoryImageAlt: "L'atelier de boulangerie La Madeleine",
    homeStoryYearsLabel: "ans de passion,",
    homeStoryMorningLabel: "chaque matin à 5h30",
    homeStoryEyebrow: "Notre histoire",
    homeStoryTitleLineOne: "Une histoire",
    homeStoryTitleLineTwo: "de passion.",
    homeStoryDescription:
      "En 2018, une conviction simple : Agadir méritait un lieu où la viennoiserie française rencontre l'hospitalité marocaine. Depuis, nos fours ne se sont jamais vraiment éteints.",
    homeStoryPoint1Title: "Farine, beurre fin et patience",
    homeStoryPoint1Description: "Des ingrédients choisis, des gestes précis.",
    homeStoryPoint2Title: "Le four comme cœur battant",
    homeStoryPoint2Description:
      "Pain, msemmen et brioches sortent toute la journée.",
    homeStoryPoint3Title: "Le café comme rituel",
    homeStoryPoint3Description:
      "Une carte courte, maîtrisée, servie avec soin.",
    homeStoryLink: "Lire notre histoire",
    // Locations
    homeLocationsEyebrow: "Nos cafés",
    homeLocationsTitleLineOne: "Juste au coin de la rue,",
    homeLocationsTitleLineTwo: "toujours chaleureux.",
    homeLocationsDescription:
      "Notre adresse à Tilila vous accueille du petit-déjeuner au goûter — en salle, en terrasse ou à emporter.",
    homeLocationsViewCafes: "Voir nos cafés",
    homeLocationsDirections: "Itinéraire",
    // ShowcaseBanner
    homeShowcaseAriaLabel: "Chaque matin commence par une bonne raison",
    homeShowcaseEyebrow: "Du fournil, chaque matin",
    homeShowcaseTitleLineOne: "Chaque matin commence par une",
    homeShowcaseTitleEmphasis: "bonne raison.",
    homeShowcaseViewMenu: "Voir la carte",
    homeShowcaseProducts: "Baguettes · Brioches · Pains marocains",
    // Testimonials
    homeTestimonialsEyebrow: "Ils nous adorent",
    homeTestimonialsTitle: "Les mots de nos habitués.",
    homeTestimonialsQuote1:
      "Un charmant salon de thé, d'excellentes pâtisseries et des jus remarquablement frais.",
    homeTestimonialsName1: "Ryu Z.",
    homeTestimonialsRole1: "Habitué",
    homeTestimonialsQuote2:
      "Service adorable, lieu très propre, plats absolument délicieux. On revient sans hésiter.",
    homeTestimonialsName2: "Halima E.",
    homeTestimonialsRole2: "Cliente",
    homeTestimonialsQuote3:
      "Lieu calme, bon service, gens accueillants. Parfait le matin.",
    homeTestimonialsName3: "Soufiane",
    homeTestimonialsRole3: "Habitué",
    // InstgramGallery
    homeInstagramAriaLabel: "Suivez notre aventure sur Instagram",
    homeInstagramTitleLineOne: "Suivez notre",
    homeInstagramTitleEmphasis: "aventure",
    homeInstagramViewLabel: "Voir sur Instagram",
    homeInstagramHandle: "@LaMadeleineAgadir",
    homeInstagramAlt1: "Croissants au chocolat",
    homeInstagramAlt2: "Sandwich au croissant",
    homeInstagramAlt3: "Croissants frais de boulangerie",
    homeInstagramAlt4: "Mille-feuille aux amandes",
    homeInstagramAlt5: "Espresso fraîchement versé",
    homeInstagramAlt6: "Tarte aux fruits de saison",
    homeInstagramAlt7: "Pâtisseries et café",
    homeInstagramAlt8: "Assortiment de pâtisseries",

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
    contactPremiumErrorMessage:
      "Une erreur est survenue. Réessayez ou appelez-nous directement.",
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
    // Premium (liste du menu)
    menuPremiumTabAll: "Tout",
    menuPremiumTabViennoiseries: "Viennoiseries",
    menuPremiumTabPastries: "Pâtisseries",
    menuPremiumTabBreakfast: "Petit-déjeuner",
    menuPremiumTabSavory: "Salé",
    menuPremiumTabCafe: "Café",
    menuPremiumTabDrinks: "Boissons",
    menuPremiumTabJuices: "Jus frais",
    menuPremiumSignature: "Signature",
    menuPremiumCtaScript: "Une petite faim ?",
    menuPremiumCtaTitle: "Commandez, on s'occupe du reste.",
    menuPremiumCurrentMenu: "La carte du moment",
    menuPremiumCreations: "{count} créations",
    menuPremiumMoreNote:
      "+ {count} autres créations à découvrir sur place — la vitrine change chaque jour.",
    menuPremiumPaperScript: "La carte papier, en grand",
    menuPremiumPaperTitle: "Feuilletez le menu complet, page par page.",
    menuPremiumPaperDescription:
      "Petit-déjeuners, salé, jus frais, cafés — 10 pages de gourmandises, avec photos et prix.",
    menuPremiumShowMore: "Voir plus",
    menuPremiumShowLess: "Voir moins",
    menuPremiumMenuBookCta: "Feuilleter la carte",
    menuPremiumMenuBookTitle: "La carte",
    menuPremiumMenuBookClose: "Fermer",
    menuPremiumMenuBookPrev: "Précédent",
    menuPremiumMenuBookNext: "Suivant",

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
    shopPremiumSearchPlaceholder: "Rechercher une douceur…",
    shopPremiumSortLabel: "Trier",
    shopPremiumSortFeatured: "Nos favoris",
    shopPremiumSortRating: "Mieux notés",
    shopPremiumSortPriceAsc: "Prix croissant",
    shopPremiumSortPriceDesc: "Prix décroissant",
    shopPremiumFilterAll: "Tout",
    shopPremiumFilterPastries: "Pâtisseries",
    shopPremiumFilterSavory: "Salé",
    shopPremiumFilterBakery: "Boulangerie",
    shopPremiumFilterCafes: "Cafés",
    shopPremiumFilterJuices: "Jus",
    shopPremiumFilterDrinks: "Boissons",
    shopPremiumFilterExtras: "Extras",
    shopPremiumResults: "créations — photographiées avec amour",
    shopPremiumHeroBadge: "Coup de cœur",
    shopPremiumViewProduct: "Voir le produit",
    shopPremiumViewMenu: "Voir dans le menu",
    shopPremiumLoadMore: "Voir plus de douceurs",
    shopPremiumEmptyTitle: 'Rien trouvé pour "{query}"',
    shopPremiumEmptyHint: 'Essayez "croissant", "amlou", "jus"…',
    shopPremiumQuickViewClose: "Fermer",
    shopPremiumInShowcase: "En vitrine",
    shopPremiumPrice: "Prix",
    shopPremiumOrder: "Commander",

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
    // Home
    // Intro
    homeIntroEyebrow: "مانيفستنا",
    homeIntroTitleLineOne: "أكثر",
    homeIntroTitleLineTwo: "من",
    homeIntroTitleEmphasis: "مخبز.",
    homeIntroDescription:
      "مخبوزات مصنوعة يدوياً، خبز حرفي، وقهوة استثنائية — تجربة أصيلة لمخبز فرنسي ومغربي منذ 2018. دار تجمع بين التقاليد الفرنسية والكرم المغربي — كرواسون رقيق في الصباح، وقهوة تجمع الناس في فترة ما بعد الظهر.",
    homeIntroLink: "قصتنا",
    homeIntroYearsLabel: "سنوات من",
    homeIntroYearsValue: "الشغف",
    homeIntroImageAlt: "أرغفة حرفية من لا مادلين — دقيق، نار، وصبر",
    homeIntroCoffeeAlt: "كابتشينو — فنيّة القهوة",
    // Hero
    homeHeroGoogleReviewAria: "شاهد تقييماتنا على Google — 4.2 من 5",
    homeHeroGoogleReviewText: "محبوب من أكثر من 80 زبوناً",
    homeHeroLocation: "أكادير · منذ 2018",
    homeHeroCategory: "حلويات · مخبوزات · مقهى",
    homeHeroTitleLineOne: "طعم",
    homeHeroTitleLineTwo: "المصنوع في المنزل",
    homeHeroDescription:
      "منذ 2018، تحتفي لا مادلين بالحلويات والقهوة والنكهات التي تجمع الناس.",
    homeHeroMenuCta: "اكتشف قائمتنا",
    homeHeroFindCafeCta: "اعثر على مقهى",
    homeHeroStatCraftLabel: "سنوات من الخبرة",
    homeHeroStatCreationsLabel: "إبداعات منزلية",
    homeHeroStatHoursLabel: "6 صباحاً — 10 مساءً",
    homeHeroHomemadeLabel: "مصنوع في المنزل",
    homeHeroHomemadeSince: "كل يوم · منذ 2018",
    homeHeroPastryImageAlt: "حلويات لا مادلين — خبز بالشوكولاتة",
    homeHeroCroissantImageAlt: "مخبوزات — عرض بعد التاسعة مساءً",
    homeHeroSideLabel: "مخبز · حلويات · مقهى",
    homeHeroMarqueeViennoiseries: "معجنات فرنسية",
    homeHeroMarqueeMilleFeuille: "ميل فوي",
    homeHeroMarqueeCoffee: "قهوة مختصة",
    homeHeroMarqueeMsemmen: "مسمن",
    homeHeroMarqueeAmlou: "أملو",
    homeHeroMarqueePainAuChocolat: "خبز بالشوكولاتة",
    homeHeroMarqueeJuices: "عصائر طازجة",
    // BakeryStory
    bakeryStoryEyebrow: "قصتنا",
    bakeryStoryTitleLineOne: "إرث من",
    bakeryStoryTitleEmphasis: "الشغف الحرفي",
    bakeryStoryIntroduction:
      "في عام 2019، حمل حب عميق للمخبوزات التقليدية سحر صالون شاي فرنسي أصيل إلى قلب أكادير. وبفضل وصفات متقنة، والتزام بقهوة استثنائية، وتفانٍ لا يساوم على الجودة، فتحت لا مادلين أبوابها أمام مجتمع يقدّر التفاصيل الجميلة.",
    bakeryStoryTimelineTitle1: "ولادة لا مادلين",
    bakeryStoryTimelineText1:
      "يفتح حب المصنوع في المنزل أبوابه في تيليلا، أكادير — مخبز حرفي، صالون شاي، ومقهى للحي.",
    bakeryStoryTimelineAlt1: "أول متجر للا مادلين في أكادير",
    bakeryStoryTimelineTitle2: "شغف ينمو",
    bakeryStoryTimelineText2:
      "تتوسع القائمة: فطور مغربي، معجنات فرنسية، عصائر طازجة، وقهوة مختصة.",
    bakeryStoryTimelineAlt2: "خبز حرفي خارج للتو من الفرن",
    bakeryStoryTimelineYear3: "اليوم",
    bakeryStoryTimelineTitle3: "مقاهٍ ولحظات مشتركة",
    bakeryStoryTimelineText3:
      "كل صباح، الوعد نفسه: إبداعات طازجة، قهوة متقنة، ومكان نعود إليه.",
    bakeryStoryTimelineAlt3: "طاولة فطور متأخر في لا مادلين",
    // CoffeeMenuPreview
    coffeeMenuPreviewEyebrow: "محضّرة بعناية",
    coffeeMenuPreviewTitleLineOne: "قهوتنا",
    coffeeMenuPreviewTitleEmphasis: "المميزة",
    coffeeMenuPreviewDescription:
      "حبوب من مصدر واحد محمصة في المكان. كل فنجان رحلة من المزرعة إلى النكهة.",
    coffeeMenuPreviewCta: "عرض القائمة",
    // FinalCTA
    finalCtaAriaLabel: "استراحة شهية صغيرة؟",
    finalCtaDecorativeWord: "شهية",
    finalCtaEyebrow: "إلى اللقاء قريباً",
    finalCtaTitleLineOne: "استراحة",
    finalCtaTitleEmphasis: "شهية صغيرة؟",
    finalCtaDescription:
      "زورونا في مقاهينا واكتشفوا تخصصاتنا — نقدمها بابتسامة من السادسة صباحاً حتى العاشرة مساءً، كل يوم.",
    finalCtaFindCafe: "اعثر على مقهى",
    finalCtaContact: "اتصل بنا",
    finalCtaAddressLabel: "العنوان",
    finalCtaHoursLabel: "أوقات العمل",
    finalCtaDays: "الإثنين — الأحد",
    finalCtaTime: "6 صباحاً — 10 مساءً",
    finalCtaContactLabel: "التواصل",
    finalCtaImageAlt: "ساندويتش كرواسون مميز من لا مادلين",
    finalCtaBadgeTitle: "شهية طيبة",
    finalCtaBadgeSubtitle: "يُقدّم ساخناً · كل يوم",
    finalCtaOrder: "اطلب",
    // HomeSignatures
    homeSignaturesAriaLabel: "تخصصات لا مادلين",
    homeSignaturesDecorativeWord: "تخصصات",
    homeSignaturesEyebrow: "مختاراتنا الأساسية",
    homeSignaturesTitleLineOne: "تخصصات",
    homeSignaturesTitleLineTwo: "لا",
    homeSignaturesTitleEmphasis: "مادلين",
    homeSignaturesDescription:
      "أكثر إبداعاتنا مبيعاً، تُحضّر كل صباح في ورشتنا بأكادير.",
    homeSignaturesPrevious: "السابق",
    homeSignaturesNext: "التالي",
    homeSignaturesViewMenu: "عرض القائمة كاملة",
    homeSignaturesDiscover: "اكتشف",
    homeSignaturesScrollHint: "مرّر →",
    // HomeSpecialties
    homeSpecialtiesAriaLabel: "تخصصاتنا",
    homeSpecialtiesEyebrow: "القائمة",
    homeSpecialtiesTitleLineOne: "تخصصاتنا",
    homeSpecialtiesTitleEmphasis: "المميزة",
    homeSpecialtiesDescription: "وصفات تُحضّر بشغف كل يوم.",
    homeSpecialtiesViewMenu: "عرض القائمة",
    homeSpecialtiesCard1Label: "حلويات",
    homeSpecialtiesCard1Title: "حلويات الورشة",
    homeSpecialtiesCard1Description:
      "فطائر الفواكه، ميل فوي، وحلويات فاخرة — واجهة لا تقاوم.",
    homeSpecialtiesCard1Alt: "فطيرة فواكه من لا مادلين",
    homeSpecialtiesCard2Label: "معجنات",
    homeSpecialtiesCard2Title: "معجنات الصباح",
    homeSpecialtiesCard2Description: "كرواسون بالزبدة وخبز بالشوكولاتة، مطوية يدوياً.",
    homeSpecialtiesCard2Alt: "كرواسون حرفي بالزبدة",
    homeSpecialtiesCard3Label: "ساندويتشات",
    homeSpecialtiesCard3Title: "طازج وسخي",
    homeSpecialtiesCard3Description: "كرواسون محشو وخبز اليوم، يُحضّر عند الطلب.",
    homeSpecialtiesCard3Alt: "ساندويتش طازج من لا مادلين",
    homeSpecialtiesCard4Label: "قهوة",
    homeSpecialtiesCard4Title: "إسبريسو وإبداعات",
    homeSpecialtiesCard4Description: "كورتادو مميز، كابتشينو، وفلات وايت — محمصة بعناية.",
    homeSpecialtiesCard4Alt: "قهوة مميزة من لا مادلين",
    homeSpecialtiesCard5Label: "مالح",
    homeSpecialtiesCard5Title: "نكهات مغربية",
    homeSpecialtiesCard5Description: "بريوات، بسطيلة، ومسمن — نكهات مالحة تجمع الناس.",
    homeSpecialtiesCard5Alt: "بريوات بالجبن",
    homeSpecialtiesDailyLabel: "تخصصات اليوم",
    homeSpecialtiesDailyTitleLineOne: "تتغير الواجهة،",
    homeSpecialtiesDailyTitleEmphasis: "ويبقى الشغف.",
    homeSpecialtiesDailyDescription:
      "كل يوم، يقدّم حلوانيونا أفضل ما في المخبز — ميل فوي باللوز، إبداعات موسمية، وإصدارات محدودة.",
    homeSpecialtiesDiscover: "اكتشف",
    // HomeStats
    homeStatsBirthLabel: "وُلدت في أكادير",
    homeStatsProductsLabel: "منتجات في القائمة",
    homeStatsHoursLabel: "مفتوحون طوال الأسبوع",
    homeStatsHomemadeLabel: "مصنوع في المنزل",
    // HomeStory
    homeStoryImageAlt: "ورشة مخبز لا مادلين",
    homeStoryYearsLabel: "سنوات من الشغف،",
    homeStoryMorningLabel: "كل صباح عند الخامسة والنصف",
    homeStoryEyebrow: "قصتنا",
    homeStoryTitleLineOne: "قصة",
    homeStoryTitleLineTwo: "من الشغف.",
    homeStoryDescription:
      "في عام 2018، كانت هناك قناعة بسيطة: أكادير تستحق مكاناً تلتقي فيه المعجنات الفرنسية مع الضيافة المغربية. ومنذ ذلك الحين، لم تنطفئ أفراننا حقاً.",
    homeStoryPoint1Title: "دقيق، زبدة فاخرة وصبر",
    homeStoryPoint1Description: "مكونات مختارة، وحركات دقيقة.",
    homeStoryPoint2Title: "الفرن قلب نابض",
    homeStoryPoint2Description: "خبز ومسمن وبريوش يخرج طوال اليوم.",
    homeStoryPoint3Title: "القهوة طقس يومي",
    homeStoryPoint3Description: "قائمة قصيرة ومتقنة تُقدّم بعناية.",
    homeStoryLink: "اقرأ قصتنا",
    // Locations
    homeLocationsEyebrow: "مقاهينا",
    homeLocationsTitleLineOne: "على بُعد خطوات منك،",
    homeLocationsTitleLineTwo: "ودائماً بحفاوة.",
    homeLocationsDescription:
      "يستقبلكم عنواننا في تيليلا من فطور الصباح حتى تحلية العصر — في الداخل، على التراس، أو للطلب الخارجي.",
    homeLocationsViewCafes: "شاهد مقاهينا",
    homeLocationsDirections: "الاتجاهات",
    // ShowcaseBanner
    homeShowcaseAriaLabel: "كل صباح يبدأ بسبب جميل",
    homeShowcaseEyebrow: "من المخبز، كل صباح",
    homeShowcaseTitleLineOne: "كل صباح يبدأ بسبب",
    homeShowcaseTitleEmphasis: "جميل.",
    homeShowcaseViewMenu: "عرض القائمة",
    homeShowcaseProducts: "باغيت · بريوش · خبز مغربي",
    // Testimonials
    homeTestimonialsEyebrow: "يحبّوننا",
    homeTestimonialsTitle: "كلمات زبنائنا الأوفياء.",
    homeTestimonialsQuote1:
      "صالون شاي ساحر، حلويات ممتازة، وعصائر طازجة بشكل لافت.",
    homeTestimonialsName1: "Ryu Z.",
    homeTestimonialsRole1: "زبون وفِي",
    homeTestimonialsQuote2:
      "خدمة جميلة، مكان نظيف جداً، وأكل لذيذ للغاية. نعود باستمرار.",
    homeTestimonialsName2: "Halima E.",
    homeTestimonialsRole2: "زبونة",
    homeTestimonialsQuote3:
      "مكان هادئ، خدمة جيدة، وناس لطيفة. مثالي في الصباح.",
    homeTestimonialsName3: "سفيان",
    homeTestimonialsRole3: "زبون وفِي",
    // InstgramGallery
    homeInstagramAriaLabel: "تابع رحلتنا على إنستغرام",
    homeInstagramTitleLineOne: "تابعوا",
    homeInstagramTitleEmphasis: "رحلتنا",
    homeInstagramViewLabel: "عرض على إنستغرام",
    homeInstagramHandle: "@LaMadeleineAgadir",
    homeInstagramAlt1: "كرواسون بالشوكولاتة",
    homeInstagramAlt2: "ساندويتش كرواسون",
    homeInstagramAlt3: "كرواسون طازج من المخبز",
    homeInstagramAlt4: "ميل فوي باللوز",
    homeInstagramAlt5: "إسبريسو طازج",
    homeInstagramAlt6: "تارت فواكه موسمية",
    homeInstagramAlt7: "حلويات وقهوة",
    homeInstagramAlt8: "تشكيلة حلويات",

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
    contactPremiumErrorMessage:
      "حدث خطأ ما. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.",
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
    // Premium (قائمة الأصناف)
    menuPremiumTabAll: "الكل",
    menuPremiumTabViennoiseries: "معجنات فرنسية",
    menuPremiumTabPastries: "حلويات",
    menuPremiumTabBreakfast: "فطور",
    menuPremiumTabSavory: "مالح",
    menuPremiumTabCafe: "قهوة",
    menuPremiumTabDrinks: "مشروبات",
    menuPremiumTabJuices: "عصائر طازجة",
    menuPremiumSignature: "مميز",
    menuPremiumCtaScript: "شعور خفيف بالجوع؟",
    menuPremiumCtaTitle: "اطلب، ونحن نتكفل بالباقي.",
    menuPremiumCurrentMenu: "قائمة اليوم",
    menuPremiumCreations: "{count} إبداعات",
    menuPremiumMoreNote:
      "+ {count} إبداعات أخرى لاكتشافها في المكان — الواجهة تتغير كل يوم.",
    menuPremiumPaperScript: "القائمة الورقية بالتفصيل",
    menuPremiumPaperTitle: "تصفح القائمة الكاملة صفحة بصفحة.",
    menuPremiumPaperDescription:
      "فطور، مالح، عصائر طازجة، قهوة — 10 صفحات من اللذائذ مع الصور والأسعار.",
    menuPremiumShowMore: "عرض المزيد",
    menuPremiumShowLess: "عرض أقل",
    menuPremiumMenuBookCta: "تصفح القائمة",
    menuPremiumMenuBookTitle: "القائمة",
    menuPremiumMenuBookClose: "إغلاق",
    menuPremiumMenuBookPrev: "السابق",
    menuPremiumMenuBookNext: "التالي",

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
    shopPremiumSearchPlaceholder: "ابحث عن حلوى…",
    shopPremiumSortLabel: "فرز",
    shopPremiumSortFeatured: "المفضلة",
    shopPremiumSortRating: "الأعلى تقييماً",
    shopPremiumSortPriceAsc: "السعر من الأرخص إلى الأعلى",
    shopPremiumSortPriceDesc: "السعر من الأعلى إلى الأرخص",
    shopPremiumFilterAll: "الكل",
    shopPremiumFilterPastries: "المخبوزات",
    shopPremiumFilterSavory: "المالح",
    shopPremiumFilterBakery: "المخبز",
    shopPremiumFilterCafes: "المقاهي",
    shopPremiumFilterJuices: "العصائر",
    shopPremiumFilterDrinks: "المشروبات",
    shopPremiumFilterExtras: "إضافات",
    shopPremiumResults: "إبداعات — مصوّرة بحب",
    shopPremiumHeroBadge: "قلبنا",
    shopPremiumViewProduct: "عرض المنتج",
    shopPremiumViewMenu: "عرض في القائمة",
    shopPremiumLoadMore: "رؤية المزيد من الحلويات",
    shopPremiumEmptyTitle: 'لم يتم العثور على "{query}"',
    shopPremiumEmptyHint: 'جرّب "كروissant"، "أملو"، "عصائر"…',
    shopPremiumQuickViewClose: "إغلاق",
    shopPremiumInShowcase: "في الواجهة",
    shopPremiumPrice: "السعر",
    shopPremiumOrder: "اطلب",

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
  t: (
    key: keyof typeof translations.en,
    params?: Record<string, string | number>,
  ) => string;
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

  const t = (
    key: keyof typeof translations.en,
    params?: Record<string, string | number>,
  ): string => {
    const raw = translations[language]?.[key] || translations.en[key] || String(key);
    if (!params) return raw;

    return Object.entries(params).reduce((text, [param, value]) => {
      return text.replace(new RegExp(`\\{${param}\\}`, "g"), String(value));
    }, raw);
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
