// @ts-nocheck
"use client";
import React, { useState } from "react";
import Link from "@/components/ui/link";
import { useForm } from "react-hook-form";
import { ProgramNames, regexPatterns, VALIDATIONS } from "../common/common";

interface ContactFormProps {
  isModal?: boolean;
  isBlog?: boolean;
}

const inputField =
  "h-13 w-full rounded-[10px] border-0 bg-white px-3 py-3.5 font-[family-name:var(--font-poppins)] text-base font-normal leading-[21.6px] text-form-text outline-none";
const blogInputField = `${inputField} border border-form-blog-border`;
const textAreaField =
  "h-[113px] w-full rounded-[10px] border-0 bg-white p-3 font-[family-name:var(--font-poppins)] text-lg font-normal leading-[21.6px] text-form-text outline-none";
const errorClass = "pt-[3px] text-red-600";

const ContactForm: React.FC<ContactFormProps> = ({
  isModal,
  isBlog,
}: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (data: Record<string, string>) => {
    const fullName = isBlog
      ? data.fullName
      : data?.lastName
        ? `${data.firstName} ${data.lastName}`
        : data.firstName;

    setLoading(true);
    const payload = {
      name: fullName,
      email: data?.email,
      institutionName: data?.institutionName,
      phone: data?.phone,
      requirements: data?.requirements,
      program: data?.program,
    };

    try {
      const to = process.env.NEXT_PUBLIC_SMTP_TO?.split(",") || [];
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/send-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to,
            subject: `New Contact Form Submission`,
            message: `
                    <p>You have a new contact form submission:</p>
                    <ul>
                        <li><strong>Name:</strong> ${payload.name}</li>
                        <li><strong>Email:</strong> <a href="mailto:${payload.email}">${payload.email}</a></li>
                        <li><strong>Institution Name:</strong> ${payload.institutionName}</li>
                        <li><strong>Phone:</strong> <a href="tel:${payload.phone?.trim()}">${payload.phone?.trim() || "N/A"}</a></li>
                    </ul>
                    <p style={{marginBottom: 10px}}><strong>Requirements:</strong></p>
                    <p style={{paddingLeft: 60px}}>${payload.requirements}</p>
                    `,
          }),
        }
      );

      await response.json();
      if (response.ok) {
        reset({
          firstName: "",
          fullName: "",
          lastName: "",
          email: "",
          phone: "",
          institutionName: "",
          requirements: "",
          program: "",
          terms: false,
        });
        setSuccessMessage("Form Submitted Successfully");
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    } catch (error) {
      console.error("Server Action Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const isHome = !isModal && !isBlog;

  return (
    <div className={isHome ? "form-container" : undefined}>
      {isHome && <h2 className="form-heading">Let&apos;s Connect!</h2>}
      {!isHome && !isModal && !isBlog && (
        <h2 className="text-center text-[28px] leading-[33.61px] font-medium text-fg">
          Let&apos;s Connect!
        </h2>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="post"
        className={isHome ? "contact-form" : "mt-6 flex flex-col gap-[15px] font-[family-name:var(--font-poppins)]"}
      >
        <div
          className={
            isHome
              ? "name-container max-[767px]:!flex-col max-[767px]:!gap-[15px]"
              : "flex gap-5 max-[767px]:flex-col"
          }
        >
          {isBlog && (
            <div className="w-full">
              <input
                type="text"
                placeholder="Full Name*"
                className={blogInputField}
                {...register("fullName", {
                  required: "This field is required",
                  maxLength: {
                    value: 20,
                    message: "Full Name must not exceed 20 characters",
                  },
                  pattern: {
                    value: regexPatterns.name,
                    message: "Invalid Full Name provided.",
                  },
                  validate: VALIDATIONS.noLeadingOrTrailingSpaces,
                })}
              />
              {errors.fullName && (
                <div className={errorClass}>{errors.fullName.message}</div>
              )}
            </div>
          )}

          {!isBlog && (
            <div className={isHome ? "w-100" : "w-full"}>
              <input
                type="text"
                placeholder={isModal ? "Name*" : "First Name*"}
                className={isHome ? "form-fields" : inputField}
                {...register("firstName", {
                  required: "This field is required",
                  maxLength: {
                    value: 20,
                    message: "First Name must not exceed 20 characters",
                  },
                  pattern: {
                    value: regexPatterns.name,
                    message: "Invalid First Name provided.",
                  },
                  validate: VALIDATIONS.noLeadingOrTrailingSpaces,
                })}
              />
              {errors.firstName && (
                <div className={isHome ? "error" : errorClass}>
                  {errors.firstName.message}
                </div>
              )}
            </div>
          )}
          {!isModal && !isBlog && (
            <div className="w-100">
              <input
                type="text"
                placeholder="Last Name"
                className="form-fields"
                {...register("lastName", {
                  maxLength: {
                    value: 20,
                    message: "Last Name must not exceed 20 characters",
                  },
                  pattern: {
                    value: regexPatterns.name,
                    message: "Invalid Last Name provided.",
                  },
                })}
              />
              {errors.lastName && (
                <div className="error">
                  {errors.lastName.message}
                </div>
              )}
            </div>
          )}
        </div>

        <div
          className={
            isHome
              ? "name-container max-[767px]:!flex-col max-[767px]:!gap-[15px]"
              : "flex gap-5 max-[767px]:flex-col"
          }
        >
          <div className={isHome ? "w-100" : "w-full"}>
            <input
              type="email"
              className={isHome ? "form-fields" : isBlog ? blogInputField : inputField}
              placeholder={isModal ? "E-mail*" : "Email ID*"}
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: regexPatterns.email,
                  message: "Invalid email address",
                },
                validate: VALIDATIONS.noLeadingOrTrailingSpaces,
              })}
            />
            {errors.email && (
              <div className={isHome ? "error" : errorClass}>
                {errors.email.message}
              </div>
            )}
          </div>
          {!isModal && !isBlog && (
            <div className="w-100">
              <input
                type="text"
                placeholder="Institution Name*"
                className="form-fields"
                {...register("institutionName", {
                  required: "This field is required",
                  pattern: {
                    value: regexPatterns.instituyionName,
                    message: "Invalid Institution Name provided.",
                  },
                  validate: VALIDATIONS.noLeadingOrTrailingSpaces,
                })}
              />
              {errors.institutionName && (
                <div className="error">
                  {errors.institutionName.message}
                </div>
              )}
            </div>
          )}
        </div>

        <div className={isHome ? "phone-input-container" : undefined}>
          <div
            className={
              isHome
                ? "phone-number-field"
                : `flex gap-2.5 ${isBlog ? "rounded-[10px] border border-form-blog-border" : ""}`
            }
          >
            <span
              className={isHome ? "form-fields" : `${inputField} w-[10%] shrink-0 max-[575px]:w-[20%]`}
            >
              +91
            </span>
            <input
              type="text"
              placeholder={isModal ? "Contact No.*" : "Enter Phone Number"}
              className={
                isHome
                  ? "form-fields"
                  : isBlog
                    ? `${blogInputField} flex-1 border-0`
                    : `${inputField} flex-1`
              }
              {...register("phone", {
                required: "This field is required",
                validate: (value) => {
                  const cleanedValue = value?.replace(/\D/g, "");
                  if (cleanedValue.length !== 10) {
                    return "Phone number must be 10 digits";
                  }
                  return true;
                },
              })}
              onInput={(e) => {
                const value = e?.target?.value
                  ?.replace(regexPatterns.cleanedPhone, "")
                  ?.slice(0, 10);
                e.target.value = value?.replace(
                  regexPatterns.phoneFormatPattern,
                  "$1-$2"
                );
              }}
            />
          </div>
          {errors.phone && (
            <div className={isHome ? "error" : errorClass}>
              {errors.phone.message}
            </div>
          )}
        </div>

        {isModal && (
          <div className="w-full">
            <select
              className={inputField}
              {...register("program", {
                required: "Please select a program",
              })}
            >
              <option value="">Select a Program*</option>
              <option value={ProgramNames.SummerBootcamp}>
                Summer Bootcamp
              </option>
              <option value={ProgramNames.AdvancedIndustrialTraining}>
                Advanced Industrial Training & Internship
              </option>
            </select>
            {errors.program && (
              <div className={errorClass}>{errors.program.message}</div>
            )}
          </div>
        )}

        <div>
          {isBlog ? (
            <input
              type="text"
              className={blogInputField}
              placeholder="Share your requirements"
              {...register("requirements", {
                maxLength: {
                  value: 50,
                  message: "Maximum 50 characters allowed",
                },
                validate: (value) =>
                  value?.trim()?.length === 0 && value?.length > 0
                    ? "Only spaces are not allowed"
                    : true,
              })}
            />
          ) : (
            <textarea
              className={isHome ? "text-area" : textAreaField}
              placeholder="Share your requirements"
              {...register("requirements", {
                maxLength: {
                  value: 50,
                  message: "Maximum 50 characters allowed",
                },
                validate: (value) =>
                  value?.trim()?.length === 0 && value?.length > 0
                    ? "Only spaces are not allowed"
                    : true,
              })}
            />
          )}
        </div>

        {!isModal && !isBlog && (
          <label className={isHome ? "terms-conditions" : "flex items-center gap-3"}>
            <input
              type="checkbox"
              className={isHome ? undefined : "h-5 w-5"}
              {...register("terms", {
                required: "You must agree to the terms and conditions",
              })}
            />
            <span
              className={isHome ? "terms-content" : "text-lg leading-[21.6px] font-normal text-fg"}
            >
              I agree to the{" "}
              <Link href="/terms-and-conditions" className="terms-link">
                Terms & Conditions
                <span style={{ color: "red" }}>*</span>
              </Link>
            </span>
          </label>
        )}
        {errors.terms && (
          <div className={isHome ? "error" : errorClass}>
            {errors.terms.message}
          </div>
        )}
        <button
          className={
            isHome
              ? "submit-btn"
              : "h-13 w-full cursor-pointer rounded-[14px] border-0 bg-submit text-xl text-white hover:text-white"
          }
          type="submit"
        >
          {loading ? "Submitting..." : !isModal ? "Submit" : "Let's Go!"}
        </button>
        {successMessage && (
          <p className="text-green-600">{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
