"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

export default function NotFoundContent() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[85dvh] items-center overflow-hidden bg-dark">
      <div className="absolute inset-0">
        <Image
          src="/images/background/bg-pastries.webp"
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/80 to-dark" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-script text-3xl text-primary md:text-4xl"
        >
          {t("notFoundEyebrow")}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="display-hero mt-4 font-serif font-medium text-cream"
        >
          {t("notFoundTitleLineOne")}
          <span className="text-primary">{t("notFoundTitleLineTwo")}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-md text-[17px] leading-relaxed text-cream/65"
        >
          {t("notFoundDescription")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/" className="btn-gold">
            <ArrowLeft size={16} /> {t("notFoundHomeCta")}
          </Link>
          <Link href="/menu" className="btn-ghost-light">
            {t("notFoundMenuCta")} <ArrowRight size={15} />
          </Link>
        </motion.div>
        <p className="mt-10 font-serif text-7xl leading-none text-cream/10">
          404
        </p>
      </div>
    </section>
  );
}
