# V2 ↔ dm_learning pixel parity

Automated comparison between:

| Role | URL base |
| --- | --- |
| Reference (`dm_learning`) | `http://localhost:3001` |
| V2 (`dm_learning_refactor`) | `http://localhost:3000/v2` |

## Prerequisites

Both dev servers must be running:

```bash
cd dm_learning && pnpm dev -p 3001
cd dm_learning_refactor && pnpm dev -p 3000
```

## Setup

```bash
cd visual-parity
npm install
npx playwright install chromium
```

## Run

```bash
# All pages (static + dynamic from data files), laptop only
node compare.mjs

# Static routes only × 3 viewports
node compare.mjs --static --viewport all

# Full matrix (static + courses + MS + webinars + sample blog)
node compare.mjs --viewport all

# Single page
node compare.mjs --page home --viewport all
node compare.mjs --list
```

Optional: `BLOG_SLUG=your-post-slug node compare.mjs --page blog-your-post-slug`

## Output

- `output/REPORT.md` — summary table
- `output/report.json` — machine-readable
- `parity-checklist.md` — page × viewport PASS/FAIL (regenerated each run)
- `output/<slug>/<viewport>/{reference,v2,diff}.png`

Settings: mobile 390×844, tablet 768×1024, laptop 1440×900, pixel diff **< 0.5%** (section compares crop to overlapping region when heights differ slightly).

```bash
node homepage-responsive-compare.mjs all   # key sections @ 4 breakpoints
node banner-compare.mjs all
node header-compare.mjs all
```

## Helpers

```bash
node measure.mjs home          # section heights ref vs v2
node diff-bands.mjs home laptop
```
