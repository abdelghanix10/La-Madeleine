"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Phone, Clock } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Eyebrow } from "@/components/ui/Brand";
import { useLanguage } from "@/providers/LanguageProvider";

export default function Locations() {
  const { data, t } = useLanguage();

  return (
    <section className="bg-cream/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 overflow-hidden rounded-[32px] bg-dark text-cream lg:grid-cols-[1fr_1fr]">
          <div className="p-8 md:p-12 lg:p-14">
            <ScrollReveal>
              <Eyebrow light>{t("homeLocationsEyebrow")}</Eyebrow>
              <h2 className="display-section mt-5 font-serif font-medium">
                {t("homeLocationsTitleLineOne")}
                <br />
                {t("homeLocationsTitleLineTwo")}
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-cream/65">
                {t("homeLocationsDescription")}
              </p>
              <div className="mt-8 space-y-4 text-[14px]">
                <p className="flex items-start gap-3 text-cream/80">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-primary" />
                  {data.siteConfig.address}
                </p>
                <p className="flex items-center gap-3 text-cream/80">
                  <Clock size={17} className="shrink-0 text-primary" />
                  {t("navbarHours")}
                </p>
                <p className="flex items-center gap-3 text-cream/80">
                  <Phone size={17} className="shrink-0 text-primary" />
                  {data.siteConfig.phone}
                </p>
              </div>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/cafes" className="btn-gold">
                  {t("homeLocationsViewCafes")} <ArrowRight size={15} />
                </Link>
                <a
                  href="https://maps.app.goo.gl/Z5memQUhJrBtShyx7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-light"
                >
                  {t("homeLocationsDirections")}
                </a>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal
            variant="fadeRight"
            className="relative min-h-[320px] lg:min-h-full"
          >
            <div className="absolute inset-0">
              <iframe
                title={t("contactPremiumMapTitle")}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.858666837468!2d-9.528228968629396!3d30.402064943861852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c9965a5026d3%3A0x736a8bf5957eefa9!2sCaf%C3%A9%20%26%20P%C3%A2tisserie%20Lamadeleine!5e1!3m2!1sen!2sma!4v1784648271235!5m2!1sen!2sma"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full"
              />
              <div className="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-dark via-dark/5 to-transparent lg:bg-linear-to-r" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
