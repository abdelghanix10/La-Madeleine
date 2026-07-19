"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";

const stats = [
  { value: 37, suffix: "+", label: "Years of Excellence" },
  { value: 150, suffix: "+", label: "Unique Products" },
  { value: 50000, suffix: "+", label: "Satisfied Customers" },
  { value: 3, suffix: "", label: "Paris Locations" },
];

export default function AboutStory() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal variant="fadeLeft">
            <div className="aspect-[4/5] bg-gradient-to-br from-dark/10 to-cream border border-dark/5 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-script text-6xl text-primary/20">Est.</span>
                  <br />
                  <span className="font-serif text-8xl text-dark/10">1987</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <p className="text-primary font-script text-2xl md:text-3xl mb-3">The Beginning</p>
              <h2 className="font-serif text-4xl md:text-5xl text-dark tracking-wide mb-8">
                A Family Legacy
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-dark/60 leading-relaxed mb-6">
                In the cobblestone streets of Montmartre, master boulanger Pierre Moreau opened
                the doors of La Madeleine with nothing but a sourdough starter passed down through
                four generations and an unwavering belief that bread is the soul of French culture.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-dark/60 leading-relaxed mb-6">
                Every morning at 3 AM, our bakers begin the ancient ritual — mixing, folding,
                fermenting. We use only stone-milled flour from the mills of Provence, Normandy
                butter with 84% fat content, and wild yeast cultures that have been alive since
                Pierre&apos;s grandmother first cultivated them in 1952.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-dark/60 leading-relaxed mb-10">
                Today, Pierre&apos;s daughter Élise carries the torch. Under her stewardship,
                La Madeleine has grown from a single Montmartre bakery to three beloved Paris
                locations — yet every croissant is still hand-rolled, every baguette scored by
                hand, and every pastry crafted with the same devotion that started it all.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-dark/10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-serif text-3xl text-primary mb-1">
                      <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} />
                    </div>
                    <p className="text-dark/50 text-xs tracking-wider uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
