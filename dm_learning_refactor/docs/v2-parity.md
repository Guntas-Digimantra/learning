# v2 visual parity

Match `dm_learning_refactor` `/v2/*` to `dm_learning` `/(main)/*` at legacy breakpoints using **Tailwind only** (no copying components, no `public/css` imports in v2).

## Setup

```bash
cd dm_learning_refactor
npx -y pnpm@10.18.3 install --no-frozen-lockfile
npx playwright install chromium
```

## Run visual tests

```bash
# Refactor only — compares / vs /v2 (same app; NOT dm_learning parity)
npm run dev
npm run test:visual

# Full reference — dm_learning on :3001, refactor on :3000
# Terminal A: cd dm_learning && npx next dev -p 3001
# Terminal B: cd dm_learning_refactor && npx next dev -p 3000
$env:PLAYWRIGHT_SKIP_WEBSERVER="true"
$env:REFERENCE_BASE_URL="http://localhost:3001"
$env:V2_BASE_URL="http://localhost:3000"
$env:VISUAL_MAX_DIFF_RATIO="0.02"   # tighten to 0.01 after a page passes
npm run test:visual:header
npm run test:visual:homepage-sections
npm run test:visual:reference
```

Outputs:

- `.parity-screenshots/header/` — header element only
- `.parity-screenshots/homepage-sections/` — banner, about, collaborations locators
- `.parity-screenshots/routes/<label>/` — full-page per route (`dm-learning-routes.spec.ts`)

## Breakpoints

1440, 991, 768, 480 — see `tests/visual/config.ts`. Prefer `max-[991px]:` over Tailwind `lg` (1024).

## Phase status

| Phase | Scope | Status |
|-------|--------|--------|
| 0 | Harness: `config.ts` ROUTE_MAP, route specs, `helpers.alignAndDiff`, docs | **Done** |
| 1 | Header chrome (`Header.tsx`, `globals.css` header block) | **Done** @ 2% (all 4 breakpoints) |
| 2 | Homepage sections (banner, about, collaborations + rest) | **In progress** — see matrix below |
| 3 | Tier A: about-us, contact, courses, course detail | Pending |
| 4 | Remaining `(main)` routes in `ROUTE_MAP` | Pending |
| 5 | `summercamps`, `amit-tiwari` microsites | Pending |

## Sign-off matrix (`VISUAL_MAX_DIFF_RATIO=0.02`)

| Area | 1440 | 991 | 768 | 480 |
|------|------|-----|-----|-----|
| Header chrome | pass | pass | pass | pass |
| Homepage banner | pass | pass | pass | ~2.7% (pending) |
| Homepage collaborations | pass | pass | pass | pass |
| Homepage about | pass | ~17% | ~20% | ~7% |
| `/` full page | — | — | — | — |
| Tier A routes | — | — | — | — |

Last verified: header + homepage-sections Playwright run (local :3001 / :3000).

## Known v2 fixes (Tailwind vs legacy CSS)

- **`.w-50`**: Tailwind spacing `w-50` = 200px width; legacy means `flex: 1`. Unlayered rule sets `flex: 1; width: auto; min-width: 0`.
- **`.line-shape`**: hidden at `max-width: 991px` (matches `home-page.css`).
- **About image**: at `max-width: 1024px`, `max-width: min(519px, 100%)` so stacked layout matches reference scaling.
- **Favicon**: `public/favicon.ico` copied from `dm_learning` (was wrong asset).

## Fix loop

1. Run targeted script with both servers up.
2. Open diff PNGs under `.parity-screenshots/`.
3. Read **reference only** from `dm_learning/public/css/*.css`; adjust Tailwind + unlayered rules in `src/app/v2/globals.css` and `src/components/*`.
4. Re-run until gate passes; then lower `VISUAL_MAX_DIFF_RATIO` to `0.01`.

## Rules

- No copying TSX from `dm_learning`.
- No `@import` of route CSS in `v2/globals.css` (keyframes-only OK for microsites).
- v1 is out of scope; shared components may change for v2 parity.
- Do not claim a page matches until its Playwright gate passes.
