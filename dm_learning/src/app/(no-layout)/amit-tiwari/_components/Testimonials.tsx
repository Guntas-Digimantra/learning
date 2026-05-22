"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TESTIMONIALS = [
  {
    quote:
      "Amit's teaching style is practical and result-oriented. The strategies I learned helped me 3x my freelance income within 6 months. Worth every rupee.",
    avatar: "/amit-tiwari/testimonial-neha.png",
    name: "Neha Sharma",
    title: "Digital Marketing Manager · Gurgaon",
  },
  {
    quote:
      "The course content is top-notch. Live campaign reviews are gold. Best investment for marketers and small business owners alike.",
    avatar: "/amit-tiwari/testimonial-rohit.png",
    name: "Rohit Verma",
    title: "Founder · D2C Brand · Mumbai",
  },
  {
    quote:
      "Loved the hands-on approach and real campaign breakdowns. I switched from a non-marketing job to an SEO Specialist role with a 70% hike.",
    avatar: "/amit-tiwari/testimonial-sneha.png",
    name: "Sneha Iyer",
    title: "SEO Specialist · Bengaluru",
  },
];

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="bg-white rounded-2xl shadow-card p-6 flex flex-col gap-4.25 h-full">
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-at-ink text-base leading-relaxed m-0 flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>

      <span className="block w-full h-px bg-gray-200" />

      {/* Author */}
      <div className="flex gap-2 items-center">
        <Image
          src={t.avatar}
          alt={t.name}
          width={40}
          height={40}
          className="rounded-full object-cover shrink-0"
        />
        <div className="flex flex-col gap-0.5">
          <p className="text-at-ink text-sm font-bold leading-snug m-0">
            {t.name}
          </p>
          <p className="text-at-muted text-xs leading-relaxed m-0">
            {t.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-bg-muted py-10 xl:py-16">
      <div className="flex flex-col gap-6 xl:gap-14">
        {/* Header */}
        <div className="container-page flex flex-col gap-2 items-center text-center">
          <span className="text-at-cta text-sm font-medium uppercase tracking-wide">
            What Our Students Say
          </span>
          <h2 className="text-at-ink font-semibold text-heading-md xl:text-heading-xl leading-tight m-0">
            Real People · Real Career Switches · Real Outcomes
          </h2>
        </div>

        {/* Swiper - full bleed so the 1.4 peek card bleeds to the edge on mobile */}
        <div className="pl-6 xl:pl-0 xl:container-page">
          <Swiper
            slidesPerView={1.4}
            spaceBetween={16}
            breakpoints={{
              768: { slidesPerView: 3, spaceBetween: 32 },
            }}
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name} className="!h-auto">
                <TestimonialCard t={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
