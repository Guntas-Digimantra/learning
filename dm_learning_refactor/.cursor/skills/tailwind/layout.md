# Layout, sizing, and display

## Display

- `block`, `inline`, `inline-block`, `flex`, `inline-flex`, `grid`, `inline-grid`, `hidden`.
- Use `inline-flex` for pill buttons, `grid` for card grids.

## Width and height

- `w-{n}`, `h-{n}` — spacing scale (1 unit = 0.25rem = 4px). **Formula: px ÷ 4 = unit.**
- `w-full`, `h-full`, `min-w-full`, `min-h-screen`, `max-w-sm`, `max-w-3xl`, etc.
- For px→unit conversions, see SKILL.md audit §2 (full table).

## Positioning

- `static`, `relative`, `absolute`, `fixed`, `sticky`.
- Offsets: `top-0`, `right-0`, `bottom-0`, `left-0`.

## Overflow and z-index

- `overflow-hidden`, `overflow-auto`, `overflow-x-*`, `overflow-y-*`.
- **Never use `z-[N]`.** Add `--z-name: N` to `@theme`, use `z-name`:
  ```css
  @theme { --z-header: 100; --z-overlay: 50; }
  ```
  ```html
  <header class="z-header">…</header>
  ```

Pair layout utilities with flex/grid from `flex-and-grid.md` as needed.
