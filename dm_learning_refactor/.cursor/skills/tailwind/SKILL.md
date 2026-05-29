---
name: Tailwind CSS v4 Expert
description: "Help the user design and implement UIs using Tailwind CSS v4, following its CSS-first, token-driven workflow."
---

# Tailwind CSS v4 skill

Expert front-end assistant for Tailwind CSS v4. Always use the reference files below before answering.

## Reference files

| File | Contents |
|---|---|
| `overview.md` | Mental model, setup, engine |
| `tokens-and-config.md` | `@theme`, token categories, directives |
| `typography.md` | font-size, leading, tracking, decoration |
| `layout.md` | sizing, display, positioning, overflow |
| `padding.md` / `margin-and-gap.md` | spacing utilities |
| `border.md` | borders, radius, divide, outline |
| `flex-and-grid.md` | flexbox and grid layout |
| `colors-and-backgrounds.md` | color tokens, gradients, bg utilities |
| `effects-and-transitions.md` | shadows, opacity, filters, transitions |
| `responsive-and-states.md` | breakpoints, hover, dark mode, data attrs |
| `best-practices.md` | patterns, composition, migration notes |

Read the matching file in full for topic-specific questions before responding.

---

## New color encountered → ask, then register

When you see a hardcoded color (hex, rgb, oklch) in JSX or CSS that has no matching `@theme` token:

1. Check the project's `@theme` block — an existing `--color-*` token may already cover it.
2. If not, **ask the user for a semantic name** (e.g. `--color-brand`, `--color-cta`, `--color-muted`). Offer one sensible default based on the color's apparent role. Allow them to rename or skip.
3. If they provide a name → add `--color-<name>: <value>` to `@theme`, then use the generated class (`bg-<name>`, `text-<name>`) everywhere.
4. If they skip → use the token inline for this one occurrence only; do not propagate it to other components.

---

## MANDATORY PRE-FLIGHT AUDIT — run before writing OR reviewing any Tailwind code

Before emitting or approving any class string, check every class in order. **Never skip a step.**

### 1. Hardcoded colors — ZERO TOLERANCE
Any `text-[#…]`, `bg-[#…]`, `border-[#…]`, `from-[#…]`, `to-[#…]`, `fill-[#…]`, `stroke-[#…]`, or `shadow-[…rgba…]` is a failure. Always:
- Check if an existing `@theme` token covers it.
- If used 2+ times, add a named `--color-*` token to `@theme` and use the generated class (`text-brand`, `bg-cta`, etc.).
- Use opacity modifiers for alpha: `bg-cta/10`, not `bg-[rgba(4,80,247,0.1)]`.
- Use palette names for default colors: `fill-amber-400`, not `fill-[#f59e0b]`.
- CSS variable arbitrary syntax: `bg-(--brand)` not `bg-[--brand]` (v4 parentheses).

### 2. px/rem arbitrary values — convert to spacing scale first
**Formula: 1 unit = 0.25rem = 4px → N px ÷ 4 = spacing unit**

| Arbitrary | Built-in |
|---|---|
| `py-[60px]` | `py-15` |
| `py-[100px]` | `py-25` |
| `h-[9px]` | `h-2.25` |
| `h-[42px]` | `h-10.5` |
| `h-[52px]` | `h-13` |
| `h-[54px]` | `h-13.5` |
| `h-[80px]` | `h-20` |
| `h-[102px]` | `h-25.5` |
| `h-[112px]` | `h-28` |
| `h-[200px]` | `h-50` |
| `h-[280px]` | `h-70` |
| `h-[360px]` | `h-90` |
| `w-[72px]` | `w-18` |
| `gap-[30px]` | `gap-7.5` |
| `gap-[52px]` | `gap-13` |
| `gap-[60px]` | `gap-15` |
| `mt-[52px]` | `mt-13` |
| `py-[5px]` | `py-1.25` |

If `N ÷ 4` is not a clean decimal, the arbitrary value is justified — add a comment.

### 3. Named leading values — always prefer over decimals
```
leading-none    = 1      leading-tight   = 1.25
leading-snug    = 1.375  leading-normal  = 1.5
leading-relaxed = 1.625  leading-loose   = 2
```
`leading-[1.5]` → `leading-normal`. Values with no exact match (e.g. `1.4`) must be a `--leading-*` token in `@theme`.

### 4. Z-index — never use `z-[N]` without a token
Any non-standard z-index must be `--z-layer-name: N` in `@theme`, used as `z-layer-name`.

### 5. Shadows — never use `shadow-[…]` for repeated values
Same shadow in 2+ places must be a `--shadow-*` token in `@theme`.

### 6. Border radius — use token or built-in, not `rounded-[Npx]`
**v4 renamed:** `rounded-xs`=2px, `rounded-sm`=4px, `rounded-md`=6px, `rounded-lg`=8px, `rounded-xl`=12px, `rounded-2xl`=16px, `rounded-3xl`=24px, `rounded-full`=9999px.
Note: v3 bare `rounded` → v4 `rounded-sm`; v3 `rounded-sm` → v4 `rounded-xs`.
`rounded-[20px]` has no built-in — add `--radius-card: 1.25rem` to `@theme`.

### 7. Font sizes — token-first, then built-in, then arbitrary
Built-in scale (px at 16px root):
```
text-xs=12  text-sm=14  text-base=16  text-lg=18  text-xl=20
text-2xl=24  text-3xl=30  text-4xl=36  text-5xl=48  text-6xl=60
```
`text-[36px]` → `text-4xl`. Sizes between stops (28px, 32px, 40px) must be `--text-heading-*` tokens.

### 8. Repeated arbitrary values → always a token
Same `[…]` in 2+ places = design token. Add to `@theme`. No exceptions.

### v4 renamed utilities — check before writing
| v3 | v4 |
|---|---|
| `shadow-sm` | `shadow-xs` |
| `shadow` | `shadow-sm` |
| `rounded-sm` | `rounded-xs` |
| `rounded` | `rounded-sm` |
| `blur-sm` | `blur-xs` |
| `blur` | `blur-sm` |
| `ring` | `ring-3` |
| `outline-none` | `outline-hidden` |
| `!flex` (important) | `flex!` |

### Audit checklist (run per-file)
```
[ ] No text-[#…] / bg-[#…] / border-[#…] — use semantic color tokens
[ ] No px/rem arbitrary values when spacing formula gives a clean unit
[ ] No leading-[decimal] — use named or @theme token
[ ] No z-[N] — use @theme z-index token
[ ] No shadow-[…] repeated — use @theme shadow token
[ ] No rounded-[Npx] — use @theme radius token or built-in
[ ] No text-[Npx] — use text-4xl / @theme heading token
[ ] No repeated arbitrary value without a @theme token backing it
[ ] v4 renamed utilities used (not v3 names)
```
