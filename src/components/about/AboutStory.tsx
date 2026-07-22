"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";

const stats = [
  {
    value: new Date().getFullYear() - 2019,
    suffix: "+",
    label: "Years of Excellence",
  },
  { value: 150, suffix: "+", label: "Unique Products" },
  { value: 100, suffix: "K+", label: "Satisfied Customers" },
];

export default function AboutStory() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal variant="fadeLeft">
            <div className="aspect-4/5 bg-linear-to-br from-dark/10 to-cream border border-dark/5 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-script text-6xl text-primary/20">
                    Est.
                  </span>
                  <br />
                  <span className="font-serif text-8xl text-dark/10">2019</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <p className="text-primary font-script text-2xl md:text-3xl mb-3">
                A Legacy of
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-dark tracking-wide mb-8">
                Artisanal Passion
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-dark/60 leading-relaxed mb-6">
                In 2019, a deep love for traditional baking brought the charm of
                a classic French salon de thé to the heart of Agadir. Armed with
                perfected recipes, a commitment to exceptional coffee, and an
                uncompromising dedication to quality, La Madeline opened its
                doors to a community that appreciates the finer details.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-dark/60 leading-relaxed mb-6">
                Today, we still rise before the sun. We still fold every
                croissant by hand. We still pair our meticulously crafted
                pastries with perfectly pulled shots of espresso. Because at La
                Madeline, creating the perfect café experience isn&apos;t about
                rushing the process — it&apos;s about time, precision, and an
                enduring love for the craft.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-dark/10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-serif text-3xl text-primary mb-1">
                      <CountUp
                        end={stat.value}
                        suffix={stat.suffix}
                        duration={2.5}
                      />
                    </div>
                    <p className="text-dark/50 text-xs tracking-wider uppercase">
                      {stat.label}
                    </p>
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
