"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { siteConfig } from "@/lib/data";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  { icon: MapPin, label: "Address", value: siteConfig.address, href: "#" },
  {
    icon: Clock,
    label: "Hours",
    value: Array.isArray(siteConfig.hours)
      ? siteConfig.hours.map((h) => `${h.day}: ${h.time}`).join(" | ")
      : `${(siteConfig.hours as { day: string; time: string }).day}: ${(siteConfig.hours as { day: string; time: string }).time}`,
    href: "#",
  },
];

export default function Newsletter() {
  return (
    <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-primary font-script text-2xl md:text-3xl mb-3">
              Get in Touch
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark tracking-wide mb-4">
              Contact Us
            </h2>
            <p className="text-dark/50 max-w-md mx-auto">
              We&apos;d love to hear from you. Reach out for reservations,
              catering inquiries, or just to say bonjour.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactDetails.map((item) => (
              <motion.a
                key={item.label}
                {...(item.href !== "#" && { href: item.href })}
                className="block bg-background p-6 border border-dark/5 hover:border-primary/20 text-center transition-all duration-500 group"
                whileHover={{ y: -4 }}
              >
                <item.icon
                  size={24}
                  className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <p className="text-dark/40 text-xs tracking-[0.2em] uppercase mb-2">
                  {item.label}
                </p>
                <p className="text-dark text-sm">{item.value}</p>
              </motion.a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <motion.a
              href="/contact"
              className="inline-block bg-dark hover:bg-primary text-cream hover:text-dark px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Us a Message
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
