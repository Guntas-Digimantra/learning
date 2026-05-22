import { StaticImageData } from 'next/image';

import course_dml_1 from '../../../public/course-dml-1.png';
import course_dml_2 from '../../../public/course-dml-2.png';
import course_dml_3 from '../../../public/course-dml-3.png';
import course_dml_4 from '../../../public/course-dml-5.png';
import course_dml_5 from '../../../public/course-dml-6.png';
import course_dml_7 from '../../../public/course-dml-7.png';
import course_dml_8 from '../../../public/course-dml-8.png';
import course_dml_9 from '../../../public/course-dml-9.png';
import course_dml_10 from '../../../public/course-dml-10.png';
import course_dml_11 from '../../../public/course-dml-11.png';

export const OPPORTUNITIES_DATA = [
  {
    image: '/projects.svg',
    title: 'Real-World Projects',
    description: 'Secure your spot in our program and begin your learning journey.',
  },
  {
    image: '/certificate.svg',
    title: 'Recognized Certificates',
    description: 'Secure your spot in our program and begin your learning journey.',
  },
  {
    image: '/jobs.svg',
    title: 'Job-Ready Skills',
    description: 'Secure your spot in our program and begin your learning journey.',
  },
  {
    image: '/certificate.svg',
    title: 'AI Tools Access',
    description: 'Get hands-on experience with the latest AI tools powering the tech future.',
  },
  {
    image: '/certificate.svg',
    title: 'Career Launch Support',
    description: 'Practice real-world tests & interviews with expert guidance to boost confidence.',
  },
  {
    image: '/certificate.svg',
    title: 'Soft Skills Training',
    description: 'Master communication, leadership, and teamwork skills that employers value.',
  },
  {
    image: '/certificate.svg',
    title: '1:1 Mentorship',
    description: 'Learn directly from industry experts who guide you at every step of your journey',
  },
  {
    image: '/certificate.svg',
    title: '120+ Hours Learning',
    description: 'Structured, in-depth, hands-on sessions designed to make you job-ready.',
  },
  {
    image: '/certificate.svg',
    title: 'Live Expert Classes',
    description: 'Attend Interactive classes with industry leaders sharing practical insights.',
  },
];

export type OpportunityItem = (typeof OPPORTUNITIES_DATA)[number];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    title: 'Good Job',
    avatar_name: 'Rahul Verma',
    role: 'Python with AI',
    avatar_img: '/avatar-home-2.png',
    desc: 'The Python with AI course was amazing! The examples were practical, and the videos were easy to follow. I made my first AI project, and it felt great!',
    rating: 4.2,
  },
  {
    id: 2,
    title: 'Amazing Opportunity',
    avatar_name: 'Aarti Sharma',
    role: 'Data Science with AI',
    avatar_img: '/avatar-home-3.png',
    desc: "I always wanted to learn data science but didn't know where to start. This course explained everything in a simple way. Now I feel confident working with data and AI tools.",
    rating: 5,
  },
  {
    id: 3,
    title: 'Great Work',
    avatar_name: 'Priya Singh',
    role: 'UX/UI Design',
    avatar_img: '/avatar-home-1.png',
    desc: 'I had no design background, but this course made UX/UI very easy to understand. Now I can design user-friendly apps and websites on my own.',
    rating: 5,
  },
  {
    id: 4,
    title: 'Best Upskilling Platform',
    avatar_name: 'Saurabh Mishra',
    role: 'Frontend Development',
    avatar_img: '/avatar-home-4.png',
    desc: "I learned HTML, CSS, JavaScript step by step. The course was so well-structured that I never felt lost. Now I'm doing freelance web design!",
    rating: 4.5,
  },
  {
    id: 5,
    title: 'Great Platform',
    avatar_name: 'Manish Yadav',
    role: 'Full Stack Developer (Frontend + Backend)',
    avatar_img: '/avatar-home-5.png',
    desc: 'Learning both frontend and backend sounded tough, but the way they taught here was smooth. Now I can build complete websites by myself!',
    rating: 4.5,
  },
  {
    id: 6,
    title: 'Leading Learning Platform',
    avatar_name: 'Kavita Joshi',
    role: 'Backend Development',
    avatar_img: '/avatar-home-6.png',
    desc: 'The backend course explained all the core concepts like databases and APIs clearly. I even made my own login system!',
    rating: 4.5,
  },
];

export type TestimonialItem = (typeof TESTIMONIALS_DATA)[number] & { title?: string };

export interface CourseCardData {
  id: number;
  image: string;
  thumb: StaticImageData;
  tag: string;
  review: string;
  title: string;
  author?: string;
  price: number;
  rating?: number;
  lesson?: string;
  minute?: string;
  date?: string;
  description?: string;
  color?:string;
  border_color?: string;
  footer_bg_color?: string;
}

export const COURSE_DATA: Array<CourseCardData> = [
  {
    id: 1,
    thumb: course_dml_1,
    image: '/full-stack2.png',
    tag: 'Fullstack',
    review: '(4.9)',
    title: 'Full Stack Developer - MERN',
    author: 'David Millar',
    price: 17000,
    rating: 5,
    date: 'Jun 17 - Aug 31 2023',
    description: 'Learn MongoDB, Express, React, and Node to build complete web applications.',
    border_color: 'radial-gradient(536.57% 191.9% at 0% -0.03%, #B02C09 0%, #DB640A 43.47%, #FA8D0B 100%)',
    footer_bg_color: 'linear-gradient(120.24deg, #FDEFE5 -0.02%, #FFFFFF 100.01%)',
  },
  {
    id: 2,
    thumb: course_dml_2,
    image: '/frontend2.png',
    tag: 'frontend',
    review: '(4.1)',
    title: 'Web Development - Frontend (React/Next.js)',
    author: 'David Millar',
    price: 17000,
    rating: 4,
    date: 'Jun 17 - Aug 31 2023',
    description: 'Learn React and Next.js to build fast, modern, and responsive frontend web applications.',
    border_color: 'radial-gradient(536.57% 191.9% at 0% -0.03%, #000C5C 0%, #0750AD 43.47%, #68B0EA 100%)',
    footer_bg_color: 'linear-gradient(120.24deg, #E3EDF4 -0.02%, #FFFFFF 100.01%)',
  },
  {
    id: 3,
    thumb: course_dml_3,
    image: '/backend-node2.png',
    tag: 'backend',
    review: '(4.8)',
    title: 'Web Development - Backend (Node.js)',
    author: 'David Millar',
    price: 17000,
    rating: 5,
    date: 'Jun 17 - Aug 31 2023',
    description: 'Learn Node.js to build scalable APIs, manage databases, and create dynamic backend applications.',
    border_color: 'radial-gradient(536.57% 191.9% at 0% -0.03%, #1E3E02 0%, #638B0B 43.47%, #C2E138 100%)',
    footer_bg_color: 'linear-gradient(120.24deg, #F1F5E4 -0.02%, #FFFFFF 100.01%)',
  },
  {
    id: 4,
    thumb: course_dml_4,
    image: '/php-wp2.png',
    tag: 'fullstack',
    review: '(4.0)',
    title: 'PHP with Laravel/WordPress',
    author: 'David Millar',
    price: 17000,
    rating: 4,
    date: 'Jun 17 - Aug 31 2023',
    description: 'Learn PHP, Laravel, and WordPress to build dynamic websites and powerful backend solutions.',
    border_color: 'radial-gradient(536.57% 191.9% at 0% -0.03%, #2D0878 0%, #5318AA 43.47%, #B93FFF 100%)',
    footer_bg_color: 'linear-gradient(120.24deg, #E0E3E9 -0.02%, #FFFFFF 100.01%)',
  },
  {
    id: 5,
    thumb: course_dml_5,
    image: '/react-native.png',
    tag: 'mobile',
    review: '(4.4)',
    title: 'Mobile App Development - React Native',
    author: 'David Millar',
    price: 17000,
    rating: 5,
    date: 'Jun 17 - Aug 31 2023',
    description: 'Create cross-platform apps using React Native. Learn UI design, navigation, APIs, and deployment.',
    border_color: 'radial-gradient(536.57% 191.9% at 0% -0.03%, #08467C 0%, #07A9CD 43.47%, #15CADA 100%)',
    footer_bg_color: 'linear-gradient(120.24deg, #EAFCFF -0.02%, #FFFFFF 100.01%)',
  },
  {
    id: 6,
    thumb: course_dml_3,
    image: '/flutter.png',
    tag: 'mobile',
    review: '(4.5)',
    title: 'Mobile App Development - Flutter',
    author: 'David Millar',
    price: 17000,
    rating: 4,
    date: 'Jun 17 - Aug 31 2023',
    description: 'Build beautiful mobile apps with Flutter. Master widgets, layouts, animations, and state management.',
    border_color: 'radial-gradient(536.57% 191.9% at 0% -0.03%, #032164 0%, #077CCB 43.47%, #00C7EE 100%)',
    footer_bg_color: 'linear-gradient(120.24deg, #EAF6FD -0.02%, #FFFFFF 100.01%)',
  },
  {
    id: 7,
    thumb: course_dml_7,
    image: '/qa-testing.png',
    tag: 'testing',
    review: '(4.5)',
    title: 'Quality Assurance - Software Testing',
    author: 'David Millar',
    price: 17000,
    rating: 5,
    date: 'Jun 17 - Aug 31 2023',
    description: 'Learn manual and automation testing. Write test cases, find bugs, and ensure software quality.',
    border_color: 'radial-gradient(536.57% 191.9% at 0% -0.03%, #2D0878 0%, #5318AA 43.47%, #B93FFF 100%)',
    footer_bg_color: 'linear-gradient(120.24deg, #F1E8FF -0.02%, #FFFFFF 100.01%)',
  },
  {
    id: 8,
    thumb: course_dml_8,
    image: '/ui-ux.png',
    tag: 'design',
    review: '(4.5)',
    title: 'User Interface & Experience Design',
    author: 'David Millar',
    price: 17000,
    rating: 5,
    date: 'Jun 17 - Aug 31 2023',
    description: 'Design intuitive interfaces. Learn wireframing, prototyping, usability, and popular design tools.',
    border_color: 'radial-gradient(536.57% 191.9% at 0% -0.03%, #AB192D 0%, #E43D2D 43.47%, #FF634D 100%)',
    footer_bg_color: 'linear-gradient(120.24deg, #FAE4E2 -0.02%, #FFFFFF 100.01%)',
  },
  {
    id: 9,
    thumb: course_dml_9,
    image: '/ai-python.png',
    tag: 'ai',
    review: '(4.5)',
    title: 'AI & Machine Learning Fundamentals with Python',
    author: 'David Millar',
    price: 17000,
    rating: 4,
    date: 'Jun 17 - Aug 31 2023',
    description: 'Explore AI concepts using Python. Work with neural networks, machine learning, and smart systems.',
    border_color: 'radial-gradient(536.57% 191.9% at 0% -0.03%, #001A56 0%, #0D5198 43.47%, #43A5DE 100%)',
    footer_bg_color: 'linear-gradient(120.24deg, #F2F7FD -0.02%, #FFFFFF 100.01%)',
  },
  {
    id: 10,
    thumb: course_dml_10,
    image: '/data-sci.png',
    tag: 'ai',
    review: '(4.5)',
    title: 'Data Science with Python',
    author: 'David Millar',
    price: 17000,
    rating: 5,
    date: 'Jun 17 - Aug 31 2023',
    description: 'Analyze and visualize data using Python. Learn Pandas, NumPy, and machine learning basics.',
    border_color: 'radial-gradient(536.57% 191.9% at 0% -0.03%, #9F2600 0%, #F88F00 43.47%, #FBBF0D 100%)',
    footer_bg_color: 'linear-gradient(120.24deg, #FFEBDE -0.02%, #FFFFFF 100.01%)',
  },
  {
    id: 11,
    thumb: course_dml_11,
    image: '/devops-course.png',
    tag: 'networking',
    review: '(4.5)',
    title: 'DevOps with Cloud Computing',
    author: 'David Millar',
    price: 17000,
    rating: 5,
    date: 'Jun 17 - Aug 31 2023',
    description: 'Automate deployments with DevOps tools. Learn Docker, CI/CD, and cloud services like AWS.',
    border_color: 'radial-gradient(536.57% 191.9% at 0% -0.03%, #052423 0%, #00874B 43.47%, #2EAD56 100%)',
    footer_bg_color: 'linear-gradient(120.24deg, #E5FDF3 -0.02%, #FFFFFF 100.01%)',
  },
];
