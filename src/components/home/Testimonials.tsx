"use client";


import { Quote } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Eyebrow } from "@/components/ui/Brand";

export default function HomeTestimonials() {
  const items = [
    {
      quote:
        "Un charmant salon de thé, des pâtisseries excellentes et des jus frais remarquables.",
      name: "Ryu Z.",
      role: "Habitué",
    },
    {
      quote:
        "Service adorable, lieu très propre, nourriture absolument délicieuse. On y revient.",
      name: "Halima E.",
      role: "Cliente",
    },
    {
      quote: "Endroit calme, bon service, gens sympathiques. Parfait le matin.",
      name: "Soufiane",
      role: "Habitué",
    },
  ];
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <ScrollReveal>
            <Eyebrow>Ils nous aiment</Eyebrow>
            <h2 className="display-section mt-5 font-serif font-medium text-dark">
              Paroles d&apos;habitués.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <span className="font-serif text-6xl leading-none text-dark/10">
              &ldquo;
            </span>
          </ScrollReveal>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.08}>
              <figure
                className={`flex h-full flex-col justify-between rounded-[24px] border p-7 transition-all hover:-translate-y-1 hover:shadow-xl ${
                  i === 1
                    ? "border-dark bg-dark text-cream"
                    : "border-dark/8 bg-[#fffdf9] text-dark"
                }`}
              >
                <div>
                  <Quote
                    size={22}
                    className={i === 1 ? "text-primary" : "text-primary-dark"}
                  />
                  <blockquote
                    className={`mt-4 font-serif text-[21px] leading-snug ${
                      i === 1 ? "text-cream" : "text-dark"
                    }`}
                  >
                    {t.quote}
                  </blockquote>
                </div>
                <figcaption
                  className={`mt-6 border-t pt-4 text-[12px] uppercase tracking-[0.18em] ${
                    i === 1
                      ? "border-cream/10 text-cream/60"
                      : "border-dark/8 text-dark/50"
                  }`}
                >
                  <span className="font-bold">{t.name}</span> — {t.role}
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

