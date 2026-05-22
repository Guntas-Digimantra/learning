import { StaticImageData } from "next/image";

import course_dml_1 from "../../../../public/coursedml1.webp"
import course_dml_2 from "../../../../public/coursedml2.webp"
import course_dml_3 from "../../../../public/coursedml3.webp"
import course_dml_4 from "../../../../public/coursedml4.webp"
import course_dml_5 from "../../../../public/coursedml5.webp"
import course_dml_6 from "../../../../public/coursedml6.webp"
import course_dml_7 from "../../../../public/coursedml7.webp"
import course_dml_8 from "../../../../public/coursedml8.webp"
import course_dml_9 from "../../../../public/coursedml9.webp"
import course_dml_10 from "../../../../public/coursedml10.webp"
import course_dml_11 from "../../../../public/coursedml11.webp"
import course_dml_12 from '/public/coursedml12.png';
import course_dml_13 from '/public/coursedml13.png';
import course_dml_14 from '/public/coursedml14.png';
import course_dml_15 from '/public/coursedml15.png';
import course_dml_16 from '/public/coursedml16.png';
import course_dml_17 from '/public/coursedml17.png';
import course_dml_18 from '/public/coursedml18.png';
import course_dml_21 from '/public/coursedml21.png';
import course_dml_22 from '/public/coursedml22.png';

interface DataType {
  id: number;
  page: string;
  course_details: {
    id: number;
    thumb1: StaticImageData;
    thumb2?: StaticImageData;
    tag: string[];
    review: string;
    title: string;
    heading?: string;
    author?: string;
    price: number;
    lesson?: string;
    minute?: string;
    description?: string;
    color?: string;
    border_color: string;
    footer_bg_color: string;
    bgImage: string;
    marginLeft?: string;
    url: string;
  }[];
}
[];

const course_data: DataType[] = [
  {
    id: 1,
    page: 'home_1',
    course_details: [
      {
        id: 19,
        thumb1: course_dml_14,
        tag: ['BEST SELLER'],
        review: '(4.1 Reviews)',
        title: 'Digital Marketing for Beginners',
        heading: 'Digital Marketing for Beginners',
        description:
          'Become AI-Powered Digital Marketing Pro in 6 months. Learn from an Industry expert and build real-world skills that companies actually hire for.',
        color: '#FFFFFF',
        author: 'David Millar',
        price: 12,
        border_color:
          'radial-gradient(536.57% 191.9% at 0% -0.03%, #1E3E02 0%, #638B0B 43.47%, #C2E138 100%)',
        footer_bg_color:
          'linear-gradient(120.24deg, #F1F5E4 -0.02%, #FFFFFF 100.01%)',
        bgImage: '/courses-background/ai-marketing.png',
        url: '/amit-tiwari/digital-marketing-professional',
      },
      {
        id: 20,
        thumb1: course_dml_13,
        tag: ['BEST SELLER'],
        review: '(4.1 Reviews)',
        title: 'Digital Marketing for Professionals',
        heading: 'Digital Marketing for Professionals',
        description:
          'Accelerate your career growth with industry-relevant digital marketing skills. Our weekend live classes are specially designed for working professionals looking to upskill without disrupting their job.',
        color: '#FFFFFF',
        author: 'David Millar',
        price: 12,
        border_color:
          'radial-gradient(536.57% 191.9% at 0% -0.03%, #000C5C 0%, #0750AD 43.47%, #68B0EA 100%)',
        footer_bg_color:
          'linear-gradient(120.24deg, #E3EDF4 -0.02%, #FFFFFF 100.01%)',
        bgImage: '/courses-background/ai-business-leader.png',
        url: '/amit-tiwari/digital-marketing-professional',
      },
      {
        id: 12,
        thumb1: course_dml_12,
        tag: ['Best Seller'],
        review: '(4.8 Reviews)',
        title: 'Prompt Engineering for Gen AI ',
        heading: 'Prompt Engineering for Gen AI',
        description:
          'Master smarter prompting techniques to unlock the full power of AI and save hours of work.',
        color: '#FFFFFF',
        author: 'David Millar',
        price: 12,
        border_color:
          'radial-gradient(536.57% 191.9% at 0% -0.03%, #B02C09 0%, #DB640A 43.47%, #FA8D0B 100%) border-box',
        footer_bg_color:
          'linear-gradient(120.24deg, #FDEFE5 -0.02%, #FFFFFF 100.01%)',
        bgImage: '/courses-background/mern.png',
        url: '/courses/prompt-engineering-for-generative-ai-6-week',
      },
      {
        id: 13,
        thumb1: course_dml_13,
        tag: ['Best Seller'],
        review: '(4.8 Reviews)',
        title: 'Artificial Intelligence for Business Leaders ',
        heading: 'Artificial Intelligence for Business Leaders ',
        description:
          'Learn to lead AI adoption, spot opportunities, and build a future-ready organisation.',
        color: '#FFFFFF',
        author: 'David Millar',
        price: 12,
        border_color:
          'radial-gradient(536.57% 191.9% at 0% -0.03%, #000C5C 0%, #0750AD 43.47%, #68B0EA 100%)',
        footer_bg_color:
          'linear-gradient(120.24deg, #E3EDF4 -0.02%, #FFFFFF 100.01%)',
        bgImage: '/courses-background/ai-business-leader.png',
        url: '/courses/artificial-intelligence-for-business-leaders-6-week',
      },
      {
        id: 14,
        thumb1: course_dml_14,
        tag: ['Best Seller'],
        review: '(4.8 Reviews)',
        title: 'AI for Marketing & Customer Experience ',
        heading: 'AI for Marketing & Customer Experience ',
        description:
          'Harness AI to personalise campaigns, boost engagement, and transform customer interactions.',
        color: '#FFFFFF',
        author: 'David Millar',
        price: 12,
        border_color:
          'radial-gradient(536.57% 191.9% at 0% -0.03%, #1E3E02 0%, #638B0B 43.47%, #C2E138 100%)',
        footer_bg_color:
          'linear-gradient(120.24deg, #F1F5E4 -0.02%, #FFFFFF 100.01%)',
        bgImage: '/courses-background/ai-marketing.png',
        url: '/courses/ai-for-marketing-customer-experience-6-week',
      },
      {
        id: 15,
        thumb1: course_dml_15,
        tag: ['Best Seller'],
        review: '(4.8 Reviews)',
        title: 'Generative & Agentic AI ',
        heading: 'Generative & Agentic AI',
        description:
          'Build intelligent systems that generate content, make decisions, and execute complex tasks.',
        color: '#FFFFFF',
        author: 'David Millar',
        price: 12,
        border_color:
          'radial-gradient(536.57% 191.9% at 0% -0.03%, #B02C09 0%, #DB640A 43.47%, #FA8D0B 100%) border-box',
        footer_bg_color:
          'linear-gradient(120.24deg, #FDEFE5 -0.02%, #FFFFFF 100.01%)',
        bgImage: '/courses-background/genrative-agentic-ai.png',
        url: '/courses/generative-agentic-ai-6-week',
      },
      {
        id: 16,
        thumb1: course_dml_16,
        tag: ['Best Seller'],
        review: '(4.8 Reviews)',
        title: 'Gen AI with Data Science for Beginners',
        heading: 'Gen AI with Data Science for Beginners',
        description:
          'Master the foundations of data science and generative AI step-by-step through real projects.',
        color: '#FFFFFF',
        author: 'David Millar',
        price: 12,
        border_color:
          'radial-gradient(536.57% 191.9% at 0% -0.03%, #032164 0%, #077CCB 43.47%, #00C7EE 100%)',
        footer_bg_color:
          'linear-gradient(120.24deg, #EAF6FD -0.02%, #FFFFFF 100.01%)',
        bgImage: '/courses-background/gen-ai-data-science.png',
        url: '/courses/gen-ai-with-data-science-for-beginners-6-week',
      },
      {
        id: 17,
        thumb1: course_dml_17,
        tag: ['Best Seller'],
        review: '(4.8 Reviews)',
        title: 'Build Your Own Agentic AI Assistants',
        heading: 'Build Your Own Agentic AI Assistants',
        description:
          'Design, build, and deploy intelligent AI assistants that think, act, and deliver results for you.',
        color: '#FFFFFF',
        author: 'David Millar',
        price: 12,
        border_color:
          'radial-gradient(536.57% 191.9% at 0% -0.03%, #2D0878 0%, #5318AA 43.47%, #B93FFF 100%)',
        footer_bg_color:
          'linear-gradient(120.24deg, #F1E8FF -0.02%, #FFFFFF 100.01%)',
        bgImage: '/courses-background/build-own-agentic-ai.png',
        url: '/courses/build-your-own-agentic-ai-assistants-6-week',
      },
      {
        id: 1,
        thumb1: course_dml_1,
        tag: ['Best Seller'],
        review: '(4.8 Reviews)',
        title: 'Full Stack Developer - MERN',
        description:
          'Learn MongoDB, Express, React, and Node to build complete web applications.',
        color: '#FFEEE6',
        author: 'David Millar',
        price: 15,
        border_color:
          'radial-gradient(536.57% 191.9% at 0% -0.03%, #B02C09 0%, #DB640A 43.47%, #FA8D0B 100%) border-box',
        footer_bg_color:
          'linear-gradient(120.24deg, #FDEFE5 -0.02%, #FFFFFF 100.01%)',
        bgImage: '/courses-background/mern.png',
        url: '/courses/full-stack-development-mern',
      },
      {
        id: 2,
        thumb1: course_dml_21,
        thumb2: course_dml_22,
        tag: ['Best Seller'],
        review: '(4.1 Reviews)',
        title: 'Web Development - Frontend ',
        heading: 'Web Development - Frontend (React/Next.js)',
        description:
          'Learn React and Next.js to build fast, modern, and responsive frontend web applications.',
        color: '#E6F4F6',
        author: 'David Millar',
        price: 19,
        border_color:
          'radial-gradient(536.57% 191.9% at 0% -0.03%, #000C5C 0%, #0750AD 43.47%, #68B0EA 100%)',
        footer_bg_color:
          'linear-gradient(120.24deg, #E3EDF4 -0.02%, #FFFFFF 100.01%)',
        bgImage: '/courses-background/webdev-frontend.png',
        url: '/courses/web-development-frontend-react-next',
      },
      {
        id: 3,
        thumb1: course_dml_3,
        tag: [],
        review: '(4.8 Reviews)',
        title: 'Web Development - Backend ',
        heading: 'Web Development - Backend (Node.js)',
        description:
          'Learn Node.js to build scalable APIs, manage databases, and create dynamic backend applications.',
        color: '#E9F1E8',
        author: 'David Millar',
        price: 24,
        border_color:
          'radial-gradient(536.57% 191.9% at 0% -0.03%, #1E3E02 0%, #638B0B 43.47%, #C2E138 100%)',
        footer_bg_color:
          'linear-gradient(120.24deg, #F1F5E4 -0.02%, #FFFFFF 100.01%)',
        bgImage: '/courses-background/webdev-backend.png',
        url: '/courses/web-development-backend-node',
      },
      {
        id: 4,
        thumb1: course_dml_4,
        tag: [],
        review: '(4.0 Reviews)',
        title: 'PHP with Laravel/WordPress',
        heading: 'PHP with Laravel/WordPress',
        description:
          'Learn PHP, Laravel, and WordPress to build dynamic websites and powerful backend solutions.',
        color: '#F2F2F2',
        author: 'David Millar',
        price: 12,
        border_color:
          'radial-gradient(536.57% 191.9% at 0% -0.03%, #070707 0%, #363636 43.47%, #AEAEAE 100%)',
        footer_bg_color:
          'linear-gradient(120.24deg, #E0E3E9 -0.02%, #FFFFFF 100.01%)',
        bgImage: '/courses-background/php-laravel.png',
        url: '/courses/php-with-laravel-wordpress',
      },

      {
        id: 7,
        thumb1: course_dml_7,
        tag: [],
        review: '(4.8 Reviews)',
        title: 'Quality Assurance - Software Testing',
        heading: 'Quality Assurance - Software Testing',
        description:
          'Learn manual and automation testing. Write test cases, find bugs, and ensure software quality.',
        color: '#EEE6F8',
        author: 'David Millar',
        price: 12,
        border_color:
          'radial-gradient(536.57% 191.9% at 0% -0.03%, #2D0878 0%, #5318AA 43.47%, #B93FFF 100%)',
        footer_bg_color:
          'linear-gradient(120.24deg, #F1E8FF -0.02%, #FFFFFF 100.01%)',
        bgImage: '/courses-background/qa.png',
        url: '/courses/quality-assurance-software-testing',
      },

      {
        id: 8,
        thumb1: course_dml_8,
        tag: [],
        review: '(4.0 Reviews)',
        title: 'UI/UX Design',
        heading: 'User Interface & Experience Design',
        description:
          'Design intuitive interfaces. Learn wireframing, prototyping, usability, and popular design tools.',
        color: '#FFF1F0',
        author: 'David Millar',
        price: 12,
        border_color:
          'radial-gradient(536.57% 191.9% at 0% -0.03%, #AB192D 0%, #E43D2D 43.47%, #FF634D 100%)',
        footer_bg_color:
          'linear-gradient(120.24deg, #FAE4E2 -0.02%, #FFFFFF 100.01%)',
        bgImage: '/courses-background/ui-ux.png',
        url: '/courses/ui-ux-design',
      },
      {
        id: 5,
        thumb1: course_dml_5,
        tag: [],
        review: '(4.9 Reviews)',
        title: 'Mobile App Development - React Native',
        heading: 'Mobile App Development - React Native',
        description:
          'Build beautiful mobile apps with Flutter. Master widgets, layouts, animations, and state management.',
        color: '#E6F4F6',
        author: 'David Millar',
        price: 27,
        border_color:
          'radial-gradient(536.57% 191.9% at 0% -0.03%, #08467C 0%, #07A9CD 43.47%, #15CADA 100%)',
        footer_bg_color:
          'linear-gradient(120.24deg, #EAFCFF -0.02%, #FFFFFF 100.01%)',
        bgImage: '/courses-background/mobile-app-native.png',
        url: '/courses/mobile-app-development-react-native',
      },
      // Need to check from above
      {
        id: 6,
        thumb1: course_dml_6,
        tag: [],
        review: '(4.1 Reviews)',
        title: 'Mobile App Development - Flutter',
        heading: 'Mobile App Development - Flutter',
        description:
          'Build beautiful mobile apps with Flutter. Master widgets, layouts, animations, and state management.',
        color: '#E6F4F6',
        author: 'David Millar',
        price: 10,
        border_color:
          'radial-gradient(536.57% 191.9% at 0% -0.03%, #032164 0%, #077CCB 43.47%, #00C7EE 100%)',
        footer_bg_color:
          'linear-gradient(120.24deg, #EAF6FD -0.02%, #FFFFFF 100.01%)',
        bgImage: '/courses-background/mobile-app-flutter.png',
        url: '/courses/mobile-app-development-flutter',
      },
      {
        id: 9,
        thumb1: course_dml_9,
        tag: [],
        review: '(4.9 Reviews)',
        title: 'AI with Python',
        heading: 'AI & ML Fundamentals with Python',
        description:
          'Explore AI concepts using Python. Work with neural networks, machine learning, and smart systems.',
        color: '#ECF2F7',
        author: 'David Millar',
        price: 12,
        border_color:
          'radial-gradient(536.57% 191.9% at 0% -0.03%, #001A56 0%, #0D5198 43.47%, #43A5DE 100%)',
        footer_bg_color:
          'linear-gradient(120.24deg, #F2F7FD -0.02%, #FFFFFF 100.01%)',
        bgImage: '/courses-background/ai-python.png',
        url: '/courses/artificial-intelligence-with-python',
      },

      {
        id: 10,
        thumb1: course_dml_9,
        tag: [],
        review: '(4.9 Reviews)',
        title: 'Data Science with Python',
        heading: 'Data Science with Python',
        description:
          'Analyze and visualize data using Python. Learn Pandas, NumPy, and machine learning basics.',
        color: '#ECF2F7',
        author: 'David Millar',
        price: 12,
        border_color:
          'radial-gradient(536.57% 191.9% at 0% -0.03%, #9F2600 0%, #F88F00 43.47%, #FBBF0D 100%)',
        footer_bg_color:
          'linear-gradient(120.24deg, #FFEBDE -0.02%, #FFFFFF 100.01%)',
        bgImage: '/courses-background/data-science-with-python.png',
        url: '/courses/data-science-with-python',
      },
      {
        id: 11,
        thumb1: course_dml_11,
        tag: [],
        review: '(4.8 Reviews)',
        title: 'DevOps with Cloud Computing ',
        heading: 'DevOps with Cloud Computing',
        description:
          'Automate deployments with DevOps tools. Learn Docker, CI/CD, and cloud services like AWS.',
        color: ' #E9F1E8',
        author: 'David Millar',
        price: 12,
        border_color:
          'radial-gradient(536.57% 191.9% at 0% -0.03%, #052423 0%, #00874B 43.47%, #2EAD56 100%)',
        footer_bg_color:
          'linear-gradient(120.24deg, #E5FDF3 -0.02%, #FFFFFF 100.01%)',
        bgImage: '/courses-background/devops-cloud-computing.png',
        url: '/courses/devops-with-cloud-computing',
      },
      {
        id: 18,
        thumb1: course_dml_18,
        tag: [],
        review: '(4.8 Reviews)',
        title: 'Cybersecurity ',
        heading: 'Cybersecurity Fundamentals',
        description:
          'Build beautiful mobile apps with Flutter. Master widgets, layouts, animations, and state management.',
        color: ' #E9F1E8',
        author: 'David Millar',
        price: 12,
        border_color:
          'radial-gradient(536.57% 191.9% at 0% -0.03%, #152769 0%, #284EB3 43.47%, #5C97FB 100%)  ',
        footer_bg_color:
          'linear-gradient(120.24deg, #E9EFFA -0.02%, #FFFFFF 100.01%)',
        bgImage: '/courses-background/cybersecurity.png',
        url: '/courses/cybersecurity',
      },
    ],
  },
];

export default course_data;