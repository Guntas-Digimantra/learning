"use client";
import "../../../public/css/payment.css";
import Link from "@/components/ui/link";
import { useForm } from "react-hook-form";
import {
  advancedTrainingCourses,
  howDidYouHeardOptions,
  ProgramNames,
  regexPatterns,
  summerBootcampCourses,
  VALIDATIONS,
} from "../common/common";
import axios from "axios";

interface PaymentForm {
  fullName: string;
  email: string;
  phone: string;
  institutionName: string;
  program: string;
  course: string;
  howDidYouHear: string;
  couponCode?: string;
  terms: boolean;
  paymentAmount?: string;
  courseOptions?: string[];
}

export default function PaymentPage() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    clearErrors,
    formState: { errors },
    watch,
  } = useForm<PaymentForm>({ mode: "onBlur" });

  const program = watch("program");

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;

    if (selected && program === ProgramNames.AdvancedIndustrialTraining) {
      setValue("paymentAmount", "17000");
    } else if (selected && program === ProgramNames.SummerBootcamp) {
      setValue("paymentAmount", "4000");
    } else {
      setValue("paymentAmount", "");
    }

    if (selected) {
      clearErrors("course");
    }
  };

  const handleProgramChange = (event: any) => {
    const selectedProgram = event?.target?.value;
    setValue("course", "");
    setValue("paymentAmount", "");

    if (selectedProgram === ProgramNames.SummerBootcamp) {
      setValue("courseOptions", summerBootcampCourses);
    } else if (selectedProgram === ProgramNames.AdvancedIndustrialTraining) {
      setValue("courseOptions", advancedTrainingCourses);
    } else {
      setValue("courseOptions", []);
    }
    clearErrors("course");
  };

  const onSubmit = async (data: any) => {
    const { courseOptions, ...formData } = data;
    const apiEndpoint = "http://localhost:3000/api/pay";

    try {
      const response = await axios.post(apiEndpoint, formData);
      if (response.status === 200) {
        alert("Payment successful!");
        reset();
      } else {
        alert("Payment failed. Please try again.");
      }
    } catch (error: any) {
      alert(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <section className="payment-page-section">
      <div className="payment-container">
        <h1>Payment</h1>

        <form className="payment-form" onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div className="form-group">
            <label>Full Name*</label>
            <input
              type="text"
              placeholder="Enter your full name"
              {...register("fullName", {
                required: "Full name is required",
                validate: VALIDATIONS.noLeadingOrTrailingSpaces,
                pattern: {
                  value: regexPatterns.name,
                  message: "Invalid First Name provided",
                },
              })}
            />
            {errors.fullName?.message && (
              <span className="error">{errors.fullName.message}</span>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email ID*</label>
            <input
              type="email"
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
            {errors?.email?.message && (
              <div className="error">{errors.email.message}</div>
            )}
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label>Enter Phone Number*</label>
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
                const inputElement = e.target as HTMLInputElement;
                const value = inputElement?.value
                  ?.replace(regexPatterns.cleanedPhone, "")
                  ?.slice(0, 10);

                inputElement.value = value?.replace(
                  /^(\d{5})(\d{0,5})$/,
                  "$1-$2"
                );
              }}
            />
            {errors.phone?.message && (
              <span className="error">{errors.phone.message}</span>
            )}
          </div>

          {/* Institution Name */}
          <div className="form-group">
            <label>Institution Name*</label>
            <input
              type="text"
              placeholder="Enter Institute Name"
              {...register("institutionName", {
                required: "This field is required",
                pattern: {
                  value: regexPatterns.instituyionName,
                  message: "Invalid Institution Name provided",
                },
              })}
            />
            {errors.institutionName?.message && (
              <span className="error">{errors.institutionName.message}</span>
            )}
          </div>

          {/* Course Preference */}
          <div className="form-group">
            <label>Course Preference*</label>

            <div className="course-container">
              {/* Program Selection */}
              <div className="course-styling">
                <select
                  className="form-fields"
                  {...register("program", {
                    required: "Please select a program",
                    onChange: handleProgramChange,
                  })}
                >
                  <option value="">Select Program*</option>
                  <option value={ProgramNames.SummerBootcamp}>
                    Summer Bootcamp
                  </option>
                  <option value={ProgramNames.AdvancedIndustrialTraining}>
                    Advanced Industrial Training & Internship
                  </option>
                </select>
                {errors.program && (
                  <div className="error">{errors.program.message}</div>
                )}
              </div>

              {/* Course Selection */}
              <div className="course-styling">
                <select
                  className="form-fields"
                  {...register("course", {
                    required: program ? "Please select a course" : false,
                  })}
                  disabled={!program}
                  onChange={handleCourseChange}
                >
                  <option value="">Select Course*</option>
                  {program === ProgramNames.SummerBootcamp &&
                    summerBootcampCourses.map((course, index) => (
                      <option key={index} value={course}>
                        {course?.replace(/\b\w/g, (char) =>
                          char?.toUpperCase()
                        )}
                      </option>
                    ))}
                  {program === ProgramNames.AdvancedIndustrialTraining &&
                    advancedTrainingCourses.map((course, index) => (
                      <option key={index} value={course}>
                        {course?.replace(/\b\w/g, (char) =>
                          char?.toUpperCase()
                        )}
                      </option>
                    ))}
                </select>
                {errors.course && (
                  <div className="error">{errors.course.message}</div>
                )}
              </div>
            </div>

            {watch("paymentAmount") && (
              <div className="payment-message">
                {watch("paymentAmount") !== null
                  ? `Rs ${watch("paymentAmount")} /- inclusive of all taxes`
                  : ""}
              </div>
            )}
          </div>

          {/* How Did You Hear */}
          <div className="form-group">
            <label>How did you hear about us?*</label>
            <select
              {...register("howDidYouHear", {
                required: "Please select an option",
              })}
            >
              <option value="">Select how did you hear about us</option>
              {howDidYouHeardOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.howDidYouHear?.message && (
              <span className="error">{errors.howDidYouHear.message}</span>
            )}
          </div>

          {/* Coupon Code */}
          <div className="form-group">
            <label>Coupon Code</label>
            <input
              type="text"
              placeholder="Enter Coupon Code"
              {...register("couponCode")}
            />
          </div>

          <label className="form-group">
            <div className="terms">
              <input
                type="checkbox"
                className="checkbox-btn"
                {...register("terms", {
                  required: "You must agree to the terms and conditions",
                })}
              />
              <span className="terms-and-conditions">
                I agree to the{" "}
                <Link href="/terms-and-conditions" className="terms-link">
                  Terms & Conditions<span>*</span>
                </Link>
              </span>
            </div>
            {errors.terms?.message && (
              <div className="error">{errors.terms.message}</div>
            )}
          </label>
          <button className="dml-button" type="submit">
            Make Payment
          </button>
        </form>
      </div>
    </section>
  );
}
