"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";

const stats = [
  { value: 37, suffix: "+", label: "Years of Craft" },
  { value: 150, suffix: "+", label: "Unique Products" },
  { value: 50, suffix: "K+", label: "Happy Customers" },
  { value: 3, suffix: "", label: "Locations" },
];

export default function BakeryStory() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <ScrollReveal variant="fadeLeft">
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-dark to-dark-hover overflow-hidden">
                {/* Placeholder with decorative element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full border border-primary/30 flex items-center justify-center">
                      <span className="font-script text-4xl text-primary/60">
                        Est.
                      </span>
                    </div>
                    <span className="font-serif text-6xl text-cream/10">
                      1987
                    </span>
                  </div>
                </div>
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-dark p-6 shadow-xl">
                <span className="font-script text-3xl">Since</span>
                <br />
                <span className="font-serif text-4xl font-bold">1987</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Text side */}
          <div>
            <ScrollReveal variant="fadeRight">
              <p className="text-primary font-script text-2xl md:text-3xl mb-3">
                Our Story
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-dark tracking-wide mb-8 leading-tight">
                A Legacy of
                <br />
                French Artistry
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.1}>
              <p className="text-dark/60 leading-relaxed mb-6">
                In 1987, master boulanger Pierre Moreau brought the traditions of
                his grandmother&apos;s kitchen in Provence to life. With nothing
                but a sourdough starter, a wood-fired oven, and an unwavering
                commitment to craft, he opened the first La Madeleine on a quiet
                street in Montmartre.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.2}>
              <p className="text-dark/60 leading-relaxed mb-10">
                Today, three decades later, we still rise before dawn. We still
                ferment our doughs for 72 hours. We still source Normandy butter
                and stone-milled flour. Because the art of French baking is not
                about shortcuts — it&apos;s about time, patience, and love.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.3}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-dark/10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-serif text-3xl md:text-4xl text-primary mb-1">
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
