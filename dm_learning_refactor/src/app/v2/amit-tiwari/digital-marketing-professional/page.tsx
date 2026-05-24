import { Metadata } from "next";

import Header from "../_components/Header";
import Hero from "../_components/Hero";
import Numerology from "../_components/Numerology";
import BuiltForYou from "../_components/BuiltForYou";
import WhatYouLearn from "../_components/WhatYouLearn";
import BrochureCTA from "../_components/BrochureCTA";
import ToolsMaster from "../_components/ToolsMaster";
import CompareAlternatives from "../_components/CompareAlternatives";
import ProgramHighlights from "../_components/ProgramHighlights";
import HowItWorks from "../_components/HowItWorks";
import CoursePreparesYou from "../_components/CoursePreparesYou";
import CareerOutcomes from "../_components/CareerOutcomes";
import IndustryCertificate from "../_components/IndustryCertificate";
import Testimonials from "../_components/Testimonials";
import CapstoneShowcase from "../_components/CapstoneCShowcase";
import HiringPartners from "../_components/HiringPartners";
import ProgramFee from "../_components/ProgramFee";
import FAQs from "../_components/FAQs";
import OtherCourses from "../_components/OtherCourses";
import CTASection from "../_components/CTASection";
import ROICalculator from "../_components/ROICalculator";
import MeetMentor from "../_components/MeetMentor";
import CounsellingForm from "../_components/CounsellingForm";
import Footer from "../_components/Footer";
import WhatsAppButton from "../_components/WhatsAppButton";

export const revalidate = false;

export const metadata: Metadata = {
  title: "6-Month Digital Marketing Course in Tricity | Amit Tiwari & DMLearning",
  description:
    "Join DMLearning’s 6-month Digital Marketing course with 100% job assistance. Learn SEO, AI, Google Ads, Meta Ads, analytics & social media skills with Amit Tiwari.",
};

export default function AmitTiwariPage() {
  return (
    <>
      <Header />
      <main className="xl:pb-0 pb-[86px]">
        <Hero />
        <Numerology />

        <div className="xl:mx-auto xl:flex xl:max-w-[76.25rem] xl:items-start xl:gap-15 xl:px-6">
          <div className="xl:flex-1 xl:min-w-0">
            <BuiltForYou />
            <WhatYouLearn />
            <BrochureCTA />
            <ToolsMaster />
            <CompareAlternatives />
            <ProgramHighlights />
            <HowItWorks />
            <CoursePreparesYou />
            <CareerOutcomes />
          </div>
          <div id="counselling-form" className="hidden xl:block w-90 shrink-0 sticky top-4 py-25">
            <CounsellingForm />
          </div>
        </div>
        <ROICalculator />
        <MeetMentor />
        <IndustryCertificate />
        <Testimonials />
        <CapstoneShowcase />
        <HiringPartners />
        <ProgramFee />
        <FAQs />
        <OtherCourses />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
