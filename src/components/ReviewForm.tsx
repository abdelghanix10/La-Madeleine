"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Lightbulb,
  Loader2,
  Send,
  Star,
  User,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StarRating from "@/components/StarRating";
import { translations, useLanguage } from "@/providers/LanguageProvider";

type TranslationKey = keyof typeof translations.en;

const WEB3FORMS_ACCESS_KEY = "b917540a-a17f-4f5c-bd8e-d83443d2a0f4";

const inputCls =
  "w-full rounded-2xl border border-dark/10 bg-white/80 px-5 py-3.5 text-[15px] text-dark outline-none transition-all placeholder:text-dark/35 focus:border-primary focus:ring-4 focus:ring-primary/15";

const labelCls =
  "mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-dark/50";

type RatingKey =
  | "waitstaff"
  | "foodPrep"
  | "foodQuality"
  | "bakeryCounter"
  | "overall";

interface RatingField {
  key: RatingKey;
  labelKey: TranslationKey;
  hintKey: TranslationKey;
  placeholderKey: TranslationKey;
  /** Stable English label used in the email sent to the shop. */
  emailLabel: string;
}

const RATING_FIELDS: RatingField[] = [
  {
    key: "waitstaff",
    labelKey: "reviewUsRatingWaitstaffLabel",
    hintKey: "reviewUsRatingWaitstaffHint",
    placeholderKey: "reviewUsRatingWaitstaffPlaceholder",
    emailLabel: "Waitstaff service (friendliness, speed, attentiveness)",
  },
  {
    key: "foodPrep",
    labelKey: "reviewUsRatingFoodPrepLabel",
    hintKey: "reviewUsRatingFoodPrepHint",
    placeholderKey: "reviewUsRatingFoodPrepPlaceholder",
    emailLabel: "Food preparation (presentation, temperature, freshness, cooking)",
  },
  {
    key: "foodQuality",
    labelKey: "reviewUsRatingFoodQualityLabel",
    hintKey: "reviewUsRatingFoodQualityHint",
    placeholderKey: "reviewUsRatingFoodQualityPlaceholder",
    emailLabel: "Food quality (taste, ingredients, portion size)",
  },
  {
    key: "bakeryCounter",
    labelKey: "reviewUsRatingBakeryLabel",
    hintKey: "reviewUsRatingBakeryHint",
    placeholderKey: "reviewUsRatingBakeryPlaceholder",
    emailLabel: "Bakery counter staff service (boulangerie)",
  },
  {
    key: "overall",
    labelKey: "reviewUsRatingOverallLabel",
    hintKey: "reviewUsRatingOverallHint",
    placeholderKey: "reviewUsRatingOverallPlaceholder",
    emailLabel: "Overall experience",
  },
];

const RECOMMEND_OPTIONS: {
  value: "yes" | "maybe" | "no";
  labelKey: TranslationKey;
  emailLabel: string;
}[] = [
  { value: "yes", labelKey: "reviewUsRecommendYes", emailLabel: "Yes" },
  { value: "maybe", labelKey: "reviewUsRecommendMaybe", emailLabel: "Maybe" },
  { value: "no", labelKey: "reviewUsRecommendNo", emailLabel: "No" },
];

const INITIAL_VALUES = {
  name: "",
  email: "",
  phone: "",
  dateOfVisit: "",
  ordered: "",
  suggestions: "",
};

const INITIAL_RATINGS: Record<RatingKey, number> = {
  waitstaff: 0,
  foodPrep: 0,
  foodQuality: 0,
  bakeryCounter: 0,
  overall: 0,
};

const INITIAL_COMMENTS: Record<RatingKey, string> = {
  waitstaff: "",
  foodPrep: "",
  foodQuality: "",
  bakeryCounter: "",
  overall: "",
};

export default function ReviewForm() {
  const { t } = useLanguage();
  const [values, setValues] = useState(INITIAL_VALUES);
  const [ratings, setRatings] = useState(INITIAL_RATINGS);
  const [comments, setComments] = useState(INITIAL_COMMENTS);
  const [recommend, setRecommend] = useState<"yes" | "maybe" | "no" | "">("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ name?: string; ratings?: string }>(
    {},
  );

  const today = new Date().toISOString().split("T")[0];

  const updateValue = (key: keyof typeof INITIAL_VALUES, value: string) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  const updateRating = (key: RatingKey, value: number) =>
    setRatings((prev) => ({ ...prev, [key]: value }));

  const updateComment = (key: RatingKey, value: string) =>
    setComments((prev) => ({ ...prev, [key]: value }));

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    // ---- Validation (name + the five ratings are required) ----
    const nextErrors: { name?: string; ratings?: string } = {};
    if (!values.name.trim()) nextErrors.name = t("reviewUsErrorName");
    if (RATING_FIELDS.every((field) => ratings[field.key] < 1)) {
      nextErrors.ratings = t("reviewUsErrorRatings");
    }
    setErrors(nextErrors);
    if (nextErrors.name) {
      document.getElementById("review-name")?.focus();
      return;
    }
    if (nextErrors.ratings) {
      const firstMissing = RATING_FIELDS.find(
        (field) => ratings[field.key] < 1,
      );
      if (firstMissing) {
        document
          .getElementById(`review-rating-${firstMissing.key}`)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    // ---- Honeypot (spam protection) ----
    const honeypot = new FormData(form).get("botcheck");
    const honeypotValue = typeof honeypot === "string" ? honeypot : "";

    setSending(true);
    setError(null);

    // Readable, human-friendly email body — only rated categories are listed;
    // categories rated alongside a comment are kept so nothing is lost.
    const summaryLines = RATING_FIELDS.filter(
      (field) => ratings[field.key] > 0 || comments[field.key].trim(),
    ).map((field) => {
      const rating =
        ratings[field.key] > 0 ? `${ratings[field.key]}/5` : "not rated";
      const comment = comments[field.key].trim();
      return `${field.emailLabel}: ${rating}${comment ? ` — ${comment}` : ""}`;
    });

    const recommendOption = RECOMMEND_OPTIONS.find(
      (option) => option.value === recommend,
    );

    const payload: Record<string, string> = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New customer review - La Madeleine",
      from_name: "La Madeleine Website",
      botcheck: honeypotValue,
      name: values.name.trim(),
      ...(values.email.trim() ? { email: values.email.trim() } : {}),
      ...(values.phone.trim() ? { phone: values.phone.trim() } : {}),
      ...(values.dateOfVisit ? { date_of_visit: values.dateOfVisit } : {}),
      would_recommend: recommendOption ? recommendOption.emailLabel : "—",
      what_they_ordered: values.ordered.trim() || "—",
      suggestions: values.suggestions.trim() || "—",
      review_summary: summaryLines.join("\n"),
    };
    RATING_FIELDS.forEach((field) => {
      payload[`${field.key}_rating`] =
        ratings[field.key] > 0 ? `${ratings[field.key]}/5` : "—";
      payload[`${field.key}_comment`] = comments[field.key].trim() || "—";
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (result.success) {
        setSent(true);
        setValues(INITIAL_VALUES);
        setRatings(INITIAL_RATINGS);
        setComments(INITIAL_COMMENTS);
        setRecommend("");
        setErrors({});
        form.reset();
      } else {
        setError(t("reviewUsErrorMessage"));
      }
    } catch {
      setError(t("reviewUsErrorMessage"));
    } finally {
      setSending(false);
    }
  }

  const sectionHeader = (
    icon: React.ReactNode,
    labelKey: TranslationKey,
  ) => (
    <div className="mb-5 flex items-center gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dark text-primary">
        {icon}
      </span>
      <h3 className="font-serif text-2xl text-dark">{t(labelKey)}</h3>
    </div>
  );

  return (
    <section
      id="review-form"
      aria-label={t("reviewUsFormTitle")}
      className="bg-ivory pb-20 md:pb-28"
    >
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <div className="rounded-[28px] border border-dark/8 bg-[#fffdf9] p-7 shadow-sm md:p-10">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[420px] flex-col items-center justify-center text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-900/10 text-emerald-900">
                  <CheckCircle2 size={30} aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-serif text-4xl text-dark">
                  {t("reviewUsSuccessTitle")}
                </h2>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
                  {t("reviewUsSuccessMessage")}
                </p>
                <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-dark/45">
                  {t("reviewUsSuccessSubtitle")}
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="btn-ghost mt-8"
                >
                  {t("reviewUsSendAnother")}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <p className="font-script text-3xl text-primary-dark">
                  {t("reviewUsFormScript")}
                </p>
                <h2 className="mt-1 font-serif text-3xl text-dark md:text-4xl">
                  {t("reviewUsFormTitle")}
                </h2>
                <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-dark/50">
                  {t("reviewUsFormDescription")}
                </p>

                {/* Honeypot — hidden from humans, tempting for bots */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                  style={{ display: "none" }}
                />

                {/* ---------- About you ---------- */}
                <div className="mt-9">
                  {sectionHeader(
                    <User size={17} aria-hidden="true" />,
                    "reviewUsSectionAboutLabel",
                  )}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className={labelCls}>
                        {t("reviewUsNameLabel")}
                      </span>
                      <input
                        id="review-name"
                        required
                        name="name"
                        value={values.name}
                        onChange={(e) => updateValue("name", e.target.value)}
                        placeholder={t("reviewUsNamePlaceholder")}
                        aria-invalid={errors.name ? true : undefined}
                        aria-describedby={
                          errors.name ? "review-name-error" : undefined
                        }
                        className={`${inputCls}${
                          errors.name ? " border-red-400" : ""
                        }`}
                      />
                      {errors.name && (
                        <span
                          id="review-name-error"
                          role="alert"
                          className="mt-2 block text-[13px] font-medium text-red-600"
                        >
                          {errors.name}
                        </span>
                      )}
                    </label>
                    <label className="block">
                      <span className={labelCls}>
                        {t("reviewUsEmailLabel")}
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={(e) => updateValue("email", e.target.value)}
                        placeholder={t("reviewUsEmailPlaceholder")}
                        className={inputCls}
                      />
                    </label>
                    <label className="block">
                      <span className={labelCls}>
                        {t("reviewUsPhoneLabel")}
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={values.phone}
                        onChange={(e) => updateValue("phone", e.target.value)}
                        placeholder={t("reviewUsPhonePlaceholder")}
                        className={inputCls}
                      />
                    </label>
                    <label className="block">
                      <span className={labelCls}>
                        {t("reviewUsDateLabel")}
                      </span>
                      <input
                        type="date"
                        name="date_of_visit"
                        max={today}
                        value={values.dateOfVisit}
                        onChange={(e) =>
                          updateValue("dateOfVisit", e.target.value)
                        }
                        className={inputCls}
                      />
                    </label>
                  </div>
                </div>

                <div className="gold-rule my-9" aria-hidden />

                {/* ---------- Ratings ---------- */}
                <div>
                  {sectionHeader(
                    <Star size={17} aria-hidden="true" />,
                    "reviewUsSectionRatingsLabel",
                  )}
                  <p className="-mt-2 mb-5 text-[13px] leading-relaxed text-dark/50">
                    {t("reviewUsSectionRatingsDescription")}
                    <span className="block text-dark/35">
                      {t("reviewUsStarsHelp")}
                    </span>
                  </p>
                  {errors.ratings && (
                    <p
                      role="alert"
                      className="mb-4 rounded-2xl border border-red-500/20 bg-red-50 px-4 py-3 text-[13px] font-medium text-red-700"
                    >
                      {errors.ratings}
                    </p>
                  )}
                  <div className="grid gap-4">
                    {RATING_FIELDS.map((field) => (
                      <div
                        key={field.key}
                        id={`review-rating-${field.key}`}
                        className="rounded-2xl border border-dark/8 bg-white/60 p-5"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <p className="font-serif text-lg leading-tight text-dark">
                              {t(field.labelKey)}
                            </p>
                            <p className="mt-1 text-[12px] text-dark/45">
                              {t(field.hintKey)}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <StarRating
                              value={ratings[field.key]}
                              onChange={(value) =>
                                updateRating(field.key, value)
                              }
                              label={t(field.labelKey)}
                              error={!!errors.ratings}
                              disabled={sending}
                            />
                            {ratings[field.key] > 0 && (
                              <span
                                aria-hidden
                                className="min-w-[3ch] text-[13px] font-semibold text-dark/50"
                              >
                                {ratings[field.key]}/5
                              </span>
                            )}
                          </div>
                        </div>
                        <label className="mt-3 block">
                          <span className="sr-only">
                            {t(field.placeholderKey)}
                          </span>
                          <textarea
                            rows={2}
                            value={comments[field.key]}
                            onChange={(e) =>
                              updateComment(field.key, e.target.value)
                            }
                            placeholder={t(field.placeholderKey)}
                            className={`${inputCls} resize-none !py-3 text-[14px]`}
                          />
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="gold-rule my-9" aria-hidden />

                {/* ---------- One last thing ---------- */}
                <div>
                  {sectionHeader(
                    <Lightbulb size={17} aria-hidden="true" />,
                    "reviewUsSectionExtraLabel",
                  )}
                  <fieldset>
                    <legend className={labelCls}>
                      {t("reviewUsRecommendLabel")}
                    </legend>
                    <div
                      role="radiogroup"
                      aria-label={t("reviewUsRecommendLabel")}
                      className="flex flex-wrap gap-3"
                    >
                      {RECOMMEND_OPTIONS.map((option) => {
                        const active = recommend === option.value;
                        return (
                          <button
                            key={option.value}
                            type="button"
                            role="radio"
                            aria-checked={active}
                            onClick={() => setRecommend(option.value)}
                            className={`min-h-11 rounded-full border px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] transition-all active:scale-95 ${
                              active
                                ? "border-dark bg-dark text-cream"
                                : "border-dark/15 bg-white/70 text-dark/70 hover:border-dark/40 hover:text-dark"
                            }`}
                          >
                            {t(option.labelKey)}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>
                  <label className="mt-5 block">
                    <span className={labelCls}>
                      {t("reviewUsOrderedLabel")}
                    </span>
                    <input
                      name="what_they_ordered"
                      value={values.ordered}
                      onChange={(e) => updateValue("ordered", e.target.value)}
                      placeholder={t("reviewUsOrderedPlaceholder")}
                      className={inputCls}
                    />
                  </label>
                  <label className="mt-4 block">
                    <span className={labelCls}>
                      {t("reviewUsSuggestionsLabel")}
                    </span>
                    <textarea
                      rows={4}
                      name="suggestions"
                      value={values.suggestions}
                      onChange={(e) =>
                        updateValue("suggestions", e.target.value)
                      }
                      placeholder={t("reviewUsSuggestionsPlaceholder")}
                      className={`${inputCls} resize-none`}
                    />
                  </label>
                </div>

                {/* ---------- Submit ---------- */}
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary mt-8 w-full !py-4 disabled:opacity-60 sm:w-auto sm:!px-10"
                >
                  {sending ? (
                    <>
                      <Loader2
                        size={15}
                        className="animate-spin"
                        aria-hidden="true"
                      />
                      {t("reviewUsSending")}
                    </>
                  ) : (
                    <>
                      {t("reviewUsSend")}
                      <Send size={15} aria-hidden="true" />
                    </>
                  )}
                </button>
                {error && (
                  <p
                    role="alert"
                    className="mt-4 rounded-2xl border border-red-500/20 bg-red-50 px-4 py-3 text-[13px] leading-relaxed text-red-700"
                  >
                    {error}
                  </p>
                )}
                <p className="mt-4 text-[12px] leading-relaxed text-dark/40">
                  {t("reviewUsConsent")}
                </p>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
