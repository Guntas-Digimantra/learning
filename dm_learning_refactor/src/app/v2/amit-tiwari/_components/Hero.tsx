"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import Modal from "@/components/ui/modal";

const BULLET_POINTS = [
  "72 live, practical sessions with real campaigns and real ad budgets covering AI-powered SEO, paid ads, analytics, and e-commerce.",
  "Learn directly from an industry expert with 15+ years of hands-on digital marketing experience.",
];

const ALUMNI_AVATARS = [
  { src: "/amit-tiwari/avatar1.jpg", alt: "Alumni 1" },
  { src: "/amit-tiwari/avatar2.jpg", alt: "Alumni 2" },
  { src: "/amit-tiwari/avatar3.jpg", alt: "Alumni 3" },
];

const inputCls =
  "w-full border border-at-border rounded-xl px-3.5 py-2.5 text-base text-at-input placeholder:text-at-input outline-none focus:border-at-cta transition-colors bg-white";
const errorCls = "text-red-500 text-xs mt-1";

const heroSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit mobile number"),
  consent: z.boolean().optional(),
});

type HeroFormValues = z.infer<typeof heroSchema>;

export default function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<HeroFormValues>({
    resolver: zodResolver(heroSchema),
    defaultValues: { name: "", email: "", phone: "", consent: false },
  });

  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);
  const [mobileSubmitting, setMobileSubmitting] = useState(false);
  const {
    register: mobileRegister,
    handleSubmit: mobileHandleSubmit,
    reset: mobileReset,
    formState: { errors: mobileErrors },
  } = useForm<HeroFormValues>({
    resolver: zodResolver(heroSchema),
    defaultValues: { name: "", email: "", phone: "", consent: false },
  });

  async function onSubmit(data: HeroFormValues) {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://dm-learning-be.dmlabs.in/api/course-counselling/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: data.name,
            email: data.email,
            phoneNumber: data.phone,
            agreeToUpdates: data.consent,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      toast.success("Request received!", {
        description: "Our counsellor will call you within 24 hours.",
      });
      reset();
    } catch (error) {
      console.error("Hero form submission error:", error);
      toast.error("Submission failed", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  async function onMobileSubmit(data: HeroFormValues) {
    setMobileSubmitting(true);
    try {
      const response = await fetch(
        "https://dm-learning-be.dmlabs.in/api/course-counselling/submit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: data.name,
            email: data.email,
            phoneNumber: data.phone,
            agreeToUpdates: data.consent,
          }),
        },
      );
      if (!response.ok) throw new Error("Failed to submit");
      toast.success("Request received!", {
        description: "Our counsellor will call you within 24 hours.",
      });
      mobileReset();
      setMobileSheetOpen(false);
    } catch (error) {
      console.error("Mobile form submission error:", error);
      toast.error("Submission failed", {
        description: "Please try again later.",
      });
    } finally {
      setMobileSubmitting(false);
    }
  }

  return (
    <section className="relative overflow-hidden">
      {/* ═══════════════════════════════════════════════════
          MOBILE / TABLET — gradient banner with portrait
          (hidden on xl+)
          ═══════════════════════════════════════════════════ */}
      <div className="relative min-h-145 overflow-hidden bg-[linear-gradient(112.6deg,var(--color-at-mobile-hero-start)_6.718%,var(--color-at-mobile-hero-end)_88.625%)] xl:hidden">
        {/* Decorative star-burst — top right */}
        <div className="absolute top-[-53px] right-[-177px] w-[349px] h-[371px]">
          <img
            src="/amit-tiwari/hero-mobile-vector.svg"
            alt=""
            className="absolute inset-0 w-full h-full"
          />
        </div>
        {/* Decorative star-burst — bottom left */}
        <div className="absolute bottom-[-54px] left-[-150px] w-[349px] h-[371px]">
          <img
            src="/amit-tiwari/hero-mobile-vector.svg"
            alt=""
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Portrait */}
        <div className="absolute bottom-0 left-1.25 right-1.25 h-124 transform translate-y-24 overflow-hidden">
          <Image
            src="/amit-tiwari/hero-mobile-portrait.png"
            alt="Amit Tiwari"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1279px) calc(100vw - 10px)"
            priority
          />
        </div>

        {/* Gradient fade over portrait bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-42.5 bg-gradient-to-t from-at-mobile-hero-fade via-at-mobile-hero-fade/50 to-transparent" />

        {/* Badge + Heading */}
        <div className="relative z-10 flex flex-col gap-3 mx-4 mt-8 max-w-[358px]">
          <div className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-[6px] border border-white/30 px-3 py-1 rounded-full w-fit">
            <span className="text-white text-xs font-medium uppercase tracking-wide">
              Enrollment Open Now
            </span>
          </div>
          <h1 className="text-white font-bold text-hero-mobile leading-tight m-0">
            Become a Digital Marketing Pro in 6 Months with Amit Tiwari
          </h1>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          MOBILE / TABLET — white content below banner
          (hidden on xl+)
          ═══════════════════════════════════════════════════ */}
      <div className="xl:hidden bg-white px-4 py-6 flex flex-col gap-4">
        {/* Bullet points */}
        {BULLET_POINTS.map((text) => (
          <div key={text} className="flex gap-2 items-start">
            <Image
              src="/amit-tiwari/check-circle-figma-dark.svg"
              alt=""
              width={19}
              height={19}
              className="shrink-0 mt-0.5"
            />
            <p className="text-at-ink text-sm leading-snugish m-0">{text}</p>
          </div>
        ))}

        {/* Alumni + rating card */}
        <div className="flex gap-6 items-center justify-between border border-at-hero-divider rounded-lg py-4 px-8">
          {/* Avatars stacked + join text */}
          <div className="flex flex-col gap-2 items-start shrink-0">
            <div className="flex items-center">
              {ALUMNI_AVATARS.map(({ src, alt }, i) => (
                <div
                  key={src}
                  className={`relative size-8.5 rounded-full overflow-hidden bg-at-ink${i > 0 ? " -ml-[10.625px]" : ""}`}
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="34px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-at-ink text-sm m-0">
              Join <span className="font-semibold">30k+ alumni</span>
            </p>
          </div>

          {/* Vertical divider */}
          <div className="w-px h-8.5 bg-at-hero-divider shrink-0" />

          {/* Stars + rating */}
          <div className="flex flex-col gap-2 items-start shrink-0">
            <div className="flex items-center gap-[2.824px]">
              {[0, 1, 2, 3].map((i) => (
                <Image
                  key={i}
                  src="/amit-tiwari/star-figma.svg"
                  alt=""
                  width={17}
                  height={17}
                />
              ))}
              <Image
                src="/amit-tiwari/star-half-figma.svg"
                alt=""
                width={17}
                height={17}
              />
            </div>
            <p className="text-at-ink text-sm m-0">
              <span className="font-semibold">4.5/5</span> (12872 ratings)
            </p>
          </div>
        </div>

        {/* Batch info card */}
        <div className="flex gap-8 items-center justify-between border border-at-hero-divider rounded-lg py-4 px-8 overflow-hidden">
          <div className="flex flex-col gap-1 items-start shrink-0">
            <p className="text-at-ink text-sm font-normal m-0 whitespace-nowrap">
              Batch Start Date
            </p>
            <p className="text-at-ink text-sm font-semibold m-0 whitespace-nowrap">
              01-June-2026
            </p>
          </div>

          {/* Vertical divider */}
          <div className="w-px h-8.5 bg-at-hero-divider shrink-0" />

          <div className="flex flex-col gap-1 items-start shrink-0">
            <p className="text-at-ink text-sm font-normal m-0 whitespace-nowrap">
              Course Duration
            </p>
            <p className="text-at-ink text-sm font-semibold m-0 whitespace-nowrap">
              6 Months
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          DESKTOP — background image + full layout
          (hidden below xl)
          ═══════════════════════════════════════════════════ */}
      <div className="hidden xl:block relative py-16 xl:py-20">
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-at-hero-bg">
          <Image
            src="/amit-tiwari/hero-bg.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
            quality={100}
          />
        </div>

        <div className="mx-auto flex w-full max-w-[76.25rem] gap-10 px-6 xl:flex-row xl:items-center xl:justify-between">
          {/* Left column */}
          <div className="flex flex-col gap-12 flex-1 min-w-0 xl:max-w-[50%]">
            <div className="flex flex-col gap-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
                <span className="text-white text-sm font-medium uppercase tracking-wide">
                  Enrollment Open Now
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-white font-bold text-5xl leading-tighter m-0">
                Become a Digital Marketing Pro in 6 Months with <br />
                Amit Tiwari
              </h1>

              {/* Bullet points */}
              {BULLET_POINTS.map((text) => (
                <div key={text} className="flex gap-4 items-start">
                  <Image
                    src="/amit-tiwari/check-circle-figma.svg"
                    alt=""
                    width={28}
                    height={28}
                    className="shrink-0 mt-0.5"
                  />
                  <p className="text-white text-xl leading-snugish m-0">
                    {text}
                  </p>
                </div>
              ))}

              {/* Alumni + rating row */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center">
                  {ALUMNI_AVATARS.map(({ src, alt }, i) => (
                    <div
                      key={src}
                      className={`relative size-8.5 rounded-full overflow-hidden bg-white border-2 border-white${i > 0 ? " -ml-2.5" : ""}`}
                    >
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="2.125rem"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-white text-xl">
                  Join <strong>30k+ alumni</strong>
                </span>
                <span className="w-px h-8 bg-white/40" />
                <div className="flex items-center gap-1">
                  {[0, 1, 2, 3].map((i) => (
                    <Image
                      key={i}
                      src="/amit-tiwari/star-figma.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  ))}
                  <Image
                    src="/amit-tiwari/star-half-figma.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
                <span className="text-white text-xl">
                  <strong>4.5/5</strong>{" "}
                  <span className="text-white/80">(12872 ratings)</span>
                </span>
              </div>
            </div>

            {/* Batch info pill */}
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2 w-fit">
              <div className="flex flex-col">
                <span className="text-white/80 text-xs leading-normal uppercase font-semibold">
                  Batch Start Date
                </span>
                <span className="text-white text-lg font-bold leading-normal">
                  01-June-2026
                </span>
              </div>
              <div className="w-px self-stretch bg-white/30" />
              <div className="flex flex-col">
                <span className="text-white/80 text-xs leading-normal uppercase font-semibold">
                  Course Duration
                </span>
                <span className="text-white text-lg font-bold leading-normal">
                  6 Months
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => {
                  const form = document.getElementById("hero-form");
                  if (form) {
                    form.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                    const firstInput = form.querySelector<HTMLElement>(
                      "input,textarea,select",
                    );
                    firstInput?.focus({ preventScroll: true });
                  }
                }}
                className="inline-flex items-center justify-center h-14 px-6 bg-at-ink text-white text-base font-medium rounded-full whitespace-nowrap transition-colors hover:opacity-90 border-none cursor-pointer disabled:opacity-100 disabled:hover:opacity-100"
              >
                Book Free Counselling →
              </button>
              <button
                onClick={() => {
                  const section = document.getElementById("programs");
                  if (section)
                    section.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
                className="inline-flex items-center justify-center h-14 px-6 border-[1.5px] border-white text-white text-base font-medium rounded-full whitespace-nowrap transition-colors hover:bg-white/10 bg-transparent cursor-pointer"
              >
                View Curriculum
              </button>
            </div>
          </div>

          {/* Right column — form card */}
          <form
            id="hero-form"
            onSubmit={handleSubmit(onSubmit)}
            className="w-full xl:w-[20rem] bg-white border border-at-border rounded-card p-4 flex flex-col gap-4 shrink-0"
          >
            <div className="flex flex-col gap-1">
              <h2 className="text-at-ink text-base font-bold m-0">
                Talk to our Counsellor
              </h2>
              <p className="text-at-muted text-xs m-0">
                Free 15-min counselling. We&apos;ll help you make the right
                choice.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="hero-name"
                  className="text-at-label text-xs font-bold uppercase tracking-wide"
                >
                  Full Name <span className="text-at-cta">*</span>
                </label>
                <input
                  id="hero-name"
                  type="text"
                  placeholder="Your full name"
                  {...register("name")}
                  className={inputCls}
                />
                {errors.name && (
                  <p className={errorCls}>{errors.name.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="hero-email"
                  className="text-at-label text-xs font-bold uppercase tracking-wide"
                >
                  Email <span className="text-at-cta">*</span>
                </label>
                <input
                  id="hero-email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                  className={inputCls}
                />
                {errors.email && (
                  <p className={errorCls}>{errors.email.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="hero-phone"
                  className="text-at-label text-xs font-bold uppercase tracking-wide"
                >
                  Phone Number <span className="text-at-cta">*</span>
                </label>
                <div className="flex gap-1.5">
                  <div className="flex items-center border border-at-border rounded-lg px-2.5 py-2 text-sm text-at-input shrink-0">
                    +91
                  </div>
                  <input
                    id="hero-phone"
                    type="tel"
                    placeholder="10 - digit mobile"
                    {...register("phone")}
                    className={inputCls}
                  />
                </div>
                {errors.phone && (
                  <p className={errorCls}>{errors.phone.message}</p>
                )}
              </div>
              <div className="flex gap-2 items-start">
                <input
                  type="checkbox"
                  id="hero-consent"
                  {...register("consent")}
                  className="mt-0.5 shrink-0 size-4 accent-at-cta cursor-pointer"
                />
                <label
                  htmlFor="hero-consent"
                  className="text-at-muted text-xs leading-normal cursor-pointer"
                >
                  I agree to receive course updates from DMLearning via
                  email/WhatsApp.
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-9 bg-at-cta text-white text-sm font-medium rounded-full cursor-pointer border-none transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Get Free Counselling"}
              </button>
              <p className="text-at-muted text-xs text-center m-0">
                No spam. We respect your privacy.
              </p>
            </div>
            <div className="border-t border-at-border pt-2 flex items-center justify-center gap-4">
              {["100% data privacy", "10K+ enrolled"].map((label) => (
                <div key={label} className="flex items-center gap-1.5">
                  <Image
                    src="/amit-tiwari/footer-check.svg"
                    alt=""
                    width={14}
                    height={14}
                  />
                  <span className="text-at-ink text-xs">{label}</span>
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          MOBILE — fixed bottom action bar
          (hidden on xl+)
          ═══════════════════════════════════════════════════ */}
      <div
        className="xl:hidden fixed bottom-0 left-0 right-0 z-40 backdrop-blur-[5px] bg-white/70 px-4 pt-4"
        style={{ paddingBottom: "max(16px, env(safe-area-inset-bottom))" }}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileSheetOpen(true)}
            className="flex-1 h-13.5 bg-at-ink text-white text-sm font-medium rounded-full flex items-center justify-center whitespace-nowrap cursor-pointer border-none"
          >
            Book Free Counselling →
          </button>
          <button
            onClick={() => {
              const section = document.getElementById("programs");
              if (section)
                section.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="flex-1 h-13.5 border-[1.5px] border-at-ink text-at-ink text-sm font-medium rounded-full flex items-center justify-center whitespace-nowrap bg-transparent cursor-pointer"
          >
            View Curriculum
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          MOBILE — counselling form modal
          ═══════════════════════════════════════════════════ */}
      <Modal
        open={mobileSheetOpen}
        onClose={() => setMobileSheetOpen(false)}
        width={500}
        title="Talk to our Counsellor"
        description="Free 15-min counselling. We'll help you make the right choice."
      >
        <form
          onSubmit={mobileHandleSubmit(onMobileSubmit)}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-4">
            <div>
              <input
                type="text"
                placeholder="Enter your full name"
                {...mobileRegister("name")}
                className={inputCls}
              />
              {mobileErrors.name && (
                <p className={errorCls}>{mobileErrors.name.message}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                {...mobileRegister("email")}
                className={inputCls}
              />
              {mobileErrors.email && (
                <p className={errorCls}>{mobileErrors.email.message}</p>
              )}
            </div>
            <div>
              <div className="flex gap-1.5">
                <div className="flex items-center border border-at-border rounded-xl px-3.5 py-2.5 text-base text-at-input shrink-0 bg-white">
                  +91
                </div>
                <input
                  type="tel"
                  placeholder="10 - digit mobile"
                  {...mobileRegister("phone")}
                  className={inputCls}
                />
              </div>
              {mobileErrors.phone && (
                <p className={errorCls}>{mobileErrors.phone.message}</p>
              )}
            </div>
            <div className="flex gap-3 items-start">
              <input
                type="checkbox"
                id="mobile-consent"
                {...mobileRegister("consent")}
                className="mt-0.5 shrink-0 size-4 accent-at-cta cursor-pointer"
              />
              <label
                htmlFor="mobile-consent"
                className="text-at-muted text-sm leading-normal cursor-pointer"
              >
                I agree to receive course updates from DMLearning via
                email/WhatsApp.
              </label>
            </div>
          </div>
          <button
            type="submit"
            disabled={mobileSubmitting}
            className="w-full h-10 bg-at-cta text-white text-base font-medium rounded-full cursor-pointer border-none transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {mobileSubmitting ? "Submitting..." : "Get Free Counselling"}
          </button>
          <div className="border-t border-at-border pt-4 flex items-center justify-center gap-8">
            {["100% data privacy", "10K+ enrolled"].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <Image
                  src="/amit-tiwari/footer-check.svg"
                  alt=""
                  width={18}
                  height={18}
                />
                <span className="text-at-ink text-sm">{label}</span>
              </div>
            ))}
          </div>
        </form>
      </Modal>
    </section>
  );
}
