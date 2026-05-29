# Design tokens and configuration in v4

## CSS-first configuration

```css
@import "tailwindcss";

@theme {
  --font-sans: system-ui, -apple-system, "Segoe UI", sans-serif;
  --color-brand: #0057ff;
  --color-brand-foreground: #eff6ff;
  --spacing: 0.25rem;   /* default — changes entire scale */
  --radius-md: 0.375rem;
}
```

No `tailwind.config.js` in v4. All configuration is CSS.

## @theme directives

| Directive | Use |
|---|---|
| `@theme` | Define tokens → CSS vars + utility classes |
| `@theme inline` | Token references another CSS var (keeps the reference live) |
| `@theme static` | Force all CSS vars to output even if unused |
| `@utility` | Register custom utilities with variant support |
| `@custom-variant` | Add or override variants (e.g. `hocus`, `supports-*`) |
| `@source inline()` | Safelist utilities (replaces JS `safelist`) |
| `@reference` | Import theme into scoped stylesheets without duplication |

## Token namespaces → generated utilities

| `@theme` namespace | Generated classes |
|---|---|
| `--color-*` | `bg-*`, `text-*`, `border-*`, `ring-*`, `fill-*`, `stroke-*`, … |
| `--font-*` | `font-sans`, `font-mono`, custom families |
| `--text-*` | `text-xl`, `text-heading-lg`, etc. |
| `--leading-*` | `leading-tight`, custom line heights |
| `--tracking-*` | `tracking-wide`, custom letter spacing |
| `--spacing` | All spacing/sizing via `calc(var(--spacing) * N)` |
| `--radius-*` | `rounded-sm`, `rounded-card`, etc. |
| `--shadow-*` | `shadow-card`, `shadow-lg`, etc. |
| `--z-*` | `z-header`, `z-overlay`, etc. |
| `--breakpoint-*` | `sm:`, `md:`, `lg:`, etc. |

All tokens are also available as CSS variables: `var(--color-brand)`.

## Color tokens

Any `--color-*` in `@theme` auto-generates `bg-*`, `text-*`, `border-*`, `ring-*`, etc.:

```css
@theme {
  --color-brand:     #0057ff;
  --color-fg:        #000014;
  --color-fg-muted:  #6a7393;
  --color-cta:       #0450f7;
}
```
```html
<h2 class="text-fg">Heading</h2>
<p class="text-fg-muted">Subtitle</p>
<button class="bg-cta text-white">CTA</button>
<div class="border-fg/20">…</div>   <!-- opacity modifier -->
```

Prefer `text-fg` over `text-(--color-fg)` or `text-[#000014]`.

For theming across modes use `@theme inline`:
```css
:root { --brand: oklch(0.967 0.003 264.542); }
[data-theme="dark"] { --brand: oklch(0.21 0.034 264.665); }
@theme inline { --color-canvas: var(--brand); }
```

## Mandatory token categories

Define these before using arbitrary values in any multi-component project:

### Colors
```css
@theme {
  --color-brand:          #0057ff;
  --color-fg:             #000014;
  --color-fg-muted:       #6a7393;
  --color-surface:        #ffffff;
  --color-surface-muted:  #f4f4f5;
  /* add any color used in 2+ className strings */
}
```

### Shadows
```css
@theme {
  --shadow-card:      0px 13px 11px rgba(0, 0, 0, 0.05);
  --shadow-card-deep: 0px 13px 22px rgba(0, 0, 0, 0.12);
  --shadow-card-sm:   0px 7px  12px rgba(0, 0, 0, 0.05);
}
```

### Border radius (gaps in the built-in scale)
Built-in v4: `rounded-xs`=2px, `rounded-sm`=4px, `rounded-md`=6px, `rounded-lg`=8px, `rounded-xl`=12px, `rounded-2xl`=16px, `rounded-3xl`=24px.
20px (1.25rem) has no built-in:
```css
@theme { --radius-card: 1.25rem; }
```

### Z-index layers
```css
@theme {
  --z-header:  100;
  --z-overlay:  50;
  --z-tooltip:  40;
}
```

### Line heights (between built-in named stops)
```css
@theme {
  --leading-tighter:  1.2;   /* between none and tight */
  --leading-snugish:  1.4;   /* between snug and normal */
}
```

### Custom font sizes (between built-in stops)
```css
@theme {
  --text-heading-sm: 1.75rem;   /* 28px */
  --text-heading-md: 2rem;      /* 32px */
  --text-heading-xl: 2.5rem;    /* 40px */
}
```

### Custom font with full defaults
```css
@theme {
  --text-label: 0.6875rem;
  --text-label--line-height: 1rem;
  --text-label--letter-spacing: 0.04em;
  --text-label--font-weight: 600;
}
```

## Extending with directives

```css
/* Custom utility with variant support */
@utility tab-4 {
  tab-size: 4;
}

/* Custom variant */
@custom-variant hocus (&:hover, &:focus);

/* Safelist */
@source inline("bg-{red,green,blue}-{500,600}");
```

## Resetting the default theme

```css
@theme {
  --color-*: initial;   /* wipe all default colors */
  --color-brand: #3ab7bf;
  --color-white: #fff;
}
```
