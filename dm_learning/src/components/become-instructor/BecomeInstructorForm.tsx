// @ts-nocheck
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { regexPatterns, VALIDATIONS } from "../common/common";
import Link from "@/components/ui/link";

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
        <div className="form-container">
            {!isModal && (
                <h2 className="form-heading">Become an Instructor</h2>
            )}
            <form
                onSubmit={handleSubmit(onSubmit)}
                method="post"
                className="contact-form"
            >
                <div className="name-container">
                    <div className="w-100">
                        <input
                            type="text"
                            placeholder="First Name*"
                            className="form-fields"
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
                            <div className="error">{errors.firstName.message}</div>
                        )}
                    </div>
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
                            <div className="error">{errors.lastName.message}</div>
                        )}
                    </div>
                </div>

                <div className="name-container">
                    <div className="w-100">
                        <input
                            type="email"
                            className="form-fields"
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
                            <div className="error">{errors.email.message}</div>
                        )}
                    </div>
                    <div className="w-100">
                        <input
                            type="text"
                            placeholder="Experience*"
                            className="form-fields"
                            {...register("experience", {
                                required: "This field is required",
                                validate: VALIDATIONS.noLeadingOrTrailingSpaces,
                            })}
                        />
                        {errors.experience && (
                            <div className="error">{errors.experience.message}</div>
                        )}
                    </div>
                </div>

                <div className="phone-input-container">
                    <div className="phone-number-field">
                        <span className="form-fields">+91</span>
                        <input
                            type="text"
                            placeholder="Enter Phone Number"
                            className="form-fields"
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
                    {errors.phone && <div className="error">{errors.phone.message}</div>}
                </div>

                <div className="w-100" style={{ marginTop: 10 }}>
                    <input
                        type="text"
                        placeholder="LinkedIn Profile URL*"
                        className="form-fields"
                        {...register("linkedinUrl", {
                            required: "This field is required",
                            pattern: {
                                value: /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/i,
                                message: "Invalid LinkedIn URL",
                            },
                        })}
                    />
                    {errors.linkedinUrl && (
                        <div className="error">{errors.linkedinUrl.message}</div>
                    )}
                </div>

                <div className="w-100" style={{ marginTop: 20 }}>
                    <label style={{ fontSize: 14, color: "#666", display: "block", marginBottom: 8 }}>Upload Resume/CV (PDF or DOCX)*</label>
                    <div className="file-upload-wrapper">
                        <label className="file-upload-label">
                            <div className="upload-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="17 8 12 3 7 8" />
                                    <line x1="12" y1="3" x2="12" y2="15" />
                                </svg>
                            </div>
                            <div className="upload-text">
                                {resumeFile && resumeFile[0] ? "Change File" : "Click to upload or drag and drop"}
                            </div>
                            {resumeFile && resumeFile[0] && (
                                <div className="file-name">{resumeFile[0].name}</div>
                            )}
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                className="file-upload-input"
                                {...register("resume", {
                                    required: "Resume is required",
                                })}
                            />
                        </label>
                    </div>
                    {errors.resume && (
                        <div className="error">{errors.resume.message}</div>
                    )}
                </div>

                <div style={{ marginTop: 20 }}>
                    <textarea
                        className="text-area"
                        placeholder="Tell us about yourself"
                        {...register("requirements", {
                            maxLength: {
                                value: 500,
                                message: "Maximum 500 characters allowed",
                            },
                        })}
                    />
                </div>

                <label className="terms-conditions">
                    <input
                        type="checkbox"
                        {...register("terms", {
                            required: "You must agree to the terms and conditions",
                        })}
                    />
                    <span className="terms-content">
                        I agree to the{" "}
                        <Link href="/terms-and-conditions" className="terms-link">
                            Terms & Conditions<span>*</span>
                        </Link>
                    </span>
                </label>
                {errors.terms && <div className="error">{errors.terms.message}</div>}

                <button className="submit-btn" type="submit">
                    {loading ? "Submitting..." : "Apply Now"}
                </button>
                {successMessage && <p style={{ color: "green", textAlign: "center", marginTop: 10 }}>{successMessage}</p>}
            </form>
        </div>
    );
};

export default BecomeInstructorForm;
