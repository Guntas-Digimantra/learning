'use client';

import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  phone: string;
  requirements: string;
  terms: boolean;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const inputStyle = 'w-full rounded-xl border px-4 py-3 outline-none focus:ring-1 focus:ring-primary';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Row 1 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <input
            placeholder="First Name*"
            {...register('firstName', { required: 'This field is required' })}
            className={inputStyle}
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
        </div>

        <input placeholder="Last Name" {...register('lastName')} className={inputStyle} />
      </div>

      {/* Row 2 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <input
            placeholder="Email ID*"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email',
              },
            })}
            className={inputStyle}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <input
            placeholder="Institution Name*"
            {...register('institution', {
              required: 'Institution name is required',
            })}
            className={inputStyle}
          />
          {errors.institution && <p className="text-red-500 text-sm mt-1">{errors.institution.message}</p>}
        </div>
      </div>

      {/* Phone */}
      <div>
        <div className="flex gap-2">
          <span className="rounded-xl border px-4 py-3">+91</span>

          <input
            placeholder="Enter Phone Number"
            {...register('phone', {
              required: 'Phone required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Enter valid 10 digit number',
              },
            })}
            className={inputStyle}
          />
        </div>

        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      {/* Textarea */}
      <textarea
        placeholder="Share your requirements"
        rows={4}
        {...register('requirements')}
        className={`${inputStyle} resize-none`}
      />

      {/* Terms */}
      <div>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="size-4 accent-primary"
            {...register('terms', { required: 'You must agree to continue' })}
          />
          <span>
            I agree to the{' '}
            <a href="#" className="text-primary underline">
              Terms & Conditions
            </a>
            *
          </span>
        </label>

        {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>}
      </div>

      {/* Submit */}
      <Button
        shape="default"
        variant="primary"
        type="submit"
        disabled={!isValid}
        className="disabled:opacity-50 disabled:cursor-not-allowed w-full disabled:hover:scale-100"
      >
        Submit
      </Button>
    </form>
  );
}
