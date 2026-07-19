"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <ScrollReveal>
          <p className="text-primary font-script text-2xl md:text-3xl mb-3">
            Stay Connected
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark tracking-wide mb-4">
            Join Our World
          </h2>
          <p className="text-dark/50 mb-10 max-w-md mx-auto">
            Receive exclusive offers, seasonal menus, and stories from our
            bakery — delivered to your inbox.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-6"
            >
              <p className="font-serif text-2xl text-primary mb-2">
                Merci!
              </p>
              <p className="text-dark/60">
                You&apos;re now part of the La Madeleine family.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-6 py-4 bg-background border border-dark/10 text-dark placeholder:text-dark/30 text-sm focus:outline-none focus:border-primary transition-colors duration-300"
              />
              <motion.button
                type="submit"
                className="bg-dark hover:bg-primary text-cream hover:text-dark px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
                <Send size={14} />
              </motion.button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
