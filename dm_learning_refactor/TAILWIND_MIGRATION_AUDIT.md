# v2 Tailwind-Only Migration — status (updated)

> **Pixel parity progress:** see [`../V2_PIXEL_PARITY_TASKS.md`](../V2_PIXEL_PARITY_TASKS.md) (measured PASS/FAIL per page).

## Architecture

| URL | Layout CSS | Chrome | Page content |
|-----|------------|--------|----------------|
| `/v2` | `v2/globals.css` only | `v2/common/header` + `footer` (Tailwind) | `HomeOne` → `components/home/*` |
| `/v2/*` | `(tailwind)/layout` → `v2/globals.css` | Same shell | Route-specific (mostly Tailwind) |
| `/v2/amit-tiwari/*` | Scoped `styles.css` (Tailwind theme/utilities, no Preflight) | No main header/footer | Amit Tiwari landing |

## Plan checklist

| Step | Status |
|------|--------|
| delete-classes-tsx | ✅ |
| migrate-homepage | ✅ Tailwind in `components/home/*` |
| migrate-v2-shared-chrome | ✅ v2 Header/Footer — no `header.css`/`footer.css` on shell |
| migrate-v2-routes | ✅ Major marketing + program routes |
| migrate-v2-sub-apps | ⚠️ `amit-tiwari` uses isolated Tailwind `styles.css` (intentional); `summercamps` TBD |
| cleanup-v2-globals | ✅ Swiper helpers, animations (`zoomInOut`, `slideInFromLeft`, `moveUpDown`) |
| final-qa | ❌ Visual compare vs dm_learning |

## ✅ v2 routes — Tailwind (no `public/css` in tree)

- `/v2` — HomeOne
- Tier-1: `/v2/about-us`, `/v2/courses`, `/v2/contact`, `/v2/student-enrollment`, `/v2/become-an-instructor`
- `/v2/blog`, `/v2/blog/[slug]`
- `/v2/privacy-policy`, `/v2/terms-and-conditions`
- `/v2/payment`, `/v2/success`, `/v2/failed`
- `/v2/campus-collaborations` (+ gallery modals)
- Programs: `/v2/microsoft-certifications`, `/v2/web-development`, `/v2/advanced-industrial-training-and-internship`, `/v2/summer-bootcamp-and-internship`
- `/v2/courses/[course]` — page-level legacy CSS removed; components use utilities

## ⚠️ Remaining (not on main v2 shell or v1-only)

| Item | Notes |
|------|--------|
| `v2/amit-tiwari/styles.css` | Scoped Tailwind theme — not `public/css` |
| `components/common/Header.tsx`, `Footer.tsx` | Legacy CSS — **v1 only** |
| `contact/index`, `student-detailed-form`, legacy `about-us/*` | v1 paths |
| `microsoft-courses-certifications` | Legacy CSS if linked from v1 |
| `modal/DiscountModal`, `dummy/index` | Not wired to current v2 pages |
| `summercamps` sub-app | Local CSS |

## Homepage vs dm_learning

- Same section order as dm_learning
- Tailwind utilities + `Link` / `V2BasePathProvider`
- Compare: `http://localhost:3001/` vs `http://localhost:3000/v2`

## Next steps

1. Visual QA at 1440 / 991 / 768 / 430
2. `summercamps` + any webinar slug pages if strict zero-CSS required
3. Commit when ready
