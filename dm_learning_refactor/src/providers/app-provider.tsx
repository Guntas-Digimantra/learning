'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { ProgressProvider } from '@bprogress/next/app';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const progressRef = useRef<HTMLDivElement | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();
  const isV2Marketing = pathname?.startsWith('/v2') ?? false;

  useEffect(() => {
    if (isV2Marketing) return;
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    const raf = (t: number) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    ScrollTrigger.defaults({
      scroller: document.body,
    });

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value as number, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: 'transform',
    });

    lenis.on('scroll', ScrollTrigger.update);
    lenis.on('scroll', ({ scroll, limit }) => {
      const progress = scroll / limit;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    });

    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
    };
  }, [isV2Marketing]);

  /* ---------------- route change refresh ---------------- */
  useEffect(() => {
    if (isV2Marketing) return;
    const lenis = lenisRef.current;
    if (!lenis) return;

    lenis.scrollTo(0, { immediate: true });

    requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });
  }, [pathname, isV2Marketing]);

  if (isV2Marketing) {
    return <>{children}</>;
  }

  return (
    <ProgressProvider height="0.25rem" color="var(--primary)" options={{ showSpinner: false }}>
      <div className="fixed left-0 top-20 lg:top-24.75 z-50 h-1 w-full bg-transparent">
        <div ref={progressRef} className="h-full origin-left bg-primary" style={{ transform: 'scaleX(0)' }} />
      </div>
      {children}
    </ProgressProvider>
  );
}
