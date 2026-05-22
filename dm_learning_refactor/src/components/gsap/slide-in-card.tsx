'use client';

import { ReactNode, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;

  /* animation */
  x?: number; // distance from left
  duration?: number;
  delay?: number;
  stagger?: boolean | number;

  /* scroll */
  start?: string;
  once?: boolean;
  fadeDirection?: 'ltr' | 'rtl';

  className?: string;
};

export default function SlideInCard({
  children,
  x = -60,
  duration = 0.8,
  delay = 0,
  stagger = false,
  start = 'top 85%',
  once = false,
  className = '',
  fadeDirection = 'ltr',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    let ctx: gsap.Context;

    const id = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        const targets = stagger === false ? el : Array.from(el.children);

        const tween = gsap.from(targets, {
          x: fadeDirection === 'rtl' ? -1 * x : x,
          opacity: 0,
          duration,
          delay,
          stagger: typeof stagger === 'number' ? stagger : stagger ? 0.12 : 0,
          ease: 'power3.out',
          paused: true,
        });

        ScrollTrigger.create({
          trigger: el,
          start,
          animation: tween,
          toggleActions: once ? 'play none none none' : 'play reverse play reverse', // ⭐ auto reverse
        });
      }, ref);
    });

    return () => {
      cancelAnimationFrame(id);
      ctx?.revert();
    };
  }, [x, duration, delay, stagger, start, once, fadeDirection]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
