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
import { siteConfig } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  { icon: MapPin, label: "Address", value: siteConfig.address, href: "#" },
  {
    icon: Clock,
    label: "Hours",
    value: Array.isArray(siteConfig.hours)
      ? siteConfig.hours.map((h) => `${h.day}: ${h.time}`).join(" | ")
      : `${(siteConfig.hours as { day: string; time: string }).day}: ${(siteConfig.hours as { day: string; time: string }).time}`,
    href: "#",
  },
];

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    void data;
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    reset();
  };

  return (
    <section className="py-24 md:py-32 bg-background">
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
                className="block bg-cream p-6 border border-dark/5 hover:border-primary/20 transition-all duration-500 group"
                whileHover={{ y: -3 }}
              >
                <info.icon
                  size={24}
                  className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <p className="text-dark/40 text-xs tracking-[0.2em] uppercase mb-1">
                  {info.label}
                </p>
                <p className="text-dark text-sm">{info.value}</p>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Map */}
          <ScrollReveal variant="fadeLeft">
            <div className="aspect-square lg:aspect-auto lg:h-full bg-cream border border-dark/5 relative overflow-hidden">
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
          <ScrollReveal variant="fadeRight">
            <h2 className="font-serif text-3xl md:text-4xl text-dark tracking-wide mb-8">
              Send Us a Message
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-cream p-8 text-center border border-dark/5"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Send size={24} className="text-primary" />
                </div>
                <p className="font-serif text-2xl text-dark mb-2">Merci!</p>
                <p className="text-dark/50">
                  Your message has been sent. We&apos;ll get back to you within
                  24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      {...register("name")}
                      placeholder="Your name *"
                      className="w-full px-4 py-3.5 bg-cream border border-dark/10 text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-primary transition-colors"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="Your email *"
                      className="w-full px-4 py-3.5 bg-cream border border-dark/10 text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-primary transition-colors"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <input
                    {...register("subject")}
                    placeholder="Subject *"
                    className="w-full px-4 py-3.5 bg-cream border border-dark/10 text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                <div>
                  <textarea
                    {...register("message")}
                    rows={6}
                    placeholder="Your message *"
                    className="w-full px-4 py-3.5 bg-cream border border-dark/10 text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-dark hover:bg-primary text-cream hover:text-dark px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
