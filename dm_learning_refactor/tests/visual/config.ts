/** Shared visual-test constants (not imported from playwright.config.ts). */

export const v2Base = process.env.V2_BASE_URL ?? 'http://localhost:3000';
export const referenceBase = process.env.REFERENCE_BASE_URL ?? v2Base;

/** Reference path → v2 path. Dynamic segments use fixed slugs for reproducible screenshots. */
export const ROUTE_MAP: Record<string, string> = {
  '/': '/v2',
  '/about-us': '/v2/about-us',
  '/contact': '/v2/contact',
  '/courses': '/v2/courses',
  '/courses/data-science-with-python': '/v2/courses/data-science-with-python',
  '/become-an-instructor': '/v2/become-an-instructor',
  '/advanced-industrial-training-and-internship': '/v2/advanced-industrial-training-and-internship',
  '/summer-bootcamp-and-internship': '/v2/summer-bootcamp-and-internship',
  '/microsoft-certifications': '/v2/microsoft-certifications',
  '/blog': '/v2/blog',
  '/campus-collaborations': '/v2/campus-collaborations',
  '/web-development': '/v2/web-development',
  '/ai-masterclass': '/v2/ai-masterclass',
  '/privacy-policy': '/v2/privacy-policy',
  '/terms-and-conditions': '/v2/terms-and-conditions',
  '/student-enrollment': '/v2/student-enrollment',
  '/payment': '/v2/payment',
  '/success': '/v2/success',
  '/failed': '/v2/failed',
  '/thankyou': '/v2/thankyou',
  '/thank-you-page': '/v2/thank-you-page',
};

/** Human-readable name for test output / screenshot folders */
export const ROUTE_LABELS: Record<string, string> = {
  '/': 'homepage',
  '/about-us': 'about-us',
  '/contact': 'contact',
  '/courses': 'courses',
  '/courses/data-science-with-python': 'course-data-science-with-python',
  '/become-an-instructor': 'become-an-instructor',
  '/advanced-industrial-training-and-internship': 'advanced-training',
  '/summer-bootcamp-and-internship': 'summer-bootcamp',
  '/microsoft-certifications': 'microsoft-certifications',
  '/blog': 'blog',
  '/campus-collaborations': 'campus-collaborations',
  '/web-development': 'web-development',
  '/ai-masterclass': 'ai-masterclass',
  '/privacy-policy': 'privacy-policy',
  '/terms-and-conditions': 'terms-and-conditions',
  '/student-enrollment': 'student-enrollment',
  '/payment': 'payment',
  '/success': 'success',
  '/failed': 'failed',
  '/thankyou': 'thankyou',
  '/thank-you-page': 'thank-you-page',
};

export const VIEWPORTS = [
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'nav-991', width: 991, height: 900 },
  { name: 'tablet-768', width: 768, height: 900 },
  { name: 'mobile-480', width: 480, height: 900 },
] as const;
