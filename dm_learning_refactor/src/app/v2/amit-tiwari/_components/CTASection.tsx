"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ChevronDown } from "lucide-react";

const inputCls =
  "w-full border border-at-border rounded-xl px-3.5 h-13 text-base text-at-input placeholder:text-at-input outline-none focus:border-at-cta transition-colors bg-white";
const errorCls = "text-red-500 text-xs mt-1";

const ROLES = [
  "Student / Fresher",
  "Working Professional",
  "Freelancer",
  "Business Owner",
  "Other",
];

const schema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit mobile number"),
  role: z.string().min(1, "Please select your current role"),
});

type FormValues = z.infer<typeof schema>;

export default function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", role: "" },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
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
            agreeToUpdates: true,
          }),
        },
      );
      if (!response.ok) throw new Error("Failed to submit");
      toast.success("Request received!", {
        description: "Our counsellor will call you within 24 hours.",
      });
      reset();
    } catch (error) {
      console.error("CTASection form submission error:", error);
      toast.error("Submission failed", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="relative overflow-hidden py-12 xl:py-20 bg-section-dark">
      {/* Decorative blobs */}
      <div className="absolute -left-20 -top-24 size-[314px] rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-32 -right-20 size-120 rounded-full bg-white/5 pointer-events-none" />

      <div className="container-page relative z-10">
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-40 items-center">
          {/* Left - copy */}
          <div className="flex flex-col gap-4 flex-1 min-w-0">
            <span className="self-start bg-white/10 text-white text-sm font-bold uppercase tracking-wide px-4 py-2 rounded-full">
              Limited Seats · Next Batch 1st June
            </span>
            <h2 className="text-white font-bold text-heading-md xl:text-4xl leading-snugish m-0">
              Ready to Become a Digital Marketing Pro?
            </h2>
            <p className="text-white text-lg xl:text-xl leading-relaxed m-0">
              Book a free 15-min counselling call with our team. We&apos;ll walk
              you through the curriculum, fees, EMI options, and answer any
              questions you have.
            </p>
          </div>

          {/* Right - form card */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full xl:w-164 xl:shrink-0 bg-white border border-at-border rounded-card shadow-card p-8 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-at-ink font-bold text-2xl m-0">
                Book Your Free Counselling
              </h3>
              <p className="text-at-muted text-base m-0">
                We&apos;ll call you within 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-at-ink text-xs font-bold uppercase tracking-wide">
                  Full Name <span className="text-at-cta">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  {...register("name")}
                  className={inputCls}
                />
                {errors.name && <p className={errorCls}>{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-at-ink text-xs font-bold uppercase tracking-wide">
                  Email Address <span className="text-at-cta">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email address"
                  {...register("email")}
                  className={inputCls}
                />
                {errors.email && <p className={errorCls}>{errors.email.message}</p>}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-at-ink text-xs font-bold uppercase tracking-wide">
                  Phone Number <span className="text-at-cta">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  {...register("phone")}
                  className={inputCls}
                />
                {errors.phone && <p className={errorCls}>{errors.phone.message}</p>}
              </div>

              {/* I am a */}
              <div className="flex flex-col gap-1.5">
                <label className="text-at-ink text-xs font-bold uppercase tracking-wide">
                  I Am A <span className="text-at-cta">*</span>
                </label>
                <div className="relative">
                  <select
                    {...register("role")}
                    className="w-full border border-at-border rounded-xl px-3.5 h-13 text-base text-at-input outline-none focus:border-at-cta transition-colors bg-white appearance-none pr-10 cursor-pointer"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    {ROLES.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={20}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-at-muted pointer-events-none"
                  />
                </div>
                {errors.role && <p className={errorCls}>{errors.role.message}</p>}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-13.5 bg-at-cta text-white font-medium text-base rounded-full border-none cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Get Free Counselling"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
