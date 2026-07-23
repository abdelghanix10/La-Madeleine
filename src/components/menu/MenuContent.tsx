"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { menuCategories, menuItems } from "@/lib/data";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";

const categoryHighlights = {
  "Breakfast & Savory": {
    image: "/images/background/bg-Breakfast.jpg",
    eyebrow: "Morning table",
    title: "Breakfast worth lingering over.",
    description:
      "Hearty plates, warm breads, and classic Moroccan breakfast favorites served to start the day slowly.",
  },
  Bakery: {
    image: "/images/background/bg-bread.jpg",
    eyebrow: "Fresh from the oven",
    title: "Bread baked for the center of the table.",
    description:
      "Loaves, rolls, and rustic favorites with the kind of texture and warmth that make every bite count.",
  },
  "Pastries & Desserts": {
    image: "/images/background/bg-Pastries.jpg",
    eyebrow: "Sweet finish",
    title: "Pastries made to pause for.",
    description:
      "Flaky, delicate, and layered with cream, fruit, and chocolate for a dessert case that invites a second look.",
  },
  Juices: {
    image: "/images/background/bg-Juices.jpg",
    eyebrow: "Fresh pour",
    title: "Juices with bright, clean flavor.",
    description:
      "Chilled blends and fresh citrus pours that bring a light, refreshing break between richer dishes.",
  },
  Coffees: {
    image: "/images/background/bg-coffee.jpg",
    eyebrow: "Coffee house",
    title: "Brewed to slow the moment.",
    description:
      "Explore our espresso drinks, milk-based classics, and rich signature brews crafted for every coffee mood.",
  },
} as const;

function MenuHighlight({
  category,
}: {
  category: keyof typeof categoryHighlights;
}) {
  const highlight = categoryHighlights[category];

  return (
    <motion.div
      key={`${category}-highlight`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      className="mb-12 overflow-hidden border border-dark/10 bg-dark"
    >
      <div className="relative min-h-65 md:min-h-90">
        <Image
          src={highlight.image}
          alt={`${category} background`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-dark/75 via-dark/40 to-dark/15" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-xl px-6 md:px-12 lg:px-16">
            <p className="text-primary font-script text-2xl md:text-3xl mb-3">
              {highlight.eyebrow}
            </p>
            <h3 className="font-serif text-4xl md:text-5xl text-cream tracking-wide mb-4">
              {highlight.title}
            </h3>
            <p className="text-cream/75 max-w-lg leading-relaxed">
              {highlight.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function MenuContent() {
  const [active, setActive] = useState("All");
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDraggingState, setIsDraggingState] = useState(false);
  const isHoveringImage = useRef(false);
  const scrollYRef = useRef(0);

  // Drag-to-pan state
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const panStart = useRef({ x: 0, y: 0 });

  const menuImages = Array.from(
    { length: 10 },
    (_, i) => `/menu/Menu_page-${String(i + 1).padStart(4, "0")}.jpg`,
  );

  const totalPages = menuImages.length;

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setPanOffset({ x: 0, y: 0 });
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setPanOffset({ x: 0, y: 0 });
  }, [totalPages]);

  const zoomIn = useCallback(() => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  }, []);

  const zoomOut = useCallback(() => {
    setZoomLevel((prev) => {
      const next = Math.max(prev - 0.25, 0.5);
      if (next <= 1) setPanOffset({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const resetZoom = useCallback(() => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  }, []);

  const openPdf = useCallback(() => {
    setCurrentPage(0);
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
    setIsPdfOpen(true);
  }, []);

  // --- Drag-to-pan handlers (transform-based) ---
  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (zoomLevel <= 1) return;
      const container = containerRef.current;
      if (!container) return;

      isDragging.current = true;
      setIsDraggingState(true);
      dragStart.current = { x: e.clientX, y: e.clientY };
      panStart.current = { ...panOffset };
      container.setPointerCapture(e.pointerId);
      container.style.cursor = "grabbing";
    },
    [zoomLevel, panOffset],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging.current) return;

      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      setPanOffset({
        x: panStart.current.x + dx,
        y: panStart.current.y + dy,
      });
    },
    [],
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      setIsDraggingState(false);
      const container = containerRef.current;
      if (container) {
        container.releasePointerCapture(e.pointerId);
        container.style.cursor = zoomLevel > 1 ? "grab" : "";
      }
    },
    [zoomLevel],
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPdfOpen) return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        nextPage();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prevPage();
      } else if (e.key === "Escape") {
        setIsPdfOpen(false);
      } else if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        zoomIn();
      } else if (e.key === "-") {
        e.preventDefault();
        zoomOut();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!isPdfOpen || !isHoveringImage.current) return;
      if (e.ctrlKey || e.metaKey) return;

      e.preventDefault();
      if (e.deltaY < 0) {
        setZoomLevel((prev) => Math.min(prev + 0.1, 3));
      } else {
        setZoomLevel((prev) => {
          const next = Math.max(prev - 0.1, 0.5);
          if (next <= 1) setPanOffset({ x: 0, y: 0 });
          return next;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isPdfOpen, nextPage, prevPage, zoomIn, zoomOut]);

  useEffect(() => {
    if (isPdfOpen) {
      // Save scroll position and lock body
      scrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll position and unlock body
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollYRef.current);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
    };
  }, [isPdfOpen]);

  const categories = ["All", ...menuCategories];
  const filtered =
    active === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === active);

  const groupedItems = menuCategories.map((category) => ({
    category,
    items: menuItems.filter((item) => item.category === category),
  }));

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Category tabs */}
        <ScrollReveal className="mb-16">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 text-sm tracking-[0.15em] uppercase cursor-pointer transition-all duration-300 border ${
                  active === cat
                    ? "bg-dark text-cream border-dark"
                    : "bg-transparent text-dark/50 border-dark/10 hover:border-dark/30 hover:text-dark"
                }`}
              >
                {cat}
              </button>
            ))}
            <button
              onClick={openPdf}
              className="px-5 py-2.5 text-sm tracking-[0.15em] uppercase cursor-pointer transition-all duration-300 border flex items-center gap-2 bg-primary text-white border-primary hover:bg-primary/90"
            >
              <BookOpen size={16} />
              View Booklet
            </button>
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          {active !== "All" && active in categoryHighlights && (
            <MenuHighlight
              category={active as keyof typeof categoryHighlights}
            />
          )}
        </AnimatePresence>

        {/* Menu items */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {active === "All" ? (
                <div className="space-y-12">
                  {groupedItems.map(({ category, items }) => (
                    <div key={category}>
                      {category in categoryHighlights && (
                        <MenuHighlight
                          category={category as keyof typeof categoryHighlights}
                        />
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
                        {items.map((item) => (
                          <motion.div
                            key={item.id}
                            className="flex items-start gap-4 py-6 border-b border-dark/10 group cursor-pointer"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300 overflow-hidden">
                              {item.image ? (
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  width={48}
                                  height={48}
                                  className="w-full h-full object-cover rounded-full"
                                />
                              ) : (
                                <span className="text-xl">🍽️</span>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-baseline gap-3">
                                <h3 className="font-serif text-lg text-dark tracking-wide group-hover:text-primary transition-colors duration-300">
                                  {item.name}
                                  {item.popular && (
                                    <span className="text-primary text-xs ml-2">
                                      ★
                                    </span>
                                  )}
                                </h3>
                                <span className="flex-1 border-b border-dotted border-dark/20 mb-1" />
                                <span className="font-serif text-lg text-dark shrink-0">
                                  ${item.price.toFixed(2)}
                                </span>
                              </div>
                              <p className="text-sm text-dark/50 mt-1">
                                {item.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
                  {filtered.map((item) => (
                    <motion.div
                      key={item.id}
                      className="flex items-start gap-4 py-6 border-b border-dark/10 group cursor-pointer"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300 overflow-hidden">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover rounded-full"
                          />
                        ) : (
                          <span className="text-xl">🍽️</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-3">
                          <h3 className="font-serif text-lg text-dark tracking-wide group-hover:text-primary transition-colors duration-300">
                            {item.name}
                            {item.popular && (
                              <span className="text-primary text-xs ml-2">
                                ★
                              </span>
                            )}
                          </h3>
                          <span className="flex-1 border-b border-dotted border-dark/20 mb-1" />
                          <span className="font-serif text-lg text-dark shrink-0">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                        <p className="text-sm text-dark/50 mt-1">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {isPdfOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          >
            <div
              className="absolute inset-0 bg-dark/90 backdrop-blur-sm"
              onClick={() => setIsPdfOpen(false)}
            />

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl h-[85vh] bg-background rounded-sm shadow-2xl overflow-hidden flex flex-col border border-dark/10"
            >
              {/* Book Header */}
              <div className="bg-dark text-cream p-4 flex items-center justify-between border-b border-dark/20 shrink-0">
                <div className="flex items-center gap-3">
                  <BookOpen className="text-primary" size={24} />
                  <h3 className="font-serif text-xl tracking-wide">
                    La Madeleine Menu
                  </h3>
                </div>
                <button
                  onClick={() => setIsPdfOpen(false)}
                  className="p-2 hover:bg-cream/10 rounded-full transition-colors cursor-pointer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Image Content */}
              <div className="flex-1 bg-[#f8f5f0] p-4 md:p-6 flex items-center justify-center overflow-hidden relative">
                {/* Previous Button */}
                <button
                  onClick={prevPage}
                  className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 p-3 bg-dark/80 text-cream rounded-full hover:bg-dark transition-all cursor-pointer backdrop-blur-sm"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Image Container */}
                <div
                  ref={containerRef}
                  className={`w-full h-full flex items-center justify-center overflow-hidden select-none touch-none ${
                    zoomLevel > 1 ? "cursor-grab" : ""
                  }`}
                  onMouseEnter={() => {
                    isHoveringImage.current = true;
                  }}
                  onMouseLeave={() => {
                    isHoveringImage.current = false;
                    isDragging.current = false;
                  }}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                >
                  <div
                    className="relative origin-center"
                    style={{
                      transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
                      transition: isDraggingState
                        ? "none"
                        : "transform 0.2s ease-out",
                    }}
                  >
                    <Image
                      src={menuImages[currentPage]}
                      alt={`Menu page ${currentPage + 1}`}
                      width={800}
                      height={1100}
                      className="max-w-full max-h-[65vh] w-auto h-auto object-contain shadow-[0_10px_40px_rgba(0,0,0,0.15)] pointer-events-none"
                      draggable={false}
                      priority
                    />
                  </div>
                </div>

                {/* Next Button */}
                <button
                  onClick={nextPage}
                  className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 p-3 bg-dark/80 text-cream rounded-full hover:bg-dark transition-all cursor-pointer backdrop-blur-sm"
                  aria-label="Next page"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Footer Controls */}
              <div className="bg-dark text-cream p-4 flex items-center justify-between border-t border-dark/20 shrink-0">
                {/* Page Counter */}
                <div className="flex items-center gap-2 text-sm tracking-wider">
                  <span className="text-primary font-medium">
                    {currentPage + 1}
                  </span>
                  <span className="text-cream/40">/</span>
                  <span className="text-cream/60">{totalPages}</span>
                </div>

                {/* Zoom Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={zoomOut}
                    disabled={zoomLevel <= 0.5}
                    className="p-2 hover:bg-cream/10 rounded-full transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Zoom out"
                  >
                    <ZoomOut size={18} />
                  </button>

                  <button
                    onClick={resetZoom}
                    className="px-3 py-1 text-xs tracking-wider hover:bg-cream/10 rounded transition-colors cursor-pointer min-w-15 text-center flex items-center gap-1 justify-center"
                    aria-label="Reset zoom"
                  >
                    <RotateCcw size={12} />
                    {Math.round(zoomLevel * 100)}%
                  </button>

                  <button
                    onClick={zoomIn}
                    disabled={zoomLevel >= 3}
                    className="p-2 hover:bg-cream/10 rounded-full transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Zoom in"
                  >
                    <ZoomIn size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
