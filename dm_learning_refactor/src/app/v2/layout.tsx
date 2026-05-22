'use client';

import { usePathname } from 'next/navigation';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import WhatsappButton from '@/components/v2/buttons/whatsapp-button';
import { V2BasePathProvider } from '@/contexts/v2-base-path';

import './globals.css';

/**
 * 100% Tailwind shell for /v2 (header, footer, pages use utilities only).
 */
export default function V2Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage =
    pathname?.includes('/amit-tiwari') || pathname?.includes('/summercamps');

  return (
    <V2BasePathProvider basePath="/v2">
      {!isLandingPage && <Header />}
      <main className="relative">
        {children}
        {!isLandingPage && <WhatsappButton />}
      </main>
      {!isLandingPage && <Footer />}
    </V2BasePathProvider>
  );
}
