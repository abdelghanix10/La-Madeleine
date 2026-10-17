"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  /** Currently selected rating (0 = nothing selected yet). */
  value: number;
  /** Called when the user picks a rating (1–5). */
  onChange: (value: number) => void;
  /** Accessible name of the rating group (e.g. "Waitstaff service"). */
  label: string;
  /** Marks the group with an error state. */
  error?: boolean;
  /** Disables interaction (e.g. while the form is sending). */
  disabled?: boolean;
}

/**
 * Interactive 1–5 star rating.
 * Follows the WAI-ARIA radiogroup pattern: roving tabindex, arrow keys,
 * Home / End, and visible focus states.
 */
export default function StarRating({
  value,
  onChange,
  label,
  error = false,
  disabled = false,
}: StarRatingProps) {
  const [hovered, setHovered] = useState(0);
  const active = hovered || value;

  const select = (next: number) => {
    if (disabled) return;
    onChange(Math.min(5, Math.max(1, next)));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    switch (event.key) {
      case "ArrowRight":
      case "ArrowUp":
        event.preventDefault();
        select((value || 0) + 1);
        break;
      case "ArrowLeft":
      case "ArrowDown":
        event.preventDefault();
        select((value || 0) - 1);
        break;
      case "Home":
        event.preventDefault();
        select(1);
        break;
      case "End":
        event.preventDefault();
        select(5);
        break;
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label={label}
      aria-invalid={error || undefined}
      onKeyDown={handleKeyDown}
      onMouseLeave={() => setHovered(0)}
      className="flex items-center gap-1"
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= active;
        return (
          <button
            key={star}
            type="button"
            role="radio"
            aria-checked={value === star}
            aria-label={`${star} / 5`}
            tabIndex={value === star || (value === 0 && star === 1) ? 0 : -1}
            disabled={disabled}
            onClick={() => select(star)}
            onMouseEnter={() => setHovered(star)}
            onFocus={() => setHovered(star)}
            onBlur={() => setHovered(0)}
            className={`rounded-full p-1 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${
              filled ? "text-primary" : "text-dark/20"
            } hover:scale-110`}
          >
            <Star
              size={30}
              strokeWidth={1.5}
              className={filled ? "fill-current" : ""}
              aria-hidden="true"
            />
          </button>
        );
      })}
    </div>
  );
}
