"use client";

import "/public/css/summercamp.css";
import { useReveal } from "@/components/summercamp/useReveal";
import Nav from "@/components/summercamp/Nav";
import Hero from "@/components/summercamp/Hero";
import Marquee from "@/components/summercamp/Marquee";
import About from "@/components/summercamp/About";
import Experience from "@/components/summercamp/Experience";
import Outcomes from "@/components/summercamp/Outcomes";
import Who from "@/components/summercamp/Who";
import Timeline from "@/components/summercamp/Timeline";
import Different from "@/components/summercamp/Different";
import Certificate from "@/components/summercamp/Certificate";
import Parents from "@/components/summercamp/Parents";
import Testimonials from "@/components/summercamp/Testimonials";
import CTA from "@/components/summercamp/CTA";
import SummercampFooter from "@/components/summercamp/SummercampFooter";
import RegisterModal from "@/components/summercamp/RegisterModal";
import LegalModal from "@/components/summercamp/LegalModal";

export default function SummerCamp2026Page() {
  useReveal();

  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Outcomes />
      <Who />
      <Timeline />
      <Different />
      <Certificate />
      {/* <Testimonials /> */}
      <CTA />
      <SummercampFooter />
      <RegisterModal />
      <LegalModal />
    </>
  );
}
