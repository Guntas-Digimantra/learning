# Homepage parity — section-by-section sign-off

Process: fix → automated check → **you verify** → next section.

Breakpoints: **1440** (laptop), **991** (nav), **768** (tablet), **480** (mobile).

Gate: ≤ **2%** pixel diff on `.hero-banner-content` (or section selector below), then tighten to ≤ **1%**.

Screenshots: `visual-parity/output/section-XX-<name>/<viewport>/{reference,v2,diff}.png`

Run banner check:

```bash
# Terminals: dm_learning :3001, dm_learning_refactor :3000
cd visual-parity && node banner-compare.mjs all
```

---

## Section 0b — Desktop navbar (`header nav`)

| Viewport | Diff % | Status |
|----------|--------|--------|
| desktop-1440 | 0% | PASS |
| laptop-1280 | 0% | PASS |
| nav-991 (menu hidden) | 0% | PASS |

**Fixes:** Universal `padding: 0` reset (removed 40px `ul` indent); `.navbar` flex center; `ul.menu` padding/gap; nav link color `#161439`.

```bash
cd visual-parity && node navbar-compare.mjs all
```

---

## Section 0 — Header chrome (`Header.tsx`)

| Viewport | Ref size | V2 size | Diff % | Status |
|----------|----------|---------|--------|--------|
| desktop-1440 | 1440×145 | 1440×145 | ~1.5% | PASS @ 2% |
| nav-991 | 991×114 | 991×114 | ~0.8% | PASS @ 2% |
| tablet-768 | 768×64 | 768×64 | ~0% | PASS @ 2% |
| mobile-480 | 480×64 | 480×64 | ~0% | PASS @ 2% |

**Reference spec:** `dm_learning/public/css/header.css`

**Fix:** Restored reference markup/classes (`header-top`, `sticky-header`, `navLink`, `contact-btn`, `menu`, mobile drawer) so rules in `v2/globals.css` apply. Removed conflicting Tailwind-only layout.

**Verify:**

```bash
cd visual-parity && node header-compare.mjs all
# Screenshots: visual-parity/output/section-00-header/<viewport>/
```

Reply **“Header approved”** before we re-check banner+header together.

---

## Section 1 — Banner / Hero (`Banner.tsx`)

| Viewport | Ref size | V2 size | Diff % | Status |
|----------|----------|---------|--------|--------|
| desktop-1440 | 1410×487 | 1410×487 | ~1.2% | PASS @ 2% |
| nav-991 | 961×731 | 961×731 | ~1.0% | PASS @ 2% |
| tablet-768 | 738×730 | 738×730 | ~1.4% | PASS @ 2% |
| mobile-480 | 450×686 | 450×686 | ~2.5% | **Review** (layout matches; sub-pixel text) |

**Reference spec:** `dm_learning/public/css/home-page.css` — `.home-banner-section`, `.hero-banner-content`, `.hero-left`, `.hero-right`, `.hero-left p`, `.line-shape`.

**Fixes applied (Tailwind on `src/components/home/Banner.tsx`):**

- Mobile-first layout: column ≤991px, row ≥992px (matches reference `@media (max-width: 991px)`).
- H1: 50px ≥1025px, 38px below; `!leading-normal`, `text-black`.
- Body copy: `!text-[18px] !leading-[1.7]` (overrides v2 base `p` 16px).
- Hero image: 618×521, `unoptimized`; column layout scales width at narrow viewports.
- Decorative shape hidden ≤767px (reference `.line-shape`).
- CTA: `dml-button` + `v2-cta-black`.

**Your verification:** Open the four `diff.png` files under `visual-parity/output/section-01-banner/`. Reply **“Section 1 approved”** or list what still looks wrong.

---

## Section 2 — About (`About.tsx`)

_Status: not started in this pass._

## Section 3 — Collaborations (`collaborators-section.tsx`)

_Status: not started in this pass._

_(Further sections follow homepage order in `components/home/index.tsx`.)_
