# V2 ↔ dm_learning pixel parity

Automated **exact pixel** comparison between:

| Role | URL base |
| --- | --- |
| Reference (`dm_learning`) | `http://localhost:3001` |
| V2 (`dm_learning_refactor`) | `http://localhost:3000/v2` |

## Prerequisites

Both dev servers must be running:

```bash
# Terminal 1 — original
cd dm_learning && pnpm dev -p 3001

# Terminal 2 — v2
cd dm_learning_refactor && pnpm dev -p 3000
```

## Run

```bash
cd visual-parity
npm install
npx playwright install chromium

# All static pages (25)
npm run compare

# Single page
npm run compare:page -- home
node compare.mjs --list   # slugs
```

## Output

- `output/REPORT.md` — summary table
- `output/report.json` — machine-readable
- `output/<slug>/reference.png` — dm_learning screenshot
- `output/<slug>/v2.png` — v2 screenshot
- `output/<slug>/diff.png` — red pixels = mismatch

Settings: viewport **1440×900**, `deviceScaleFactor: 1`, `pixelmatch` threshold **0** (any differing pixel fails).

## Course / blog slugs

Dynamic routes (`/courses/[course]`, `/blog/[slug]`) are not in the default list. Add entries to `PAGES` in `compare.mjs` or run one-off:

```bash
REF_BASE=http://localhost:3001 V2_BASE=http://localhost:3000/v2 \
  node compare.mjs --page home
```
