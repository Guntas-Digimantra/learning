import { advancedTrainingCourses, summerBootcampCourses } from '@/components/common/common';
import { NextRequest, NextResponse } from 'next/server';
import {
  validateRequiredFields,
  validateEmptyFields,
  validatePaymentAmount,
  validateEmail,
  validatePhone,
  validateHowDidYouHear,
  validateProgramAndCourse,
} from '../../../components/common/validator';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { fullName, email, course, howDidYouHear, institutionName, paymentAmount, phone, program, terms } = body;

    const requiredFieldsError = validateRequiredFields(body);
    if (requiredFieldsError) {
      return NextResponse.json({ error: requiredFieldsError }, { status: 400 });
    }

    const emptyFieldsError = validateEmptyFields(body);
    if (emptyFieldsError) {
      return NextResponse.json({ error: emptyFieldsError }, { status: 400 });
    }

    const paymentAmountError = validatePaymentAmount(paymentAmount);
    if (paymentAmountError) {
      return NextResponse.json({ error: paymentAmountError }, { status: 400 });
    }

    const emailError = validateEmail(email);
    if (emailError) {
      return NextResponse.json({ error: emailError }, { status: 400 });
    }

    const phoneError = validatePhone(phone);
    if (phoneError) {
      return NextResponse.json({ error: phoneError }, { status: 400 });
    }

    const howDidYouHearError = validateHowDidYouHear(howDidYouHear);
    if (howDidYouHearError) {
      return NextResponse.json({ error: howDidYouHearError }, { status: 400 });
    }

    const programAndCourseError = validateProgramAndCourse(
      program,
      course,
      summerBootcampCourses,
      advancedTrainingCourses
    );
    if (programAndCourseError) {
      return NextResponse.json({ error: programAndCourseError }, { status: 400 });
    }

    const [firstName, ...lastNameParts] = fullName.split(' ');
    const lastName = lastNameParts.join(' ');

    return NextResponse.json({
      message: `Payment received for ${firstName} ${lastName} Amount: Rs ${paymentAmount} /- inclusive of all taxes Course: ${course} How did you hear: ${howDidYouHear} Institution Name: ${institutionName} Phone: ${phone} Program: ${program} Terms: ${terms}`,
      success: true,
      data: {
        firstName,
        lastName,
        email,
        paymentAmount,
        course,
        howDidYouHear,
        institutionName,
        phone,
        program,
        terms,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
