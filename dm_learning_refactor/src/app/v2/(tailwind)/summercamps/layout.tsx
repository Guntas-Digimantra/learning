import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import './summercamps-keyframes.css';

export const metadata: Metadata = {
  title: '8ucate AI Summer Camp – 2 Week AI Workshop for Kids 10–17',
  description:
    "Join 8ucate's 2-week AI Summer Camp. Kids 10–17 build real AI projects with live classes, no coding needed. Just ₹699.",
};

const summercampThemeVars = {
  ['--background' as string]: 'hsl(230, 35%, 7%)',
  ['--foreground' as string]: 'hsl(0, 0%, 98%)',
  ['--brand' as string]: 'hsl(235, 100%, 62%)',
  ['--accent-cyan' as string]: 'hsl(220, 95%, 65%)',
  ['--accent-yellow' as string]: 'hsl(48, 100%, 62%)',
  ['--accent-pink' as string]: 'hsl(235, 100%, 70%)',
  ['--accent-orange' as string]: 'hsl(28, 100%, 60%)',
  ['--white-05' as string]: 'rgba(255, 255, 255, 0.05)',
  ['--white-10' as string]: 'rgba(255, 255, 255, 0.1)',
  ['--white-15' as string]: 'rgba(255, 255, 255, 0.15)',
} as CSSProperties;

export default function SummerCampLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Manrope:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div
        className="min-h-screen overflow-x-hidden scroll-smooth bg-[hsl(230,35%,7%)] font-['Manrope',system-ui,sans-serif] text-[hsl(0,0%,98%)] antialiased"
        style={summercampThemeVars}
      >
        {children}
      </div>
    </>
  );
}
