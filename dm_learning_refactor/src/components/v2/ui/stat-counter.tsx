'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type CountProps = {
  number: number;
  duration?: number; // seconds (GSAP uses seconds)
  suffix?: string;
  className?: string;
};

export default function Count({ number, duration = 1.2, suffix = '', className = '' }: CountProps) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const counter = { value: 0 };

    gsap.to(counter, {
      value: number,
      duration,
      ease: 'power2.out',

      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        once: true, // run only once
      },

      onUpdate: () => {
        el.textContent = `${Math.floor(counter.value)}${suffix}`;
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [number, duration, suffix]);

  return (
    <span ref={ref} className={`tabular-nums font-semibold ${className}`}>
      0{suffix}
    </span>
  );
}
