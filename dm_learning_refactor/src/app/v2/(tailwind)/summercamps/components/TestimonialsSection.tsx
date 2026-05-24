"use client";
import Testimonials from "./Testimonials";

export default function TestimonialsSection() {
  return (
    <section className="bg-[hsl(230,45%,14%)] py-20 text-(--foreground) max-[768px]:py-[3.75rem]">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="text-center font-['Sora',sans-serif] text-[clamp(1.875rem,5vw,3rem)] font-extrabold tracking-tight text-(--foreground)">
          Parent & Student Feedback
        </h2>
        <p className="mt-3 text-center text-(--foreground) opacity-80">
          See what learners and parents loved about their AI learning experience
        </p>
        <Testimonials />
      </div>
    </section>
  );
}
