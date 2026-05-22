'use client';
import { useEffect, useRef, useState } from 'react';

export function useTypewriterOnScroll(fullText: string, speed = 50) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [startTyping, setStartTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setStartTyping(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!startTyping) return;
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[textIndex]);
        setTextIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [textIndex, fullText, startTyping, speed]);

  // Reset when section becomes visible again
  useEffect(() => {
    if (startTyping) {
      setDisplayedText('');
      setTextIndex(0);
    }
  }, [startTyping, fullText]);

  return { sectionRef, displayedText };
}
