'use client';

import { useEffect, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { V2BasePathProvider } from '@/contexts/v2-base-path';

/**
 * Client shell for v2 — header/footer visibility. Styles load from server layout.tsx.
 */
export default function V2Chrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage =
    pathname?.includes('/amit-tiwari') || pathname?.includes('/summercamps');

  useLayoutEffect(() => {
    if (isLandingPage) {
      document.body.classList.remove('v2-has-site-header');
      return;
    }
    document.body.classList.add('v2-has-site-header');
    return () => document.body.classList.remove('v2-has-site-header');
  }, [isLandingPage]);

  return (
    <V2BasePathProvider basePath="/v2">
      {!isLandingPage && <Header />}
      {children}
      {!isLandingPage && <Footer />}
    </V2BasePathProvider>
  );
}
