# Effects, shadows, transitions, and animations

This file explains visual effect utilities and the common patterns they follow.

## Opacity utilities

Global opacity utilities control the alpha of the entire element:

- `opacity-0`, `opacity-5`, `opacity-10`, `opacity-20`, `opacity-25`, `opacity-30`, `opacity-40`, `opacity-50`, `opacity-60`, `opacity-70`, `opacity-75`, `opacity-80`, `opacity-90`, `opacity-95`, `opacity-100`.

These map to percentage values (for example `opacity-40` ≈ 40% opacity on the whole element).

Use these when you want to fade a whole element in or out, regardless of its background or text colors.

## Shadows

Common shadow utilities:

- `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`, `shadow-inner`, `shadow-none`.

Use lighter shadows for surfaces close to the background and stronger shadows for elevated elements like modals.

## Ring and outline

- `ring-{n}` with `ring-{color}` – focus ring utilities, for example `ring-2 ring-blue-500`.
- `ring-offset-{n}` and `ring-offset-{color}` – control the gap between ring and element.
- `outline-none`, `outline`, `outline-{color}` – outlines.

Prefer `focus-visible` variants (for example `focus-visible:ring-2`) for accessible focus styles.

## Z-index

`z-N` maps directly to `z-index: N` — no arbitrary brackets needed. Tailwind v4 supports any integer:

```html
z-0   → z-index: 0
z-1   → z-index: 1
z-2   → z-index: 2
z-10  → z-index: 10
z-50  → z-index: 50
z-999 → z-index: 999
z-9999 → z-index: 9999
```

Never write `z-[999]` — write `z-999` instead.

## Color opacity modifiers

Color opacity modifiers (`bg-black/N`, `text-white/N`, etc.) accept integers 1–100 where N = percentage:

```html
bg-black/4   → background: rgb(0 0 0 / 4%)    (was bg-black/[0.04])
bg-black/8   → background: rgb(0 0 0 / 8%)    (was bg-black/[0.08])
bg-black/12  → background: rgb(0 0 0 / 12%)   (was bg-black/[0.12])
bg-white/6   → background: rgb(255 255 255 / 6%)
```

Never write `/[0.08]` — write `/8` instead.

## Transitions

Transitions follow predictable patterns:

- `transition-none`, `transition`, `transition-colors`, `transition-opacity`, `transition-transform`, `transition-shadow`, etc.
- `duration-75`, `duration-100`, `duration-150`, `duration-200`, `duration-300`, `duration-500`, `duration-700`, `duration-1000` – duration in milliseconds.
- `ease-linear`, `ease-in`, `ease-out`, `ease-in-out` – timing functions.

Combine them as `transition-colors duration-200 ease-out` for most hover/focus effects.

## Transform and animation

Transform utilities:

- `scale-*`, `rotate-*`, `translate-x-*`, `translate-y-*`, `skew-x-*`, `skew-y-*`, `origin-*`.

Animation utilities:

- `animate-none`, `animate-spin`, `animate-ping`, `animate-pulse`, `animate-bounce` (plus any project-specific animations you define with keyframes and `@utility`).

When suggesting motion, keep it subtle and accessible, and avoid constant, distracting animations.
