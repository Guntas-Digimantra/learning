/**
 * Prefix internal paths with /v2 when the user is browsing under the v2 app shell.
 */
export function isV2Path(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  return pathname === '/v2' || pathname.startsWith('/v2/');
}

export function withAppPath(href: string, pathname: string | null | undefined): string {
  if (!href || !isV2Path(pathname)) return href;

  if (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('#')
  ) {
    return href;
  }

  if (href.startsWith('/v2')) return href;

  if (href === '/') return '/v2';

  return `/v2${href.startsWith('/') ? href : `/${href}`}`;
}
