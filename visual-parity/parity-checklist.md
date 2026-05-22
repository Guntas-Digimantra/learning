# V2 pixel parity checklist

> `REF_BASE=http://localhost:3001` · `V2_BASE=http://localhost:3000/v2` · threshold ≤ 0.01% in `compare.mjs`

## Phase 0 — Foundation ✅

| Item | Status |
|------|--------|
| `header.css` / `footer.css` in refactor `/public/css/` | ✅ |
| Legacy `Header.tsx` / `Footer.tsx` | ✅ |
| `compare.mjs` — clip 1440, scrollbar hide, placeholder stabilize | ✅ |
| `(tailwind)/layout.tsx` — no global Tailwind bleed | ✅ |

## Phase 1 — Quick wins ✅

| Page | Status | Notes |
|------|--------|-------|
| blog | ✅ PASS | Legacy `blog/index.tsx` + `blog.css` |
| contact | ✅ PASS | `BreadcrumbOne` + `ContactArea` |
| success | ✅ PASS | |
| failed | ✅ PASS | |
| payment | ✅ PASS | |
| amit-tiwari-dmp | ✅ PASS | `v2/amit-tiwari/` landing |

## Phase 2 — Core marketing ✅

| Page | Status | Notes |
|------|--------|-------|
| home | ✅ PASS | Legacy `HomeOne`; no globals bleed on `v2/layout` |
| about-us | ✅ PASS | Legacy `AboutUs` + CSS |
| courses | ✅ PASS | `CourseArea` + CSS |
| campus-collaborations | ✅ PASS | Legacy page + `collaborations.css` |
| student-enrollment | ✅ PASS | Form font smoothing + compare placeholder stabilize |

## Phase 3+ — Not completed before pause

See `compare.mjs` PAGES list for remaining routes.

Run: `node compare.mjs --page <slug>` (single-page; batch can flake on HMR)
