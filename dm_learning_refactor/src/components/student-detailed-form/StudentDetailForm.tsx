'use client';
import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
  advancedTrainingCourses,
  ProgramNames,
  regexPatterns,
  summerBootcampCourses,
  VALIDATIONS,
} from '../common/common';
import Link from '@/components/ui/link';
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
} from '../common/form-classes';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  requirements: string;
  terms: boolean;
  program: string;
  course: string;
};

const StudentDetailForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onBlur',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isCourseDisabled, setIsCourseDisabled] = useState(true);
  const [courseOptions, setCourseOptions] = useState<string[]>([]);

  const handleProgramChange = (event: any) => {
    const selectedProgram = event?.target?.value;
    setIsCourseDisabled(!selectedProgram);
    setValue('course', '');

    if (selectedProgram === ProgramNames.SummerBootcamp) {
      setCourseOptions(summerBootcampCourses);
    } else if (selectedProgram === ProgramNames.AdvancedIndustrialTraining) {
      setCourseOptions(advancedTrainingCourses);
    } else {
      setCourseOptions([]);
    }
  };

  const onSubmit = async (data: any) => {
    setLoading(true);
    const payload = {
      name: data?.firstName + ' ' + data?.lastName,
      email: data?.email,
      institutionName: data?.institutionName,
      phone: data?.phone,
      program: data?.program,
      course: data?.course,
      requirements: data?.requirements,
    };
    const finalData = {
      mailOptions: {
        subject: 'Student Details Form',
        text: payload,
        emailTo: data?.email,
      },
    };

    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/store-student-detail-form`;
      const res = await axios.post(apiUrl, finalData);
      if (res.status === 200) {
        axios.post('/api/', finalData).then((response) => {
          if (response?.status === 200) {
            setLoading(false);
            reset({
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              program: '',
              course: '',
              requirements: '',
              terms: false,
            });
            setSuccessMessage('Form Submitted Successfully');
            setTimeout(() => {
              setSuccessMessage('');
            }, 3000);
          }
        });
      } else {
        console.error('Error submitting form:', res?.statusText);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className={formHeading}>Let&apos;s Connect!</h2>
      <form onSubmit={handleSubmit(onSubmit)} method="post" className={formStack}>
        <div className={formRow}>
          <div className="w-full">
            <input
              type="text"
              placeholder="First Name*"
              className={formField}
              {...register('firstName', {
                required: 'This field is required',
                maxLength: {
                  value: 20,
                  message: 'First Name must not exceed 20 characters',
                },
                pattern: {
                  value: regexPatterns.name,
                  message: 'Invalid First Name provided',
                },
                validate: VALIDATIONS.noLeadingOrTrailingSpaces,
              })}
            />
            {errors.firstName && <div className={formError}>{errors.firstName.message}</div>}
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Last Name"
              className={formField}
              {...register('lastName', {
                maxLength: {
                  value: 20,
                  message: 'Last Name must not exceed 20 characters',
                },
                pattern: {
                  value: regexPatterns.name,
                  message: 'Invalid Last Name provided.',
                },
              })}
            />
            {errors.lastName && <div className={formError}>{errors.lastName.message}</div>}
          </div>
        </div>

        <div className={formRow}>
          <div className="w-full">
            <input
              type="email"
              className={formField}
              placeholder="Email ID*"
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  value: regexPatterns.email,
                  message: 'Invalid email address',
                },
                validate: VALIDATIONS.noLeadingOrTrailingSpaces,
              })}
            />
            {errors.email && <div className={formError}>{errors.email.message}</div>}
          </div>
        </div>

        <div className={formRow}>
          <div className="w-full">
            <select
              className={formField}
              {...register('program', {
                required: 'Please select a program',
                onChange: handleProgramChange,
              })}
            >
              <option value="">Select Program*</option>
              <option value={ProgramNames.SummerBootcamp}>Summer Bootcamp</option>
              <option value={ProgramNames.AdvancedIndustrialTraining}>Advanced Industrial Training & Internship</option>
            </select>
            {errors.program && <div className={formError}>{errors.program.message}</div>}
          </div>

          <div className="w-full">
            <select
              className={formField}
              {...register('course', { required: 'Please select a course' })}
              disabled={isCourseDisabled}
            >
              <option value="">Select Course*</option>
              {courseOptions.map((course, index) => (
                <option key={index} value={course}>
                  {course?.replace(/\b\w/g, (char) => char?.toUpperCase())}
                </option>
              ))}
            </select>
            {errors.course && <div className={formError}>{errors.course.message}</div>}
          </div>
        </div>

        <div>
          <div className={formPhoneRow}>
            <span className={formField}>+91</span>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className={formField}
              {...register('phone', {
                required: 'This field is required',
                validate: (value) => {
                  const cleanedValue = value?.replace(/\D/g, '');
                  if (cleanedValue.length !== 10) {
                    return 'Phone number must be 10 digits';
                  }
                  if (!regexPatterns.phoneValidationPattern.test(value)) {
                    return 'Phone number format must be XXXXX-XXXXX';
                  }
                  return true;
                },
              })}
              onInput={(e) => {
                const input = e.target as HTMLInputElement;
                const value = input?.value?.replace(/\D/g, '')?.slice(0, 10);
                input.value = value?.replace(regexPatterns.phoneFormatPattern, '$1-$2');
              }}
            />
          </div>
          {errors.phone && <div className={formError}>{errors.phone.message}</div>}
        </div>

        <div>
          <textarea
            className={formTextarea}
            placeholder="Share your requirements"
            {...register('requirements', {
              maxLength: {
                value: 50,
                message: 'Maximum 50 characters allowed',
              },
              validate: (value) =>
                value?.trim()?.length === 0 && value?.length > 0 ? 'Only spaces are not allowed' : true,
            })}
          />
          {errors.requirements && <div className={formError}>{errors.requirements.message}</div>}
        </div>
        <label className={formTerms}>
          <input
            type="checkbox"
            className="h-5 w-5"
            {...register('terms', {
              required: 'You must agree to the terms and conditions',
            })}
          />
          <span>
            I agree to the{' '}
            <Link href="/terms-and-conditions" className={formTermsLink}>
              Terms & Conditions<span>*</span>
            </Link>
          </span>
        </label>
        {errors.terms && <div className={formError}>{errors.terms.message}</div>}
        <button className={formSubmit} type="submit">
          {loading ? 'Submiting...' : ' Submit'}
        </button>
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      </form>
    </div>
  );
};

export default StudentDetailForm;
