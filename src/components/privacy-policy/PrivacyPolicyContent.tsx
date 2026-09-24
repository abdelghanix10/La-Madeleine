"use client";

import { useLanguage } from "@/providers/LanguageProvider";

export default function PrivacyPolicyContent() {
  const { t } = useLanguage();

  const sections = [
    {
      title: t("privacyPolicySectionTitle1"),
      text: t("privacyPolicySectionText1"),
    },
    {
      title: t("privacyPolicySectionTitle2"),
      text: t("privacyPolicySectionText2"),
    },
    {
      title: t("privacyPolicySectionTitle3"),
      text: t("privacyPolicySectionText3"),
    },
    {
      title: t("privacyPolicySectionTitle4"),
      text: t("privacyPolicySectionText4"),
    },
    {
      title: t("privacyPolicySectionTitle5"),
      text: t("privacyPolicySectionText5"),
    },
    {
      title: t("privacyPolicySectionTitle6"),
      text: t("privacyPolicySectionText6"),
    },
    {
      title: t("privacyPolicySectionTitle7"),
      text: t("privacyPolicySectionText7"),
    },
  ];

  return (
    <section className="bg-ivory px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-dark/40">
          {t("privacyPolicyEffectiveDate")}
        </p>
        <p className="mt-4 text-[16px] leading-relaxed text-muted">
          {t("privacyPolicyIntro")}
        </p>
        <div className="mt-10 space-y-5">
          {sections.map((s, i) => (
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
