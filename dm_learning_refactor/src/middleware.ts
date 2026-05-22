import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * All dm_learning marketing routes live under /v2.
 * Redirect legacy root URLs so bookmarks and external links keep working.
 */
const REDIRECT_TO_V2_EXACT = new Set([
  '/',
  '/about-us',
  '/courses',
  '/contact',
  '/campus-collaborations',
  '/blog',
  '/become-an-instructor',
  '/student-enrollment',
  '/privacy-policy',
  '/terms-and-conditions',
  '/microsoft-certifications',
  '/advanced-industrial-training-and-internship',
  '/summer-bootcamp-and-internship',
  '/summercamps',
  '/payment',
  '/success',
  '/failed',
  '/web-development',
  '/harsh',
  '/thankyou',
  '/thank-you-page',
  '/ai-masterclass',
  '/master-100-ai-prompts-in-60-minutes',
  '/leveraging-ai-with-solo-preneurship',
]);

/** Dynamic segments mirrored from dm_learning app routes */
const REDIRECT_TO_V2_PREFIXES = ['/courses/', '/blog/', '/microsoft-certifications/'];

const WEBINAR_SLUGS = new Set([
  'master-100-ai-prompts-in-60-minutes',
  'leveraging-ai-with-solo-preneurship',
  'ai-masterclass',
]);

function shouldRedirectToV2(pathname: string): boolean {
  if (REDIRECT_TO_V2_EXACT.has(pathname)) return true;
  if (REDIRECT_TO_V2_PREFIXES.some((prefix) => pathname.startsWith(prefix))) return true;
  const slug = pathname.slice(1);
  if (WEBINAR_SLUGS.has(slug)) return true;
  return false;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/v2') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  if (shouldRedirectToV2(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === '/' ? '/v2' : `/v2${pathname}`;
    return NextResponse.redirect(url);
  }

  if (pathname.startsWith('/amit-tiwari')) {
    const url = request.nextUrl.clone();
    url.pathname = `/v2${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
