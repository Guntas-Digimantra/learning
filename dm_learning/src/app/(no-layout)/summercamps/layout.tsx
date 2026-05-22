import type { Metadata } from "next";
import Head from "next/head";
import "./index.css";

export const metadata: Metadata = {
  title: "8ucate AI Summer Camp – 2 Week AI Workshop for Kids 10–17",
  description:
    "Join 8ucate's 2-week AI Summer Camp. Kids 10–17 build real AI projects with live classes, no coding needed. Just ₹699.",
};

export default function SummerCampLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </>
  );
}
