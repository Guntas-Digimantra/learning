# Border and radius utilities

This file covers borders, border radius, and divide utilities.

## Border width and style

- `border` – default border width (usually 1px).
- `border-0`, `border-2`, `border-4`, `border-8` – explicit widths.
- `border-x`, `border-y`, `border-t`, `border-r`, `border-b`, `border-l` – per-side borders.

When suggesting borders, pair width with color and radius for a complete look.

## Border color

- `border-{color}` – border color utilities, for example `border-slate-200`, `border-primary-500`.
- For focus states, use `focus-visible:outline` utilities in combination with border color when appropriate.

## Border radius

- `rounded-none`, `rounded-sm`, `rounded`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full`.
- Side-specific and corner-specific utilities: `rounded-t-lg`, `rounded-b-md`, `rounded-l-full`, etc.

## Divide utilities

- `divide-x`, `divide-y` – add borders between children in a container.
- `divide-{color}` and `divide-dashed`, `divide-dotted` – color and style.

Use divide utilities for lists, table rows, and segmented controls instead of manually adding borders to each child.
