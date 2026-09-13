"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";

const CATS = ["Tout", "Commande", "Menu", "Livraison", "Nos cafés", "Produits", "Paiement"] as const;

const FAQS: { cat: (typeof CATS)[number]; q: string; a: string }[] = [
  { cat: "Commande", q: "Comment passer une commande ?", a: "Appelez-nous au 05 28 26 43 44 ou passez directement à Tilila. Pour les grandes pièces (mariages, événements), contactez-nous au moins une semaine à l'avance via la page Contact." },
  { cat: "Commande", q: "Faites-vous des gâteaux sur mesure ?", a: "Oui — pièces d'anniversaire, mariages, événements d'entreprise. Envoyez-nous votre idée (parts, parfums, date) et nous vous proposons un devis sous 24h." },
  { cat: "Menu", q: "Que proposez-vous le matin ?", a: "Petit-déjeuners marocains et continentaux : hssoua, omelettes, msemmen, harcha, amlou, jus d'orange pressé et café. Servis de 6h00 à 12h, 7j/7." },
  { cat: "Menu", q: "Avez-vous des options végétariennes ?", a: "Oui, une grande partie de la carte : omelettes, salades de fruits, jus frais, harcha, msemmen, amlou, fromages et la plupart des viennoiseries." },
  { cat: "Livraison", q: "Livrez-vous à Agadir ?", a: "Pour le moment, le retrait sur place est privilégié pour garantir la fraîcheur. Appelez-nous : nous préparons votre commande à l'avance pour un retrait express." },
  { cat: "Livraison", q: "Proposez-vous le traiteur événementiel ?", a: "Avec plaisir — mariages, séminaires, fêtes privées. Formules sur mesure, mini-viennoiseries et pièces cocktail. Devis sous 24h." },
  { cat: "Nos cafés", q: "Où vous trouver ?", a: "Av. Al Oulfa, Tilila, Agadir 80000. Ouvert Lun — Dim, 6h00 — 22h00. Itinéraire direct depuis la page Nos cafés." },
  { cat: "Nos cafés", q: "Y a-t-il une terrasse ? Peut-on travailler sur place ?", a: "Oui — terrasse ensoleillée et salle calme, parfaite pour travailler, bouquiner ou bruncher en famille." },
  { cat: "Produits", q: "Tout est-il fait maison ?", a: "Oui, à 100% : pâtes feuilletées, pains, crêpes, jus pressés minute. Rien d'industriel, jamais." },
  { cat: "Produits", q: "Proposez-vous des produits sans gluten / sans lactose ?", a: "Certaines créations (salades de fruits, jus, amlou) conviennent naturellement. Demandez-nous en boutique : nous vous guidons selon vos intolérances." },
  { cat: "Paiement", q: "Quels moyens de paiement acceptez-vous ?", a: "Espèces sur place. Pour les grosses commandes événementielles, acompte possible — discutons-en directement." },
  { cat: "Paiement", q: "Puis-je réserver une table ?", a: "Pas de réservation obligatoire : passez quand vous voulez. Pour les groupes de 8+, un petit appel nous aide à vous garder la plus belle table." },
];

export default function FaqPremium() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("Tout");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<number | null>(0);

  const list = useMemo(() => {
    return FAQS.map((f, i) => ({ ...f, i })).filter(
      (f) =>
        (cat === "Tout" || f.cat === cat) &&
        (!q ||
          f.q.toLowerCase().includes(q.toLowerCase()) ||
          f.a.toLowerCase().includes(q.toLowerCase())),
    );
  }, [cat, q]);

  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 md:px-10">
      {/* Search + cats */}
      <ScrollReveal className="-mt-2">
        <div className="rounded-[28px] border border-dark/8 bg-[#fffdf9] p-5 shadow-sm md:p-7">
          <div className="relative">
            <Search size={17} className="absolute left-5 top-1/2 -translate-y-1/2 text-dark/35" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Rechercher une question… (ex : livraison, terrasse)"
              className="w-full rounded-full border border-dark/10 bg-ivory py-3.5 pl-12 pr-5 text-[15px] outline-none focus:border-primary focus:ring-4 focus:ring-primary/15"
            />
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCat(c);
                  setOpen(null);
                }}
                className={`shrink-0 rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] transition-all ${
                  cat === c
                    ? "bg-dark text-cream"
                    : "border border-dark/10 text-dark/55 hover:text-dark"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Accordion */}
      <div className="mt-8 space-y-4">
        <AnimatePresence mode="popLayout">
          {list.map((f) => {
            const isOpen = open === f.i;
            return (
              <motion.div
                layout
                key={f.i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.99 }}
                className={`overflow-hidden rounded-[22px] border transition-all ${
                  isOpen
                    ? "border-dark bg-dark text-cream shadow-xl"
                    : "border-dark/8 bg-[#fffdf9] hover:border-dark/20"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : f.i)}
                  className="flex w-full items-center gap-5 p-6 text-left md:p-7"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`hidden font-serif text-sm tracking-[0.2em] sm:block ${
                      isOpen ? "text-primary" : "text-dark/30"
                    }`}
                  >
                    {String(f.i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span
                      className={`block text-[10px] font-bold uppercase tracking-[0.22em] ${
                        isOpen ? "text-primary" : "text-primary-dark"
                      }`}
                    >
                      {f.cat}
                    </span>
                    <span
                      className={`mt-1.5 block font-serif text-[22px] leading-snug md:text-2xl ${
                        isOpen ? "text-cream" : "text-dark"
                      }`}
                    >
                      {f.q}
                    </span>
                  </span>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-primary text-dark"
                        : "bg-dark/5 text-dark"
                    }`}
                  >
                    <Plus size={18} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <p className="px-6 pb-7 pl-6 text-[15px] leading-relaxed text-cream/70 sm:pl-[68px] md:px-7 md:pl-[68px]">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
        {list.length === 0 && (
          <div className="rounded-3xl border border-dashed border-dark/15 py-16 text-center">
            <p className="font-serif text-2xl text-dark/50">Aucune réponse trouvée</p>
            <p className="mt-2 text-[14px] text-muted">Essayez un autre mot-clé, ou écrivez-nous.</p>
          </div>
        )}
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[28px] bg-[#efe6d6] p-8 text-center md:flex-row md:p-10 md:text-left">
        <div>
          <p className="font-script text-3xl text-primary-dark">Encore une question ?</p>
          <p className="mt-1 font-serif text-2xl text-dark md:text-3xl">
            Écrivez-nous, on répond vite.
          </p>
        </div>
        <Link href="/contact" className="btn-primary shrink-0">
          Nous contacter <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
