"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import ScrollReveal, {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactContent() {
  const { data, t } = useLanguage();
  const { siteConfig } = data;
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      label: t("phone"),
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone}`,
    },
    {
      icon: Mail,
      label: t("email"),
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    { icon: MapPin, label: t("address"), value: siteConfig.address, href: "#" },
    {
      icon: Clock,
      label: t("hours"),
      value: Array.isArray(siteConfig.hours)
        ? siteConfig.hours.map((h) => `${h.day}: ${h.time}`).join(" | ")
        : `${(siteConfig.hours as { day: string; time: string }).day}: ${(siteConfig.hours as { day: string; time: string }).time}`,
      href: "#",
    },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const formData = {
      access_key: "b917540a-a17f-4f5c-bd8e-d83443d2a0f4",
      ...data,
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      setSubmitted(true);
      reset();
    }
  };

  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Contact info cards */}
        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          staggerDelay={0.1}
        >
          {contactInfo.map((info) => (
            <StaggerItem key={info.label}>
              <motion.a
                {...(info.href !== "#" && { href: info.href })}
                className="block bg-white p-6 rounded-2xl border border-dark/8 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group shadow-xs h-full"
                whileHover={{ y: -3 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
                  <info.icon size={22} className="text-primary" />
                </div>
                <p className="text-dark/40 text-[11px] tracking-[0.2em] uppercase font-semibold mb-1 font-sans">
                  {info.label}
                </p>
                <p className="text-dark font-medium text-sm font-sans">{info.value}</p>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Map */}
          <ScrollReveal variant="fadeUp">
            <div className="aspect-square lg:aspect-4/3 bg-white rounded-3xl border border-dark/8 relative overflow-hidden shadow-xs">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.858673954102!2d-9.528229!3d30.4020649!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c9965a5026d3%3A0x736a8bf5957eefa9!2sCaf%C3%A9%20%26%20P%C3%A2tisserie%20Lamadeleine!5e1!3m2!1sen!2sma!4v1784729579942!5m2!1sen!2sma"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-full w-full"
              />
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-dark/8 shadow-xs">
              <h2 className="font-serif text-3xl md:text-4xl text-dark tracking-wide mb-8">
                {t("sendMessage")}
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-cream/50 p-8 rounded-2xl text-center border border-primary/20"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/15 flex items-center justify-center">
                    <Send size={24} className="text-primary" />
                  </div>
                  <p className="font-serif text-2xl text-dark mb-2 font-medium">
                    {t("thankYou")}
                  </p>
                  <p className="text-dark/60 text-sm font-sans">{t("yourMessageHasBeenSent")}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <input
                        {...register("name")}
                        placeholder={t("name")}
                        className="w-full px-4 py-3.5 bg-cream/40 border border-dark/10 rounded-xl text-sm text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1.5">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder={t("emailForm")}
                        className="w-full px-4 py-3.5 bg-cream/40 border border-dark/10 rounded-xl text-sm text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1.5">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <input
                      {...register("subject")}
                      placeholder={t("subject")}
                      className="w-full px-4 py-3.5 bg-cream/40 border border-dark/10 rounded-xl text-sm text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1.5">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder={t("message")}
                      className="w-full px-4 py-3.5 bg-cream/40 border border-dark/10 rounded-xl text-sm text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1.5">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 bg-primary text-dark font-semibold text-xs tracking-[0.2em] uppercase rounded-full hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-primary/20 disabled:opacity-50"
                  >
                    <Send size={15} />
                    {isSubmitting ? t("sending") : t("send")}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
