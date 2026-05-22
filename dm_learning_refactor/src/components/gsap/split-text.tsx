'use client';

import { useRef, ReactNode, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(GSAPSplitText, ScrollTrigger);

type AnimationType = 'chars' | 'words' | 'lines' | 'mask' | 'typewriter' | 'jitter-typewriter' | 'fade-in';

type Props = {
  children: ReactNode;
  animation?: AnimationType;

  duration?: number;
  stagger?: number;
  delay?: number;

  start?: string;
  once?: boolean;

  className?: string;
};

export default function SplitText({
  children,
  animation = 'chars',

  duration = 0.8,
  stagger,
  delay = 0,

  start = 'top 85%',
  once = false,

  className = '',
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<GSAPSplitText | null>(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let ctx: gsap.Context;

    const id = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        splitRef.current?.revert();

        splitRef.current = new GSAPSplitText(el, {
          type: 'chars,words,lines',
          linesClass: 'split-line',
        });

        const split = splitRef.current;

        let tween: gsap.core.Tween;

        switch (animation) {
          case 'mask':
            tween = gsap.from(split.lines, {
              yPercent: 120,
              opacity: 0,
              duration,
              delay,
              stagger: stagger ?? 0.15,
              ease: 'power4.out',
              paused: true,
            });
            break;
          case 'typewriter':
            tween = gsap.from(split.chars, {
              opacity: 0,
              y: 16,
              duration: duration ?? 0.04,
              delay,
              stagger: stagger ?? 0.025,
              ease: 'none',
              paused: true,
            });
            break;

          case 'jitter-typewriter':
            gsap.set(split.chars, { opacity: 0 });

            tween = gsap.to(split.chars, {
              opacity: 1,
              duration: 0.001,
              delay,
              stagger: {
                each: stagger ?? 0.04,
                from: 'start',
                amount: split.chars.length * 0.04,
              },
              ease: 'none',
              paused: true,
            });

            break;

          case 'fade-in':
            tween = gsap.from(split.lines, {
              opacity: 0,
              y: 30,
              duration: duration ?? 1.2,
              delay,
              stagger: stagger ?? 0.12,
              ease: 'power3.out',
              paused: true,
            });
            break;

          case 'words':
            tween = gsap.from(split.words, {
              y: 60,
              opacity: 0,
              duration,
              delay,
              stagger: stagger ?? 0.08,
              ease: 'power3.out',
              paused: true,
            });
            break;

          case 'chars':
            tween = gsap.from(split.chars, {
              y: 40,
              opacity: 0,
              duration,
              delay,
              stagger: stagger ?? 0.03,
              ease: 'power4.out',
              paused: true,
            });
            break;

          default:
            tween = gsap.from(split.lines, {
              y: 80,
              opacity: 0,
              duration,
              delay,
              stagger: stagger ?? 0.12,
              ease: 'power4.out',
              paused: true,
            });
        }

        ScrollTrigger.create({
          trigger: el,
          start,
          animation: tween,
          toggleActions: once ? 'play none none none' : 'play reverse play reverse',
        });
      }, containerRef);
    });

    return () => {
      cancelAnimationFrame(id);
      ctx?.revert();
    };
  }, [animation, duration, stagger, delay, start, once, children]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
