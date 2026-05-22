import Navbar from "./components/Navbar";
import ProgramDetails from "./components/programDetails";
import Why from "./components/Why";
import Camps from "./components/Camps";
import HowStudentsLearn from "./components/HowStudentsLearn";
import CertShowcase from "./components/CertShowcase";
import TestimonialsSection from "./components/TestimonialsSection";
import Cta from "./components/Cta";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <Hero />

      {/* ── PROGRAM DETAILS ── */}
      <ProgramDetails />

      {/* ── WHY ── */}
      <Why />

      {/* ── CAMPS ── */}
      <Camps />

      {/* ── HOW STUDENTS LEARN ── */}
      <HowStudentsLearn />

      {/* ── CERT / SHOWCASE ── */}
      <CertShowcase />

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSection />

      {/* ── CTA ── */}
      <Cta />

      {/* ── FOOTER ── */}
      <Footer />
    </>
  );
}
