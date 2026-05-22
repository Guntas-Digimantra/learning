# Colors and backgrounds

## Pattern cheatsheet

- `text-{color}` — text color.
- `bg-{color}` — background color.
- `border-{color}` — border color.
- `{property}-{color}/{opacity}` — alpha variant: `bg-white/40`, `text-slate-900/80`.
- CSS variable reference: `bg-(--brand)` (v4 parentheses, not `bg-[--brand]`).

Where `{property}` is `text`, `bg`, `border`, `from`, `via`, `to`, `fill`, `stroke`, `ring`, `outline`, `shadow`, etc.

## Opacity syntax

Use the `/` shorthand — **never bracket form**:
- `bg-black/8` ✅ (not `bg-black/[0.08]`)
- `bg-white/50` ✅ (not `bg-white/[0.5]`)

## Adding a new color — workflow

See SKILL.md "New color encountered → ask, then register" for the full interactive flow.

Short form: identify the color's role → ask user for name → add to `@theme` → use generated class:

```css
@theme {
  --color-brand: #0057ff;
  --color-fg-muted: #6a7393;
  --color-surface-footer: #1c1d1f;
}
```
```html
<button class="bg-brand text-white">CTA</button>
<p class="text-fg-muted">Subtitle</p>
<footer class="bg-surface-footer">…</footer>
<div class="bg-brand/10">…</div>  <!-- opacity modifier -->
```

NEVER write `text-[#2e2e2e]`, `bg-[rgba(4,80,247,0.1)]`, or any hex in a `className` prop.

The only acceptable inline hex is a **one-off decorative gradient color in a data array** (not reused in components).

**v4 default palette:** 24 families (red, orange, amber, … slate, gray, zinc) × 11 shades (50–950), in OKLCH color space. Use built-in names directly: `fill-amber-400`, `text-blue-500`.

## Gradients

- `bg-gradient-to-{r|l|t|b|tr|tl|br|bl}` — direction.
- `from-{color}`, `via-{color}`, `to-{color}` — stops.
- Combine with opacity: `from-sky-500/80`, `to-indigo-600/90`.

## Background utilities

- `bg-cover`, `bg-contain`, `bg-auto` — size.
- `bg-center`, `bg-top`, `bg-bottom`, `bg-left`, `bg-right` — position.
- `bg-no-repeat`, `bg-repeat`, `bg-repeat-x`, `bg-repeat-y` — repeat.
- `bg-fixed`, `bg-local`, `bg-scroll` — attachment.
- `bg-[url('/path/to/image.jpg')]` — arbitrary image.
