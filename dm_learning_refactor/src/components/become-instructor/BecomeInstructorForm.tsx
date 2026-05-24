// @ts-nocheck
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { regexPatterns, VALIDATIONS } from "../common/common";
import Link from "@/components/ui/link";
import {
    formError,
    formField,
    formHeading,
    formPhoneRow,
    formRow,
    formStack,
    formSubmit,
    formTerms,
    formTermsLink,
    formTextarea,
} from "../common/form-classes";

interface BecomeInstructorFormProps {
    isModal?: boolean;
}

const BecomeInstructorForm: React.FC<BecomeInstructorFormProps> = ({
    isModal,
}: {
    isModal?: boolean;
}) => {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
    });

    const resumeFile = watch("resume");

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const onSubmit = async (data: any) => {
        setLoading(true);
        setSuccessMessage("");

        const formData = new FormData();
        formData.append("firstName", data.firstName);
        formData.append("lastName", data.lastName || "");
        formData.append("email", data.email);
        formData.append("experience", data.experience);
        formData.append("phone", data.phone?.replace(/\D/g, "") || "");
        formData.append("linkedinUrl", data.linkedinUrl || "");
        formData.append("about", data.requirements || "");
        formData.append("termsAgreed", data.terms ? "true" : "false");

        if (data.resume && data.resume[0]) {
            formData.append("resume", data.resume[0]);
        }

        try {
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
            const response = await fetch(`${baseUrl}/api/instructor/register`, {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setSuccessMessage("Application Submitted Successfully");
                reset();
                setTimeout(() => {
                    setSuccessMessage("");
                }, 5000);
            } else {
                alert(result.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submission Error:", error);
            alert("Failed to submit application. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {!isModal && <h2 className={formHeading}>Become an Instructor</h2>}
            <form onSubmit={handleSubmit(onSubmit)} method="post" className={formStack}>
                <div className={formRow}>
                    <div className="w-full">
                        <input
                            type="text"
                            placeholder="First Name*"
                            className={formField}
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
                            <div className="pt-0.5 text-red-600">{errors.firstName.message}</div>
                        )}
                    </div>
                    <div className="w-full">
                        <input
                            type="text"
                            placeholder="Last Name"
                            className={formField}
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
                            <div className="pt-0.5 text-red-600">{errors.lastName.message}</div>
                        )}
                    </div>
                </div>

                <div className={formRow}>
                    <div className="w-full">
                        <input
                            type="email"
                            className={formField}
                            placeholder="Email ID*"
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
                            <div className="pt-0.5 text-red-600">{errors.email.message}</div>
                        )}
                    </div>
                    <div className="w-full">
                        <input
                            type="text"
                            placeholder="Experience*"
                            className={formField}
                            {...register("experience", {
                                required: "This field is required",
                                validate: VALIDATIONS.noLeadingOrTrailingSpaces,
                            })}
                        />
                        {errors.experience && (
                            <div className="pt-0.5 text-red-600">{errors.experience.message}</div>
                        )}
                    </div>
                </div>

                <div>
                    <div className={formPhoneRow}>
                        <span className={`${formField} shrink-0 max-[767px]:w-[20%]`}>+91</span>
                        <input
                            type="text"
                            placeholder="Enter Phone Number"
                            className={formField}
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
                    {errors.phone && <div className="pt-0.5 text-red-600">{errors.phone.message}</div>}
                </div>

                <div className="mt-2.5 w-full">
                    <input
                        type="text"
                        placeholder="LinkedIn Profile URL*"
                        className={formField}
                        {...register("linkedinUrl", {
                            required: "This field is required",
                            pattern: {
                                value: /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/i,
                                message: "Invalid LinkedIn URL",
                            },
                        })}
                    />
                    {errors.linkedinUrl && (
                        <div className="pt-0.5 text-red-600">{errors.linkedinUrl.message}</div>
                    )}
                </div>

                <div className="mt-5 w-full">
                    <label className="mb-2 block text-sm text-[#666]">Upload Resume/CV (PDF or DOCX)*</label>
                    <div className="relative w-full">
                        <label className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#e1e1e1] bg-[#fcfcfd] px-5 py-[30px] text-center transition-all duration-300 hover:border-[#fc8b20] hover:bg-[#fff9f4]">
                            <div className="mb-2.5 text-[32px] text-[#fc8b20]">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="17 8 12 3 7 8" />
                                    <line x1="12" y1="3" x2="12" y2="15" />
                                </svg>
                            </div>
                            <div className="text-sm font-medium text-[#666]">
                                {resumeFile && resumeFile[0] ? "Change File" : "Click to upload or drag and drop"}
                            </div>
                            {resumeFile && resumeFile[0] && (
                                <div className="mt-2 break-all text-[13px] font-semibold text-[#333]">
                                    {resumeFile[0].name}
                                </div>
                            )}
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                                {...register("resume", {
                                    required: "Resume is required",
                                })}
                            />
                        </label>
                    </div>
                    {errors.resume && (
                        <div className="pt-0.5 text-red-600">{errors.resume.message}</div>
                    )}
                </div>

                <div className="mt-5">
                    <textarea
                        className={formTextarea}
                        placeholder="Tell us about yourself"
                        {...register("requirements", {
                            maxLength: {
                                value: 500,
                                message: "Maximum 500 characters allowed",
                            },
                        })}
                    />
                </div>

                <label className={formTerms}>
                    <input
                        type="checkbox"
                        className="h-5 w-5"
                        {...register("terms", {
                            required: "You must agree to the terms and conditions",
                        })}
                    />
                    <span className="text-base text-black">
                        I agree to the{" "}
                        <Link href="/terms-and-conditions" className={formTermsLink}>
                            Terms & Conditions<span>*</span>
                        </Link>
                    </span>
                </label>
                {errors.terms && <div className="pt-0.5 text-red-600">{errors.terms.message}</div>}

                <button className={formSubmit} type="submit">
                    {loading ? "Submitting..." : "Apply Now"}
                </button>
                {successMessage && <p style={{ color: "green", textAlign: "center", marginTop: 10 }}>{successMessage}</p>}
            </form>
        </div>
    );
};

export default BecomeInstructorForm;
