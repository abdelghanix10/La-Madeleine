"use client";

const SECTIONS = [
  {
    title: "Ce qu'est un cookie",
    text: "Un petit fichier texte déposé sur votre appareil pour mémoriser vos préférences, mesurer l'audience et faire fonctionner le site correctement.",
  },
  {
    title: "Ce que nous utilisons",
    text: "Cookies essentiels (panier, sécurité, consentement). Mesure d'audience anonymisée. Préférence de langue. Aucun cookie publicitaire intrusif.",
  },
  {
    title: "Cookies tiers",
    text: "Carte Google Maps sur les pages Cafés et Contact, et mesure d'audience. Ces services ont leurs propres politiques de confidentialité.",
  },
  {
    title: "Gérer vos cookies",
    text: "Refusez ou supprimez les cookies depuis votre navigateur (Chrome, Safari, Firefox : Réglages > Confidentialité). Le site reste utilisable sans cookies non essentiels.",
  },
  {
    title: "Nous contacter",
    text: "Une question ? contact@lamadeleine.ma — Av. Al Oulfa, Tilila, Agadir.",
  },
];

export default function CookiePolicyContent() {
  return (
    <section className="bg-ivory px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-dark/40">
          En vigueur : janvier 2025
        </p>
        <p className="mt-4 text-[16px] leading-relaxed text-muted">
          Nous utilisons peu de cookies, et uniquement pour ce qui sert votre
          visite. Voici le détail, en toute transparence.
        </p>
        <div className="mt-10 space-y-5">
          {SECTIONS.map((s, i) => (
            <article
              key={s.title}
              className="rounded-3xl border border-dark/8 bg-[#fffdf9] p-7 md:p-8"
            >
              <h2 className="flex items-center gap-3 font-serif text-2xl text-dark">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 font-sans text-[12px] font-bold text-primary-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.title}
              </h2>
              <p className="mt-3 pl-11 text-[15px] leading-relaxed text-dark/70">
                {s.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
