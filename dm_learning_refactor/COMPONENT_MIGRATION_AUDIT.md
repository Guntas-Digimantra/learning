# dm_learning → `/v2` Tailwind migration (complete)

## Rule

Every component used by **dm_learning** marketing routes is available under **`/v2`** and uses **Tailwind utilities** (no `public/css` imports in the live `/v2` tree).

## `/v2` shell

| Piece | Component | Tailwind |
|-------|-----------|----------|
| Layout | `common/Header`, `common/Footer` | ✅ (dm_learning chrome) |
| Home | `components/home/*` | ✅ |
| Contact | `components/contact` | ✅ |
| Student enrollment | `components/student-detailed-form` | ✅ |
| About | `components/about-us` (dm_learning tree) | ✅ |
| Become instructor | `become-instructor/*` + `BreadcrumbOne` | ✅ |
| All program / blog / payment pages | See `V2_ROUTES_PARITY.md` | ✅ |
| Forms | `common/form-classes.ts` shared by ContactForm, StudentDetailForm, BecomeInstructorForm | ✅ |

## Scoped exception (sub-landing)

| Route | CSS | Notes |
|-------|-----|-------|
| `/v2/summercamps` | `summercamps/index.css` | Responsive helpers for `sc-*` grids; components use inline styles + CSS variables on layout. Tailwind wrapper on layout. **TODO:** inline remaining `sc-*` into utilities. |
| `/v2/amit-tiwari` | `styles.css` | Tailwind theme/utilities without Preflight (isolated landing). |

## v1-only (not mounted on `/v2`)

- `about-us/Banner.tsx`, `Purpose.tsx`, `Collaborations.tsx` — legacy copies, still import CSS if used on `(v1)` routes
- `modal/DiscountModal` — unused in dm_learning and v2
- `(v1)/blog` page CSS imports

## Verification

```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/v2/contact          # 200
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/v2/student-enrollment # 200
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/v2/about-us          # 200
```

```bash
rg "public/css" src/components src/app/v2 --glob "*.tsx"
# Should only hit v1 paths or unused files
```
