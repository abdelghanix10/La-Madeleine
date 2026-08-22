"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or make a purchase. This may include your name, email address, phone number, and payment information.\n\nWe also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and browsing behavior.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use the information we collect to:\n\n• Provide, maintain, and improve our services\n• Process transactions and send related information\n• Send you technical notices and support messages\n• Respond to your comments and questions\n• Communicate with you about products, services, and events\n• Monitor and analyze trends and usage\n• Detect, investigate, and prevent fraudulent transactions",
  },
  {
    title: "Information Sharing",
    content:
      "We do not sell your personal information. We may share your information with third-party service providers who perform services on our behalf, such as payment processing, email delivery, and analytics.\n\nWe may also disclose your information if required by law or in response to valid requests by public authorities.",
  },
  {
    title: "Data Security",
    content:
      "We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Data Retention",
    content:
      "We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements.",
  },
  {
    title: "Your Rights",
    content:
      "Depending on your location, you may have the following rights:\n\n• Access the personal information we hold about you\n• Request correction of inaccurate data\n• Request deletion of your personal information\n• Object to processing of your data\n• Request data portability\n• Withdraw consent at any time\n\nTo exercise these rights, please contact us at contact@lamadeleine.ma.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about this Privacy Policy, please contact us at contact@lamadeleine.ma or visit our contact page.",
  },
];

export default function PrivacyPolicyContent() {
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
          Your privacy is important to us. This Privacy Policy explains how La
          Madeleine collects, uses, and protects your personal information when
          you visit our website or use our services.
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
