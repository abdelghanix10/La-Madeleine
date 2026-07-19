export const siteConfig = {
  name: "La Boulangerie La Madeleine",
  tagline: "Artisan Bakery & Coffee House",
  description:
    "Handcrafted pastries, artisan bread, and exceptional coffee — an authentic French bakery experience since 1987.",
  phone: "+1 (555) 234-5678",
  email: "bonjour@lamadeleine.com",
  address: "127 Rue de Paris, Montmartre, Paris 75018",
  social: {
    instagram: "https://instagram.com/lamadeleine",
    facebook: "https://facebook.com/lamadeleine",
    twitter: "https://twitter.com/lamadeleine",
    pinterest: "https://pinterest.com/lamadeleine",
  },
  hours: [
    { day: "Monday — Friday", time: "6:00 AM — 8:00 PM" },
    { day: "Saturday", time: "7:00 AM — 9:00 PM" },
    { day: "Sunday", time: "7:00 AM — 3:00 PM" },
  ],
};

export const heroSlides = [
  {
    id: 1,
    title: "L'Art du Pain",
    subtitle: "Baked Fresh Every Morning",
    description:
      "Our master bakers rise before dawn to craft each loaf with time-honored French techniques and the finest ingredients.",
    cta: "Explore Our Menu",
    image: "/images/hero-bakery.jpg",
    gradient: "from-dark/70 via-dark/40 to-transparent",
  },
  {
    id: 2,
    title: "Café d'Exception",
    subtitle: "The Perfect Cup",
    description:
      "Single-origin beans, roasted in-house, paired with our signature pastries for an unforgettable experience.",
    cta: "View Coffee Menu",
    image: "/images/hero-coffee.jpg",
    gradient: "from-dark/70 via-dark/40 to-transparent",
  },
  {
    id: 3,
    title: "Pâtisserie Raffinée",
    subtitle: "Sweet Artistry",
    description:
      "Delicate layers of butter, flour, and passion — each pastry is a small masterpiece of French pâtisserie.",
    cta: "See Our Pastries",
    image: "/images/hero-pastry.jpg",
    gradient: "from-dark/70 via-dark/40 to-transparent",
  },
];

export const categories = [
  {
    id: 1,
    name: "Breakfast",
    description: "Start your day the French way",
    icon: "sunrise",
    image: "/images/cat-breakfast.jpg",
  },
  {
    id: 2,
    name: "Artisan Bread",
    description: "Traditional French breads",
    icon: "wheat",
    image: "/images/cat-bread.jpg",
  },
  {
    id: 3,
    name: "Pastries",
    description: "Delicate French pâtisserie",
    icon: "cake",
    image: "/images/cat-pastries.jpg",
  },
  {
    id: 4,
    name: "Coffee",
    description: "Expertly brewed & roasted",
    icon: "coffee",
    image: "/images/cat-coffee.jpg",
  },
  {
    id: 5,
    name: "Desserts",
    description: "Indulgent sweet creations",
    icon: "cherry",
    image: "/images/cat-desserts.jpg",
  },
  {
    id: 6,
    name: "Sandwiches",
    description: "Fresh, handmade & delicious",
    icon: "sandwich",
    image: "/images/cat-sandwiches.jpg",
  },
];

export const todaysSpecials = [
  {
    id: 1,
    name: "Pain au Chocolat",
    category: "Pastry",
    description:
      "Buttery, flaky layers wrapped around two bars of premium dark chocolate — the quintessential French breakfast pastry.",
    price: 4.50,
    image: "/images/special-pain-chocolat.jpg",
  },
  {
    id: 2,
    name: "Croissant au Beurre",
    category: "Breakfast",
    description:
      "Golden, impossibly light croissant made with 84% fat Norman butter. 72-hour ferment for perfect lamination.",
    price: 3.80,
    image: "/images/special-croissant.jpg",
  },
  {
    id: 3,
    name: "Tarte aux Fruits",
    category: "Dessert",
    description:
      "Seasonal fruits arranged on vanilla pastry cream, nestled in a crisp, caramelized tart shell.",
    price: 7.50,
    image: "/images/special-tarte.jpg",
  },
];

export const coffeeMenu = [
  {
    id: 1,
    name: "Espresso",
    description: "Double shot, pure and intense",
    price: 3.50,
    icon: "☕",
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Espresso, steamed milk, silky foam",
    price: 5.00,
    icon: "☕",
  },
  {
    id: 3,
    name: "Café au Lait",
    description: "Equal parts coffee and steamed milk",
    price: 4.50,
    icon: "☕",
  },
  {
    id: 4,
    name: "Cortado",
    description: "Espresso cut with a touch of warm milk",
    price: 4.00,
    icon: "☕",
  },
  {
    id: 5,
    name: "Latte",
    description: "Smooth espresso with generous steamed milk",
    price: 5.50,
    icon: "☕",
  },
  {
    id: 6,
    name: "Americano",
    description: "Espresso diluted with hot water for a clean taste",
    price: 4.00,
    icon: "☕",
  },
  {
    id: 7,
    name: "Macchiato",
    description: "Espresso stained with a dash of foamed milk",
    price: 4.50,
    icon: "☕",
  },
  {
    id: 8,
    name: "Mocha",
    description: "Espresso, chocolate, steamed milk, whipped cream",
    price: 6.00,
    icon: "☕",
  },
];

export const menuCategories = [
  "Breakfast",
  "Coffee",
  "Tea",
  "Bread",
  "Croissants",
  "Pastries",
  "Sandwiches",
  "Pizza",
  "Desserts",
];

export const menuItems = [
  {
    id: 1,
    name: "Croissant au Beurre",
    category: "Croissants",
    description: "Classic French butter croissant, golden and flaky",
    price: 3.80,
    popular: true,
    image: "/images/menu-croissant.jpg",
  },
  {
    id: 2,
    name: "Pain au Chocolat",
    category: "Croissants",
    description: "Buttery croissant with dark chocolate filling",
    price: 4.50,
    popular: true,
    image: "/images/menu-pain-chocolat.jpg",
  },
  {
    id: 3,
    name: "Pain aux Raisins",
    category: "Croissants",
    description: "Swirl of crème pâtissière and plump raisins",
    price: 4.20,
    popular: false,
    image: "/images/menu-pain-raisins.jpg",
  },
  {
    id: 4,
    name: "Baguette Tradition",
    category: "Bread",
    description: "48-hour fermented sourdough baguette",
    price: 3.50,
    popular: true,
    image: "/images/menu-baguette.jpg",
  },
  {
    id: 5,
    name: "Pain de Campagne",
    category: "Bread",
    description: "Rustic country loaf with a thick crust",
    price: 5.00,
    popular: false,
    image: "/images/menu-campagne.jpg",
  },
  {
    id: 6,
    name: "Sourdough Boule",
    category: "Bread",
    description: "72-hour sourdough with wild levain",
    price: 6.50,
    popular: true,
    image: "/images/menu-sourdough.jpg",
  },
  {
    id: 7,
    name: "Espresso",
    category: "Coffee",
    description: "Double shot, pure and intense",
    price: 3.50,
    popular: true,
    image: "/images/menu-espresso.jpg",
  },
  {
    id: 8,
    name: "Cappuccino",
    category: "Coffee",
    description: "Espresso with steamed milk and silky foam",
    price: 5.00,
    popular: true,
    image: "/images/menu-cappuccino.jpg",
  },
  {
    id: 9,
    name: "Café au Lait",
    category: "Coffee",
    description: "Equal parts coffee and steamed milk",
    price: 4.50,
    popular: false,
    image: "/images/menu-cafe-lait.jpg",
  },
  {
    id: 10,
    name: "Matcha Latte",
    category: "Tea",
    description: "Ceremonial grade matcha with oat milk",
    price: 5.50,
    popular: true,
    image: "/images/menu-matcha.jpg",
  },
  {
    id: 11,
    name: "Earl Grey",
    category: "Tea",
    description: "Classic bergamot-scented black tea",
    price: 4.00,
    popular: false,
    image: "/images/menu-earl-grey.jpg",
  },
  {
    id: 12,
    name: "Oeufs en Cocotte",
    category: "Breakfast",
    description: "Baked eggs with crème fraîche and herbs",
    price: 9.50,
    popular: true,
    image: "/images/menu-oeufs.jpg",
  },
  {
    id: 13,
    name: "Tartine Avocat",
    category: "Breakfast",
    description: "Sourdough with smashed avocado and poached egg",
    price: 11.00,
    popular: true,
    image: "/images/menu-tartine.jpg",
  },
  {
    id: 14,
    name: "Granola Bowl",
    category: "Breakfast",
    description: "House granola with Greek yogurt and seasonal fruits",
    price: 8.50,
    popular: false,
    image: "/images/menu-granola.jpg",
  },
  {
    id: 15,
    name: "Croque Monsieur",
    category: "Sandwiches",
    description: "Classic ham and gruyère, baked until golden",
    price: 10.50,
    popular: true,
    image: "/images/menu-croque.jpg",
  },
  {
    id: 16,
    name: "Jambon-Beurre",
    category: "Sandwiches",
    description: "Parisian ham and butter on fresh baguette",
    price: 8.50,
    popular: false,
    image: "/images/menu-jambon.jpg",
  },
  {
    id: 17,
    name: "Margherita",
    category: "Pizza",
    description: "San Marzano, fresh mozzarella, basil",
    price: 14.00,
    popular: true,
    image: "/images/menu-margherita.jpg",
  },
  {
    id: 18,
    name: "Tarte au Citron",
    category: "Desserts",
    description: "Tangy lemon curd in a crisp tart shell",
    price: 7.50,
    popular: true,
    image: "/images/menu-citron.jpg",
  },
  {
    id: 19,
    name: "Mille-feuille",
    category: "Desserts",
    description: "Layers of puff pastry and vanilla cream",
    price: 8.00,
    popular: true,
    image: "/images/menu-mille-feuille.jpg",
  },
  {
    id: 20,
    name: "Paris-Brest",
    category: "Desserts",
    description: "Choux ring with praline mousseline cream",
    price: 9.00,
    popular: false,
    image: "/images/menu-paris-brest.jpg",
  },
];

export const shopProducts = [
  {
    id: 1,
    name: "Pain d'Épices",
    category: "Bread",
    price: 24.00,
    salePrice: 36.00,
    rating: 5,
    image: "/images/shop-pain-epices.jpg",
    description: "Traditional French spiced bread with honey and anise",
    inStock: true,
  },
  {
    id: 2,
    name: "Roule Saucisse",
    category: "Pastry",
    price: 29.00,
    rating: 5,
    image: "/images/shop-roule.jpg",
    description: "Savory sausage roll with herb butter pastry",
    inStock: true,
  },
  {
    id: 3,
    name: "Coffee Intense",
    category: "Coffee",
    price: 40.00,
    rating: 5,
    image: "/images/shop-coffee.jpg",
    description: "Our signature dark roast blend — notes of chocolate and hazelnut",
    inStock: true,
  },
  {
    id: 4,
    name: "Fruit Tart",
    category: "Pastry",
    price: 29.00,
    rating: 5,
    image: "/images/shop-tart.jpg",
    description: "Seasonal fruit on vanilla pastry cream",
    inStock: true,
  },
  {
    id: 5,
    name: "White Bread",
    category: "Bread",
    price: 24.00,
    rating: 4,
    image: "/images/shop-white-bread.jpg",
    description: "Soft French white bread with a golden crust",
    inStock: true,
  },
  {
    id: 6,
    name: "Coffee Strong",
    category: "Coffee",
    price: 40.00,
    rating: 5,
    image: "/images/shop-coffee-strong.jpg",
    description: "Extra bold espresso roast for the serious coffee lover",
    inStock: true,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Marie Dubois",
    role: "Food Critic, Le Monde",
    quote:
      "La Madeleine captures the soul of Parisian baking. Every bite transports you to a cobblestone street café. Truly exceptional craftsmanship.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jean-Pierre Laurent",
    role: "Regular Customer",
    quote:
      "I've been coming here for fifteen years. The croissants are better than any I've had in France — and I say that as a Parisian.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophie Chen",
    role: "Culinary Blogger",
    quote:
      "The attention to detail here is remarkable. From the perfectly laminated dough to the exquisite coffee, everything speaks of passion and mastery.",
    rating: 5,
  },
];

export const locations = [
  {
    id: 1,
    name: "La Madeleine — Montmartre",
    address: "127 Rue de Paris, 75018 Paris",
    phone: "+1 (555) 234-5678",
    hours: "Mon–Fri 6am–8pm, Sat 7am–9pm, Sun 7am–3pm",
    mapUrl: "#",
  },
  {
    id: 2,
    name: "La Madeleine — Le Marais",
    address: "45 Rue de Rivoli, 75004 Paris",
    phone: "+1 (555) 345-6789",
    hours: "Mon–Fri 6:30am–7:30pm, Sat–Sun 7am–6pm",
    mapUrl: "#",
  },
];

export const faqData = [
  {
    id: 1,
    category: "General",
    question: "What are your opening hours?",
    answer:
      "We're open Monday to Friday from 6:00 AM to 8:00 PM, Saturday from 7:00 AM to 9:00 PM, and Sunday from 7:00 AM to 3:00 PM. Our Montmartre location stays open one hour later on weekdays.",
  },
  {
    id: 2,
    category: "General",
    question: "Do you offer dine-in or is it takeaway only?",
    answer:
      "Both! We have a beautiful seating area with indoor and outdoor tables. Enjoy your freshly baked pastries and coffee in our warm, inviting space.",
  },
  {
    id: 3,
    category: "Products",
    question: "Are your products made with organic ingredients?",
    answer:
      "We source the finest ingredients available. While not everything is certified organic, we prioritize quality, sustainability, and working with local farmers and suppliers who share our values.",
  },
  {
    id: 4,
    category: "Products",
    question: "Do you have gluten-free or vegan options?",
    answer:
      "Yes! We offer a selection of gluten-free breads, pastries, and desserts. Our vegan range includes plant-based croissants, cookies, and dairy-free milk options for all our coffees.",
  },
  {
    id: 5,
    category: "Ordering",
    question: "Can I place an order for delivery?",
    answer:
      "Absolutely. You can order through our website or by calling us directly. We offer same-day delivery within central Paris for orders placed before 2:00 PM.",
  },
  {
    id: 6,
    category: "Ordering",
    question: "Do you cater for events and weddings?",
    answer:
      "We'd love to be part of your special day! We offer bespoke catering packages for weddings, corporate events, and private parties. Contact us at least two weeks in advance for custom orders.",
  },
  {
    id: 7,
    category: "General",
    question: "Is parking available near your bakery?",
    answer:
      "Our Montmartre location is near the Abbesses metro station (Line 12). Street parking is available, and there's a public parking garage on Rue des Abbesses. Le Marais is easily accessible via Saint-Paul metro (Line 1).",
  },
  {
    id: 8,
    category: "Ordering",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, contactless payments, Apple Pay, Google Pay, and cash. For large catering orders, we also accept bank transfers.",
  },
];
