"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

const sections = [
  {
    title: "What Are Cookies",
    content:
      "Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.",
  },
  {
    title: "How We Use Cookies",
    content:
      "We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. Cookies help us understand how you interact with our website and allow us to remember your preferences.",
  },
  {
    title: "Types of Cookies We Use",
    content:
      "Essential Cookies: These are necessary for the website to function properly. They enable core functionality such as security, network management, and account access.\n\nAnalytics Cookies: These help us understand how visitors interact with our website by collecting and reporting information anonymously.\n\nPreference Cookies: These allow the website to remember choices you make, such as your language or region.\n\nMarketing Cookies: These are used to track visitors across websites to display relevant advertisements.",
  },
  {
    title: "Third-Party Cookies",
    content:
      "We may use third-party services that set cookies on your device. These include analytics providers such as Google Analytics, which helps us understand how our website is used. These third parties have their own privacy policies governing how they use information.",
  },
  {
    title: "Managing Cookies",
    content:
      "You can control and manage cookies through your browser settings. Most browsers allow you to refuse or accept cookies, delete existing cookies, and set preferences for certain websites. Please note that disabling cookies may affect the functionality of our website.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Cookie Policy from time to time to reflect changes in technology or legislation. Any updates will be posted on this page with an revised effective date.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about our use of cookies, please contact us at contact@lamadeleine.ma or visit our contact page.",
  },
];

export default function CookiePolicyContent() {
  return (
    <section dir="ltr" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-sm text-primary/70 mb-8 font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Effective Date: January 1, 2024
        </motion.p>

        <motion.p
          className="text-text/70 leading-relaxed mb-12 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          At La Madeleine, we value your privacy and are committed to being
          transparent about the technologies we use. This Cookie Policy explains
          how we use cookies and similar tracking technologies when you visit our
          website.
        </motion.p>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <ScrollReveal key={index} variant="fadeUp">
              <div className="bg-white rounded-2xl border border-dark/8 p-7 md:p-8 shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-7 rounded-full bg-primary/10 text-primary font-serif text-xs font-bold flex items-center justify-center shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-serif text-2xl text-dark tracking-wide">
                    {section.title}
                  </h2>
                </div>
                <div className="text-dark/70 text-sm leading-relaxed font-sans whitespace-pre-line pl-10">
                  {section.content}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
