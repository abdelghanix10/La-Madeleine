import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import TransitionProvider from "@/providers/TransitionProvider";

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
  title: {
    default: "La Boulangerie La Madeleine — Artisan Bakery & Coffee House",
    template: "%s | La Madeleine",
  },
  description:
    "Handcrafted pastries, artisan bread, and exceptional coffee — an authentic French bakery experience since 1987. Visit us in Montmartre, Paris.",
  keywords: [
    "French bakery",
    "artisan bread",
    "croissant",
    "coffee house",
    "pâtisserie",
    "Montmartre",
    "Paris bakery",
    "pastry shop",
  ],
  authors: [{ name: "La Boulangerie La Madeleine" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lamadeleine.com",
    siteName: "La Boulangerie La Madeleine",
    title: "La Boulangerie La Madeleine — Artisan Bakery & Coffee House",
    description:
      "Handcrafted pastries, artisan bread, and exceptional coffee — an authentic French bakery experience since 1987.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "La Boulangerie La Madeleine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Boulangerie La Madeleine",
    description:
      "Handcrafted pastries, artisan bread, and exceptional coffee — an authentic French bakery experience since 1987.",
    images: ["/og-image.jpg"],
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
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${greatVibes.variable}`}
    >
      <head>
        <link rel="canonical" href="https://lamadeleine.com" />
      </head>
      <body className="min-h-screen bg-background text-text font-sans antialiased">
          <TransitionProvider>
            <SmoothScroll>
              <Navbar />
              {children}
            </SmoothScroll>
          </TransitionProvider>
      </body>
    </html>
  );
}
