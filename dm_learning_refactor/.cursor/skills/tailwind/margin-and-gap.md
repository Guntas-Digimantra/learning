# Margin and gap utilities

This file explains margin utilities as well as flex/grid gaps.

## Spacing scale (applies to margin, gap, and all spacing utilities)

Tailwind v4 uses a **linear rem scale**: every 1 unit = 0.25rem (4px). The scale is unbounded — any value is valid.

**Formula:** `n ÷ 4 = rem`. Prefer scale utilities over arbitrary `[rem]` values.

Common conversions:
| Value | Class  | rem     | px  |
|-------|--------|---------|-----|
| 4px   | `*-1`  | 0.25rem | 4   |
| 8px   | `*-2`  | 0.5rem  | 8   |
| 12px  | `*-3`  | 0.75rem | 12  |
| 16px  | `*-4`  | 1rem    | 16  |
| 20px  | `*-5`  | 1.25rem | 20  |
| 24px  | `*-6`  | 1.5rem  | 24  |
| 28px  | `*-7`  | 1.75rem | 28  |
| 32px  | `*-8`  | 2rem    | 32  |
| 40px  | `*-10` | 2.5rem  | 40  |
| 48px  | `*-12` | 3rem    | 48  |
| 60px  | `*-15` | 3.75rem | 60  |
| 64px  | `*-16` | 4rem    | 64  |
| 80px  | `*-20` | 5rem    | 80  |
| 100px | `*-25` | 6.25rem | 100 |
| 140px | `*-35` | 8.75rem | 140 |

This applies to `m-*`, `p-*`, `gap-*`, `w-*`, `h-*`, `top-*`, `inset-*`, etc.

## Margin utilities

- `m-{n}` – margin on all sides.
- `mx-{n}` – horizontal margin.
- `my-{n}` – vertical margin.
- `mt-{n}`, `mr-{n}`, `mb-{n}`, `ml-{n}` – per-side margins.

Use margin to separate sibling elements, and padding to create space inside components.

## Automatic margins

- `mx-auto` – horizontally center fixed-width elements.
- `ml-auto` and `mr-auto` – push items apart in flex layouts.

## Negative margins

- Prefix with `-` for negative margins, for example `-mt-2`, `-mx-4`.
- Use negative margins sparingly and only when layout constraints require them.

## Gap utilities

- `gap-{n}` – space between children in flex or grid containers.
- `gap-x-{n}` and `gap-y-{n}` – control row/column gaps independently.

Prefer `gap` over manual margins on child elements when using flex or grid layouts.
