"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";

const inputCls =
  "w-full rounded-2xl border border-dark/10 bg-white/80 px-5 py-3.5 text-[15px] text-dark outline-none transition-all placeholder:text-dark/35 focus:border-primary focus:ring-4 focus:ring-primary/15";

export default function ContactPremium() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { data, t } = useLanguage();
  const phoneHref = `tel:${data.siteConfig.phone.replace(/[.\s-]/g, "")}`;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(null);

    const formValues = Object.fromEntries(
      new FormData(e.currentTarget).entries(),
    );

    const formData = {
      access_key: "b917540a-a17f-4f5c-bd8e-d83443d2a0f4",
      ...formValues,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setSent(true);
    } catch {
      setError(t("contactPremiumErrorMessage"));
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="bg-ivory pb-20 md:pb-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 pt-12 md:px-10 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Infos */}
        <ScrollReveal>
          <div className="flex h-full flex-col gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Phone,
                  label: "contactPremiumPhoneLabel",
                  value: data.siteConfig.phone,
                  href: phoneHref,
                },
                {
                  icon: Mail,
                  label: "contactPremiumEmailLabel",
                  value: data.siteConfig.email,
                  href: `mailto:${data.siteConfig.email}`,
                },
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
                    {t(
                      label as
                        | "contactPremiumPhoneLabel"
                        | "contactPremiumEmailLabel",
                    )}
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
                {data.siteConfig.address}
              </p>
              <p className="mt-4 flex items-center gap-3 text-[15px] text-cream/75">
                <Clock size={18} className="shrink-0 text-primary" />
                {data.siteConfig.hours[0].day} · {data.siteConfig.hours[0].time}
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-cream/10">
                <iframe
                  title={t("contactPremiumMapTitle")}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.858666837468!2d-9.528228968629396!3d30.402064943861852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c9965a5026d3%3A0x736a8bf5957eefa9!2sCaf%C3%A9%20%26%20P%C3%A2tisserie%20Lamadeleine!5e1!3m2!1sen!2sma!4v1784648271235!5m2!1sen!2sma"
                  className="h-56 w-full grayscale-[15%]"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
              <a
                href={data.siteConfig.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow mt-5 text-cream hover:text-primary"
              >
                {t("contactPremiumDirections")} →
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
                <h2 className="mt-6 font-serif text-4xl text-dark">
                  {t("contactPremiumSuccessTitle")}
                </h2>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
                  {t("contactPremiumSuccessMessage")}
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-ghost mt-8"
                >
                  {t("contactPremiumAnotherMessage")}
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
              >
                <p className="font-script text-3xl text-primary-dark">
                  {t("contactPremiumWriteTitle")}
                </p>
                <h2 className="mt-1 font-serif text-3xl text-dark md:text-4xl">
                  {t("contactPremiumFormTitle")}
                </h2>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-dark/50">
                      {t("contactPremiumNameLabel")}
                    </span>
                    <input
                      required
                      name="name"
                      placeholder={t("contactPremiumNamePlaceholder")}
                      className={inputCls}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-dark/50">
                      {t("contactPremiumPhoneLabel")}
                    </span>
                    <input
                      name="phone"
                      placeholder={t("contactPremiumPhonePlaceholder")}
                      className={inputCls}
                    />
                  </label>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-dark/50">
                      {t("contactPremiumEmailLabel")} *
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder={t("contactPremiumEmailPlaceholder")}
                      className={inputCls}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-dark/50">
                      {t("contactPremiumSubjectLabel")}
                    </span>
                    <select required name="subject" className={inputCls} defaultValue="">
                      <option value="" disabled>
                        {t("contactPremiumSubjectPlaceholder")}
                      </option>
                      <option>{t("contactPremiumSubjectOrder")}</option>
                      <option>{t("contactPremiumSubjectEvent")}</option>
                      <option>{t("contactPremiumSubjectMenu")}</option>
                      <option>{t("contactPremiumSubjectPartnership")}</option>
                      <option>{t("contactPremiumSubjectOther")}</option>
                    </select>
                  </label>
                </div>
                <label className="mt-4 block">
                  <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-dark/50">
                    {t("contactPremiumMessageLabel")}
                  </span>
                  <textarea
                    required
                    rows={5}
                    name="message"
                    placeholder={t("contactPremiumMessagePlaceholder")}
                    className={`${inputCls} resize-none`}
                  />
                </label>
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary mt-7 w-full !py-4 disabled:opacity-60 sm:w-auto sm:!px-10"
                >
                  {sending
                    ? t("contactPremiumSending")
                    : t("contactPremiumSend")}
                  {!sending && <Send size={15} />}
                </button>
                {error && (
                  <p className="mt-4 rounded-2xl border border-red-500/20 bg-red-50 px-4 py-3 text-[13px] leading-relaxed text-red-700">
                    {error}
                  </p>
                )}
                <p className="mt-4 text-[12px] leading-relaxed text-dark/40">
                  {t("contactPremiumConsent")}
                </p>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
