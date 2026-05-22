export const FAQ_DATA = [
  {
    label: 'GENERAL FAQs',
    value: 'general-faqs',
    data: [
      {
        id: 1,
        question: 'Who can benefit from DMLearning?',
        answer:
          "Our platform is designed for students, professionals, and institutions seeking skill development, career growth, or up-skilling in emerging technologies. Whether you&apos;re a beginner or an experienced learner, <a href='/courses'>DMLearning</a> provides tailored learning paths to meet your goals.",
      },
      {
        id: 2,
        question: 'How does DMLearning help learners stay job-ready?',
        answer:
          'DMLearning updates its courses regularly based on industry trends and real-world needs, ensuring learners gain skills that employers actually look for ',
      },
      {
        id: 3,
        question: 'What makes DMLearning different from other learning platforms? ',
        answer:
          'We focus on experiential, learner-centric education powered by technology. Our courses combine interactive content, real-world projects, and mentorship to ensure learners can apply knowledge effectively and achieve measurable outcomes.',
      },
      {
        id: 4,
        question: 'Are DMLearning programs suitable for beginners?',
        answer: 'Yes, our courses are designed for beginners as well as those looking to upgrade their skills.',
      },
      {
        id: 5,
        question: 'Can organizations partner with DMLearning for employee training?',
        answer:
          'Yes! We provide tailored learning solutions for organizations, including up-skilling programs, corporate workshops, and digital learning paths to enhance team performance and foster continuous learning.',
      },

      // {
      //   id: 6,
      //   question: "How can I reach out to DMLearning's team for queries?",
      //   answer:
      //     "On the <a href='/contact'>Contact Us page</a>, you can fill out the Contact Us form, where you can either submit a query form or access our live chat support for immediate assistance. For more detailed enquiries, Call Us at <a href='tel:+919878383734'>+91-9878383734</a> or email us at <a href='mailto:hello@learning.digimantra.com'>hello@learning.digimantra.com</a> ",
      // },
    ],
  },
  {
    label: 'ADMISSION / COURSES',
    value: 'admission-courses',
    data: [
      {
        id: 1,
        question: 'Can I learn at my own pace while balancing studies or work?',
        answer:
          'Yes. Our flexible learning structure lets you study anytime, anywhere, so you can build skills consistently without disrupting your daily schedule ',
      },
      {
        id: 2,
        question: 'Are there prerequisites for joining a course?',
        answer:
          'Most courses are beginner-friendly, but some advanced programs may require basic knowledge. Any required prior knowledge is clearly listed on the course page.',
      },
      {
        id: 3,
        question: 'Can I switch courses after enrolling?',
        answer:
          'Yes! We understand learning paths evolve. You can switch to another course that better suits your goals within the first few days of enrollment.',
      },
      {
        id: 4,
        question: 'What is the typical duration of a course?',
        answer:
          'Course timelines differ based on the program, ranging from several weeks to a few months. Each course provides a suggested learning schedule to keep you on track.',
      },
      {
        id: 5,
        question: 'Are the courses updated regularly?',
        answer:
          'Absolutely. We update all courses based on industry trends, new technologies, and learner feedback to ensure you gain the most relevant skills.',
      },
    ],
  },
  {
    label: 'CAREER / SKILL DEVELOPMENT',
    value: 'carer-skill',
    data: [
      {
        id: 1,
        question: 'Will these courses help me get a job?',
        answer:
          'Yes! Our courses focus on building job-ready capabilities that employers value. You graduate with demonstrable skills, project experience, and stronger professional confidence.',
      },
      {
        id: 2,
        question: 'Can these courses help me transition to a new role or industry?',
        answer:
          'Absolutely. By learning relevant skills and applying them through projects, you can confidently switch roles, up-skill for emerging fields, or explore entirely new career paths.',
      },
      {
        id: 3,
        question: 'Can learning here help me earn promotions or grow in my current job?',
        answer:
          'Yes. By building advanced, in-demand skills and showcasing your learning through projects and certifications, you can demonstrate your value and accelerate career growth within your organization.',
      },
      {
        id: 4,
        question: 'Are there certificates after course completion?',
        answer:
          'Yes. Every course comes with an industry-recognized certificate that validates your skills and learning progress. It strengthens your resume, boosts your credibility, and helps you stand out to recruiters, employers, and clients.',
      },
      {
        id: 5,
        question: 'How does DMLearning support long-term career growth?',
        answer:
          'DMLearning goes beyond courses by helping you build future-ready skills, confidence, and learning momentum so you stay competitive, adaptable, and ready for better career opportunities at every stage.',
      },
    ],
  },
];

export type FaqItem = (typeof FAQ_DATA)[number];
export type QAItem = {
  id: number;
  question: string;
  answer: string;
};

export const COURSES = ['all', 'frontend', 'backend', 'design', 'ai', 'mobile'];
