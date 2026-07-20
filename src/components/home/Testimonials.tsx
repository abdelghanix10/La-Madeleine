"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (p) => (p - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-hover to-dark" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23C89A2B' fill-opacity='0.3'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-12">
          <p className="text-primary font-script text-2xl md:text-3xl mb-3">
            What They Say
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide">
            Testimonials
          </h2>
        </ScrollReveal>

        <div className="relative min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center"
            >
              <Quote
                size={40}
                className="text-primary/40 mx-auto mb-6"
              />

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-8">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-primary fill-primary"
                  />
                ))}
              </div>

              <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream/90 leading-relaxed mb-8 max-w-3xl mx-auto italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div>
                <p className="text-cream text-sm tracking-[0.3em] uppercase font-medium">
                  {t.name}
                </p>
                <p className="text-primary/70 text-xs tracking-wider mt-1">
                  {t.role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-10 h-10 border border-cream/20 flex items-center justify-center text-cream/60 hover:text-primary hover:border-primary transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`transition-all duration-300 ${
                  i === current
                    ? "w-8 h-0.5 bg-primary"
                    : "w-4 h-0.5 bg-cream/30 hover:bg-cream/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 border border-cream/20 flex items-center justify-center text-cream/60 hover:text-primary hover:border-primary transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
