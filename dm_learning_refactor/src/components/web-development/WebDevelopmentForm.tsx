'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from '@/components/ui/link';
import { regexPatterns, VALIDATIONS } from '../common/common';
import axios from 'axios';

const DML_BUTTON_CLASS =
  'inline-flex h-[54px] max-w-[173px] cursor-pointer items-center justify-center rounded-[24px] border-0 bg-black px-8 py-4 font-sans text-base font-semibold text-white transition-[linear_0.3s] hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-60';

const FORM_FIELD_CLASS =
  'h-[52px] w-full rounded-[10px] border-[1.23px] border-[#0632321a] bg-white px-3 py-3.5 font-["Poppins",sans-serif] text-base font-normal leading-[21.6px] text-[#565656] outline-none';

const WebDevelopmentForm = () => {
  type FormValues = {
    firstName: string;
    email: string;
    phone: string;
    terms: boolean;
  };

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onBlur',
  });

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    const payload = {
      name: data?.firstName,
      email: data?.email,
      phone: data?.phone,
    };

    const finalData = {
      mailOptions: {
        subject: 'Contact Form',
        text: payload,
        emailTo: data?.email,
      },
    };

    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/store-contact-form`;
      const res = await axios.post(apiUrl, finalData);
      if (res.status === 200) {
        axios
          .post('/api/', finalData)
          .then((response) => {
            if (response?.status === 200) {
              setLoading(false);
              reset({
                firstName: '',
                email: '',
                phone: '',
                terms: false,
              });
              setSuccessMessage('Form Submitted Successfully');
              setTimeout(() => {
                setSuccessMessage('');
              }, 3000);
            }
          })
          .catch((error) => {
            console.error('Second API Error:', error?.response?.data || error.message);
          });
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <section className="py-[100px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex flex-row justify-between max-lg:flex-col">
          <div className="max-lg:text-center">
            <Image src="/learn-web-development.png" alt="form-img" width={800} height={450} />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="post"
            className="mt-6 flex w-full max-w-[40%] flex-col gap-5 rounded-xl p-[50px] shadow-[0px_4px_10px_#2155ba14] max-lg:max-w-full"
          >
            <h2 className="text-[28px] text-[#063232]">Learn Web Development & Build Amazing Projects!</h2>
            <div className="flex gap-5">
              <div className="w-full">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className={FORM_FIELD_CLASS}
                    {...register('firstName', {
                      required: 'This field is required',
                      maxLength: {
                        value: 20,
                        message: 'First Name must not exceed 20 characters',
                      },
                      pattern: {
                        value: regexPatterns.name,
                        message: 'Invalid First Name provided.',
                      },
                      validate: VALIDATIONS.noLeadingOrTrailingSpaces,
                    })}
                  />
                  {errors.firstName && <div className="pt-[3px] text-red-600">{errors.firstName.message}</div>}
                </div>
              </div>
              <div className="w-full">
                <div className="w-full">
                  <input
                    type="email"
                    className={FORM_FIELD_CLASS}
                    placeholder="Your Email*"
                    {...register('email', {
                      required: 'This field is required',
                      pattern: {
                        value: regexPatterns.email,
                        message: 'Invalid email address',
                      },
                      validate: VALIDATIONS.noLeadingOrTrailingSpaces,
                    })}
                  />
                  {errors.email && <div className="pt-[3px] text-red-600">{errors.email.message}</div>}
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-2.5">
                <span className={`${FORM_FIELD_CLASS} w-[15%] shrink-0`}>+91</span>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className={FORM_FIELD_CLASS}
                  {...register('phone', {
                    required: 'This field is required',
                    validate: (value) => {
                      const cleanedValue = value?.replace(/\D/g, '');
                      if (cleanedValue.length !== 10) {
                        return 'Phone number must be 10 digits';
                      }
                      return true;
                    },
                  })}
                  onInput={(e: React.FormEvent<HTMLInputElement>) => {
                    const input = e.currentTarget;
                    const value = input.value.replace(regexPatterns.cleanedPhone, '').slice(0, 10);
                    input.value = value.replace(/^(\d{5})(\d{0,5})$/, '$1-$2');
                  }}
                />
              </div>
              {errors.phone && <div className="pt-[3px] text-red-600">{errors.phone.message}</div>}
            </div>

            <label className="flex gap-3 font-['Poppins',sans-serif] text-[#6b7a7a]">
              <input
                type="checkbox"
                className="font-['Poppins',sans-serif]"
                {...register('terms', {
                  required: 'You must agree to the terms and conditions',
                })}
              />
              <span>
                Agree with{' '}
                <Link href="/terms-and-conditions" className="underline">
                  Terms and Conditions
                </Link>
              </span>
            </label>
            {errors.terms && <div className="pt-[3px] text-red-600">{errors.terms.message}</div>}
            <button className={DML_BUTTON_CLASS} type="submit" disabled={loading}>
              {loading ? 'Submiting...' : ' Start Learning'}
            </button>
            {successMessage && <p className="text-green-600">{successMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};
export default WebDevelopmentForm;
