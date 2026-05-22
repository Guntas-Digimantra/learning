"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit mobile number"),
  consent: z.boolean().optional(),
});

type FormValues = z.infer<typeof schema>;

const inputCls =
  "w-full border border-at-border rounded-xl px-3.5 py-2.5 text-base text-at-input placeholder:text-at-input outline-none focus:border-at-cta transition-colors bg-white";
const errorCls = "text-red-500 text-xs mt-1";

export default function CounsellingForm({
  id = "counselling-form-el",
  className,
  hideHeader = false,
  buttonText = "View Curriculum",
}: {
  id?: string;
  className?: string;
  hideHeader?: boolean;
  buttonText?: string;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", consent: false },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://dm-learning-be.dmlabs.in/api/course-counselling/submit?adminOnly=true",
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
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      toast.success("Request received!", {
        description: "Our counsellor will call you within 24 hours.",
      });
      reset();
      window.dispatchEvent(new Event("curriculum-unlocked"));
      document
        .getElementById("programs")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Submission failed", {
        description: "Please try again later or contact support.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }


  return (
    <form
      id={id}
      onSubmit={handleSubmit(onSubmit)}
      className={
        className ||
        "bg-white border border-at-border rounded-card p-6 flex flex-col gap-5"
      }
    >
      {/* Header */}
      {!hideHeader && (
        <div className="flex flex-col gap-2">
          <h2 className="text-at-ink text-2xl font-bold m-0">
            Get Your Course Curriculum
          </h2>
          <p className="text-at-muted text-base m-0">
            Fill in your details to get the course curriculum on your email.
          </p>
        </div>
      )}

      {/* Fields */}
      <div className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            placeholder="Enter your full name"
            {...register("name")}
            className={inputCls}
          />
          {errors.name && <p className={errorCls}>{errors.name.message}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className={inputCls}
          />
          {errors.email && <p className={errorCls}>{errors.email.message}</p>}
        </div>
        <div>
          <div className="flex gap-1.5">
            <div className="flex items-center border border-at-border rounded-xl px-3.5 py-2.5 text-base text-at-input shrink-0 bg-white">
              +91
            </div>
            <input
              type="tel"
              placeholder="10 - digit mobile"
              {...register("phone")}
              className={inputCls}
            />
          </div>
          {errors.phone && <p className={errorCls}>{errors.phone.message}</p>}
        </div>

        <div className="flex gap-3 items-start">
          <input
            type="checkbox"
            id="sticky-consent"
            {...register("consent")}
            className="mt-0.5 shrink-0 size-4 accent-at-cta cursor-pointer"
          />
          <label
            htmlFor="sticky-consent"
            className="text-at-muted text-sm leading-normal cursor-pointer"
          >
            I agree to receive course updates from DMLearning via
            email/WhatsApp.
          </label>
        </div>
      </div>

      {/* CTA */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-10 bg-at-cta text-white text-base font-medium rounded-full cursor-pointer border-none transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : buttonText}
      </button>

      {/* Trust footer */}
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
  );
}
