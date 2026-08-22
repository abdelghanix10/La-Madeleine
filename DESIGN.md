# Design System: La Madeleine (Café & Pâtisserie)

> Semantic Design System specification following [awesome-design-md](https://github.com/voltagent/awesome-design-md) and Google Stitch standards for artisanal luxury, French culinary editorial aesthetics, and high-performance UI engineering.

---

## 1. Visual Theme & Atmosphere
- **Atmosphere**: Warm Parisian artisanal luxury with tactile craftsmanship. Rich editorial layout rhythm, calm breathing room, and soft natural materials (oat linen, dark espresso wood, spun gold, brushed brass).
- **Density**: *Artisanal Balanced* (4/10) — generous whitespace, comfortable reading measures (max 65ch), no cluttered information stuffing.
- **Variance**: *Offset Asymmetric* (7/10) — alternating text/media focal points, curved organic wave geometry in navigation, asymmetric card grids.
- **Motion Intensity**: *Fluid Spring* (6/10) — physics-driven motion (`stiffness: 120, damping: 20`), scroll-triggered reveals, smooth drawer transitions with SVG dynamic path morphing.

---

## 2. Color Palette & Functional Roles
- **Warm Oat Canvas** (`#FBF8F2` / `var(--background)`) — Primary background canvas across all pages.
- **Soft Cream Surface** (`#F5EFEB` / `var(--cream)`) — Secondary container fills, chip filters, modal surfaces, table backings.
- **Dark Espresso Wood** (`#1C1613` / `var(--dark)`) — Deep charcoal-espresso for primary typography, luxury curved headers, active pills, and high-contrast anchors. Never pure `#000000`.
- **Artisan Gold** (`#C89A2B` / `var(--primary)`) — Singular signature accent for pricing tags, brand medallions, badges, active hover states, and brushwork indicators. Saturation calibrated to 65%.
- **Espresso Muted Ink** (`rgba(28, 22, 19, 0.65)` / `var(--text)`) — Secondary body copy, descriptions, and supporting metadata.
- **Whisper Hairline** (`rgba(28, 22, 19, 0.08)`) — Elegant 1px container dividers and card outlines. Never heavy or harsh black borders.
- **Glassmorphic Frosting** (`rgba(251, 248, 242, 0.92)` + `backdrop-blur-md`) — Sticky & fixed floating chrome (Navbar, mobile sheets, modal backdrops).

---

## 3. Typographic Architecture
- **Display & Headlines**: `Cormorant Garamond` (or `Fraunces` / `Playfair Display`) — Weight-driven luxury serif, track-tight (`tracking-wide` / `leading-[0.95]`), warm historic prestige.
- **Body & Controls**: `Outfit` (or `Cabinet Grotesk` / `Geist`) — Modern geometric sans with high legibility, clean numbers, relaxed leading (`leading-relaxed`), 14px–16px baseline.
- **Script & Heritage Eyebrows**: `Alex Brush` / `Pinyon Script` — Used sparingly for romantic Parisian eyebrows ("Since 2019", "Fait Maison", "Notre Histoire").
- **Strict Banned Typography**: Generic `Inter` as a serif alternative, `Times New Roman`, `Comic Sans`, and oversaturated gradient text.

---

## 4. Component Stylings & Interaction Rules

### Buttons & CTAs
- **Primary Pill**: `rounded-full bg-primary text-dark font-semibold px-8 py-3.5 text-xs tracking-[0.2em] uppercase shadow-md shadow-primary/20 hover:brightness-105 active:scale-95 transition-all`.
- **Secondary Ghost**: `rounded-full bg-cream/70 text-dark/75 border border-dark/10 hover:bg-cream hover:text-dark active:scale-95`.
- **Tactile Feedback**: Hardware-accelerated scale push on click (`active:scale-[0.97]`).

### Cards & Containers
- **Card Geometry**: Standardized to `rounded-2xl` for item cards, `rounded-3xl` for feature showcases and modals.
- **Elevation**: Flat whisper border (`border border-dark/8`) with soft diffused ambient shadow (`shadow-xs` on idle, `shadow-xl` on hover).
- **No Raw Emojis**: Always use Lucide / SVG vector icons (`UtensilsCrossed`, `Coffee`, `Sparkles`, `BookOpen`, `Star`).

### Navigation & Header Chrome
- **Smart Scroll Behavior**: Navbar automatically hides (`y: -100%`) when scrolling down for distraction-free reading, and reveals immediately (`y: 0%`) when scrolling up.
- **Mobile Header**: Fixed at top with safe spacer placeholder (`h-16 lg:hidden`) preventing layout shifts.
- **Mobile Drawer**: Card-style sheet with organic curved dark espresso wave header, brand medallion, categorized pill items, and dual action footer pills.

### Modals & Dialogs
- **Backdrop**: `bg-dark/75 backdrop-blur-sm`.
- **Surface**: `bg-white rounded-3xl border border-dark/10 shadow-2xl overflow-hidden`.
- **Exit Action**: Circular glass button with subtle ring hover.

---

## 5. Layout & Responsive Principles
- **Grid Architecture**: CSS Grid and Flexbox with explicit gaps (`gap-6` to `gap-12`).
- **Responsive Collapse**: Full multi-column collapse to single column below `768px` (iPad / iPhone viewports).
- **Viewport Safety**: Use `min-h-[100dvh]` on full-screen hero sections to eliminate iOS Safari dynamic address bar jumping.
- **Touch Targets**: Minimum `44px` touch zone for all mobile tap targets.

---

## 6. Motion & Animation Philosophy
- **Physics Engine**: Framer Motion spring physics (`stiffness: 120, damping: 20, mass: 1`).
- **Route Transitions**: SVG stroke-dash dynamic mask animation across page changes via `TransitionRouter`.
- **Hardware Acceleration**: Transitions constrained to `transform` and `opacity` to maintain 60/120fps on mobile Safari & Chrome.

---

## 7. Explicit Anti-Patterns (Banned)
- ❌ No raw emoji glyphs in UI text or cards (e.g. 🍽️, 🥐 in body copy without SVG fallbacks).
- ❌ No harsh pure black (`#000000`) backgrounds or borders.
- ❌ No neon purple, cyan, or high-saturation tech gradients.
- ❌ No duplicate badges or redundant "Since 2019" overlays within the same section.
- ❌ No generic 3-equal-card flat grids without visual hierarchy.
- ❌ No horizontal overflow or viewport jumps on mobile devices.
