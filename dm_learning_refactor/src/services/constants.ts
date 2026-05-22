import { FooterSection } from '@/types/general.types';

export const HEADER_ROUTES = [
  { label: 'Home', url: '/v2/' },
  { label: 'About Us', url: '/v2/about-us' },
  {
    label: 'Courses',
    url: '/v2/courses',
  },
  {
    label: 'Our Programs',
    subLinks: [
      { label: 'Microsoft Certifications', url: '/v2/microsoft-certifications' },
      { label: 'Advanced Industrial Training & Internship', url: '/v2/advanced-industrial-training-and-internship' },
      { label: 'Summer Boot-camp', url: '/v2/summer-bootcamp-and-internship' },
    ],
  },
];

export const FOOTER_SECTIONS: Array<FooterSection> = [
  {
    title: 'About',
    links: [
      { label: 'About Us', url: '/contact' },
      { label: 'Careers' },
      { label: 'Contact Us' },
      { label: 'Blog', url: '/blog' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Learners' },
      { label: 'Partners' },
      { label: 'Beta Testers' },
      { label: 'Blog', url: '/blog' },
      { label: 'Tech Blog' },
    ],
  },
  {
    title: 'Company',
    links: [{ label: 'Contact Us' }, { label: 'Careers' }, { label: 'Blog', url: '/blog' }, { label: 'Events' }],
  },
];

export const HOMEPAGE_PROGRAMS_DATA = {
  ADVANCED_INDUSTRIAL_TRAINING: {
    content: `Join a 6-month advanced training and internship program designed to help you gain real-world experience, build practical skills, and learn directly from industry experts in your chosen field. It's the perfect way to prepare for your future career.`,
    image: '/summer-vs-advanced.png',
    btnLink: '/advanced-industrial-training-and-internship',
    startEnd: 'July 2025-Dec 2025',
    pace: '270 hrs',
    deadline: 'June 2025',
  },
  SUMMER_BOOTCAMP: {
    content:
      'Supercharge your skills in just 45 days with our immersive Summer Bootcamp. Designed for fast and focused learning, this program combines hands-on projects, expert guidance, and real-world experience to help you grow quickly and confidently in your field.',
    image: '/summer-vs-advanced.png',
    btnLink: '/summer-bootcamp-and-internship',
    startEnd: 'June 2025-July 2025',
    pace: '120 hrs',
    deadline: 'June 2025',
  },
};
