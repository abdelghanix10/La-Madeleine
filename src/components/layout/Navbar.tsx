"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { scrollDirection, isScrolled } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-dark text-cream/80 text-xs tracking-widest uppercase hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone size={12} />
              {siteConfig.phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={12} />
              {siteConfig.address}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span>Mon–Fri: 6am–8pm</span>
            <span className="text-primary">|</span>
            <span>Sat: 7am–9pm</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollDirection === "down" && isScrolled
            ? "-translate-y-full"
            : "translate-y-0"
        }`}
      >
        <nav
          className={`transition-all duration-500 ${
            isScrolled
              ? "bg-background/95 backdrop-blur-xl shadow-sm"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-20 lg:h-24">
              {/* Left nav links - desktop */}
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.slice(0, 3).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link text-sm tracking-[0.2em] uppercase transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-primary nav-link active"
                        : isScrolled
                        ? "text-text hover:text-primary"
                        : "text-white/90 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Logo - center */}
              <Link href="/" className="flex-shrink-0">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h1
                    className={`font-serif text-2xl lg:text-3xl xl:text-4xl tracking-wider leading-none transition-colors duration-500 ${
                      isScrolled ? "text-dark" : "text-white"
                    }`}
                  >
                    {siteConfig.name.split(" ").slice(0, 2).join(" ")}
                  </h1>
                  <p
                    className={`text-[10px] tracking-[0.4em] uppercase mt-1 transition-colors duration-500 ${
                      isScrolled ? "text-primary" : "text-primary-light"
                    }`}
                  >
                    {siteConfig.tagline}
                  </p>
                </motion.div>
              </Link>

              {/* Right nav links - desktop */}
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.slice(3).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link text-sm tracking-[0.2em] uppercase transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-primary nav-link active"
                        : isScrolled
                        ? "text-text hover:text-primary"
                        : "text-white/90 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile hamburger */}
              <button
                className="lg:hidden relative z-50 p-2"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X
                        size={24}
                        className={isScrolled ? "text-dark" : "text-white"}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu
                        size={24}
                        className={isScrolled ? "text-dark" : "text-white"}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-dark flex flex-col items-center justify-center"
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    className={`font-serif text-3xl md:text-4xl tracking-wider transition-colors ${
                      pathname === link.href
                        ? "text-primary"
                        : "text-cream hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              className="absolute bottom-8 text-center text-cream/50 text-sm tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p>{siteConfig.phone}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
