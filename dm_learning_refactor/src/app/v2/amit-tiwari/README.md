# Amit Tiwari Landing Page

## Section Map

Use this list to identify which Figma frame maps to which section component.

| # | Section Name | Component File | Notes |
|---|--------------|----------------|-------|
| 1 | Header | `_components/Header.tsx` | Sticky nav / top bar |
| 2 | Hero | `_components/Hero.tsx` | Full-width hero with headline, subtext, CTA |
| 3 | Stats Strip (Hero) | `_components/StatsStrip.tsx` | 4-stat bar below hero: 50+ Mentors, 500+ Campaigns, 100+ Brands, 10K+ Students |
| 4 | Built For You | `_components/BuiltForYou.tsx` | Audience targeting / pain-point section |
| 5 | What You Learn | `_components/WhatYouLearn.tsx` | Curriculum / module breakdown |
| 6 | Brochure CTA | `_components/BrochureCTA.tsx` | Mid-page CTA to download brochure |
| 7 | Made For New Normal | `_components/MadeForNewNormal.tsx` | Online-first / hybrid learning pitch |
| 8 | Stats Strip (Mid 1) | `_components/StatsStrip.tsx` | 4-stat bar: 30K+ Alumni, 6 Month Program, 120+ Hiring Partners, 4.5/5 Rating |
| 9 | How DM Compares | `_components/HowDMCompares.tsx` | Comparison table vs competitors |
| 10 | Application Steps | `_components/ApplicationSteps.tsx` | Step-by-step enrollment process |
| 11 | Course Prepares | `_components/CoursePrepares.tsx` | Career outcomes / what the course prepares you for |
| 12 | Stats Strip (Mid 2) | `_components/StatsStrip.tsx` | 4-stat bar: ₹85K+ Salary, 92% Placement, 3 mo Payback, 5x ROI |
| 13 | ROI Calculator | `_components/ROICalculator.tsx` | Interactive salary / ROI calculator |
| 14 | Mentor Profile | `_components/MentorProfile.tsx` | Amit Tiwari bio, credentials, photo |
| 15 | Testimonials | `_components/Testimonials.tsx` | Student video / text testimonials |
| 16 | Student Projects | `_components/StudentProjects.tsx` | Portfolio / live project showcase |
| 17 | Alumni Logos | `_components/AlumniLogos.tsx` | Company logos where alumni are placed |
| 18 | Pricing CTA | `_components/PricingCTA.tsx` | Fee card, EMI options, enroll CTA |
| 19 | FAQ | `_components/FAQ.tsx` | Accordion FAQ |
| 20 | Footer | `_components/Footer.tsx` | Links, social, legal |

---

## Two-Column Sticky Layout (Sections 4–3)

Sections **Built For You → Stats Strip** (rows 4–3 in the section map, i.e. everything between the Hero and the Stats Strip at the bottom of that block) render inside a **two-column wrapper** instead of full-width sections:

```
┌──────────────────────────────────┬────────────────┐
│  Left column  (2/3 width)        │  Right column  │
│                                  │  (1/3 width)   │
│  • Built For You                 │                │
│  • What You Learn                │  Sticky Form   │
│  • Brochure CTA                  │  (counselling  │
│  • Made For New Normal           │   card)        │
│  • How DM Compares               │                │
│  • Application Steps             │                │
│  • Course Prepares               │                │
│  • Stats Strip                   │                │
└──────────────────────────────────┴────────────────┘
```

### Exact widths (from Figma @ 1440 px canvas)
| Column | Width |
|--------|-------|
| Left content | 1020 px (`flex-1`) |
| Gap | 60 px |
| Right form | 360 px (`w-[360px] shrink-0`) |

### Layout rules
- The outer wrapper in `page.tsx` applies `xl:container-page xl:flex xl:gap-[60px] xl:items-start`.
- Below `xl` (tablet and smaller): columns don't activate — sections stack full-width. The form column is `hidden xl:block` (display:none).
- Left column: `xl:flex-1 xl:min-w-0`.
- Right column: `hidden xl:block w-[360px] shrink-0 sticky top-[3.875rem]` — the sticky offset matches the header height (logo h-8 + py-[0.9375rem] × 2 ≈ 3.875 rem).
- Each section component inside the left column **must not** use `container-page` internally. Replace its inner wrapper with `px-6 xl:px-0` so mobile still gets safe padding while xl lets the parent `container-page` handle centering.

---

## Implementation Rules

### Tailwind CSS v4 (CSS-first)
- Config lives in `styles.css` via `@import "tailwindcss"` + `@theme` — no `tailwind.config.js`.
- Tokens follow a **three-layer** model: base primitives → semantic roles → component utilities.
- Add new brand tokens to the `@theme` block in `styles.css`; they become CSS variables and Tailwind utilities automatically.

### Sizing — all in rem
- **No `px`** for spacing, font-size, border-radius, or width/height.
- Use built-in Tailwind scale classes first (`p-4`, `text-sm`, `rounded-lg`).
- Only use arbitrary values (`p-[1.125rem]`) when no built-in class matches — document it when you do.

### Container
- Wrap each section's inner content with the `container-page` utility (defined in `styles.css`): `max-width: 90rem` (1440 px) + `padding-inline: 1.5rem` + `margin-inline: auto`.

### Breakpoints — mobile-first
- Default styles = mobile. Scale up with `sm:` → `md:` → `lg:` → `xl:` → `2xl:`.
- Figma designs are at 1440 px — map those to `xl:` or `2xl:` classes.

### Images
- Use Next.js `<Image>` with `width`/`height` (fixed) or `fill` + `relative` parent.

### Class order convention
Layout → Spacing → Typography → Colors → Effects → State/Responsive

## Workflow — When Given a Figma Frame

1. Match the frame name / position to the section number above.
2. Read this README to confirm the target component file.
3. Check `styles.css` for existing tokens; add any missing brand values to `@theme`.
4. Implement a pixel-perfect replica:
   - Use `container-page` for the inner wrapper.
   - All sizes in rem — built-in Tailwind classes first, arbitrary values only as last resort.
   - Mobile-first; Figma values map to `xl:` breakpoint.
5. Add the component back to `page.tsx` in the correct order.
