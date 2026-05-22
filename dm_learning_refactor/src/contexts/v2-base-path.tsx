'use client';

import { createContext, useContext } from 'react';
import { withAppPath } from '@/lib/app-path';

const V2BasePathContext = createContext<string | null>(null);

export function V2BasePathProvider({
  children,
  basePath = '/v2',
}: {
  children: React.ReactNode;
  basePath?: string;
}) {
  return (
    <V2BasePathContext.Provider value={basePath}>{children}</V2BasePathContext.Provider>
  );
}

export function useV2BasePath(): string | null {
  return useContext(V2BasePathContext);
}

export function resolveHref(
  href: string,
  pathname: string | null,
  v2Base: string | null
): string {
  if (v2Base) {
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
    if (href === '/') return v2Base;
    return `${v2Base}${href.startsWith('/') ? href : `/${href}`}`;
  }
  return withAppPath(href, pathname);
}
