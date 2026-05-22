import { ClockIcon } from '@/components/icons';
import {
  CertificationIcon,
  GraduationCapIcon,
  LiveProjectsIcon,
  StarIcon,
  UpskillingIcon,
  WorkplaceSkillsIcon,
} from '@/components/svgs';
import Image from 'next/image';

// Common reused data across most/all courses
const commonStats = [
  { icon: <GraduationCapIcon />, text: 'Trusted by 1K+ Learners' },
  { icon: <StarIcon />, text: '4.7 ★ Rating' },
  { icon: <GraduationCapIcon />, text: 'Industry Certification' },
  // { icon: <GraduationCapIcon />, text: 'Starts at ₹4K' },
];

const commonIncluded = [
    {
    iconSvg: (
      <Image
        height={24}
        width={24}
        src="/course-details/material-symbols-light_code-rounded.svg"
        alt="star"
      />
    ),
    text: "Personalised 1:1 Mentorship",
  },
  {
    iconSvg: (
      <Image
        height={24}
        width={24}
        src="/course-details/material-symbols-light_star-rounded.svg"
        alt="star"
      />  
    ),
    text: "4.9 ★ Proven Learner Satisfaction",
  },
  {
    iconSvg: (
      <Image
        height={24}
        width={24}
        src="/course-details/material-symbols-light_code-rounded.svg"
        alt="star"
      />
    ),
    text: "Real-world, job-ready training",
  },
    {
    iconSvg: (
      <Image
        height={24}
        width={24}
        src="/course-details/material-symbols-light_star-rounded.svg"
        alt="star"
      />  
    ),
    text: "Exposure & Access to AI Tools",
  },

  // {
  //   iconSvg: (
  //     <Image
  //       height={24}
  //       width={24}
  //       src="/course-details/mynaui_rupee-circle.svg"
  //       alt="rupee"
  //     />
  //   ),
  //   text: "Start learning for as low as ₹4K",
  // },
];

const commonSkillData = [
  {
    icon: <UpskillingIcon />,
    title: "Upskilling",
    description:
      "Expert-led intensive training program, powered by structured, industry-aligned curriculum.",
  },
  {
    icon: <LiveProjectsIcon />,
    title: "Live Projects",
    description:
      "Build real, ready-to-ship products with team members & professionals over 4 weeks.",
  },
  {
    icon: <WorkplaceSkillsIcon />,
    title: "Workplace Skills",
    description:
      "Craft your resume, strengthen your profile, & get noticed by recruiters from top companies.",
  },
  {
    icon: <CertificationIcon />,
    title: "Industry Certification",
    description:
      "Earn live project & training certificates and add proven, job-ready credibility to your CV.",
  },
];

export const commonFaq = [
  {
    id: "general",
    label: "GENERAL FAQs",
    items: [
      {
        question: "Who can benefit from DMLearning?",
        answer: "Our platform is designed for students, professionals, and institutions seeking skill development, career growth, or upskilling in emerging technologies. Whether you’re a beginner or an experienced learner, DMLearning provides tailored learning paths to meet your goals."
      },
      {
        question: "How does DMLearning help learners stay job-ready?",
        answer: "DMLearning updates its courses regularly based on industry trends and real-world needs, ensuring learners gain skills that employers actually look for."
      },
      {
        question: "What makes DMLearning different from other learning platforms?",
        answer: "We focus on experiential, learner-centric education powered by technology. Our courses combine interactive content, real-world projects, and mentorship to ensure learners can apply knowledge effectively and achieve measurable outcomes."
      },
      {
        question: "Are DMLearning programs suitable for beginners?",
        answer: "Yes, our courses are designed for beginners as well as those looking to upgrade their skills."
      },
      {
        question: "Can organisations partner with DMLearning for employee training?",
        answer: "Yes! We provide tailored learning solutions for organisations, including upskilling programs, corporate workshops, and digital learning paths to enhance team performance and foster continuous learning."
      }
    ]
  },
  {
    id: "admission",
    label: "ADMISSION / COURSES",
    items: [
      {
        question: "Can I learn at my own pace while balancing studies or work?",
        answer: "Yes. Our flexible learning structure lets you study anytime, anywhere, so you can build skills consistently without disrupting your daily schedule."
      },
      {
        question: "Are there prerequisites for joining a course?",
        answer: "Most courses are beginner-friendly, but some advanced programs may require basic knowledge. Any required prior knowledge is clearly listed on the course page."
      },
      {
        question: "Can I switch courses after enrolling?",
        answer: "Yes! We understand learning paths evolve. You can switch to another course that better suits your goals within the first few days of enrollment."
      },
      {
        question: "What is the typical duration of a course?",
        answer: "Course timelines differ based on the program, ranging from several weeks to a few months. Each course provides a suggested learning schedule to keep you on track."
      },
      {
        question: "Are the courses updated regularly?",
        answer: "Absolutely. We update all courses based on industry trends, new technologies, and learner feedback to ensure you gain the most relevant skills."
      }
    ]
  },
  {
    id: "career",
    label: "CAREER / SKILL DEVELOPMENT",
    items: [
      {
        question: "Will these courses help me get a job?",
        answer: "Yes! Our courses focus on building job-ready capabilities that employers value. You graduate with demonstrable skills, project experience, and stronger professional confidence."
      },
      {
        question: "Can these courses help me transition to a new role or industry?",
        answer: "Absolutely. By learning relevant skills and applying them through projects, you can confidently switch roles, upskill for emerging fields, or explore entirely new career paths."
      },
      {
        question: "Can learning here help me earn promotions or grow in my current job?",
        answer: "Yes. By building advanced, in-demand skills and showcasing your learning through projects and certifications, you can demonstrate your value and accelerate career growth within your organisation."
      },
      {
        question: "Are there certificates after course completion?",
        answer: "Yes. Every course comes with an industry-recognised certificate that validates your skills and learning progress. It strengthens your resume, boosts your credibility, and helps you stand out to recruiters, employers, and clients."
      },
      {
        question: "How does DMLearning support long-term career growth?",
        answer: "DMLearning goes beyond courses by helping you build future-ready skills, confidence, and learning momentum so you stay competitive, adaptable, and ready for better career opportunities at every stage."
      }
    ]
  }
];


 const commonDiscoverCourses = [
  {
        id: 12,
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
];

const dmlCourses = {
  'prompt-engineering-for-generative-ai-3-week': {
    id: 'prompt-engineering-for-generative-ai-3-week',
    title: 'Prompt Engineering for Generative AI',
    variant: '3-Week Program',
    description:
      'Learn how to design effective prompts and work with Generative AI to automate tasks and create high-quality outputs.',
    trustedBy: '1K+ Learners',
    rating: '4.7 ★ average learner rating',
    // priceStartingFrom: '₹4K',
    bgImage: '/courses-background/bgOrange.png',
    rightImage: '/course-details/prompt-eng-Ai.png',

    backgroundColor:
      'linear-gradient(120.24deg, rgb(253, 239, 229) -0.02%, rgb(255, 255, 255) 100.01%)',
    borderColor:
      'radial-gradient(536.57% 191.9% at 0% -0.03%, rgb(176, 44, 9) 0%, rgb(219, 100, 10) 43.47%, rgb(250, 141, 11) 100%)',

    statsData: [...commonStats, { icon: <ClockIcon />, text: '3 Weeks' }],
    includedData: commonIncluded,
    faq: commonFaq,
    discoverCoursesData: [ {
        id: 13,
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
    ],

    roadmapData: [
      {
        week: 'Week 1',
        title: 'Foundations of Generative AI & Prompting',
        topics: [
          'Understand Generative AI, LLMs, and how prompts drive outputs',
          'Learn prompt structure: instructions, context, examples, constraints',
          'Practice role-based and task-oriented prompting',
          'Write prompts for summarization, ideation, and structured responses',
        ],
      },
      {
        week: 'Week 2',
        title: 'Advanced Prompting & Optimization',
        topics: [
          'Apply few-shot prompting and example-driven techniques',
          'Use chain-of-thought prompting for complex reasoning tasks',
          'Generate structured outputs like reports and tables',
          'Test, refine, and optimize prompts for better accuracy',
          'Build a mini project: prompt library for business tasks',
        ],
      },
      {
        week: 'Week 3',
        title: 'Prompt Workflows & Real-World Use',
        topics: [
          'Design multi-step prompt workflows for complex tasks',
          'Automate repetitive workflows using prompt systems',
          'Explore real-world and industry use cases',
          'Follow best practices for professional prompt engineering',
          'Develop a final project: business prompt toolkit',
        ],
      },
    ],

    skillsData: commonSkillData,
    includeDescription: 'Build a Successful Career in Prompt Engineering for Generative AI',
  },

  'prompt-engineering-for-generative-ai-6-week': {
    id: 'prompt-engineering-for-generative-ai-6-week',
    title: 'Prompt Engineering for Generative AI',
    variant: '6-Week Program',
    description:
      'Learn how to design effective prompts and work with Generative AI to automate tasks and create high-quality outputs.',
    trustedBy: '1K+ Learners',
    rating: '4.7 ★ average learner rating',
    // priceStartingFrom: '₹4K',
    bgImage: '/courses-background/bgOrange.png',
    rightImage: '/course-details/prompt-eng-Ai.png',
    backgroundColor:
      'linear-gradient(120.24deg, rgb(253, 239, 229) -0.02%, rgb(255, 255, 255) 100.01%)',
    borderColor:
      'radial-gradient(536.57% 191.9% at 0% -0.03%, rgb(176, 44, 9) 0%, rgb(219, 100, 10) 43.47%, rgb(250, 141, 11) 100%)',

    statsData: [...commonStats, { icon: <ClockIcon />, text: '6 Weeks' }],
    includedData: [
      ...commonIncluded,
    ],
    faq: commonFaq,
       discoverCoursesData: [ {
        id: 13,
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
    ],

    roadmapData: [
      {
        week: 'Week 1',
        title: 'Generative AI Fundamentals',
        topics: [
          'Understand Generative AI concepts, technologies, and applications',
          'Learn how language models process prompts and generate outputs',
          'Explore tokens, context windows, and response behavior',
          'Experiment with prompts across real-world use cases',
        ],
      },
      {
        week: 'Week 2',
        title: 'Core Prompt Engineering',
        topics: [
          'Learn prompt structures, formatting, and system instructions',
          'Design role-based and task-specific prompts',
          'Improve clarity, specificity, and prompt effectiveness',
          'Build a mini project: prompt template library',
        ],
      },
      {
        week: 'Week 3',
        title: 'Advanced Prompting Techniques',
        topics: [
          'Apply few-shot and example-based prompting',
          'Use chain-of-thought for complex reasoning tasks',
          'Debug, test, and evaluate prompt performance',
          'Create multi-step reasoning prompts',
        ],
      },
      {
        week: 'Week 4',
        title: 'Structured Outputs & Extraction',
        topics: [
          'Design prompts for structured outputs like tables and reports',
          'Extract insights from documents and datasets',
          'Convert unstructured text into organized information',
          'Build a mini project: document insight extraction tool',
        ],
      },
      {
        week: 'Week 5',
        title: 'Prompt Workflows & Automation',
        topics: [
          'Design multi-step prompt pipelines and workflows',
          'Combine prompts to solve complex tasks',
          'Build workflows for research and content generation',
          'Create a mini project: multi-step research workflow',
        ],
      },
      {
        week: 'Week 6',
        title: 'Capstone Projects & Deployment',
        topics: [
          'Apply prompt engineering to real-world business scenarios',
          'Build reusable prompt systems for productivity',
          'Test, refine, and optimize prompt workflows',
          'Develop final projects: AI content automation system & research assistant',
        ],
      },
    ],

    skillsData: commonSkillData,
    includeDescription: 'Build a Successful Career in Prompt Engineering for Generative AI',
  },

  'artificial-intelligence-for-business-leaders-3-week': {
    id: 'artificial-intelligence-for-business-leaders-3-week',
    title: 'Artificial Intelligence for Business Leaders',
    variant: '3 Week Program',
    description:
      'Learn how to identify, implement, and scale AI solutions to drive growth and efficiency in your organisation.',
    trustedBy: '1K+ Learners',
    rating: '4.7 ★ average learner rating',
    // priceStartingFrom: '₹4K',
    bgImage: '/courses-background/bgLightBlue.png',
    rightImage: '/course-details/ai-for-business-lead.png',
    backgroundColor:
      'linear-gradient(120.24deg, #E3EDF4 -0.02%, #FFFFFF 100.01%)',
    borderColor:
      'radial-gradient(536.57% 191.9% at 0% -0.03%, #000C5C 0%, #0750AD 43.47%, #68B0EA 100%)',

    statsData: [...commonStats, { icon: <ClockIcon />, text: '3 Weeks' }],
    includedData: commonIncluded,
    faq: commonFaq,
    discoverCoursesData: [  {
        id: 12,
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
        id: 14,
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
    ],

    roadmapData: [
      {
        week: 'Week 1',
        title: 'Understanding AI in Modern Business',
        topics: [
          'Understand Artificial Intelligence and Generative AI concepts',
          'Explore key AI applications across industries',
          'Learn how AI improves decision-making and efficiency',
          'Analyse real-world examples of successful AI adoption',
        ],
      },
      {
        week: 'Week 2',
        title: 'AI Strategy & Organisational Adoption',
        topics: [
          'Identify high-impact AI opportunities within organisations',
          'Evaluate business value, ROI, and feasibility of AI initiatives',
          'Learn AI adoption frameworks and implementation planning',
          'Understand risks, limitations, and ethical considerations',
          'Build a mini project: AI opportunity assessment',
        ],
      },
      {
        week: 'Week 3',
        title: 'Implementing AI in Organisations',
        topics: [
          'Learn to manage AI initiatives and cross-functional teams',
          'Explore AI tools for productivity, research, and analytics',
          'Understand governance, risk management, and responsible AI',
          'Measure the impact of AI initiatives',
          'Develop a final project: AI implementation roadmap',
        ],
      },
      
    ],

    skillsData: commonSkillData,
    includeDescription: 'Advance Your Career with Artificial Intelligence for Business Leaders',
  },

  'artificial-intelligence-for-business-leaders-6-week': {
    id: 'artificial-intelligence-for-business-leaders-6-week',
    title: 'Artificial Intelligence for Business Leaders',
    variant: '6 Week Program',
    description:
      'Learn how to identify, implement, and scale AI solutions to drive growth and efficiency in your organisation.',
    trustedBy: '1K+ Learners',
    rating: '4.7 ★ average learner rating',
    // priceStartingFrom: '₹4K',
    bgImage: '/courses-background/bgLightBlue.png',
   rightImage: '/course-details/ai-for-business-lead.png',
    backgroundColor:
      'linear-gradient(120.24deg, #E3EDF4 -0.02%, #FFFFFF 100.01%)',
    borderColor:
      'radial-gradient(536.57% 191.9% at 0% -0.03%, #000C5C 0%, #0750AD 43.47%, #68B0EA 100%)',

    statsData: [...commonStats, { icon: <ClockIcon />, text: '6 Weeks' }],
    includedData: [
      ...commonIncluded,
      {
        iconSvg: (
          <Image
            src="/course-details/material-symbols-light_star-rounded.svg"
            alt="star"
            height={24}
            width={24}
          />
        ),
        text: 'Transformation Roadmaps',
      },
    ],
    faq: commonFaq,
    discoverCoursesData: [  {
        id: 12,
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
        id: 14,
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
    ],
    roadmapData: [
      {
        week: 'Week 1',
        title: 'AI Technology Landscape',
        topics: [
          'Understand key AI technologies and their capabilities',
          'Differentiate between machine learning, generative AI, and automation',
          'Explore industry trends driving AI adoption',
          'Learn the strategic role of AI in digital transformation',
        ],
      },
      {
        week: 'Week 2',
        title: 'AI Use Cases Across Business Functions',
        topics: [
          'Explore AI applications across marketing, finance, operations, and HR',
          'Analyse real-world case studies of AI at scale',
          'Identify automation opportunities within organisations',
          'Map business problems to suitable AI solutions',
          'Build a mini project: industry AI use case analysis',
        ],
      },
      {
        week: 'Week 3',
        title: 'AI Tools for Business Productivity',
        topics: [
          'Use AI tools for research, reporting, and data analysis',
          'Apply AI in decision-making and strategic planning',
          'Generate insights using AI-powered tools',
          'Work with practical AI-driven workflows',
        ],
      },
      {
        week: 'Week 4',
        title: 'AI Strategy & Transformation',
        topics: [
          'Design AI transformation strategies for organisations',
          'Plan AI investments and measure ROI',
          'Manage organisational change during AI adoption',
          'Align AI initiatives with business goals',
          'Build a mini project: AI strategy proposal',
        ],
      },
      {
        week: 'Week 5',
        title: 'Governance, Risk & Responsible AI',
        topics: [
          'Understand ethical considerations in AI deployment',
          'Address bias, privacy, and regulatory compliance',
          'Apply risk management frameworks for AI systems',
          'Implement responsible AI practices',
          'Build a mini project: ethical risk assessment',
        ],
      },
      {
        week: 'Week 6',
        title: 'AI Transformation Projects',
        topics: [
          'Design end-to-end AI implementation strategies',
          'Develop department-level AI adoption plans',
          'Create organisation-wide AI transformation roadmaps',
          'Build final projects: implementation plan & transformation strategy',
        ],
      },
    ],

    skillsData: commonSkillData,
    includeDescription: 'Advance Your Career with Artificial Intelligence for Business Leaders',
  },

  'ai-for-marketing-customer-experience-3-week': {
    id: 'ai-for-marketing-customer-experience-3-week',
    title: 'AI for Marketing & Customer Experience',
    variant: '3-Week Program',
    description:
      'Learn how to use AI to personalise customer experiences, optimise campaigns, and drive measurable marketing growth.',
    trustedBy: '1K+ Learners',
    rating: '4.7 ★ average learner rating',
    // priceStartingFrom: '₹4K',
    bgImage: '/courses-background/bgLightGreen.png',
    rightImage: '/course-details/ai-for-marketing.png',
    backgroundColor:
      'linear-gradient(120.24deg, rgb(241, 245, 228) -0.02%, rgb(255, 255, 255) 100.01%)',
    borderColor:
      'radial-gradient(536.57% 191.9% at 0% -0.03%, rgb(30, 62, 2) 0%, rgb(99, 139, 11) 43.47%, rgb(194, 225, 56) 100%)',

    statsData: [...commonStats, { icon: <ClockIcon />, text: '3 Weeks' }],
    includedData: commonIncluded,
    faq: commonFaq,
    discoverCoursesData: [ {
        id: 12,
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
        id: 15,
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
    ],

    roadmapData: [
      {
        week: 'Week 1',
        title: 'AI in Modern Marketing',
        topics: [
          'Understand the role of AI in shaping modern digital marketing strategies',
          'Explore AI tools for content creation and campaign ideation',
          'Learn to generate marketing copy using generative AI',
          'Interpret AI-driven insights to understand consumer behaviour',
        ],
      },
      {
        week: 'Week 2',
        title: 'Customer Insights and Personalisation',
        topics: [
          'Apply AI for customer segmentation and targeting',
          'Create data-driven customer personas using AI tools',
          'Design personalised marketing campaigns at scale',
          'Analyse customer feedback and engagement using AI',
        ],
      },
      {
        week: 'Week 3',
        title: 'Marketing Automation with AI',
        topics: [
          'Build AI-powered chatbots for customer engagement',
          'Optimise campaigns using AI-driven recommendations',
          'Streamline marketing workflows with automation tools',
          'Measure campaign performance using AI insights',
        ],
      },
    ],

    skillsData: commonSkillData,
    includeDescription: 'Advance Your Career with AI for Marketing & Customer Experience',
  },

  'ai-for-marketing-customer-experience-6-week': {
    id: 'ai-for-marketing-customer-experience-6-week',
    title: 'AI for Marketing & Customer Experience',
    variant: '6-week Program',
    description:
      'Learn how to use AI to personalise customer experiences, optimise campaigns, and drive measurable marketing growth.',
    trustedBy: '1K+ Learners',
    rating: '4.7 ★ average learner rating',
    // priceStartingFrom: '₹4K',
    bgImage: '/courses-background/bgLightGreen.png',
    rightImage: '/course-details/ai-for-marketing.png',
    backgroundColor:
      'linear-gradient(120.24deg, rgb(241, 245, 228) -0.02%, rgb(255, 255, 255) 100.01%)',
    borderColor:
      'radial-gradient(536.57% 191.9% at 0% -0.03%, rgb(30, 62, 2) 0%, rgb(99, 139, 11) 43.47%, rgb(194, 225, 56) 100%)',

    statsData: [...commonStats, { icon: <ClockIcon />, text: '6 Weeks' }],
    includedData: [
      ...commonIncluded,
      {
        iconSvg: (
          <Image
            src="/course-details/material-symbols-light_star-rounded.svg"
            alt="star"
            height={24}
            width={24}
          />
        ),
        text: 'Capstone Marketing Systems',
      },
    ],
    faq: commonFaq,
    discoverCoursesData: [ {
        id: 12,
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
        id: 15,
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
    ],

    roadmapData: [
      {
        week: 'Week 1',
        title: 'Foundations of AI in Marketing',
        topics: [
          'Understand AI-driven marketing technologies and their capabilities',
          'Explore the role of AI in modern digital marketing strategies',
          'Review commonly used AI tools in marketing teams',
          'Analyse real-world examples of AI-powered campaigns',
        ],
      },
      {
        week: 'Week 2',
        title: 'AI Content Creation',
        topics: [
          'Use AI tools to generate blogs, ads, and social media content',
          'Apply prompt engineering for effective marketing copy',
          'Generate content ideas using AI-driven techniques',
          'Mini Project: Build an AI Content Generation Toolkit',
        ],
      },
      {
        week: 'Week 3',
        title: 'Customer Segmentation and Insights',
        topics: [
          'Apply AI techniques for customer segmentation',
          'Analyse consumer behaviour using AI tools',
          'Predict customer preferences with data-driven insights',
        ],
      },
      {
        week: 'Week 4',
        title: 'Personalisation and Customer Experience',
        topics: [
          'Implement AI-driven personalisation strategies',
          'Design personalised customer journeys',
          'Explore AI-powered recommendation systems',
          'Mini Project: Design a Personalised User Experience System',
        ],
      },
      {
        week: 'Week 5',
        title: 'Marketing Automation Systems',
        topics: [
          'Build AI-powered marketing automation workflows',
          'Develop chatbots for conversational marketing',
          'Optimise campaigns and nurture leads using AI',
          'Mini Project: Develop an AI Lead Nurturing Assistant',
        ],
      },
      {
        week: 'Week 6',
        title: 'Marketing AI Capstone Projects',
        topics: [
          'Design an AI-powered marketing campaign planner',
          'Build a customer experience optimisation system',
          'Apply end-to-end AI strategies to real marketing scenarios',
        ],
      },
    ],

    skillsData: commonSkillData,
    includeDescription: 'Advance Your Career with AI for Marketing & Customer Experience',
  },

  'generative-agentic-ai-3-week': {
    id: 'generative-agentic-ai-3-week',
    title: 'Generative & Agentic AI',
    variant: '3-Week Programs',
    description:
      'Learn how to design and build generative and agentic AI systems that automate tasks, create content, and drive smarter outcomes.',
    trustedBy: '1K+ Learners',
    rating: '4.7 ★ average learner rating',
    // priceStartingFrom: '₹4K',
    bgImage: '/courses-background/bgRed.png',
    rightImage: '/course-details/generative-and-agentic-ai.png',
    backgroundColor:
      'linear-gradient(120.24deg, rgb(253, 239, 229) -0.02%, rgb(255, 255, 255) 100.01%)',
    borderColor:
      'radial-gradient(536.57% 191.9% at 0% -0.03%, rgb(176, 44, 9) 0%, rgb(219, 100, 10) 43.47%, rgb(250, 141, 11) 100%)',

    statsData: [...commonStats, { icon: <ClockIcon />, text: '3 Weeks' }],
    includedData: [
      ...commonIncluded,
      {
        iconSvg: (
          <Image
            src="/course-details/material-symbols-light_star-rounded.svg"
            alt="star"
            height={24}
            width={24}
          />
        ),
        text: 'Multi-Agent & Assistant Projects',
      },
    ],
    faq: commonFaq,
    discoverCoursesData: commonDiscoverCourses,

    roadmapData: [
      {
        week: 'Week 1',
        title: 'Foundations of Generative AI',
        topics: [
          'Understand how generative AI creates text, images, and code',
          'Learn how Large Language Models (LLMs) interpret and respond to prompts',
          'Explore real-world applications in business, research, and productivity',
          'Identify limitations, reliability concerns, and responsible AI practices',
        ],
      },
      {
        week: 'Week 2',
        title: 'Agentic AI Concepts and Workflow Design',
        topics: [
          'Understand AI agents and how they differ from chat-based systems',
          'Break complex tasks into structured, multi-step workflows',
          'Design step-by-step reasoning processes for AI systems',
          'Mini Project: Build a Research AI Agent to gather and summarise information',
        ],
      },
      {
        week: 'Week 3',
        title: 'Building Practical AI Assistants',
        topics: [
          'Design AI assistants for real-world tasks and workflows',
          'Structure prompts for multi-step operations and consistent outputs',
          'Integrate generative AI into daily productivity processes',
          'Main Project: Develop a Productivity AI Assistant for research, ideation, and reporting',
        ],
      },
    ],

    skillsData: commonSkillData,
    includeDescription: 'Advance Your Career with Generative & Agentic AI',
  },

  'generative-agentic-ai-6-week': {
    id: 'generative-agentic-ai-6-week',
    title: 'Generative & Agentic AI',
    variant: '6-Week Programs',
    description:
      'Learn how to design and build generative and agentic AI systems that automate tasks, create content, and drive smarter outcomes.',
    trustedBy: '1K+ Learners',
    rating: '4.7 ★ average learner rating',
    // priceStartingFrom: '₹4K',
    bgImage: '/courses-background/bgRed.png',
     rightImage: '/course-details/generative-and-agentic-ai.png',
    backgroundColor:
      'linear-gradient(120.24deg, rgb(253, 239, 229) -0.02%, rgb(255, 255, 255) 100.01%)',
    borderColor:
      'radial-gradient(536.57% 191.9% at 0% -0.03%, rgb(176, 44, 9) 0%, rgb(219, 100, 10) 43.47%, rgb(250, 141, 11) 100%)',

    statsData: [...commonStats, { icon: <ClockIcon />, text: '6 Weeks' }],
    includedData: [
      ...commonIncluded,
      {
        iconSvg: (
          <Image
            src="/course-details/material-symbols-light_star-rounded.svg"
            alt="star"
            height={24}
            width={24}
          />
        ),
        text: 'Multi-Agent & Assistant Projects',
      },
    ],
    faq: commonFaq,
    discoverCoursesData: commonDiscoverCourses,

    roadmapData: [
      {
        week: 'Week 1',
        title: 'Generative AI Technology Foundations',
        topics: [
          'Understand generative AI architectures and core capabilities',
          'Learn how LLMs process context and generate responses',
          'Explore practical use cases across industries',
          'Evaluate strengths and limitations of generative AI tools',
        ],
      },
      {
        week: 'Week 2',
        title: 'Prompt Engineering for Generative AI',
        topics: [
          'Design effective prompts for different use cases',
          'Structure prompts using context, instructions, and examples',
          'Refine prompts to improve output quality',
          'Mini Project: Build an AI Content Generation Assistant',
        ],
      },
      {
        week: 'Week 3',
        title: 'Designing AI Assistants and Workflows',
        topics: [
          'Understand the architecture of AI assistants and task-based systems',
          'Design structured workflows for multi-step tasks',
          'Manage information flow across workflow steps',
        ],
      },
      {
        week: 'Week 4',
        title: 'Knowledge-Based AI Assistants',
        topics: [
          'Use documents and knowledge sources with AI assistants',
          'Design systems for retrieval and summarisation',
          'Mini Project: Build a Document Intelligence Assistant',
        ],
      },
      {
        week: 'Week 5',
        title: 'Multi-Agent Systems and Automation',
        topics: [
          'Design systems where multiple AI agents collaborate',
          'Create automated research and reporting workflows',
          'Mini Project: Build a Task Automation Agent',
        ],
      },
      {
        week: 'Week 6',
        title: 'Capstone Agentic AI Systems',
        topics: [
          'Integrate prompts, workflows, and agents into complete systems',
          'Design scalable AI assistant architectures',
          'Main Projects: Multi-Step Research AI Agent + Business Productivity AI Assistant',
        ],
      },
    ],

    skillsData: commonSkillData,
    includeDescription: 'Advance Your Career with Generative & Agentic AI',
  },

  'gen-ai-with-data-science-for-beginners-3-week': {
    id: 'gen-ai-with-data-science-for-beginners-3-week',
    title: 'Gen AI with Data Science for Beginners',
    variant: '3-Week & 6-Week Programs',
    description:
      'Learn to analyse data, uncover insights, and present findings using Generative AI tools.',
    trustedBy: '1K+ Learners',
    rating: '4.7 ★ average learner rating',
    // priceStartingFrom: '₹4K',
    bgImage: '/courses-background/bgDarkBlue.png',
    rightImage: '/course-details/gen-ai-data-science.png',
    backgroundColor:
      'linear-gradient(120.24deg, #E3EDF4 -0.02%, #FFFFFF 100.01%)',
    borderColor:
      'radial-gradient(536.57% 191.9% at 0% -0.03%, #000C5C 0%, #0750AD 43.47%, #68B0EA 100%)',

    statsData: [...commonStats, { icon: <ClockIcon />, text: '3 or 6 Weeks' }],
    includedData: [
      ...commonIncluded,
      {
        iconSvg: (
          <Image
            src="/course-details/material-symbols-light_star-rounded.svg"
            alt="star"
            height={24}
            width={24}
          />
        ),
        text: 'AI-Powered Data Projects',
      },
    ],
    faq: commonFaq,
    discoverCoursesData: commonDiscoverCourses,

    roadmapData: [
      {
        week: 'Week 1',
        title: 'Foundations of Data Science and AI',
        topics: [
          'Understand core data science concepts and data-driven decision-making',
          'Learn about datasets, variables, and basic analysis techniques',
          'Explore the role of AI in analysing and summarising data',
          'Get familiar with AI tools for data analysis',
        ],
      },
      {
        week: 'Week 2',
        title: 'AI-Assisted Data Analysis',
        topics: [
          'Use AI tools to summarise datasets and extract insights',
          'Identify trends and patterns using AI-driven analysis',
          'Convert raw data into structured insights',
          'Interpret results for business and research contexts',
          'Mini Project: Dataset Insight Analysis',
        ],
      },
      {
        week: 'Week 3',
        title: 'Communicating Data Insights',
        topics: [
          'Present findings through structured reports and summaries',
          'Use AI tools to generate charts and explanations',
          'Turn analysis into actionable insights',
          'Apply best practices for data storytelling',
          'Main Project: AI Data Insight Report',
        ],
      },
    ],

    skillsData: commonSkillData,
    includeDescription: 'Advance Your Career with Gen AI with Data Science for Beginners',
  },

  'gen-ai-with-data-science-for-beginners-6-week': {
    id: 'gen-ai-with-data-science-for-beginners-6-week',
    title: 'Gen AI with Data Science for Beginners',
    variant: '3-Week & 6-Week Programs',
    description:
      'Learn to analyse data, uncover insights, and present findings using Generative AI tools.',
    trustedBy: '1K+ Learners',
    rating: '4.7 ★ average learner rating',
    // priceStartingFrom: '₹4K',
    bgImage: '/courses-background/bgDarkBlue.png',
    rightImage: '/course-details/gen-ai-data-science.png',
    backgroundColor:
      'linear-gradient(120.24deg, #E3EDF4 -0.02%, #FFFFFF 100.01%)',
    borderColor:
      'radial-gradient(536.57% 191.9% at 0% -0.03%, #000C5C 0%, #0750AD 43.47%, #68B0EA 100%)',

    statsData: [...commonStats, { icon: <ClockIcon />, text: '3 or 6 Weeks' }],
    includedData: [
      ...commonIncluded,
      {
        iconSvg: (
          <Image
            src="/course-details/material-symbols-light_star-rounded.svg"
            alt="star"
            height={24}
            width={24}
          />
        ),
        text: 'AI-Powered Data Projects',
      },
    ],
    faq: commonFaq,
    discoverCoursesData: commonDiscoverCourses,

    roadmapData: [
      {
        week: 'Week 1',
        title: 'Data Science Fundamentals',
        topics: [
          'Understand datasets, variables, and basic statistics',
          'Learn exploratory data analysis techniques',
          'Apply data-driven decision-making concepts',
          'Explore real-world applications of data science',
        ],
      },
      {
        week: 'Week 2',
        title: 'Data Collection and Preparation',
        topics: [
          'Identify sources of structured and unstructured data',
          'Clean and organise datasets for analysis',
          'Prepare data for accurate insights',
          'Detect and resolve data quality issues',
          'Mini Project: Data Preparation and Cleaning',
        ],
      },
      {
        week: 'Week 3',
        title: 'AI-Assisted Data Exploration',
        topics: [
          'Explore datasets using AI-powered tools',
          'Generate automated summaries and insights',
          'Interpret AI-generated analysis results',
          'Compare manual vs AI-driven analysis approaches',
        ],
      },
      {
        week: 'Week 4',
        title: 'Data Visualisation and Insight Presentation',
        topics: [
          'Create visualisations to communicate insights clearly',
          'Use AI tools for charts and graphs',
          'Present findings effectively for decision-making',
          'Work with dashboards for data interpretation',
          'Mini Project: Data Visualisation Dashboard',
        ],
      },
      {
        week: 'Week 5',
        title: 'Trend Analysis and Predictive Insights',
        topics: [
          'Identify patterns and trends in datasets',
          'Understand AI-assisted predictive analysis concepts',
          'Apply insights to business or research problems',
          'Interpret predictive results responsibly',
          'Mini Project: Dataset Trend Analysis',
        ],
      },
      {
        week: 'Week 6',
        title: 'Capstone Data Science Projects',
        topics: [
          'Combine data preparation, analysis, and visualisation',
          'Build AI-supported analytics workflows',
          'Present insights for strategic decision-making',
          'Main Projects: AI Analytics Reporting System + Data Insight Generation Assistant',
        ],
      },
    ],

    skillsData: commonSkillData,
    includeDescription: 'Advance Your Career with Gen AI with Data Science for Beginners',
  },

  'build-your-own-agentic-ai-assistants-3-week': {
    id: 'build-your-own-agentic-ai-assistants-3-week',
    title: 'Build Your Own Agentic AI Assistants',
    variant: '3-Week Programs',
    description:
      'Design and deploy intelligent AI assistants that automate tasks, streamline workflows, and deliver real results.',
    trustedBy: '1K+ Learners',
    rating: '4.7 ★ average learner rating',
    // priceStartingFrom: '₹4K',
    bgImage: '/courses-background/bgPurple.png',
    rightImage: '/course-details/build-agentic-ai.png',
    backgroundColor:
      'linear-gradient(120.24deg, rgb(241, 232, 255) -0.02%, rgb(255, 255, 255) 100.01%)',
    borderColor:
      'radial-gradient(536.57% 191.9% at 0% -0.03%, rgb(45, 8, 120) 0%, rgb(83, 24, 170) 43.47%, rgb(185, 63, 255) 100%)',

    statsData: [...commonStats, { icon: <ClockIcon />, text: '3 Weeks' }],
    includedData: [
      ...commonIncluded,
      {
        iconSvg: (
          <Image
            src="/course-details/material-symbols-light_star-rounded.svg"
            alt="star"
            height={24}
            width={24}
          />
        ),
        text: 'Custom AI Assistant Projects',
      },
    ],
    faq: commonFaq,
    discoverCoursesData: commonDiscoverCourses,

    roadmapData: [
      {
        week: 'Week 1',
        title: 'Foundations of AI Assistants',
        topics: [
          'Understand AI assistants and agentic AI concepts',
          'Learn prompt engineering basics for task-oriented assistants',
          'Design simple workflows for AI-based tasks',
          'Explore real-world use cases in productivity',
        ],
      },
      {
        week: 'Week 2',
        title: 'Designing AI Bots and Task Workflows',
        topics: [
          'Break complex tasks into structured AI-executable steps',
          'Design workflows for research and information processing',
          'Structure prompts to guide assistant behaviour',
          'Evaluate outputs for accuracy and reliability',
          'Mini Project: Research AI Assistant',
        ],
      },
      {
        week: 'Week 3',
        title: 'Building Agentic AI Assistants',
        topics: [
          'Build assistants capable of multi-step task execution',
          'Integrate prompts and workflows for automation',
          'Improve assistant consistency and reliability',
          'Test and refine assistant performance',
          'Main Project: Custom Agentic AI Assistant',
        ],
      },
    ],

    skillsData: commonSkillData,
    includeDescription: 'Advance Your Career Building Your Own Agentic AI Assistants',
  },

  'build-your-own-agentic-ai-assistants-6-week': {
    id: 'build-your-own-agentic-ai-assistants-6-week',
    title: 'Build Your Own Agentic AI Assistants',
    variant: '3-Week Programs',
    description:
      'Design and deploy intelligent AI assistants that automate tasks, streamline workflows, and deliver real results.',
    trustedBy: '1K+ Learners',
    rating: '4.7 ★ average learner rating',
    // priceStartingFrom: '₹4K',
    bgImage: '/courses-background/bgPurple.png',
    rightImage: '/course-details/build-agentic-ai.png',
       backgroundColor:
      'linear-gradient(120.24deg, rgb(241, 232, 255) -0.02%, rgb(255, 255, 255) 100.01%)',
    borderColor:
      'radial-gradient(536.57% 191.9% at 0% -0.03%, rgb(45, 8, 120) 0%, rgb(83, 24, 170) 43.47%, rgb(185, 63, 255) 100%)',

    statsData: [...commonStats, { icon: <ClockIcon />, text: '3 Weeks' }],
    includedData: [
      ...commonIncluded,
      {
        iconSvg: (
          <Image
            src="/course-details/material-symbols-light_star-rounded.svg"
            alt="star"
            height={24}
            width={24}
          />
        ),
        text: 'Custom AI Assistant Projects',
      },
    ],
    faq: commonFaq,
    discoverCoursesData: commonDiscoverCourses,

    roadmapData: [
      {
        week: 'Week 1',
        title: 'AI Assistant Foundations',
        topics: [
          'Understand AI assistants and agentic AI systems',
          'Learn how prompts define assistant behaviour',
          'Explore applications in research and productivity',
          'Understand workflow-based AI systems',
        ],
      },
      {
        week: 'Week 2',
        title: 'Prompt Engineering for Assistants',
        topics: [
          'Design prompts for task-specific assistants',
          'Structure prompts with context and clear instructions',
          'Improve outputs through prompt refinement',
          'Test prompts for consistency and reliability',
          'Mini Project: Content Generation Assistant',
        ],
      },
      {
        week: 'Week 3',
        title: 'AI Bot Architecture and Workflow Design',
        topics: [
          'Design structured workflows for assistant tasks',
          'Manage task dependencies within workflows',
          'Combine prompts and logic for automation',
          'Build assistants for research and reporting',
        ],
      },
      {
        week: 'Week 4',
        title: 'Knowledge-Based AI Assistants',
        topics: [
          'Integrate documents and knowledge sources with assistants',
          'Design assistants for information retrieval and summarisation',
          'Manage context for long-form content',
          'Mini Project: Document Intelligence Assistant',
        ],
      },
      {
        week: 'Week 5',
        title: 'Agentic Automation Systems',
        topics: [
          'Build assistants for multi-step automation',
          'Design workflows for research, analysis, and reporting',
          'Improve assistant accuracy and reliability',
          'Mini Project: Task Automation Agent',
        ],
      },
      {
        week: 'Week 6',
        title: 'Capstone AI Assistant Systems',
        topics: [
          'Design scalable AI assistant architectures',
          'Combine prompts, workflows, and knowledge sources',
          'Test and optimise assistant performance',
          'Main Projects: Business Research AI Assistant + Multi-Task Agentic AI Assistant',
        ],
      },
    ],

    skillsData: commonSkillData,
    includeDescription: 'Advance Your Career Building Your Own Agentic AI Assistants',
  },
};

export default dmlCourses;
