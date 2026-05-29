'use client';
import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import {
  AdvancedAICourse,
  advancedTrainingCourses,
  BeginnerAICourse,
  ProgramNames,
  regexPatterns,
  summerBootcampCourses,
  VALIDATIONS,
} from '../common/common';
import Link from '@/components/ui/link';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  stateName: string;
  semester: string;
  cityName: string;
  pursuingCourse: string;
  phone: string;
  requirements: string;
  terms: boolean;
  program: string;
  institutionName: string;
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
    } else if (selectedProgram === ProgramNames.BeginnerAICourse) {
      setCourseOptions(BeginnerAICourse);
    } else if (selectedProgram === ProgramNames.AdvancedAICourse) {
      setCourseOptions(AdvancedAICourse);
    } else {
      setCourseOptions([]);
    }
  };

  const onSubmit = async (data: any) => {
    setLoading(true);
    const payload = {
      name: data?.firstName + ' ' + data?.lastName,
      email: data?.email,
      state: data?.stateName,
      city: data?.cityName,
      semester: data?.semester,
      pursuingCourse: data?.pursuingCourse,
      institutionName: data?.institutionName,
      phone: data?.phone,
      program: data?.program,
      course: data?.course,
      requirements: data?.requirements,
    };

    try {
      const to = process.env.NEXT_PUBLIC_SMTP_TO?.split(',') || [];
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to,
          subject: 'Student Details Form',
          message: `
                    <p>You have a new student form submission:</p>
                    <ul>
                      <li><strong>Name:</strong> ${payload.name}</li>
                      <li><strong>Email:</strong> <a href="mailto:${payload.email}">${payload.email}</a></li>
                      <li><strong>Institution Name:</strong> ${payload.institutionName}</li>
                      <li><strong>Phone:</strong> <a href="tel:${payload.phone?.trim()}">${payload.phone?.trim() || 'N/A'}</a></li>
                      <li><strong>State:</strong> ${payload.state}</li>
                      <li><strong>City:</strong> ${payload.city}</li>
                      <li><strong>Program:</strong> ${payload.program}</li>
                      <li><strong>Pursuing Course:</strong> ${payload.pursuingCourse}</li>
                      <li><strong>Semester:</strong> ${payload.semester}</li>
                      <li><strong>Selected Course:</strong> ${payload.course}</li>
                    </ul>
                    <p style={{marginBottom: 10px}}><strong>Requirements:</strong></p>
                    <p style={{paddingLeft: 60px}}>${payload.requirements}</p>
                    `,
        }),
      });

      await response.json();
      if (response.ok) {
        setLoading(false);
        reset({
          firstName: '',
          lastName: '',
          stateName: '',
          cityName: '',
          semester: '',
          pursuingCourse: '',
          email: '',
          phone: '',
          program: '',
          course: '',
          institutionName: '',
          requirements: '',
          terms: false,
        });
        setSuccessMessage('Form Submitted Successfully');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      } else {
        console.error('Error sending email');
      }
    } catch (error) {
      setLoading(false);
      console.error('Server Action Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Let&apos;s Connect!</h2>
      <form onSubmit={handleSubmit(onSubmit)} method="post" className="contact-form">
        <div className="name-container">
          <div className="w-full">
            <input
              type="text"
              placeholder="First Name*"
              className="form-fields"
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
            {errors.firstName && <div className="error">{errors.firstName.message}</div>}
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Last Name"
              className="form-fields"
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
            {errors.lastName && <div className="error">{errors.lastName.message}</div>}
          </div>
        </div>

        <div className="name-container">
          <div className="w-full">
            <input
              type="email"
              className="form-fields"
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
            {errors.email && <div className="error">{errors.email.message}</div>}
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Institution Name*"
              className="form-fields"
              {...register('institutionName', {
                required: 'This field is required',
                pattern: {
                  value: regexPatterns.instituyionName,
                  message: 'Invalid Institution Name provided',
                },
              })}
            />
            {errors.institutionName && <div className="error">{errors.institutionName.message}</div>}
          </div>
        </div>

        <div className="name-container">
          <div className="w-full">
            <select
              className="form-fields"
              {...register('stateName', {
                required: 'This field is required',
              })}
            >
              <option value="">Select State*</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="West Bengal">West Bengal</option>
            </select>
            {errors.stateName && <div className="error">{errors.stateName.message}</div>}
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="City*"
              className="form-fields"
              {...register('cityName', {
                required: 'This field is required',
                maxLength: {
                  value: 30,
                  message: 'City Name must not exceed 30 characters',
                },
                pattern: {
                  value: regexPatterns.name,
                  message: 'Invalid City Name provided',
                },
                validate: VALIDATIONS.noLeadingOrTrailingSpaces,
              })}
            />
            {errors.cityName && <div className="error">{errors.cityName.message}</div>}
          </div>
        </div>

        <div className="name-container">
          <div className="w-full">
            <select
              className="form-fields"
              {...register('program', {
                required: 'Please select a program',
                onChange: handleProgramChange,
              })}
            >
              <option value="">Select Program*</option>
              <option value={ProgramNames.SummerBootcamp}>Summer Bootcamp (6 weeks)</option>
              <option value={ProgramNames.AdvancedIndustrialTraining}>
                Advanced Industrial Training & Internship (6 Months)
              </option>
              <option value={ProgramNames.BeginnerAICourse}>Beginner AI Course (3 weeks)</option>
              <option value={ProgramNames.AdvancedAICourse}>Advanced AI Course (6 weeks)</option>
            </select>
            {errors.program && <div className="error">{errors.program.message}</div>}
          </div>

          <div className="w-full">
            <select
              className="form-fields"
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
            {errors.course && <div className="error">{errors.course.message}</div>}
          </div>
        </div>

        <div className="name-container">
          <div className="w-full">
            <input
              type="text"
              placeholder="Pursuing course"
              className="form-fields"
              {...register('pursuingCourse', {
                maxLength: {
                  value: 30,
                  message: 'State Name must not exceed 30 characters',
                },
                pattern: {
                  value: regexPatterns.name,
                  message: 'Invalid Course Name provided.',
                },
                validate: VALIDATIONS.noLeadingOrTrailingSpaces,
              })}
            />
            {errors.pursuingCourse && <div className="error">{errors.pursuingCourse.message}</div>}
          </div>
          <div className="w-full">
            <select className="form-fields" {...register('semester')}>
              <option value="">Select Semester</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            {errors.semester && <div className="error">{errors.semester.message}</div>}
          </div>
        </div>

        <div className="phone-input-container">
          <div className="phone-number-field">
            <span className="form-fields">+91</span>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="form-fields"
              {...register('phone', {
                required: 'This field is required',
                validate: (value) => {
                  const cleanedValue = value?.replace(/\D/g, '');
                  if (cleanedValue.length !== 10) {
                    return 'Phone number must be 10 digits';
                  }
                  if (!/^\d{5}-\d{5}$/.test(value)) {
                    return 'Phone number format must be XXXXX-XXXXX';
                  }
                  return true;
                },
              })}
              onInput={(e) => {
                const input = e.target as HTMLInputElement;
                const value = input?.value?.replace(/\D/g, '')?.slice(0, 10);
                input.value = value?.replace(/^(\d{5})(\d{0,5})$/, '$1-$2');
              }}
            />
          </div>
          {errors.phone && <div className="error">{errors.phone.message}</div>}
        </div>

        <div>
          <textarea
            className="text-area"
            placeholder="Share your requirements"
            {...register('requirements', {
              maxLength: 50,
            })}
          />
          {errors.requirements && <div className="error">{errors.requirements.message}</div>}
        </div>
        <label className="terms-conditions">
          <input type="checkbox" {...register('terms', { required: 'You must agree to the terms and conditions' })} />
          <span className="terms-content">
            I agree to the{' '}
            <Link href="/terms-and-conditions" className="terms-link">
              Terms & Conditions<span>*</span>
            </Link>
          </span>
        </label>
        {errors.terms && <div className="error">{errors.terms.message}</div>}
        <button className="submit-btn" type="submit">
          {loading ? 'Submitting...' : ' Submit'}
        </button>
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      </form>
    </div>
  );
};

export default StudentDetailForm;
