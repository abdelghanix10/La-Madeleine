"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";

export interface LogoAnimatedRef {
  play: () => void;
  reset: () => void;
  element: HTMLDivElement | null;
}

export interface LogoAnimatedProps {
  className?: string;
}

const LogoAnimated = forwardRef<LogoAnimatedRef, LogoAnimatedProps>(
  ({ className = "" }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      play: () => {
        const el = containerRef.current;
        if (!el) return;
        el.classList.remove("play");
        void el.getBoundingClientRect(); // force DOM reflow
        el.classList.add("play");
      },
      reset: () => {
        const el = containerRef.current;
        if (!el) return;
        el.classList.remove("play");
      },
      get element() {
        return containerRef.current;
      },
    }));

    return (
      <div
        ref={containerRef}
        className={`writing-logo-container ${className}`}
        role="img"
        aria-label="La Madeleine Boulanger & Café"
      >
        <svg
          className="writing-logo-svg"
          viewBox="0 0 760 210"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <clipPath id="write-mask">
              <rect x="0" y="0" width="760" height="210" />
            </clipPath>
          </defs>

          {/* Cursive Handwriting Title: La Madeleine */}
          <g clipPath="url(#write-mask)">
            <text
              x="380"
              y="98"
              textAnchor="middle"
              className="writing-script-title"
            >
              La Madeleine
            </text>
          </g>

          {/* Decorative Calligraphy Flourish Line */}
          <path
            className="writing-flourish-line"
            d="M 160 126 C 260 148, 500 148, 600 124 C 530 138, 410 142, 330 137"
          />

          {/* Subtitle: Boulanger & Café with flanking gold hairlines */}
          <line
            className="writing-sub-line"
            x1="140"
            y1="172"
            x2="225"
            y2="172"
          />
          <text
            x="380"
            y="178"
            textAnchor="middle"
            className="writing-subtitle"
          >
            Boulanger &amp; Café
          </text>
          <line
            className="writing-sub-line"
            x1="535"
            y1="172"
            x2="620"
            y2="172"
          />
        </svg>
      </div>
    );
  }
);

LogoAnimated.displayName = "LogoAnimated";

export default LogoAnimated;
