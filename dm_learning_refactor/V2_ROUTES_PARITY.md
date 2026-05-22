# dm_learning → `/v2` route parity

Every page under `dm_learning/src/app` has a matching route under `dm_learning_refactor/src/app/v2`.

| dm_learning path | v2 path | Notes |
|------------------|---------|--------|
| `/` | `/v2` | `v2/page.tsx` (HomeOne) |
| `/about-us` | `/v2/about-us` | Tailwind v2 sections |
| `/courses` | `/v2/courses` | |
| `/courses/[course]` | `/v2/courses/[course]` | |
| `/contact` | `/v2/contact` | |
| `/campus-collaborations` | `/v2/campus-collaborations` | |
| `/blog` | `/v2/blog` | |
| `/blog/[slug]` | `/v2/blog/[slug]` | |
| `/payment` | `/v2/payment` | |
| `/success` | `/v2/success` | |
| `/failed` | `/v2/failed` | |
| `/privacy-policy` | `/v2/privacy-policy` | |
| `/terms-and-conditions` | `/v2/terms-and-conditions` | |
| `/student-enrollment` | `/v2/student-enrollment` | |
| `/become-an-instructor` | `/v2/become-an-instructor` | |
| `/web-development` | `/v2/web-development` | |
| `/microsoft-certifications` | `/v2/microsoft-certifications` | |
| `/microsoft-certifications/[slug]` | `/v2/microsoft-certifications/[slug]` | 12 certification slugs |
| `/advanced-industrial-training-and-internship` | `/v2/advanced-industrial-training-and-internship` | |
| `/summer-bootcamp-and-internship` | `/v2/summer-bootcamp-and-internship` | |
| `/summercamps` | `/v2/summercamps` | Own layout + `components/` (no main site header) |
| `/ai-masterclass` | `/v2/ai-masterclass` | |
| `/master-100-ai-prompts-in-60-minutes` | `/v2/master-100-ai-prompts-in-60-minutes` | Also via `/v2/[slug]` |
| `/leveraging-ai-with-solo-preneurship` | `/v2/leveraging-ai-with-solo-preneurship` | Also via `/v2/[slug]` |
| `/[slug]` (webinars) | `/v2/[slug]` | `webinarConfig` slugs |
| `/thankyou` | `/v2/thankyou` | |
| `/thank-you-page` | `/v2/thank-you-page` | |
| `/harsh` | `/v2/harsh` | |
| `/amit-tiwari/digital-marketing-professional` | `/v2/amit-tiwari/digital-marketing-professional` | Separate layout (no main header/footer) |

## Legacy URL redirects

`src/middleware.ts` redirects root URLs above (including `/`, dynamic `/courses/*`, `/blog/*`, `/microsoft-certifications/*`) to `/v2…`.

Internal links under `/v2` use `@/components/ui/link` + `V2BasePathProvider` so paths like `/courses` resolve to `/v2/courses`.
