/**
 * Server component — no "use client" directive.
 * The LCP <Image> is rendered in the initial HTML so the browser
 * can discover and fetch it immediately, eliminating element render delay.
 */
import Image from "next/image";
import MenuHeroText from "@/components/menu/MenuHeroText";

export default function MenuHero() {
  return (
    <section className="relative h-[70vh] min-h-125 flex items-center bg-dark overflow-hidden">
      {/* LCP image — server-rendered, priority + fetchPriority=high → in initial HTML */}
      <Image
        src="/images/background/bg-menu.webp"
        alt=""
        fill
        priority
        fetchPriority="high"
        className="object-cover object-center"
        sizes="100vw"
        quality={60}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/45" />
      {/* Subtle pattern overlay — inlined SVG data-URI, no extra request */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C89A2B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Animated text — client component, hydrates after paint, doesn't block LCP */}
      <MenuHeroText />
    </section>
  );
}
