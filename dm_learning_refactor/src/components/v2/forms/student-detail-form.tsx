'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { advancedTrainingCourses, ProgramNames, regexPatterns, summerBootcampCourses, VALIDATIONS } from '@/components/common/common';
import { Button } from '../ui/button';

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

export default function StudentDetailForm() {
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors, isValid },
    } = useForm<FormValues>({ mode: 'onBlur' });

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [isCourseDisabled, setIsCourseDisabled] = useState(true);
    const [courseOptions, setCourseOptions] = useState<string[]>([]);

    const handleProgramChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedProgram = event.target.value;
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

    const onSubmit = async (data: FormValues) => {
        setLoading(true);
        const payload = {
            name: data.firstName + ' ' + data.lastName,
            email: data.email,
            phone: data.phone,
            program: data.program,
            course: data.course,
            requirements: data.requirements,
        };
        const finalData = {
            mailOptions: {
                subject: 'Student Details Form',
                text: payload,
                emailTo: data.email,
            },
        };

        try {
            const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/store-student-detail-form`;
            const res = await axios.post(apiUrl, finalData);
            if (res.status === 200) {
                const response = await axios.post('/api/', finalData);
                if (response?.status === 200) {
                    setLoading(false);
                    reset({ firstName: '', lastName: '', email: '', phone: '', program: '', course: '', requirements: '', terms: false });
                    setSuccessMessage('Form Submitted Successfully');
                    setTimeout(() => setSuccessMessage(''), 3000);
                }
            } else {
                console.error('Error submitting form:', res.statusText);
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const inputStyle = 'w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-1 focus:ring-primary bg-white text-sm';
    const errorStyle = 'text-red-500 text-xs mt-1';

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name Row */}
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <input
                        type="text"
                        placeholder="First Name*"
                        className={inputStyle}
                        {...register('firstName', {
                            required: 'This field is required',
                            maxLength: { value: 20, message: 'First Name must not exceed 20 characters' },
                            pattern: { value: regexPatterns.name, message: 'Invalid First Name provided' },
                            validate: VALIDATIONS.noLeadingOrTrailingSpaces,
                        })}
                    />
                    {errors.firstName && <p className={errorStyle}>{errors.firstName.message}</p>}
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Last Name"
                        className={inputStyle}
                        {...register('lastName', {
                            maxLength: { value: 20, message: 'Last Name must not exceed 20 characters' },
                            pattern: { value: regexPatterns.name, message: 'Invalid Last Name provided' },
                        })}
                    />
                    {errors.lastName && <p className={errorStyle}>{errors.lastName.message}</p>}
                </div>
            </div>

            {/* Email */}
            <div>
                <input
                    type="email"
                    placeholder="Email ID*"
                    className={inputStyle}
                    {...register('email', {
                        required: 'This field is required',
                        pattern: { value: regexPatterns.email, message: 'Invalid email address' },
                        validate: VALIDATIONS.noLeadingOrTrailingSpaces,
                    })}
                />
                {errors.email && <p className={errorStyle}>{errors.email.message}</p>}
            </div>

            {/* Program & Course */}
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <select
                        className={inputStyle}
                        {...register('program', {
                            required: 'Please select a program',
                            onChange: handleProgramChange,
                        })}
                    >
                        <option value="">Select Program*</option>
                        <option value={ProgramNames.SummerBootcamp}>Summer Bootcamp</option>
                        <option value={ProgramNames.AdvancedIndustrialTraining}>Advanced Industrial Training &amp; Internship</option>
                    </select>
                    {errors.program && <p className={errorStyle}>{errors.program.message}</p>}
                </div>

                <div>
                    <select
                        className={`${inputStyle} disabled:opacity-50 disabled:cursor-not-allowed`}
                        disabled={isCourseDisabled}
                        {...register('course', { required: 'Please select a course' })}
                    >
                        <option value="">Select Course*</option>
                        {courseOptions.map((course, i) => (
                            <option key={i} value={course}>
                                {course.replace(/\b\w/g, (c) => c.toUpperCase())}
                            </option>
                        ))}
                    </select>
                    {errors.course && <p className={errorStyle}>{errors.course.message}</p>}
                </div>
            </div>

            {/* Phone */}
            <div>
                <div className="flex gap-2">
                    <span className="rounded-xl border border-gray-200 px-4 py-3 text-sm bg-gray-50">+91</span>
                    <input
                        type="text"
                        placeholder="Enter Phone Number"
                        className={inputStyle}
                        {...register('phone', {
                            required: 'This field is required',
                            validate: (value) => {
                                const cleaned = value.replace(/\D/g, '');
                                if (cleaned.length !== 10) return 'Phone number must be 10 digits';
                                if (!regexPatterns.phoneValidationPattern.test(value)) return 'Phone number format must be XXXXX-XXXXX';
                                return true;
                            },
                        })}
                        onInput={(e) => {
                            const input = e.target as HTMLInputElement;
                            const value = input.value.replace(/\D/g, '').slice(0, 10);
                            input.value = value.replace(regexPatterns.phoneFormatPattern, '$1-$2');
                        }}
                    />
                </div>
                {errors.phone && <p className={errorStyle}>{errors.phone.message}</p>}
            </div>

            {/* Requirements */}
            <div>
                <textarea
                    placeholder="Share your requirements"
                    rows={4}
                    className={`${inputStyle} resize-none`}
                    {...register('requirements', {
                        maxLength: { value: 50, message: 'Maximum 50 characters allowed' },
                        validate: (value) => (value?.trim().length === 0 && value?.length > 0 ? 'Only spaces are not allowed' : true),
                    })}
                />
                {errors.requirements && <p className={errorStyle}>{errors.requirements.message}</p>}
            </div>

            {/* Terms */}
            <div>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        className="size-4 accent-primary"
                        {...register('terms', { required: 'You must agree to the terms and conditions' })}
                    />
                    <span className="text-sm">
                        I agree to the{' '}
                        <a href="/privacy-policy" className="text-primary underline">
                            Terms &amp; Conditions
                        </a>
                        *
                    </span>
                </label>
                {errors.terms && <p className={errorStyle}>{errors.terms.message}</p>}
            </div>

            {/* Submit */}
            <Button
                shape="default"
                variant="primary"
                type="submit"
                disabled={!isValid || loading}
                className="w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
                {loading ? 'Submitting...' : 'Submit'}
            </Button>

            {successMessage && (
                <p className="text-green-600 text-sm text-center font-medium">{successMessage}</p>
            )}
        </form>
    );
}
