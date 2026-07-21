"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative h-[70vh] min-h-125 flex items-center bg-dark overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/background/bg-contact.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-dark/45" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C89A2B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.p
          className="text-primary font-script text-2xl md:text-3xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Get in Touch
        </motion.p>
        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream tracking-wide leading-[0.95]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Contact Us
        </motion.h1>
        <motion.div
          className="w-20 h-0.5 bg-primary mt-8"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        />
      </div>
    </section>
  );
}
