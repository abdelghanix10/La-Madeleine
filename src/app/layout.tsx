import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import CookieConsent from "@/components/layout/CookieConsent";
import TransitionProvider from "@/providers/TransitionProvider";
import { LanguageProvider } from "@/providers/LanguageProvider";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://lamadeleine.ma",
  ),
  title: {
    default: "La Madeleine Agadir — Pâtisserie, Boulangerie & Café depuis 2019",
    template: "%s | La Madeleine Agadir",
  },
  description:
    "Depuis 2019, La Madeleine célèbre la pâtisserie, le café et les saveurs qui rassemblent. Viennoiseries, pâtisseries, café de spécialité à Agadir.",
  keywords: [
    "La Madeleine Agadir",
    "pâtisserie Agadir",
    "boulangerie Agadir",
    "café Agadir",
    "viennoiserie",
    "croissant Agadir",
    "salon de thé Agadir",
    "Tilila",
  ],
  authors: [{ name: "La Madeleine Agadir" }],
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://lamadeleine.ma",
    siteName: "La Madeleine Agadir",
    title: "La Madeleine Agadir — Le goût du fait maison",
    description:
      "Depuis 2019, La Madeleine célèbre la pâtisserie, le café et les saveurs qui rassemblent.",
    images: [
      {
        url: "/images/background/bg-pastries.webp",
        width: 1200,
        height: 630,
        alt: "La Madeleine Agadir — Pâtisserie artisanale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Madeleine Agadir — Le goût du fait maison",
    description:
      "Pâtisserie, boulangerie et café à Agadir depuis 2019. Le goût du fait maison.",
    images: ["/images/background/bg-pastries.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${inter.variable} ${greatVibes.variable}`}
    >
      <head>
        <link rel="canonical" href="https://lamadeleine.ma" />
      </head>
      <body className="min-h-screen bg-background text-text font-sans antialiased">
        <LanguageProvider>
          <TransitionProvider>
            <SmoothScroll>
              <Navbar />
              {children}
              <CookieConsent />
            </SmoothScroll>
          </TransitionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
