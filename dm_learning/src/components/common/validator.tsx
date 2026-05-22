import { howDidYouHeardOptions, regexPatterns } from "./common";

export const validateRequiredFields = (body: any) => {
  const {
    fullName,
    email,
    course,
    howDidYouHear,
    institutionName,
    paymentAmount,
    phone,
    program,
    terms,
  } = body;

  if (
    !fullName ||
    !email ||
    !paymentAmount ||
    !course ||
    !howDidYouHear ||
    !institutionName ||
    !phone ||
    !program ||
    !terms
  ) {
    return "Full name, email, payment amount, course, how did you hear, institution name, phone, program, terms are required.";
  }

  return null;
};

export const validateEmptyFields = (body: any) => {
  const {
    fullName,
    program,
    course,
    paymentAmount,
    howDidYouHear,
    institutionName,
  } = body;

  if (
    fullName.trim() === "" ||
    program.trim() === "" ||
    course.trim() === "" ||
    paymentAmount.trim() === "" ||
    howDidYouHear.trim() === "" ||
    institutionName.trim() === ""
  ) {
    return "This field cannot be empty.";
  }

  return null;
};

export const validatePaymentAmount = (paymentAmount: string) => {
  if (!/^\d+$/.test(paymentAmount)) {
    return "Invalid payment amount. Amount must contain only numbers.";
  }
  const numericAmount = parseInt(paymentAmount);

  if (numericAmount < 1) {
    return "Invalid payment amount. Amount must be a positive number.";
  }

  return null;
};

export const validateEmail = (email: string) => {
  if (!regexPatterns.email.test(email)) {
    return "Invalid email address.";
  }

  return null;
};

export const validatePhone = (phone: string) => {
  const cleanedPhone = phone.replace(/-/g, '');

  if (!regexPatterns.phoneNumber.test(cleanedPhone)) {
    return "Invalid phone number. It should be a 10-digit number.";
  }
  return null;
};


export const validateHowDidYouHear = (howDidYouHear: string) => {
  if (!howDidYouHeardOptions.includes(howDidYouHear)) {
    return `Invalid option for how did you hear. Please select a valid option from: ${howDidYouHeardOptions.join(", ")}.`;
  }

  return null;
};

export const validateProgramAndCourse = (
  program: string,
  course: string,
  summerBootcampCourses: string[],
  advancedTrainingCourses: string[]
) => {
  const validPrograms = [
    "Summer Bootcamp",
    "Advanced Industrial Training & Internship",
  ];

  if (!validPrograms.includes(program)) {
    return `Invalid program. Please select a valid program from: ${validPrograms.join(", ")}.`;
  }

  const validCourses =
    program === "Summer Bootcamp"
      ? summerBootcampCourses
      : program === "Advanced Industrial Training & Internship"
      ? advancedTrainingCourses
      : [];

  if (!validCourses.includes(course)) {
    return `Invalid course for selected program. Please choose a valid course.`;
  }

  return null;
};
