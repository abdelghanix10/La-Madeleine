"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`eyebrow flex items-center gap-3 ${light ? "text-primary-light" : "text-primary-dark"}`}
    >
      <span
        className={`inline-block h-px w-10 ${light ? "bg-primary" : "bg-primary"}`}
      />
      {children}
    </p>
  );
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "gold" | "ghost" | "ghost-light";
  className?: string;
}) {
  const cls =
    variant === "gold"
      ? "btn-gold"
      : variant === "ghost"
        ? "btn-ghost"
        : variant === "ghost-light"
          ? "btn-ghost-light"
          : "btn-primary";
  const external = href.startsWith("http") || href.startsWith("tel:");
  if (external) {
    return (
      <a href={href} className={`${cls} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${cls} ${className}`}>
      {children}
    </Link>
  );
}

export function ArrowLink({
  href,
  children,
  light = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`link-arrow ${light ? "text-cream hover:text-primary" : "text-dark hover:text-primary-dark"} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight size={16} strokeWidth={2.2} />
    </Link>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  index,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  index?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "text-center mx-auto items-center" : "text-left items-start"} flex max-w-3xl flex-col gap-5`}
    >
      <div
        className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}
      >
        {index && (
          <span
            className={`font-serif text-sm tracking-[0.3em] ${light ? "text-primary" : "text-primary-dark"}`}
          >
            {index}
          </span>
        )}
        <Eyebrow light={light}>{eyebrow}</Eyebrow>
      </div>
      <h2
        className={`display-section font-serif font-medium ${light ? "text-cream" : "text-dark"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-xl text-[16px] leading-relaxed md:text-[18px] ${light ? "text-cream/70" : "text-muted"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function Stat({
  value,
  suffix,
  label,
  light = false,
}: {
  value: string;
  suffix?: string;
  label: string;
  light?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <p
        className={`font-serif text-5xl font-medium md:text-6xl lg:text-7xl ${light ? "text-cream" : "text-dark"}`}
      >
        {value}
        {suffix && <span className="text-primary">{suffix}</span>}
      </p>
      <p
        className={`text-[11px] font-semibold uppercase tracking-[0.25em] ${light ? "text-cream/60" : "text-dark/50"}`}
      >
        {label}
      </p>
    </div>
  );
}

export function PageTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-dark/10 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-dark/70 backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

export function ExternalArrow({ className = "" }: { className?: string }) {
  return <ArrowUpRight size={15} className={className} />;
}
