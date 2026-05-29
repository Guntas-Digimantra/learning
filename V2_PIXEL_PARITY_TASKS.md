# V2 pixel parity — task tracker (source of truth)

**Read this file at the start of every parity session.** Update checkboxes and the status table as work completes. Do not rely on older notes in `visual-parity/parity-checklist.md` (stale).

## Goal

Every route under [`dm_learning_refactor/src/app/v2/`](dm_learning_refactor/src/app/v2/) must **pixel-match** [`dm_learning`](dm_learning) at the same path (reference has no `/v2` prefix). Styling: **Tailwind utilities only** (+ minimal shared helpers in [`dm_learning_refactor/src/app/v2/globals.css`](dm_learning_refactor/src/app/v2/globals.css)). Match **mobile (390), tablet (768), laptop (1440)**.

**Out of scope:** `/ai-hackathon-2026` (only in dm_learning, not in v2).

---

## How to run (every session)

### 1. Dev servers

```bash
# Terminal A — reference
cd dm_learning && pnpm dev -p 3001

# Terminal B — v2
cd dm_learning_refactor && pnpm dev -p 3000
```

If port **3001** hangs: `fuser -k 3001/tcp` then restart dm_learning.

### 2. Visual parity tooling

```bash
cd visual-parity
npm install
npx playwright install chromium   # once per machine

# Single page, laptop
node compare.mjs --page contact --viewport laptop

# All static pages, laptop
node compare.mjs --static --viewport laptop

# All static × 3 viewports (slow)
node compare.mjs --static --viewport all

# Section height debug
node measure.mjs home
node diff-bands.mjs contact
```

- Report: [`visual-parity/output/REPORT.md`](visual-parity/output/REPORT.md)
- Screenshots: `visual-parity/output/<slug>/<viewport>/{reference,v2,diff}.png`
- Pass criteria: same width × height, `diffPercent ≤ 0.01%`

---

## Done

### Phase 0 — Tooling & foundation

- [x] Extended [`visual-parity/compare.mjs`](visual-parity/compare.mjs): viewports `mobile` | `tablet` | `laptop` | `all`, `--static`, dynamic slug list (courses + Microsoft + webinar), removed `ai-hackathon-2026`, added `thankyou`
- [x] [`visual-parity/measure.mjs`](visual-parity/measure.mjs): `home`, `contact`, `courses` slugs
- [x] Fixed **home 500**: circular import — [`src/libs/generate-stars.ts`](dm_learning_refactor/src/libs/generate-stars.ts); home `CourseArea` imports from there
- [x] **`.dml-container`** in [`dm_learning_refactor/src/app/v2/globals.css`](dm_learning_refactor/src/app/v2/globals.css)
- [x] **`/v2/courses`** wired to Tailwind [`CourseArea`](dm_learning_refactor/src/components/courses/CourseArea.tsx) (replaced `components/v2/routes/courses/*` design)
- [x] Synced courses list data: [`dm_learning_refactor/src/app/data/courses-page-data.tsx`](dm_learning_refactor/src/app/data/courses-page-data.tsx) (from dm_learning `courses/CourseArea.tsx` — **not** `CourseData.ts` used on home swiper)

### Phase 1 — Shared chrome (partial)

- [x] [`ContactArea`](dm_learning_refactor/src/components/contact/ContactArea.tsx) uses shared [`ContactInfo`](dm_learning_refactor/src/components/common/ContactInfo.tsx)
- [x] [`BreadcrumbOne`](dm_learning_refactor/src/components/common/BreadcrumbOne.tsx): `h1` → `text-[50px] font-medium` (match dm_learning globals)
- [x] [`Header`](dm_learning_refactor/src/components/common/Header.tsx): nav `py-[10px]` (match `header.css`)
- [x] [`ContactInfo`](dm_learning_refactor/src/components/common/ContactInfo.tsx): width breakpoints `min-[1025px]:max-[1400px]:w-[38%]`, `max-md:p-5` on cards
- [x] [`form-classes.ts`](dm_learning_refactor/src/components/common/form-classes.ts): field line-height / row gaps
- [x] Home: Banner `text-[50px]`; home swiper `loop={false}`; collaborations → [`collaborators.module.css`](dm_learning_refactor/public/css/collaborators.module.css) (same as reference)

---

## In progress

### Measured laptop parity (2026-05-22 — re-baseline; old checklist was wrong)

| Page | Ref size | V2 size | Δ height | Status | Notes |
|------|----------|---------|----------|--------|-------|
| **home** | 1440×8778 | 1440×8463 | −315px | FAIL | Section-by-section tuning; see measure output |
| **contact** | 1440×2340 | 1440×2282 | −58px | FAIL | Header/footer ~13px; contact body ~45px |
| **courses** | 1440×4084 | 1440×3820 | −264px | FAIL | Card layout/padding vs `home-page.css` `.courses-page-cards` |
| about-us | — | — | — | NOT RUN | |
| blog | — | — | — | NOT RUN | |
| campus-collaborations | — | — | — | NOT RUN | |
| student-enrollment | — | — | — | NOT RUN | |
| payment / success / failed | — | — | — | NOT RUN | |
| program landings (4) | — | — | — | NOT RUN | |
| masterclasses (3) | — | — | NOT RUN | |
| summercamps | — | — | — | NOT RUN | |
| amit-tiwari-dmp | — | — | — | NOT RUN | |
| thankyou / thank-you-page / harsh | — | — | — | NOT RUN | |

**Home section heights (ref @ 1440):** banner 487, about 729, start-learning 737, part-time 525, courses swiper 841, portfolio 457, discover 321, counter 546, faq 970, features 908, testimonial 798, contact block 857.

---

## Left to do

### Priority order (do in sequence)

1. [ ] **Shared chrome** — pixel-match Header (144px vs 137px), Footer (452 vs 446); optional: port [`footer.css`](dm_learning/public/css/footer.css) tokens into Tailwind on [`Footer.tsx`](dm_learning_refactor/src/components/common/Footer.tsx)
2. [ ] **contact** — close 58px gap (form heights, `contact-form-wrap` padding `30px 40px 42px`)
3. [ ] **courses** — close 264px gap (card footer `padding: 30px` per CSS, `courses__item-bottom`, grid `items-stretch`; compare one card in DevTools)
4. [ ] **home** — close 315px gap (per-section vs [`home-page.css`](dm_learning/public/css/home-page.css))
5. [ ] **Static tier-1:** about-us, blog, campus-collaborations (CSS modules → Tailwind)
6. [ ] **Static tier-2:** web-development, microsoft list, advanced, summer-bootcamp, enrollment, instructor, legal, payment trio, masterclasses
7. [ ] **summercamps** — remove [`index.css`](dm_learning_refactor/src/app/v2/(tailwind)/summercamps/index.css) + inline styles → Tailwind
8. [ ] **amit-tiwari** — verify @ xl + mobile (already Tailwind in both)
9. [ ] **Dynamic routes** — template + **every slug** × 3 viewports:
   - `courses/[course]` (~18 slugs in `courses-page-data` + development details)
   - `microsoft-certifications/[slug]` (12 slugs)
   - `blog/[slug]` (CMS — same post on both envs for compare)
   - `[slug]` webinars (`webinarConfig`)
10. [ ] **Full matrix green** — `node compare.mjs --static --viewport all`
11. [ ] Update [`TAILWIND_MIGRATION_AUDIT.md`](dm_learning_refactor/TAILWIND_MIGRATION_AUDIT.md) from measured results; remove dead `public/css` imports on v2-only trees

### Rules while fixing

- Reference CSS: [`dm_learning/public/css/*.css`](dm_learning/public/css/) and app-local `ai-masterclass.css`, `summercamps/index.css`
- Mirror breakpoints: `max-[991px]`, `max-[767px]`, `max-[575px]`, `min-[1025px]:max-[1400px]:`
- Do **not** switch to [`components/v2/common/header.tsx`](dm_learning_refactor/src/components/v2/common/header.tsx) until it matches reference (`#161439` top bar)
- **Courses page** uses [`courses-page-data.tsx`](dm_learning_refactor/src/app/data/courses-page-data.tsx); **home swiper** uses [`CourseData.ts`](dm_learning_refactor/src/app/data/home-data/CourseData.ts) — keep separate

---

## Key files (quick links)

| Area | Path |
|------|------|
| v2 layout | `dm_learning_refactor/src/app/v2/layout.tsx` |
| v2 tokens | `dm_learning_refactor/src/app/v2/globals.css` |
| Parity runner | `visual-parity/compare.mjs` |
| Task plan (detail) | `.cursor/plans/v2_pixel_parity_qa_ec697f40.plan.md` |
| Route map | `dm_learning_refactor/V2_ROUTES_PARITY.md` |

---

## Session log

| Date | Work |
|------|------|
| 2026-05-22 | Tooling + courses page rebuild + data sync + chrome tweaks; re-baseline shows home/contact/courses still FAIL on laptop |

---

## For the agent

When the user says **continue parity work**:

1. Read this file.
2. Pick the **first unchecked** item in “Left to do” (or “In progress” table).
3. Fix → `node compare.mjs --page <slug> --viewport laptop` → update this file.
4. Do not ask the user to repeat goals unless a decision is blocked (e.g. blog CMS slug).
