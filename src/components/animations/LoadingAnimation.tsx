"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingAnimation({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [phase, setPhase] = useState<
    "drawing" | "filling" | "scaling" | "done"
  >("drawing");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("filling"), 1800);
    const t2 = setTimeout(() => setPhase("scaling"), 2800);
    const t3 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 3500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Flour particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cream/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${60 + Math.random() * 30}%`,
              }}
              animate={{
                y: [0, -(50 + Math.random() * 100)],
                x: [0, (Math.random() - 0.5) * 60],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 1.5,
                delay: 0.5 + Math.random() * 1.5,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Logo */}
          <motion.div
            className="relative"
            animate={
              phase === "scaling"
                ? { scale: [1, 1.1, 1.15], opacity: [1, 1, 0] }
                : {}
            }
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {/* Golden glow */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                opacity: [0, 0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
            </motion.div>

            <svg
              viewBox="0 0 300 120"
              className="w-72 md:w-96 relative z-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Text path drawing animation */}
              <motion.text
                x="150"
                y="45"
                textAnchor="middle"
                className="font-serif"
                style={{
                  fontSize: "38px",
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  letterSpacing: "6px",
                }}
                fill="none"
                stroke="#C89A2B"
                strokeWidth="0.5"
                initial={{ strokeDasharray: 500, strokeDashoffset: 500 }}
                animate={{
                  strokeDashoffset: 0,
                  fill:
                    phase === "filling" || phase === "scaling"
                      ? "#F8F4EC"
                      : "rgba(248,244,236,0)",
                }}
                transition={{
                  strokeDashoffset: { duration: 1.8, ease: "easeInOut" },
                  fill: { duration: 0.6, delay: 0.1 },
                }}
              >
                LA MADELEINE
              </motion.text>

              {/* Decorative line */}
              <motion.line
                x1="80"
                y1="58"
                x2="220"
                y2="58"
                stroke="#C89A2B"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
              />

              {/* Tagline */}
              <motion.text
                x="150"
                y="75"
                textAnchor="middle"
                style={{
                  fontSize: "10px",
                  fontFamily: '"Inter", sans-serif',
                  letterSpacing: "4px",
                }}
                fill="#C89A2B"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: phase === "filling" || phase === "scaling" ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                BOULANGERIE & PATISSERIE
              </motion.text>

              {/* Small decorative wheat/flourish */}
              <motion.path
                d="M130 85 Q150 95 170 85"
                stroke="#C89A2B"
                strokeWidth="0.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
              />
              <motion.path
                d="M135 90 Q150 98 165 90"
                stroke="#C89A2B"
                strokeWidth="0.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
