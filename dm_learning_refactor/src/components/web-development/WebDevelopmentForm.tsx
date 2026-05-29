'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from '@/components/ui/link';
import { regexPatterns, VALIDATIONS } from '../common/common';
import axios from 'axios';

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
    <section className="form-section">
      <div className="dml-container">
        <div className="form-wrapper">
          <div className="form-img-wrapper">
            <Image src="/learn-web-development.png" alt="form-img" width={800} height={450} />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} method="post" className="contact-form">
            <h2>Learn Web Development & Build Amazing Projects!</h2>
            <div className="name-email-wrapper">
              <div className="name-container">
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="form-fields"
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
                  {errors.firstName && <div className="error">{errors.firstName.message}</div>}
                </div>
              </div>
              <div className="name-container">
                <div className="w-100">
                  <input
                    type="email"
                    className="form-fields"
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
                  {errors.email && <div className="error">{errors.email.message}</div>}
                </div>
              </div>
            </div>

            <div className="phone-input-container">
              <div className="phone-number-field">
                <span className="form-fields">+91</span>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="form-fields"
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
              {errors.phone && <div className="error">{errors.phone.message}</div>}
            </div>

            <label className="terms-conditions">
              <input
                type="checkbox"
                {...register('terms', {
                  required: 'You must agree to the terms and conditions',
                })}
              />
              <span className="terms-content">
                Agree with{' '}
                <Link href="/terms-and-conditions">Terms and Conditions</Link>
              </span>
            </label>
            {errors.terms && <div className="error">{errors.terms.message}</div>}
            <button className="dml-button" type="submit" disabled={loading}>
              {loading ? 'Submiting...' : ' Start Learning'}
            </button>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};
export default WebDevelopmentForm;
