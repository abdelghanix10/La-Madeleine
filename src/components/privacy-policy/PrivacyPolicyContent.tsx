"use client";

const SECTIONS = [
  {
    title: "Données que nous collectons",
    text: "Nom, email, téléphone lorsque vous nous écrivez via le formulaire de contact. Données de navigation anonymisées (pages visitées, appareil, navigateur) pour améliorer le site. Aucune donnée sensible n'est collectée.",
  },
  {
    title: "Utilisation de vos données",
    text: "Répondre à vos messages sous 24h. Préparer vos commandes et devis. Améliorer la carte et l'accueil. Vous ne recevrez jamais de prospection sans votre accord explicite.",
  },
  {
    title: "Partage des données",
    text: "Nous ne vendons ni ne louons vos données. Elles ne sont partagées qu'avec nos prestataires techniques strictement nécessaires (hébergement), et uniquement si la loi l'exige.",
  },
  {
    title: "Conservation",
    text: "Messages : 3 ans maximum. Données de navigation : 13 mois maximum. Passé ces délais, vos données sont supprimées ou anonymisées.",
  },
  {
    title: "Vos droits",
    text: "Accès, rectification, suppression, opposition, portabilité. Écrivez à contact@lamadeleine.ma — réponse sous 30 jours. Réclamation possible auprès de la CNDP.",
  },
  {
    title: "Sécurité",
    text: "Chiffrement HTTPS, accès restreint, sauvegardes régulières. Aucun système n'est infaillible : en cas d'incident, nous vous préviendrons sans délai.",
  },
  {
    title: "Nous contacter",
    text: "La Madeleine Agadir — Av. Al Oulfa, Tilila, Agadir 80000 — contact@lamadeleine.ma — 05 28 26 43 44.",
  },
];

export default function PrivacyPolicyContent() {
  return (
    <section className="bg-ivory px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-dark/40">
          En vigueur : janvier 2025
        </p>
        <p className="mt-4 text-[16px] leading-relaxed text-muted">
          Votre vie privée compte autant que votre petit-déjeuner. Voici,
          simplement et sans jargon, comment nous traitons vos données lorsque
          vous visitez lamadeleine.ma ou nous écrivez.
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
