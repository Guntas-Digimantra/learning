# Typography utilities

## Font utilities

- `font-sans`, `font-serif`, `font-mono` — family.
- `font-thin` (100) → `font-black` (900) — weight scale.
- `text-xs` → `text-9xl` — size scale. Built-in px values at §7 in SKILL.md.

**Non-standard sizes must be `@theme` tokens:**
```css
@theme {
  --text-heading-sm: 1.75rem;  /* 28px */
  --text-heading-md: 2rem;     /* 32px */
  --text-heading-xl: 2.5rem;   /* 40px */
}
```
Use `text-heading-xl` — never `text-[40px]`.

**Combined size/line-height shorthand:** `text-sm/6`, `text-lg/7` (line-height uses spacing scale).

**Custom font with associated defaults:**
```css
@theme {
  --text-tiny: 0.625rem;
  --text-tiny--line-height: 1.5rem;
  --text-tiny--letter-spacing: 0.125rem;
  --text-tiny--font-weight: 500;
}
```

## Line height

Named scale (prefer these over decimals — see SKILL.md §3 for full table):
```
leading-none = 1   leading-tight = 1.25   leading-snug = 1.375
leading-normal = 1.5   leading-relaxed = 1.625   leading-loose = 2
```

Integer form also works: `leading-1`, `leading-2` → `line-height: calc(var(--spacing) * N)`.

Fractional values with no named match → `@theme` token:
```css
@theme {
  --leading-tighter: 1.2;
  --leading-snugish: 1.4;
}
```
Use `leading-tighter` — never `leading-[1.4]`.

## Letter spacing

Named scale (prefer over arbitrary):
```
tracking-tighter = -0.05em   tracking-tight = -0.025em   tracking-normal = 0
tracking-wide = 0.025em      tracking-wider = 0.05em      tracking-widest = 0.1em
```
Values outside this range stay arbitrary or become `@theme` tokens.

## Alignment, decoration, transform

- `text-left`, `text-center`, `text-right`, `text-justify`.
- `underline`, `line-through`, `no-underline`; `decoration-*` for color/style/thickness.
- `uppercase`, `lowercase`, `capitalize`, `normal-case`.
- `italic`, `not-italic`.
