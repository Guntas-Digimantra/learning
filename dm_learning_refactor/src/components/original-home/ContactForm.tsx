// @ts-nocheck
"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "@/components/ui/link";

import { useForm } from "react-hook-form";
import axios from "axios";
import { ProgramNames, regexPatterns, VALIDATIONS } from "../common/common";

interface FormErrors {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  requirements?: string;
  terms?: string;
  institutionName?: string;
  program: string;
}

interface ContactFormProps {
  isModal?: boolean;
  isBlog?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({
  isModal,
  isBlog,
}: {
  isModal?: boolean;
  isBlog?: boolean;
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    fullName: "",
    lastName: "",
    institutionName: "",
    email: "",
    phone: "",
    requirements: "",
    terms: false,
  });
  const [isCourseDisabled, setIsCourseDisabled] = useState(true);
  const [courseOptions, setCourseOptions] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const inputBaseClass =
    "h-13 w-full rounded-xl border border-[#e1e1e1] bg-white px-4 font-dm-sans text-base text-[#2e2e2e] outline-none transition-colors placeholder:text-[#6d6c80] focus:border-primary";
  const textAreaClass =
    "min-h-24 w-full rounded-xl border border-[#e1e1e1] bg-white px-4 py-3 font-dm-sans text-base text-[#2e2e2e] outline-none transition-colors placeholder:text-[#6d6c80] focus:border-primary";
  const errorClass = "mt-1 text-sm text-red-600";

  const onSubmit = async (data: any) => {
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
    const finalData = {
      mailOptions: {
        subject: "Contact Form",
        text: payload,
      },
    };

    try {
      const to = process.env.NEXT_PUBLIC_SMTP_TO?.split(',') || [];
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/send-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to, // The recipient of the contact form (your email)
            subject: `New Contact Form Submission`, // Dynamic subject line
            message: `
                    <p>You have a new contact form submission:</p>
                    <ul>
                        <li><strong>Name:</strong> ${payload.name}</li>
                        <li><strong>Email:</strong> <a href="mailto:${payload.email}">${payload.email}</a></li>
                        <li><strong>Institution Name:</strong> ${payload.institutionName}</li>
                        <li><strong>Phone:</strong> <a href="tel:${payload.phone?.trim()}">${payload.phone?.trim() || 'N/A'}</a></li>
                    </ul>
                    <p style={{marginBottom: 10px}}><strong>Requirements:</strong></p>
                    <p style={{paddingLeft: 60px}}>${payload.requirements}</p>
                    `,
          }),
        },
      );

      await response.json();
      if (response.ok) {
        setLoading(false);
        reset({
          firstName: '',
          fullName: '',
          lastName: '',
          email: '',
          phone: '',
          institutionName: '',
          requirements: '',
          program: '',
          terms: false,
        });
        setSuccessMessage('Form Submitted Successfully');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
        console.log('Email sent successfully!');
      } else {
        console.log('Error sending email');
      }

      console.log('Form data successfully processed on the server.');

      return {
        status: 'success',
        message: 'We have recieved your message and will get back to you soon!',
      };
    } catch (error) {
      setLoading(false);
      console.error('Server Action Error:', error);
      return {
        status: 'error',
        message: 'Failed to send your message. Please try again.',
      };
    }finally{
      setLoading(false);
    }

    // try {
    //   const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/store-contact-form`;
    //   const res = await axios.post(apiUrl, finalData);
    //   if (res.status === 200) {
    //     axios.post("/api", finalData).then((response) => {
    //       if (response?.status === 200) {
    //         setLoading(false);
    //         reset({
    //           firstName: "",
    //           fullName: "",
    //           lastName: "",
    //           email: "",
    //           phone: "",
    //           institutionName: "",
    //           requirements: "",
    //           program: "",
    //           terms: false,
    //         });
    //         setSuccessMessage("Form Submitted Successfully");
    //         setTimeout(() => {
    //           setSuccessMessage("");
    //         }, 3000);
    //       }
    //     });
    //   } else {
    //     console.error("Error submitting form:", response.statusText);
    //   }
    // } catch (error) {
    //   setLoading(false);
    // }
  };

  return (
    <div>
      {!isModal && !isBlog && (
        <h2 className="mb-6 font-montserrat text-[2.101rem] font-semibold leading-tight text-black">
          Let&apos;s Connect!
        </h2>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="post"
        className="space-y-4"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {isBlog && (
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Full Name*"
                className={inputBaseClass}
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
            <div>
              <input
                type="text"
                placeholder={isModal ? "Name*" : "First Name*"}
                className={inputBaseClass}
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
                <div className={errorClass}>{errors.firstName.message}</div>
              )}
            </div>
          )}
          {!isModal && !isBlog && (
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className={inputBaseClass}
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
                <div className={errorClass}>{errors.lastName.message}</div>
              )}
            </div>
          )}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <input
              type="email"
              className={inputBaseClass}
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
              <div className={errorClass}>{errors.email.message}</div>
            )}
          </div>
          {!isModal && !isBlog && (
            <div>
              <input
                type="text"
                placeholder="Institution Name*"
                className={inputBaseClass}
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
                <div className={errorClass}>{errors.institutionName.message}</div>
              )}
            </div>
          )}
        </div>

        <div>
          <div className="flex overflow-hidden rounded-xl border border-[#e1e1e1] bg-white">
            <span className="flex h-13 items-center border-r border-[#e1e1e1] px-4 font-dm-sans text-base text-[#6d6c80]">
              +91
            </span>
            <input
              type="text"
              placeholder={isModal ? "Contact No.*" : "Enter Phone Number"}
              className="h-13 w-full px-4 font-dm-sans text-base text-[#2e2e2e] outline-none placeholder:text-[#6d6c80]"
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
          {errors.phone && <div className={errorClass}>{errors.phone.message}</div>}
        </div>

        {isModal && (
          <div>
            <select
              className={inputBaseClass}
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
              className={inputBaseClass}
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
              className={textAreaClass}
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
          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border border-[#c7c7c7]"
              {...register("terms", {
                required: "You must agree to the terms and conditions",
              })}
            />
            <span className="font-dm-sans text-base text-[#5f5e71]">
              I agree to the{" "}
              <Link href="/terms-and-conditions" className="font-semibold text-black underline">
                Terms & Conditions<span>*</span>
              </Link>
            </span>
          </label>
        )}
        {errors.terms && <div className={errorClass}>{errors.terms.message}</div>}
        <button
          className="inline-flex h-13 w-full items-center justify-center rounded-full bg-black px-6 font-dm-sans text-base font-semibold text-white transition-colors hover:bg-[#1d1d1d]"
          type="submit"
        >
          {loading ? "Submitting..." : !isModal ? "Submit" : "Let's Go!"}
        </button>
        {successMessage && <p className="text-green-600">{successMessage}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
