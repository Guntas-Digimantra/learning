# Best practices and patterns

## General guidance

- Favor composition over abstraction: use utilities directly in markup for simple components.
- Introduce extracted components or CSS only when patterns repeat or become hard to read.
- Keep class order roughly grouped (layout, spacing, typography, colors, effects) for readability.

## Working with tokens

- Define clear token naming conventions before scaling a design system.
- Use semantic tokens for colors and spacing in product-facing components.

## Migrating from v3

- Replace `tailwind.config.js` with a CSS-first `@import "tailwindcss";` plus `@theme` configuration.
- Map existing theme values (colors, spacing, fonts) into CSS variables inside `@theme`.
- Use `@utility`, `@custom-variant`, `@source inline()` to replace custom plugins and safelists.
- Watch for renamed utilities — see the v4 rename table in SKILL.md audit.

For arbitrary-value rules, the canonical conversion table is in SKILL.md audit §1–§8.
