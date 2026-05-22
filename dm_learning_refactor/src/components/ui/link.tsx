'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { AnchorHTMLAttributes } from 'react';
import { resolveHref, useV2BasePath } from '@/contexts/v2-base-path';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export default function Link({ href, children, ...props }: LinkProps) {
  const pathname = usePathname();
  const v2Base = useV2BasePath();
  const resolvedHref = resolveHref(href, pathname, v2Base);

  const isExternal =
    resolvedHref.startsWith('http://') ||
    resolvedHref.startsWith('https://') ||
    resolvedHref.startsWith('mailto:') ||
    resolvedHref.startsWith('tel:');

  if (isExternal) {
    return (
      <a href={resolvedHref} {...props}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={resolvedHref} {...props}>
      {children}
    </NextLink>
  );
}
