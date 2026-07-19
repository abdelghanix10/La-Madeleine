"use client";

import ScrollReveal, {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/ScrollReveal";

const milestones = [
  {
    year: "1987",
    title: "The First Oven",
    description:
      "Pierre Moreau opens the first La Madeleine on Rue Lepic, Montmartre. A single wood-fired oven, a dream, and a sourdough starter from his grandmother.",
  },
  {
    year: "1995",
    title: "Award-Winning Croissant",
    description:
      "La Madeleine's croissant au beurre wins the Grand Prix de la Boulangerie, putting our bakery on the map as one of Paris's finest.",
  },
  {
    year: "2003",
    title: "Le Marais Expansion",
    description:
      "The second location opens in Le Marais, bringing our artisan breads and pastries to a wider Parisian audience.",
  },
  {
    year: "2012",
    title: "Coffee Program Launch",
    description:
      "We partner with specialty roasters and install a state-of-the-art espresso bar, becoming a true bakery and coffee house.",
  },
  {
    year: "2019",
    title: "Élise Takes the Lead",
    description:
      "Pierre's daughter Élise Moreau assumes creative direction, introducing modern French pâtisserie while honoring tradition.",
  },
  {
    year: "2024",
    title: "Third Location",
    description:
      "La Madeleine opens in Saint-Germain-des-Prés, continuing the legacy with the same passion, craft, and love.",
  },
];

export default function AboutTimeline() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="text-primary font-script text-2xl md:text-3xl mb-3">Our Journey</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark tracking-wide">
            Milestones
          </h2>
        </ScrollReveal>

        <StaggerChildren className="relative" staggerDelay={0.15}>
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-dark/10 -translate-x-1/2" />

          {milestones.map((m, i) => (
            <StaggerItem key={m.year}>
              <div
                className={`relative flex items-start gap-8 mb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-2 z-10 ring-4 ring-cream" />

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                  }`}
                >
                  <span className="font-serif text-3xl text-primary">{m.year}</span>
                  <h3 className="font-serif text-xl text-dark mt-2 mb-2">{m.title}</h3>
                  <p className="text-dark/50 text-sm leading-relaxed">{m.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
