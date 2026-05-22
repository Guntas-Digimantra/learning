export const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    fill="#fff"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 298 511.93"
  >
    <path
      fillRule="nonzero"
      d="M70.77 499.85c-16.24 16.17-42.53 16.09-58.69-.15-16.17-16.25-16.09-42.54.15-58.7l185.5-185.03L12.23 70.93c-16.24-16.16-16.32-42.45-.15-58.7 16.16-16.24 42.45-16.32 58.69-.15l215.15 214.61c16.17 16.25 16.09 42.54-.15 58.7l-215 214.46z"
    />
  </svg>
);

export const regexPatterns = {
  name: /^[a-z.\s]+$/i,
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  phoneNumber: /^[0-9]{10}$/,
  instituyionName: /^(?=.*[a-zA-Z])[a-z0-9.\s]+$/i,
  cleanedPhone: /\D/g,
  phoneFormatPattern: /^(\d{5})(\d{0,5})$/,
  phoneValidationPattern: /^\d{5}-\d{5}$/,
  metaTitle: /^metaTitle\s*:\s*(.+)$/m,
  metaDescription: /^metaDescription\s*:\s*(.+)$/m,
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');
}

export const VALIDATIONS = {
  noLeadingOrTrailingSpaces: (value: string): string | true => {
    if (value.trim() !== value) {
      return 'Field must not contain leading or trailing spaces.';
    }
    return true;
  },
};

export const renderStars = (rating: number) => {
  return [...Array(5)].map((_, index) => (
    <svg
      key={index}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill={index < rating ? 'currentColor' : '#ccc'}
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  ));
};

export const summerBootcampCourses = [
  'Web Development',
  'Data Science/Analytics',
  'Cloud Computing',
  'Mobile App Development',
  'UI/UX Design',
];

export const advancedTrainingCourses = [
  'Full Stack Developer - MERN',
  'Web Development - Frontend (React/Next)',
  'Web Development - Backend (Node)',
  'PHP with Laravel/WordPress',
  'Mobile App Development - React Native',
  'Mobile App Development - Flutter',
  'Quality Assurance - Software Testing',
  'UI/UX Design',
];

export const microsoftCourses = [
  'AI Engineer',
  'Data Analyst',
  'Solutions Architect',
  'DevOps Engineer',
  'Data Engineer',
  'Information Protection Administrator',
  'Security Operations Analyst',
  'Data Scientist',
  'Security Engineer',
  'Developer-(beginner)',
  'Developer-(intermediate)',
  'Functional Consultant',
];

export const howDidYouHeardOptions = ['LinkedIn', 'Instagram', 'Website', 'YouTube', 'Friend', 'Other'];

export enum ProgramNames {
  SummerBootcamp = 'Summer Bootcamp',
  AdvancedIndustrialTraining = 'Advanced Industrial Training & Internship',
  MicrosoftCertifications = 'Microsoft Certifications',
}
