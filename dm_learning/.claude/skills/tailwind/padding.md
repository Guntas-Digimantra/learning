# Padding utilities and spacing

This file explains padding utilities and how they relate to the spacing scale in Tailwind CSS v4.

## Spacing scale

Tailwind v4 uses a **linear rem scale**: every 1 unit = 0.25rem (4px).

| Utility | rem    | px  |
|---------|--------|-----|
| `p-1`   | 0.25rem | 4px |
| `p-2`   | 0.5rem  | 8px |
| `p-4`   | 1rem    | 16px |
| `p-7`   | 1.75rem | 28px |
| `p-8`   | 2rem    | 32px |
| `p-25`  | 6.25rem | 100px |
| `p-35`  | 8.75rem | 140px |

**Key rule:** `n ÷ 4 = rem`. So instead of `py-[6.25rem]`, write `py-25`. Instead of `pt-[8.75rem]`, write `pt-35`. Always prefer the scale utility over an arbitrary value — the scale is unbounded in v4, so any multiple of 0.25rem has a direct class.

Encourage use of a consistent spacing rhythm instead of random values.

## Shorthand utilities

- `p-{n}` – padding on all sides.
- `px-{n}` – horizontal padding (left and right).
- `py-{n}` – vertical padding (top and bottom).
- `pt-{n}`, `pr-{n}`, `pb-{n}`, `pl-{n}` – per-side padding.

Example:

```html
<button class="px-4 py-2">Click me</button>
```

## Arbitrary values

- When the scale does not cover a specific value, arbitrary values are allowed, for example `p-[18px]`, `px-[3.25rem]`.
- Favor tokens or scale values first; use arbitrary values sparingly and explain why.

## Responsive padding

- Combine padding utilities with breakpoints: `px-4 py-2 md:px-6 md:py-3`.
- Always place responsive prefixes before state prefixes, for example `md:hover:px-6`.

When refactoring, try to consolidate repeated padding patterns into components or shared classes.
