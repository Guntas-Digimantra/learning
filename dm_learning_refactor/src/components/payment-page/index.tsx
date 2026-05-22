'use client';

import Link from '@/components/ui/link';
import { useForm } from 'react-hook-form';
import {
  advancedTrainingCourses,
  howDidYouHeardOptions,
  ProgramNames,
  regexPatterns,
  summerBootcampCourses,
  VALIDATIONS,
} from '../common/common';
import axios from 'axios';

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

const field =
  'w-full rounded-[30px] border border-[#ddd] bg-white px-[0.8rem] py-[0.8rem] text-base text-[#757575] outline-none focus:border-[#ff7800]';
const labelCls = 'mb-2 block text-[15px]';
const errCls = 'mt-1.5 block text-sm text-red-600';

export default function PaymentPage() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    clearErrors,
    formState: { errors },
    watch,
  } = useForm<PaymentForm>({ mode: 'onBlur' });

  const program = watch('program');

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    if (selected && program === ProgramNames.AdvancedIndustrialTraining) {
      setValue('paymentAmount', '17000');
    } else if (selected && program === ProgramNames.SummerBootcamp) {
      setValue('paymentAmount', '4000');
    } else {
      setValue('paymentAmount', '');
    }
    if (selected) clearErrors('course');
  };

  const handleProgramChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProgram = event?.target?.value;
    setValue('course', '');
    setValue('paymentAmount', '');
    if (selectedProgram === ProgramNames.SummerBootcamp) {
      setValue('courseOptions', summerBootcampCourses);
    } else if (selectedProgram === ProgramNames.AdvancedIndustrialTraining) {
      setValue('courseOptions', advancedTrainingCourses);
    } else {
      setValue('courseOptions', []);
    }
    clearErrors('course');
  };

  const onSubmit = async (data: PaymentForm) => {
    const apiEndpoint = 'http://localhost:3000/api/pay';
    const payload = { ...data };
    delete payload.courseOptions;
    try {
      const response = await axios.post(apiEndpoint, payload);
      if (response.status === 200) {
        alert('Payment successful!');
        reset();
      } else {
        alert('Payment failed. Please try again.');
      }
    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } } };
      alert(err.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <section className="py-[100px]">
      <div className="mx-auto max-w-[800px] px-[15px]">
        <h1>Payment</h1>
        <form className="flex flex-col pt-[18px]" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label className={labelCls}>Full Name*</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className={field}
              {...register('fullName', {
                required: 'Full name is required',
                validate: VALIDATIONS.noLeadingOrTrailingSpaces,
                pattern: { value: regexPatterns.name, message: 'Invalid First Name provided' },
              })}
            />
            {errors.fullName?.message && <span className={errCls}>{errors.fullName.message}</span>}
          </div>

          <div className="mb-6">
            <label className={labelCls}>Email ID*</label>
            <input
              type="email"
              placeholder="Email ID*"
              className={field}
              {...register('email', {
                required: 'This field is required',
                pattern: { value: regexPatterns.email, message: 'Invalid email address' },
                validate: VALIDATIONS.noLeadingOrTrailingSpaces,
              })}
            />
            {errors.email?.message && <span className={errCls}>{errors.email.message}</span>}
          </div>

          <div className="mb-6">
            <label className={labelCls}>Enter Phone Number*</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className={field}
              {...register('phone', {
                required: 'This field is required',
                validate: (value) => {
                  const cleanedValue = value?.replace(/\D/g, '');
                  if (cleanedValue.length !== 10) return 'Phone number must be 10 digits';
                  return true;
                },
              })}
              onInput={(e) => {
                const inputElement = e.target as HTMLInputElement;
                const value = inputElement?.value?.replace(regexPatterns.cleanedPhone, '')?.slice(0, 10);
                inputElement.value = value?.replace(/^(\d{5})(\d{0,5})$/, '$1-$2');
              }}
            />
            {errors.phone?.message && <span className={errCls}>{errors.phone.message}</span>}
          </div>

          <div className="mb-6">
            <label className={labelCls}>Institution Name*</label>
            <input
              type="text"
              placeholder="Enter Institute Name"
              className={field}
              {...register('institutionName', {
                required: 'This field is required',
                pattern: {
                  value: regexPatterns.instituyionName,
                  message: 'Invalid Institution Name provided',
                },
              })}
            />
            {errors.institutionName?.message && <span className={errCls}>{errors.institutionName.message}</span>}
          </div>

          <div className="mb-6">
            <label className={labelCls}>Course Preference*</label>
            <div className="flex gap-3 max-[575px]:flex-col max-[575px]:gap-[25px]">
              <div className="w-1/2 max-[575px]:w-full">
                <select
                  className={field}
                  {...register('program', { required: 'Please select a program', onChange: handleProgramChange })}
                >
                  <option value="">Select Program*</option>
                  <option value={ProgramNames.SummerBootcamp}>Summer Bootcamp</option>
                  <option value={ProgramNames.AdvancedIndustrialTraining}>
                    Advanced Industrial Training & Internship
                  </option>
                </select>
                {errors.program && <span className={errCls}>{errors.program.message}</span>}
              </div>
              <div className="w-1/2 max-[575px]:w-full">
                <select
                  className={field}
                  {...register('course', { required: program ? 'Please select a course' : false })}
                  disabled={!program}
                  onChange={handleCourseChange}
                >
                  <option value="">Select Course*</option>
                  {program === ProgramNames.SummerBootcamp &&
                    summerBootcampCourses.map((course, index) => (
                      <option key={index} value={course}>
                        {course?.replace(/\b\w/g, (char) => char?.toUpperCase())}
                      </option>
                    ))}
                  {program === ProgramNames.AdvancedIndustrialTraining &&
                    advancedTrainingCourses.map((course, index) => (
                      <option key={index} value={course}>
                        {course?.replace(/\b\w/g, (char) => char?.toUpperCase())}
                      </option>
                    ))}
                </select>
                {errors.course && <span className={errCls}>{errors.course.message}</span>}
              </div>
            </div>
            {watch('paymentAmount') && (
              <p className="mt-3 text-[#ff7800]">
                Rs {watch('paymentAmount')} /- inclusive of all taxes
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className={labelCls}>How did you hear about us?*</label>
            <select
              className={field}
              {...register('howDidYouHear', { required: 'Please select an option' })}
            >
              <option value="">Select how did you hear about us</option>
              {howDidYouHeardOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.howDidYouHear?.message && <span className={errCls}>{errors.howDidYouHear.message}</span>}
          </div>

          <div className="mb-6">
            <label className={labelCls}>Coupon Code</label>
            <input type="text" placeholder="Enter Coupon Code" className={field} {...register('couponCode')} />
          </div>

          <label className="mb-6 block">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 w-auto"
                {...register('terms', { required: 'You must agree to the terms and conditions' })}
              />
              <span className="mb-0">
                I agree to the{' '}
                <Link href="/terms-and-conditions" className="cursor-pointer text-[#ff7800]">
                  Terms & Conditions<span>*</span>
                </Link>
              </span>
            </div>
            {errors.terms?.message && <span className={errCls}>{errors.terms.message}</span>}
          </label>

          <button
            type="submit"
            className="inline-flex h-[54px] max-w-[173px] items-center justify-center rounded-[24px] bg-black px-8 py-4 text-base font-semibold text-white"
          >
            Make Payment
          </button>
        </form>
      </div>
    </section>
  );
}
