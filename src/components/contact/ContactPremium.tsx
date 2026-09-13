"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const inputCls =
  "w-full rounded-2xl border border-dark/10 bg-white/80 px-5 py-3.5 text-[15px] text-dark outline-none transition-all placeholder:text-dark/35 focus:border-primary focus:ring-4 focus:ring-primary/15";

export default function ContactPremium() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  return (
    <div className="bg-ivory pb-20 md:pb-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 pt-12 md:px-10 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Infos */}
        <ScrollReveal>
          <div className="flex h-full flex-col gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Phone, label: "Téléphone", value: "05 28 26 43 44", href: "tel:0528264344" },
                { icon: Mail, label: "Email", value: "contact@lamadeleine.ma", href: "mailto:contact@lamadeleine.ma" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group rounded-3xl border border-dark/8 bg-[#fffdf9] p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-dark text-primary transition-colors group-hover:bg-primary group-hover:text-dark">
                    <Icon size={18} />
                  </span>
                  <span className="mt-4 block text-[11px] font-bold uppercase tracking-[0.2em] text-dark/45">
                    {label}
                  </span>
                  <span className="mt-1 block font-serif text-xl text-dark">
                    {value}
                  </span>
                </a>
              ))}
            </div>
            <div className="rounded-3xl bg-dark p-7 text-cream md:p-8">
              <p className="flex items-start gap-3 text-[15px] leading-relaxed">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                Av. Al Oulfa, Tilila,
                <br />
                Agadir 80000
              </p>
              <p className="mt-4 flex items-center gap-3 text-[15px] text-cream/75">
                <Clock size={18} className="shrink-0 text-primary" />
                Lun — Dim · 6h00 — 22h00
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-cream/10">
                <iframe
                  title="La Madeleine — carte"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.858666837468!2d-9.528228968629396!3d30.402064943861852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c9965a5026d3%3A0x736a8bf5957eefa9!2sCaf%C3%A9%20%26%20P%C3%A2tisserie%20Lamadeleine!5e1!3m2!1sen!2sma!4v1784648271235!5m2!1sen!2sma"
                  className="h-56 w-full grayscale-[15%]"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/Z5memQUhJrBtShyx7"
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow mt-5 text-cream hover:text-primary"
              >
                Itinéraire →
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Form */}
        <ScrollReveal delay={0.1}>
          <div className="h-full rounded-[28px] border border-dark/8 bg-[#fffdf9] p-7 shadow-sm md:p-10">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full min-h-[420px] flex-col items-center justify-center text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-900/10 text-emerald-900">
                  <CheckCircle2 size={30} />
                </span>
                <h2 className="mt-6 font-serif text-4xl text-dark">Merci !</h2>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
                  Votre message a bien été préparé. Appelez-nous au 05 28 26 43 44
                  pour une réponse immédiate, ou passez nous voir à Tilila.
                </p>
                <button onClick={() => setSent(false)} className="btn-ghost mt-8">
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSending(true);
                  setTimeout(() => {
                    setSending(false);
                    setSent(true);
                  }, 900);
                }}
              >
                <p className="font-script text-3xl text-primary-dark">
                  Écrivez-nous
                </p>
                <h2 className="mt-1 font-serif text-3xl text-dark md:text-4xl">
                  On vous répond sous 24h.
                </h2>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-dark/50">
                      Nom *
                    </span>
                    <input required placeholder="Votre nom" className={inputCls} />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-dark/50">
                      Téléphone
                    </span>
                    <input placeholder="06 XX XX XX XX" className={inputCls} />
                  </label>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-dark/50">
                      Email *
                    </span>
                    <input
                      required
                      type="email"
                      placeholder="vous@exemple.com"
                      className={inputCls}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-dark/50">
                      Sujet *
                    </span>
                    <select required className={inputCls} defaultValue="">
                      <option value="" disabled>
                        Choisir…
                      </option>
                      <option>Commande / devis</option>
                      <option>Mariage / événement</option>
                      <option>Question sur la carte</option>
                      <option>Partenariat</option>
                      <option>Autre</option>
                    </select>
                  </label>
                </div>
                <label className="mt-4 block">
                  <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-dark/50">
                    Message *
                  </span>
                  <textarea
                    required
                    rows={5}
                    placeholder="Racontez-nous votre envie : date, nombre de parts, parfums aimés…"
                    className={`${inputCls} resize-none`}
                  />
                </label>
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary mt-7 w-full !py-4 disabled:opacity-60 sm:w-auto sm:!px-10"
                >
                  {sending ? "Envoi…" : "Envoyer le message"}
                  {!sending && <Send size={15} />}
                </button>
                <p className="mt-4 text-[12px] leading-relaxed text-dark/40">
                  En envoyant ce formulaire, vous acceptez d&apos;être recontacté
                  par La Madeleine. Voir notre politique de confidentialité.
                </p>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
