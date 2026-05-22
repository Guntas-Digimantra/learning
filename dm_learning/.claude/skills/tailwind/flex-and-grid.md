# Flexbox and grid utilities

This file explains how to build layouts using flexbox and CSS grid utilities.

## Flexbox

Key flex utilities:
- `flex`, `inline-flex` – enable flexbox.
- `flex-row`, `flex-row-reverse`, `flex-col`, `flex-col-reverse` – direction.
- `items-start`, `items-center`, `items-end`, `items-stretch` – align items.
- `justify-start`, `justify-center`, `justify-between`, `justify-around`, `justify-evenly` – main-axis alignment.
- `flex-wrap`, `flex-nowrap`, `flex-wrap-reverse`.
- `flex-1`, `flex-auto`, `flex-none`, `grow`, `shrink`, `basis-*` – item sizing.

## Grid

Key grid utilities:
- `grid`, `inline-grid` – enable grid.
- `grid-cols-{n}` – define number of columns.
- `grid-rows-{n}` – define number of rows.
- `col-span-{n}`, `row-span-{n}` – span utilities.
- `auto-cols-*`, `auto-rows-*` – auto track sizing.
- `place-items-*`, `place-content-*`, `place-self-*` – combined alignment.

## Arbitrary templates

- Tailwind v4 supports arbitrary grid templates, for example `grid-cols-[200px,1fr]`.
- Use these when standard `grid-cols-{n}` utilities are not expressive enough.

In examples, keep layouts simple but realistic (for example navigation bars, cards, dashboards).
