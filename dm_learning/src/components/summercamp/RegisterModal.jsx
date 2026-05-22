"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import styles from "./RegisterModal.module.css";

const DISABLED = true; // flip to false when registration opens

// TODO: replace with actual endpoint once backend is ready
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
      // 1. Send email notification (active now)
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

      // 2. Store in backend (activate once endpoint is live)
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
      <div className={styles.backdrop} onClick={closeModal}>
        <div className={styles.card} onClick={(e) => e.stopPropagation()}>
          {/* Coming Soon banner */}
          {DISABLED && (
            <div className={styles.banner}>
              <div className={styles.bannerContent}>
                <span>🔒</span>
                Registrations Are Now Open - Join Today!
              </div>
              <button
                onClick={closeModal}
                aria-label="Close"
                className={styles.bannerClose}
              >
                ✕
              </button>
            </div>
          )}

          <div className={styles.body}>
            {/* Close button (when banner not shown) */}
            {!DISABLED && (
              <button
                onClick={closeModal}
                aria-label="Close"
                className={styles.closeBtn}
              >
                ✕
              </button>
            )}

            <div className={styles.heading}>
              <p className={styles.headSub}>
                All details and registration information will be shared with
                you.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div>
                <label
                  className={DISABLED ? styles.labelDisabled : styles.label}
                >
                  Student Name
                </label>
                <input
                  type="text"
                  placeholder="Student's full name"
                  disabled={DISABLED}
                  className={`${styles.input} ${DISABLED ? styles.inputDisabled : ""}`}
                  {...register("studentName", {
                    required: "Student name is required",
                    pattern: {
                      value: /^[a-z.\s]+$/i,
                      message: "Invalid name provided",
                    },
                  })}
                />
                {errors.studentName && (
                  <p className={styles.fieldError}>
                    {errors.studentName.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  className={DISABLED ? styles.labelDisabled : styles.label}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  disabled={DISABLED}
                  className={`${styles.input} ${DISABLED ? styles.inputDisabled : ""}`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className={styles.fieldError}>{errors.email.message}</p>
                )}
              </div>
              <div>
                <label
                  className={DISABLED ? styles.labelDisabled : styles.label}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Please enter your phone number"
                  disabled={DISABLED}
                  className={`${styles.input} ${DISABLED ? styles.inputDisabled : ""}`}
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
                  <p className={styles.fieldError}>{errors.phone.message}</p>
                )}
              </div>
              <div>
                <label
                  className={DISABLED ? styles.labelDisabled : styles.label}
                >
                  School Name
                </label>
                <input
                  type="text"
                  placeholder="Your school name"
                  disabled={DISABLED}
                  className={`${styles.input} ${DISABLED ? styles.inputDisabled : ""}`}
                  {...register("schoolName", {
                    required: "School name is required",
                  })}
                />
                {errors.schoolName && (
                  <p className={styles.fieldError}>
                    {errors.schoolName.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={DISABLED || loading}
                className={`${styles.submitBtn} ${DISABLED ? styles.submitBtnDisabled : ""}`}
              >
                {DISABLED
                  ? "🔒 Registration Opening Soon"
                  : loading
                    ? "Submitting..."
                    : "Register Now"}
              </button>

              {DISABLED && false && (
                <p className={styles.hint}>
                  We&apos;ll notify you as soon as registration opens.
                </p>
              )}
              {successMessage && (
                <p className={styles.successMessage}>{successMessage}</p>
              )}
              {errorMessage && (
                <p className={styles.errorMessage}>{errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
