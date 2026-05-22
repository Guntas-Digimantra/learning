# Tailwind CSS v4 overview

## Mental model

- Utility-first CSS framework: compose small, single-purpose classes directly in markup.
- **CSS-first configuration** — no `tailwind.config.js`. Customize via `@theme`, `@utility`, `@custom-variant` in CSS.
- Design tokens defined in `@theme` become both CSS custom properties AND utility classes.

## Basic setup

```css
/* src/styles/main.css */
@import "tailwindcss";

@theme {
  --font-sans: system-ui, -apple-system, "Segoe UI", sans-serif;
  --color-brand: #2563eb;
  --color-brand-foreground: #eff6ff;
}
```

Import this CSS in your entry point (Next.js `_app`, Vite `main`, etc.).

**PostCSS** (v4):
```js
plugins: { "@tailwindcss/postcss": {} }  /* only plugin needed */
```
**Vite:** `@tailwindcss/vite`  |  **CLI:** `npx @tailwindcss/cli`

## Engine

- Rust-based engine — fast, automatic content detection (no manual `content` array).
- Colors use **OKLCH color space** (not HSL as in v3). 24 families × 11 shades.

## Key v4 changes from v3

- `@tailwind base/components/utilities` → `@import "tailwindcss"`
- `tailwind.config.js` → `@theme` in CSS
- `safelist` (JS) → `@source inline()`
- Custom plugins → `@utility`, `@custom-variant`
- `resolveConfig()` / `corePlugins` → removed
- Important modifier: `!flex` → `flex!`
- Variant order: left-to-right (`*:first:` is valid)
- Hover wraps in `@media (hover: hover)` — won't fire on touch
- Renamed utilities: see SKILL.md audit rename table

## Utility classes

- Named classes: `flex`, `grid`, `p-4`, `text-sm`, `bg-blue-500`, `rounded-xl`, etc.
- Arbitrary values: `p-[18px]`, `grid-cols-[auto,1fr]` — valid CSS accepted.
- Arbitrary CSS var: `bg-(--brand)` (parentheses, not brackets).
- Variants: `sm:`, `md:`, `hover:`, `focus:`, `dark:`, `data-*:` over any utility.
