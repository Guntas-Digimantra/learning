'use client';

import { ReactNode, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
  y?: number;
  duration?: number;
  start?: string;
  once?: boolean;
  className?: string;
};

export default function SectionReveal({
  children,
  y = 60,
  duration = 1,
  start = 'top 85%',
  once = false,
  className = '',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ctx: gsap.Context;

    const id = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        const tween = gsap.from(el, {
          opacity: 0,
          y,
          duration,
          ease: 'power2.out',
          paused: true,
        });

        ScrollTrigger.create({
          trigger: el,
          start,
          animation: tween,
          toggleActions: once ? 'play none none none' : 'play reverse play reverse',
        });
      });
    });
    return () => {
      cancelAnimationFrame(id);
      ctx?.revert();
    };
  }, [y, duration, start, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
