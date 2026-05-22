"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";

const DISABLED = true;

const BACKEND_REGISTER_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/summer-camp/register`;

export default function RegisterModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => {
    setOpen(false);
    setSuccessMessage("");
    setErrorMessage("");
  }, []);

  useEffect(() => {
    window.__openRegisterModal = openModal;
    return () => {
      delete window.__openRegisterModal;
    };
  }, [openModal]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && closeModal();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, closeModal]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage("");

    const payload = {
      studentName: data.studentName,
      email: data.email,
      phone: data.phone,
      schoolName: data.schoolName,
    };

    try {
      const to = process.env.NEXT_PUBLIC_SMTP_TO?.split(",") || [];
      const emailRes = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/send-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to,
            subject: "New Summer Camp Registration",
            message: `
              <p>A new summer camp registration has been submitted:</p>
              <ul>
                <li><strong>Student Name:</strong> ${payload.studentName}</li>
                <li><strong>Email:</strong> <a href="mailto:${payload.email}">${payload.email}</a></li>
                <li><strong>Phone:</strong> <a href="tel:${payload.phone}">${payload.phone}</a></li>
                <li><strong>School Name:</strong> ${payload.schoolName}</li>
              </ul>
            `,
          }),
        },
      );

      if (!emailRes.ok) throw new Error("Email failed");

      if (process.env.NEXT_PUBLIC_BACKEND_URL) {
        await fetch(BACKEND_REGISTER_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      reset();
      setSuccessMessage("Registration submitted! We'll be in touch soon.");
      setTimeout(() => setSuccessMessage(""), 4000);
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[9998] flex items-center justify-center bg-[rgba(11,14,42,0.65)] p-5 backdrop-blur-[4px]"
        onClick={closeModal}
      >
        <div
          className="relative w-full max-w-[480px] overflow-hidden rounded-3xl bg-white font-['Outfit',sans-serif] shadow-[0_32px_80px_rgba(0,0,0,0.22)]"
          onClick={(e) => e.stopPropagation()}
        >
          {DISABLED && (
            <div className="flex items-center justify-between gap-2 bg-[#C8F135] px-4 py-2.5 pl-6 text-[0.82rem] font-black tracking-[0.08em] text-[#111111] uppercase">
              <div className="flex items-center gap-2">
                <span>🔒</span>
                Registrations Are Now Open - Join Today!
              </div>
              <button
                onClick={closeModal}
                aria-label="Close"
                className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full border-none bg-[rgba(0,0,0,0.12)] text-[0.8rem] text-[#111] transition-colors duration-200 hover:bg-[rgba(0,0,0,0.22)]"
              >
                ✕
              </button>
            </div>
          )}

          <div className="px-9 pt-8 pb-9">
            {!DISABLED && (
              <button
                onClick={closeModal}
                aria-label="Close"
                className="absolute top-3 right-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-none bg-[rgba(0,0,0,0.08)] text-[0.9rem] text-[#444] transition-colors duration-200 hover:bg-[rgba(0,0,0,0.16)]"
              >
                ✕
              </button>
            )}

            <div className="mb-7 text-center">
              <p className="m-0 text-[0.9rem] leading-normal text-[#888]">
                All details and registration information will be shared with
                you.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-[18px]"
            >
              <div>
                <label
                  className={`mb-[7px] block font-['Outfit',sans-serif] text-[0.88rem] font-bold ${DISABLED ? "text-[#aaa]" : "text-[#111111]"}`}
                >
                  Student Name
                </label>
                <input
                  type="text"
                  placeholder="Student's full name"
                  disabled={DISABLED}
                  className={`box-border w-full rounded-xl border-[1.5px] border-[#e0ddd8] px-4 py-[13px] font-['Outfit',sans-serif] text-[0.95rem] outline-none ${DISABLED ? "cursor-not-allowed bg-[#f9f9f7] text-[#aaa]" : "cursor-text bg-white text-[#111]"}`}
                  {...register("studentName", {
                    required: "Student name is required",
                    pattern: {
                      value: /^[a-z.\s]+$/i,
                      message: "Invalid name provided",
                    },
                  })}
                />
                {errors.studentName && (
                  <p className="mt-1 text-[0.75rem] text-[#e05c5c]">
                    {errors.studentName.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  className={`mb-[7px] block font-['Outfit',sans-serif] text-[0.88rem] font-bold ${DISABLED ? "text-[#aaa]" : "text-[#111111]"}`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  disabled={DISABLED}
                  className={`box-border w-full rounded-xl border-[1.5px] border-[#e0ddd8] px-4 py-[13px] font-['Outfit',sans-serif] text-[0.95rem] outline-none ${DISABLED ? "cursor-not-allowed bg-[#f9f9f7] text-[#aaa]" : "cursor-text bg-white text-[#111]"}`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-[0.75rem] text-[#e05c5c]">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  className={`mb-[7px] block font-['Outfit',sans-serif] text-[0.88rem] font-bold ${DISABLED ? "text-[#aaa]" : "text-[#111111]"}`}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Please enter your phone number"
                  disabled={DISABLED}
                  className={`box-border w-full rounded-xl border-[1.5px] border-[#e0ddd8] px-4 py-[13px] font-['Outfit',sans-serif] text-[0.95rem] outline-none ${DISABLED ? "cursor-not-allowed bg-[#f9f9f7] text-[#aaa]" : "cursor-text bg-white text-[#111]"}`}
                  {...register("phone", {
                    required: "Phone number is required",
                    validate: (value) =>
                      value?.replace(/\D/g, "").length === 10 ||
                      "Phone number must be 10 digits",
                  })}
                  onInput={(e) => {
                    const digits = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);
                    e.target.value = digits.replace(
                      /^(\d{5})(\d{1,5})$/,
                      "$1-$2",
                    );
                  }}
                />
                {errors.phone && (
                  <p className="mt-1 text-[0.75rem] text-[#e05c5c]">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  className={`mb-[7px] block font-['Outfit',sans-serif] text-[0.88rem] font-bold ${DISABLED ? "text-[#aaa]" : "text-[#111111]"}`}
                >
                  School Name
                </label>
                <input
                  type="text"
                  placeholder="Your school name"
                  disabled={DISABLED}
                  className={`box-border w-full rounded-xl border-[1.5px] border-[#e0ddd8] px-4 py-[13px] font-['Outfit',sans-serif] text-[0.95rem] outline-none ${DISABLED ? "cursor-not-allowed bg-[#f9f9f7] text-[#aaa]" : "cursor-text bg-white text-[#111]"}`}
                  {...register("schoolName", {
                    required: "School name is required",
                  })}
                />
                {errors.schoolName && (
                  <p className="mt-1 text-[0.75rem] text-[#e05c5c]">
                    {errors.schoolName.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={DISABLED || loading}
                className={`mt-1 w-full cursor-pointer rounded-full border-none px-4 py-4 font-['Outfit',sans-serif] text-base font-extrabold tracking-[0.01em] transition-colors duration-200 ${DISABLED || loading ? "cursor-not-allowed bg-[#d0d0cc] text-[#888]" : "bg-[#C8F135] text-[#111111] hover:bg-[#a8d418]"}`}
              >
                {DISABLED
                  ? "🔒 Registration Opening Soon"
                  : loading
                    ? "Submitting..."
                    : "Register Now"}
              </button>

              {successMessage && (
                <p className="mt-2 text-center text-[0.85rem] text-[#4caf50]">
                  {successMessage}
                </p>
              )}
              {errorMessage && (
                <p className="mt-2 text-center text-[0.85rem] text-[#e05c5c]">
                  {errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
