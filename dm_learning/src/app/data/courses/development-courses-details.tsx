// ────────────────────────────────────────────────
//   Common reused sections (same as previous)
// ────────────────────────────────────────────────

import Image from "next/image";
import { commonFaq } from "./courses-details";
import {
  CertificationIcon,
  GraduationCapIcon,
  LiveProjectsIcon,
  StarIcon,
  UpskillingIcon,
  WorkplaceSkillsIcon,
} from "@/components/svgs";
import { ClockIcon } from "@/components/icons";

const commonStats = [
   { icon: <GraduationCapIcon />, text: "Trusted by 1K+ Learners" },
  { icon: <StarIcon />, text: "4.7 ★ Rating" },
  { icon: <GraduationCapIcon />, text: "Industry Certification" },
  // { icon: <GraduationCapIcon />, text: "Starts at ₹4K" },

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

const developmentCourses = {
  "full-stack-development-mern": {
    id: "full-stack-development-mern",
    title: "Full Stack Development - MERN",
    variant: "6-Month Program",
    description:
      "Learn MongoDB, Express, React, and Node to build fully functional web applications from scratch.",
    trustedBy: "1K+ Learners",
    rating: "4.7 ★ average learner rating",
    priceStartingFrom: "₹4K",
    bgImage: "/courses-background/bgOrange.png",
    rightImage: "/course-details/fullstack-mern.png",
    backgroundColor:
      "linear-gradient(120.24deg, #FDEFE5 -0.02%, #FFFFFF 100.01%)",
    borderColor:
      "radial-gradient(536.57% 191.9% at 0% -0.03%, #B02C09 0%, #DB640A 43.47%, #FA8D0B 100%)",

    statsData: [...commonStats, { icon: <ClockIcon />, text: "6 Months" }],
    includedData: commonIncluded,

    faq: commonFaq,
    discoverCoursesData: commonDiscoverCourses,

    roadmapData: [
      {
        month: "Month 1",
        title: "Frontend Foundations",
        topics: [
          "Learn HTML, CSS, and Bootstrap/Tailwind basics.",
          "Understand layouts (Flexbox, Grid) and styling.",
          "Work with JavaScript & TypeScript fundamentals.",
          "Explore DOM manipulation and core programming concepts.",
          "Build UI from Figma designs.",
        ],
      },
      {
        month: "Month 2",
        title: "React Development",
        topics: [
          "Master React basics, components, and state management.",
          "Learn Redux, Redux Toolkit, and React Router.",
          "Convert UI designs into functional React apps.",
          "Work on structured, real-world frontend tasks.",
        ],
      },
      {
        month: "Month 3",
        title: "APIs & Backend Basics",
        topics: [
          "Understand RESTful APIs and HTTP fundamentals.",
          "Learn request/response handling and authentication basics.",
          "Explore Node.js and Express.js fundamentals.",
          "Build and test backend APIs.",
        ],
      },
      {
        month: "Month 4",
        title: "Databases & Integration",
        topics: [
          "Learn MySQL fundamentals (queries, joins, functions).",
          "Work with MongoDB (CRUD, aggregation).",
          "Connect backend with databases.",
          "Build API-driven data handling systems.",
        ],
      },
      {
        month: "Month 5",
        title: "Full-Stack Development",
        topics: [
          "Work on backend-driven tasks and real scenarios.",
          "Integrate frontend with backend systems.",
          "Build complete full-stack applications.",
          "Gain experience through guided project work.",
        ],
      },
      {
        month: "Month 6",
        title: "Project & Deployment",
        topics: [
          "Develop a complete end-to-end project.",
          "Use React (frontend) + Express/Node (backend).",
          "Prepare technical documentation.",
          "Final project submission and feedback.",
        ],
      },
    ],

    skillsData: commonSkillData,
    includeDescription:
      "Build a Successful Career as a Full Stack Developer - MERN",
  },

  "web-development-frontend-react-next": {
    id: "web-development-frontend-react-next",
    title: "Web Development - Frontend (React/Next)",
    variant: "6-Month Program",
    description:
      "Master React and Next.js to build fast, scalable, and modern web interfaces.",
    trustedBy: "1K+ Learners",
    rating: "4.7 ★ average learner rating",
    priceStartingFrom: "₹4K",
    bgImage: "/courses-background/bgLightBlue.png",
    rightImage: "/course-details/web-development-frontend.png",
    backgroundColor:
      "linear-gradient(120.24deg, #E3EDF4 -0.02%, #FFFFFF 100.01%)",
    borderColor:
      "radial-gradient(536.57% 191.9% at 0% -0.03%, #000C5C 0%, #0750AD 43.47%, #68B0EA 100%)",

    statsData: [...commonStats, { icon: <ClockIcon />, text: "6 Months" }],
    includedData: commonIncluded,
    faq: commonFaq,
    discoverCoursesData: commonDiscoverCourses,

    roadmapData: [
      {
        month: "Month 1",
        title: "HTML, CSS, Bootstrap/Tailwind",
        topics: [
          "Master HTML5 tags, semantic elements, and doc structure.",
          "Learn CSS3, Flexbox, Grid, animations, and responsive design.",
          "Use Bootstrap components or Tailwind utilities for rapid layouts.",
          "Convert Figma designs to pixel-perfect HTML/CSS pages.",
          "Build and deploy static sites (portfolio, landing pages).",
        ],
      },
      {
        month: "Month 2",
        title: "JavaScript & TypeScript Basics",
        topics: [
          "Learn JavaScript core: variables, functions, loops, conditionals, ES6+",
          "DOM manipulation, events, forms, async/await, arrays/objects method",
          "Study DOM basics: manipulation, events, forms, async/await, arrays/objects",
          "Know TypeScript basics: types, interfaces, classes, generics, error handling",
          "Set up npm projects, convert JS code to TypeScript",
          "Build interactive pages with validation and local storage",
        ],
      },
      {
        month: "Month 3",
        title: "React.js Core & Redux Toolkit",
        topics: [
          "Study React: JSX, components, props, hooks (useState, useEffect).",
          "Know component lifecycle, conditional rendering, React Router for SPAs.",
          "Use Redux Toolkit: stores, slices, actions, reducers, selectors.",
          "Connect components to Redux, handle global state.",
          "Create todo/notes app with routing and state management.",
        ],
      },
      {
        month: "Month 4",
        title: "REST & GraphQL APIs",
        topics: [
          "Learn HTTP basics: methods, status codes, headers, JSON handling.",
          "Use Fetch/Axios for REST APIs, loading states, error boundaries.",
          "Practice authentication tokens, protected routes, pagination/search.",
          "Perform GraphQL queries/mutations, Apollo Client integration.",
          "Build data-driven React pages with mixed API sources.",
        ],
      },
      {
        month: "Month 5",
        title: "Client Project 1 (Redux Focus)",
        topics: [
          "Plan medium React app: architecture, folder structure, API layer",
          "Implement complex Redux state (normalised data, async thunks)",
          "Add forms, validation, filtering, sorting, reusable hooks",
          "Responsive design, custom UI components throughout",
          "Git branching, PR reviews, project documentation",
        ],
      },
      {
        month: "Month 6",
        title: "Client Project 2 & Advanced Delivery",
        topics: [
          "Build complex dashboard/SaaS app with TypeScript everywhere.",
          "Master Performance optimisation, memoisation, code splitting.",
          "Learn accessibility features, error boundaries, testing basics.",
          "Deploy to Vercel/Netlify, create technical documentation.",
          "Refine Portfolio, practice common interview questions.",
        ],
      },
    ],

    skillsData: commonSkillData,
    includeDescription:
      "Build a Successful Career as a Web Developer - Frontend (React/Next)",
  },

  "web-development-backend-node": {
    id: "web-development-backend-node",
    title: "Web Development - Backend (Node.js)",
    variant: "6-Month Program",
    description:
      "Learn Node.js, Express.js, NestJS, and databases to build fast, scalable, and production-ready backend systems from the ground up.",
    trustedBy: "1K+ Learners",
    rating: "4.7 ★ average learner rating",
    priceStartingFrom: "₹4K",
    bgImage: "/courses-background/bgLightGreen.png",
    rightImage: "/course-details/backend-node.png",
    backgroundColor:
      "linear-gradient(120.24deg, #F1F5E4 -0.02%, #FFFFFF 100.01%)",
    borderColor:
      "radial-gradient(536.57% 191.9% at 0% -0.03%, #1E3E02 0%, #638B0B 43.47%, #C2E138 100%)",

    statsData: [...commonStats, { icon: <ClockIcon />, text: "6 Months" }],
    includedData: commonIncluded,
    faq: commonFaq,
    discoverCoursesData: commonDiscoverCourses,

    roadmapData: [
      {
        month: "Month 1",
        title: "JS & Node.js Foundations",
        topics: [
          "Learn JavaScript ES6+: arrow functions, async/await, destructuring.",
          "Master Node.js core: file system, event-driven architecture, HTTP/HTTPS.",
          "Practice Express.js: routing, middleware, building a basic REST API.",
          "Perform Async programming: Callbacks, Promises, async/await.",
        ],
      },
      {
        month: "Month 2",
        title: "PostgreSQL & NestJS Basics",
        topics: [
          "Use PostgreSQL: setup, CRUD queries, RESTful API integration.",
          "Practice NestJS: project setup, architecture (Modules, Controllers, Services).",
          "Learn Decorators, Guards, Middleware, Pipes, Interceptors in NestJS.",
          "Build a simple NestJS API, Dependency Injection, Services.",
        ],
      },
      {
        month: "Month 3",
        title: "NestJS + PostgreSQL Advanced",
        topics: [
          "Master TypeORM: entities, repositories, CRUD API with PostgreSQL.",
          "Explore Data validation (class-validator), exception filters in NestJS.",
          "Grasp JWT auth, Passport.js, Role-based access control (RBAC).",
          "Use WebSockets in Node.js: build a real-time chat system.",
        ],
      },
      {
        month: "Month 4",
        title: "MongoDB, Mongoose & NestJS",
        topics: [
          "Study MongoDB: setup, Mongoose schemas, CRUD, embed vs reference.",
          "Practice Data validation and middleware with Mongoose.",
          "Learn NestJS + MongoDB: schemas, CRUD ops, data transformation.",
          "Handle errors and transactions in MongoDB",
        ],
      },
      {
        month: "Month 5",
        title: "Advanced NestJS & API Deployment",
        topics: [
          "Master Advanced NestJS: custom decorators, pipes, Redis caching, WebSockets.",
          "Learn API optimisation: performance tuning, pagination, filtering, sorting.",
          "Deploy to AWS/Heroku, CI/CD (GitHub Actions, Jenkins), Nginx reverse proxy.",
        ],
      },
      {
        month: "Month 6",
        title: "Microservices Architecture & Final Project",
        topics: [
          "Practice Microservices with NestJS: RPC, RabbitMQ, multi-DB management.",
          "Build Final project: NestJS app with auth, third-party APIs, payment gateway.",
          "Perform Testing (unit, integration, e2e), optimization, and deployment. ",
        ],
      },
    ],

    skillsData: commonSkillData,
    includeDescription:
      "Build a Successful Career as a Web Developer - Backend (Node)",
  },

  "php-with-laravel-wordpress": {
    id: "php-with-laravel-wordpress",
    title: "PHP with Laravel/WordPress",
    variant: "6-Month Program",
    description:
      "Start with HTML and CSS, advance through PHP and MySQL, and master Laravel and WordPress to build complete, production-ready web applications.",
    trustedBy: "1K+ Learners",
    rating: "4.7 ★ average learner rating",
    priceStartingFrom: "₹4K",
    bgImage: "/courses-background/bgDarkPurple.png",
    rightImage: "/course-details/php-wordpress.png",
    backgroundColor:
      "linear-gradient(120.24deg, #E0E3E9 -0.02%, #FFFFFF 100.01%)",
    borderColor:
      "radial-gradient(536.57% 191.9% at 0% -0.03%, #2D0878 0%, #5318AA 43.47%, #B93FFF 100%)",

    statsData: [...commonStats, { icon: <ClockIcon />, text: "6 Months" }],
    includedData: commonIncluded,
    faq: commonFaq,
    discoverCoursesData: commonDiscoverCourses,

    roadmapData: [
      {
        month: "Month 1",
        title: "Frontend Foundations",
        topics: [
          "Learn HTML & CSS: tags, styling, complete Bootstrap basics, responsive design.",
          "Bootstrap: build a responsive website skeleton from scratch.",
          "Master JavaScript & jQuery: DOM integration, form validations, browser debugging.",
          "Integrate JavaScript functionality into live web pages.",
        ],
      },
      {
        month: "Month 2",
        title: "PHP, MySQL & WordPress Basics",
        topics: [
          "Master PHP fundamentals: strings, arrays, classes, functions, conditions, loops.",
          "MySQL: connecting and working with databases using PHP.",
          "Build a PHP + MySQL project with full CRUD operations.",
          "Grasp WordPress: installation, concepts, theme integration, plugin development.",
        ],
      },
      {
        month: "Month 3",
        title: "Laravel Fundamentals",
        topics: [
          "Learn Laravel: installation, MVC structure, core architecture overview.",
          "REST APIs and third-party API integration in Laravel.",
          "Build a Bootstrap-based website using Laravel from scratch.",
          "Implement Google & Facebook login and create user authentication APIs.",
        ],
      },
      {
        month: "Month 4",
        title: "Advanced Laravel & Project Work",
        topics: [
          "Advanced Laravel: queues, cron jobs, commands, service providers, data tables.",
          "Build and manage a custom Laravel package.",
          "Create a full Laravel project using Git for version control.",
          "Build and expose APIs for frontend use; implement CRUD with resources.",
        ],
      },
      {
        month: "Month 5",
        title: "Testing & Real-World Project Alignment",
        topics: [
          "PHP Unit: write feature and unit test cases for projects.",
          "Run and validate test cases on both server side and Laravel environment.",
          "Align with a real client project alongside team members.",
          "Guidance on code structure & production environment best practices.",
        ],
      },
      {
        month: "Month 6",
        title: "Final Project & Review",
        topics: [
          "Resource training, task assignment, and evaluation planning.",
          "Final project planning and full development cycle.",
          "Technical documentation and project report preparation",
        ],
      },
    ],

    skillsData: commonSkillData,
    includeDescription:
      "Build a Successful Career as a PHP Developer with Laravel/WordPress",
  },

  "mobile-app-development-react-native": {
    id: "mobile-app-development-react-native",
    title: "Mobile App Development - React Native",
    variant: "6-Month Program",
    description:
      "Learn JavaScript, TypeScript and React Native to build cross-platform mobile apps for Android & iOS.",
    trustedBy: "1K+ Learners",
    rating: "4.7 ★ average learner rating",
    priceStartingFrom: "₹4K",
    bgImage: "/courses-background/bgBlue.png",
    rightImage: "/course-details/react-native.png",
    backgroundColor:
      "linear-gradient(120.24deg, #EAFCFF -0.02%, #FFFFFF 100.01%)",
    borderColor:
      "radial-gradient(536.57% 191.9% at 0% -0.03%, #08467C 0%, #07A9CD 43.47%, #15CADA 100%)",

    statsData: [...commonStats, { icon: <ClockIcon />, text: "6 Months" }],
    includedData: commonIncluded,
    faq: commonFaq,
    discoverCoursesData: commonDiscoverCourses,

    roadmapData: [
      {
        month: "Month 1",
        title: "JS, TypeScript & React Native Intro",
        topics: [
          "Learn JavaScript: variables, functions, arrays, loops, classes, promises, async/await.",
          "Build a basic to-do list app using vanilla JavaScript.",
          "Practice TypeScript: types, interfaces, generics, enums, type safety.",
          "Integrate TypeScript with React Native; convert to-do app to TypeScript.",
        ],
      },
      {
        month: "Month 2",
        title: "UI, Navigation, Hooks & APIs",
        topics: [
          "React Native CLI & Expo: setup, JSX, components, props, state, lifecycle.",
          "Build counter and weather apps, Flexbox, stylesheets, inline styles.",
          "Use Navigation: Stack, Drawer, Tabs using react-navigation; hooks (useState, useEffect, custom).",
          "Learn Local storage (AsyncStorage, SQLite/Realm), REST APIs (Fetch, Axios), GraphQL (Apollo).",
          "Apply OpenWeather/News API to fetch and display live data.",
        ],
      },
      {
        month: "Month 3",
        title: "State Management & Geolocation",
        topics: [
          "State management: build a task management app, Context API, Redux, Zustand.",
          "Master Redux Toolkit RTK Query: data fetching, caching, invalidation, re-fetching.",
          "Learn Social login: Google Sign-In and Facebook Login integration.",
          "Geolocation: handle permissions, show user location on map, work with location data.",
        ],
      },
      {
        month: "Month 4",
        title: "Maps, Animations & Notifications",
        topics: [
          "Use Google Maps & Mapbox: markers, user locations, nearby places, gestures.",
          "Practice Animations: Animated API, React Native Reanimated 2.0, onboarding screens.",
          "Offline support: store API data locally, Redux Offline, Apollo Cache.",
          "Push notifications with Firebase Cloud Messaging (FCM) and OneSignal.",
        ],
      },
      {
        month: "Month 5",
        title: "Android, iOS, Testing & Deployment",
        topics: [
          "Learn Android: AndroidManifest, Gradle, ADB, linking libraries, permissions.",
          "Learn iOS: Info.plist, Cocoapods, signing, provisioning profiles, linking libraries.",
          "Testing: write tests for the task management app, Jest (unit), Detox (e2e).",
          "Build APK/IPA, set up store accounts, sign and publish to Play Store & App Store",
        ],
      },
      {
        month: "Month 6",
        title: "Final Project",
        topics: [
          "Build a full social media or e-commerce app integrating auth, maps, APIs, animations, push notifications, and store deployment.",
        ],
      },
    ],

    skillsData: commonSkillData,
    includeDescription:
      "Build a Successful Career as a Mobile App Developer - React Native",
  },

  "mobile-app-development-flutter": {
    id: "mobile-app-development-flutter",
    title: "Mobile App Development - Flutter",
    variant: "6-Month Program",
    description:
      "Build production-ready Android and iOS apps using Flutter, covering widgets, navigation, APIs, Firebase, animations, security and full app store deployment.",
    trustedBy: "1K+ Learners",
    rating: "4.7 ★ average learner rating",
    priceStartingFrom: "₹4K",
    bgImage: "/courses-background/bgDarkBlue.png",
    rightImage: "/course-details/flutter.png",
    backgroundColor:
      "linear-gradient(120.24deg, #EAF6FD -0.02%, #FFFFFF 100.01%)",
    borderColor:
      "radial-gradient(536.57% 191.9% at 0% -0.03%, #032164 0%, #077CCB 43.47%, #00C7EE 100%)",

    statsData: [...commonStats, { icon: <ClockIcon />, text: "6 Months" }],
    includedData: commonIncluded,
    faq: commonFaq,
    discoverCoursesData: commonDiscoverCourses,

    roadmapData: [
      {
        month: "Month 1",
        title: "Dart, Flutter & UI Basics",
        topics: [
          "Learn Dart: syntax, variables, data types, functions, OOP (classes, inheritance, polymorphism).",
          "Master Flutter architecture: widget tree, Stateless vs Stateful widgets, rendering.",
          "Use Basic widgets: Container, Text, Row, Column, Stack; simple layouts.",
          "Perfect User input: TextField, buttons, form validation; basic state management (setState).,",
        ],
      },
      {
        month: "Month 2",
        title: "Navigation, State & Networking",
        topics: [
          "Navigation: build a multi-screen app; navigator, routes, push/pop, named routes.",
          "ListView, GridView, dynamic lists; FutureBuilder & StreamBuilder for async data.",
          "State management: when & why to use each; InheritedWidget, Provider, setState.",
          "Build a weather/news app; HTTP requests, fetch and display REST API data in a list.",
        ],
      },
      {
        month: "Month 3",
        title: "Storage, Animations & State",
        topics: [
          "Local storage: store and retrieve API data offline; SharedPreferences, SQLite, Hive.",
          "Use Animations: implicit, explicit, AnimatedContainer, AnimatedOpacity, AnimationController.",
          "Build an animated onboarding screen.",
          "Learn Advanced state: BLoC, Redux, Riverpod; custom widgetslifecycle & composition.",
        ],
      },
      {
        month: "Month 4",
        title: "Firebase, Animations & Native",
        topics: [
          "Learn Advanced animations: tween, staggered, hero animations; gesture detection.",
          "Firebase: build an app with user auth & data storage; Auth, Firestore integration.",
          "Grasp Native features: platform channels, Flutter plugins (camera, GPS, sensors).",
          "Practice Performance profiling with Dart DevTools; optimise existing projects.",
        ],
      },
      {
        month: "Month 5",
        title: "UI, Auth, Security & Architecture",
        topics: [
          "Learn Material Design & Cupertino: theming, custom themes, CustomPainter for graphics.",
          "Explore Architecture patterns: MVVM, Clean Architecture; dependency injection (GetIt, Injectable).",
          "Use Auth: Firebase/OAuth (Google, Facebook); secure storage, SSL pinning, token sessions.",
          "Understand Advanced state: Provider, Riverpod, BLoC for large-scale app management.",
        ],
      },
      {
        month: "Month 6",
        title: "Testing, CI/CD & Deployment",
        topics: [
          "Practice Unit & widget testing (TDD), Dart DevTools for profiling, memory leak detection.",
          "Perfect Offline caching (SQLite/Hive), CI/CD (GitHub Actions, Codemagic, Bitrise).",
          "Generate APK/AAB (Android) & IPA (iOS); sign and deploy to Play Store & App Store.  ",
        ],
      },
    ],

    skillsData: commonSkillData,
    includeDescription:
      "Build a Successful Career as a Mobile App Developer - Flutter",
  },

  "quality-assurance-software-testing": {
    id: "quality-assurance-software-testing",
    title: "Quality Assurance - Software Testing",
    variant: "6-Month Program",
    description:
      "Learn to test, validate, and improve software quality for reliable, high-performing applications.",
    trustedBy: "1K+ Learners",
    rating: "4.7 ★ average learner rating",
    priceStartingFrom: "₹4K",
    bgImage: "/courses-background/bgPurple.png",
    rightImage: "/course-details/quality-assurance.png",
    backgroundColor:
      "linear-gradient(120.24deg, #F1E8FF -0.02%, #FFFFFF 100.01%)",
    borderColor:
      "radial-gradient(536.57% 191.9% at 0% -0.03%, #2D0878 0%, #5318AA 43.47%, #B93FFF 100%)",

    statsData: [...commonStats, { icon: <ClockIcon />, text: "6 Months" }],
    includedData: commonIncluded,
    faq: commonFaq,
    discoverCoursesData: commonDiscoverCourses,

    roadmapData: [
      {
        month: "Month 1",
        title: "Testing Fundamentals",
        topics: [
          "Software testing principles, types of testing and QA testing life cycle",
          "Role of QA in the software development process",
        ],
      },
      {
        month: "Month 2",
        title: "Manual Testing",
        topics: [
          "Write detailed test plans and test cases.",
          "Execute test cases, identify defects and report bugs effectively.",
        ],
      },
      {
        month: "Month 3",
        title: "Selenium & Test Automation",
        topics: [
          "Selenium WebDriver basics: writing and running test scripts",
          "Automate browser-based testing to validate UI functionality",
        ],
      },
      {
        month: "Month 4",
        title: "Automation Frameworks",
        topics: [
          "Explore automation framework structure and core components",
          "Build reusable test components and apply framework best practices",
        ],
      },
      {
        month: "Month 5",
        title: "End-to-End Testing",
        topics: [
          "Conduct end-to-end testing of real-world applications",
          "Simulate complete user journeys and workflows to validate system behaviour  ",
        ],
      },
      {
        month: "Month 6",
        title: "Capstone Project",
        topics: [
          "Perform a full QA cycle on a live website and submit a professional test report",
        ],
      },
    ],

    skillsData: commonSkillData,
    includeDescription:
      "Build a Successful Career in Quality Assurance - Software Testing",
  },

  "ui-ux-design": {
    id: "ui-ux-design",
    title: "UI/UX Design",
    variant: "6-Month Program",
    description:
      "Design intuitive, user-centred digital experiences by mastering research, wire-framing, visual design, and prototyping. ",
    trustedBy: "1K+ Learners",
    rating: "4.7 ★ average learner rating",
    priceStartingFrom: "₹4K",
    bgImage: "/courses-background/bgRed.png",
    rightImage: "/course-details/ui-ux.png",
    backgroundColor:
      "linear-gradient(120.24deg, #FAE4E2 -0.02%, #FFFFFF 100.01%)",
    borderColor:
      "radial-gradient(536.57% 191.9% at 0% -0.03%, #AB192D 0%, #E43D2D 43.47%, #FF634D 100%)",

    statsData: [...commonStats, { icon: <ClockIcon />, text: "6 Months" }],
    includedData: commonIncluded,
    faq: commonFaq,
    discoverCoursesData: commonDiscoverCourses,

    roadmapData: [
      {
        month: "Month 1",
        title: "Foundations of UI/UX & Design Thinking",
        topics: [
          "Understand core UI vs UX concepts and their real-world applications",
          "Learn user-centred design principles",
          "Explore the design thinking process (empathise, define, ideate, prototype, test)",
          "Analyse case studies to identify good vs poor design",
        ],
      },
      {
        month: "Month 2",
        title: "User Research & Journey Mapping",
        topics: [
          "Learn qualitative and quantitative research methods",
          "Conduct basic user research and gather insights",
          "Create user personas based on data",
          "Build user journey maps to identify pain points and opportunities",
        ],
      },
      {
        month: "Month 3",
        title: "Wireframing & Design Tools",
        topics: [
          "Understand low-fidelity vs high-fidelity wireframes",
          "Create wireframes for web/mobile interfaces",
          "Get hands-on with tools like Figma and Adobe XD",
          "Learn layout structuring and basic interaction design",
        ],
      },
      {
        month: "Month 4",
        title: "Visual UI Design Principles",
        topics: [
          "Master typography, colour theory, and spacing",
          "Understand visual hierarchy and consistency",
          "Design aesthetically pleasing and accessible interfaces",
          "Apply branding elements to UI screens",
        ],
      },
      {
        month: "Month 5",
        title: "Prototyping & Usability Testing",
        topics: [
          "Build interactive prototypes using design tools",
          "Learn usability testing methods and best practices",
          "Conduct testing sessions and gather feedback",
          "Iterate designs based on insights and usability issues",
        ],
      },
      {
        month: "Month 6",
        title: "Final Project & Presentation",
        topics: [
          "Work on a complete end-to-end UI/UX project",
          "Compile research, wireframes, UI screens, and prototypes",
          "Present design solutions with clear storytelling",
          "Receive feedback and refine portfolio-ready case study",
        ],
      },
    ],

    skillsData: commonSkillData,
    includeDescription: "Build a Successful Career as a UI/UX Designer",
  },

  "artificial-intelligence-with-python": {
    id: "artificial-intelligence-with-python",
    title: "Artificial Intelligence with Python",
    variant: "6-Month Program",
    description:
      "Build intelligent systems using Python, and master data handling, ML, and model deployment through hands-on, real-world projects.",
    trustedBy: "1K+ Learners",
    rating: "4.7 ★ average learner rating",
    priceStartingFrom: "₹4K",
    bgImage: "/courses-background/bgDarkBlue.png",
    rightImage: "/course-details/ai-python.png",
    backgroundColor:
      "linear-gradient(120.24deg, #F2F7FD -0.02%, #FFFFFF 100.01%)",
    borderColor:
      "radial-gradient(536.57% 191.9% at 0% -0.03%, #001A56 0%, #0D5198 43.47%, #43A5DE 100%)",

    statsData: [...commonStats, { icon: <ClockIcon />, text: "6 Months" }],
    includedData: commonIncluded,
    faq: commonFaq,
    discoverCoursesData: commonDiscoverCourses,

    roadmapData: [
      {
        month: "Month 1",
        title: "Python & Data Handling Foundations",
        topics: [
          "Refresh Python fundamentals for data science",
          "Work with NumPy for numerical operations",
          "Use Pandas for data manipulation and analysis",
          "Understand data structures and basic data workflows",
        ],
      },
      {
        month: "Month 2",
        title: "Data Cleaning & Preprocessing",
        topics: [
          "Handle missing and inconsistent data",
          "Perform data transformation and encoding",
          "Prepare datasets for machine learning models",
          "Understand feature scaling and preprocessing techniques",
        ],
      },
      {
        month: "Month 3",
        title: "Machine Learning Fundamentals",
        topics: [
          "Learn regression and classification concepts",
          "Build models using scikit-learn",
          "Train and test machine learning models",
          "Understand model performance basics",
        ],
      },
      {
        month: "Month 4",
        title: "Advanced Machine Learning Algorithms",
        topics: [
          "Explore Decision Trees and their applications",
          "Understand Support Vector Machines (SVM)",
          "Learn k-Nearest Neighbours (k-NN)",
          "Compare algorithms and identify use cases",
        ],
      },
      {
        month: "Month 5",
        title: "Model Evaluation & Optimisation",
        topics: [
          "Understand evaluation metrics (accuracy, precision, recall)",
          "Use confusion matrix and ROC curve analysis",
          "Evaluate and improve model performance",
          "Learn basic model tuning techniques",
        ],
      },
      {
        month: "Month 6",
        title: "AI Project & Deployment Basics",
        topics: [
          "Build an end-to-end machine learning project",
          "Apply data preprocessing, modelling, and evaluation",
          "Learn basics of model deployment",
          "Present a complete, project-ready solution",
        ],
      },
    ],

    skillsData: commonSkillData,
    includeDescription:
      "Launch a Successful Career in Artificial Intelligence with Python",
  },

  "data-science-with-python": {
    id: "data-science-with-python",
    title: "Data Science with Python",
    variant: "6-Month Program",
    description:
      "Build a strong foundation in Data Science with Python by learning to analyse data, uncover insights, and create production-level projects.",
    trustedBy: "1K+ Learners",
    rating: "4.7 ★ average learner rating",
    priceStartingFrom: "₹4K",
    bgImage: "/courses-background/bgYellow.png",
    rightImage: "/course-details/data-science-python.png",
    backgroundColor:
      "linear-gradient(120.24deg, #FFEBDE -0.02%, #FFFFFF 100.01%)",
    borderColor:
      "radial-gradient(536.57% 191.9% at 0% -0.03%, #9F2600 0%, #F88F00 43.47%, #FBBF0D 100%)",

    statsData: [...commonStats, { icon: <ClockIcon />, text: "6 Months" }],
    includedData: commonIncluded,
    faq: commonFaq,
    discoverCoursesData: commonDiscoverCourses,

    roadmapData: [
      {
        month: "Month 1",
        title: "Python & Environment Setup",
        topics: [
          "Set up data science environment and Jupyter Notebooks",
          "Learn Python fundamentals for data analysis",
          "Work with basic data structures and libraries",
          "Understand data handling workflows",
        ],
      },
      {
        month: "Month 2",
        title: "Exploratory Data Analysis (EDA)",
        topics: [
          "Explore datasets using Pandas",
          "Identify patterns, trends, and anomalies",
          "Perform data summarisation and basic analysis",
          "Develop data-driven thinking",
        ],
      },
      {
        month: "Month 3",
        title: "Data Visualisation",
        topics: [
          "Create charts using Matplotlib and Seaborn",
          "Learn best practices for visual storytelling",
          "Present insights clearly through visuals",
          "Understand different types of data plots",
        ],
      },
      {
        month: "Month 4",
        title: "Statistics for Data Science",
        topics: [
          "Learn descriptive and inferential statistics",
          "Apply statistical methods to analyse data",
          "Understand distributions and probability basics",
          "Draw meaningful conclusions from datasets",
        ],
      },
      {
        month: "Month 5",
        title: "Introduction to Machine Learning",
        topics: [
          "Understand supervised and unsupervised learning",
          "Build basic machine learning models",
          "Learn model training and prediction concepts",
          "Explore practical use cases",
        ],
      },
      {
        month: "Month 6",
        title: "Capstone Project",
        topics: [
          "Work on an end-to-end data science project",
          "Perform data cleaning, analysis, and modelling",
          "Evaluate model performance",
          "Present a complete, project-ready solution",
        ],
      },
    ],

    skillsData: commonSkillData,
    includeDescription:
      "Launch a Successful Career in Data Science with Python",
  },

  cybersecurity: {
    id: "cybersecurity",
    title: "Cybersecurity",
    variant: "6-Month Program",
    description:
      "Learn to protect systems, networks, and data from cyber threats through practical skills, real-world scenarios, and hands-on security techniques.",
    trustedBy: "1K+ Learners",
    rating: "4.7 ★ average learner rating",
    priceStartingFrom: "₹4K",
    bgImage: "/courses-background/bgDarkBlue.png",
    rightImage: "/course-details/cybersecurity.png",
    backgroundColor:
      "linear-gradient(120.24deg, #E9EFFA -0.02%, #FFFFFF 100.01%)",
    borderColor:
      "radial-gradient(536.57% 191.9% at 0% -0.03%, #152769 0%, #284EB3 43.47%, #5C97FB 100%)",

    statsData: [...commonStats, { icon: <ClockIcon />, text: "6 Months" }],
    includedData: commonIncluded,
    faq: commonFaq,
    discoverCoursesData: commonDiscoverCourses,

    roadmapData: [
      {
        month: "Month 1",
        title: "Cybersecurity Fundamentals",
        topics: [
          "Understand core cybersecurity concepts and terminology",
          "Learn about common threats (malware, phishing, ransomware)",
          "Explore types of hackers and attack vectors",
          "Get introduced to basic security principles (CIA triad)",
        ],
      },
      {
        month: "Month 2",
        title: "Networking & System Security",
        topics: [
          "Learn networking fundamentals (TCP/IP, DNS, HTTP/HTTPS)",
          "Understand network vulnerabilities and attack methods",
          "Secure operating systems (Windows/Linux basics)",
          "Introduction to firewalls and system hardening",
        ],
      },
      {
        month: "Month 3",
        title: "Ethical Hacking & Penetration Testing",
        topics: [
          "Understand ethical hacking concepts and methodologies",
          "Learn reconnaissance and scanning techniques",
          "Perform vulnerability assessment basics",
          "Introduction to penetration testing tools",
        ],
      },
      {
        month: "Month 4",
        title: "Application & Web Security",
        topics: [
          "Learn common web vulnerabilities (SQL injection, XSS, CSRF)",
          "Understand OWASP Top 10 risks",
          "Secure web applications and APIs",
          "Perform basic web security testing",
        ],
      },
      {
        month: "Month 5",
        title: "Security Operations & Incident Response",
        topics: [
          "Learn threat detection and monitoring basics",
          "Understand Security Operations Centre (SOC) workflows",
          "Introduction to incident response and forensics",
          "Analyse logs and identify suspicious activities",
        ],
      },
      {
        month: "Month 6",
        title: "Advanced Security & Capstone Project",
        topics: [
          "Explore cloud security and data protection basics",
          "Learn identity and access management (IAM)",
          "Work on a real-world cybersecurity project",
          "Prepare for certifications and career pathways",
        ],
      },
    ],

    skillsData: commonSkillData,
    includeDescription: "Launch a Successful Career in Cybersecurity",
  },

  "devops-with-cloud-computing": {
    id: "devops-with-cloud-computing",
    title: "DevOps with Cloud Computing",
    variant: "6-Month Program",
    description:
      "Learn to automate, deploy, and scale applications using DevOps practices and cloud platforms.",
    trustedBy: "1K+ Learners",
    rating: "4.7 ★ average learner rating",
    priceStartingFrom: "₹4K",
    bgImage: "/courses-background/bgDarkGreen.png",
    rightImage: "/course-details/devops-cloud-computing.png",
    backgroundColor:
      "linear-gradient(120.24deg, #E5FDF3 -0.02%, #FFFFFF 100.01%)",
    borderColor:
      "radial-gradient(536.57% 191.9% at 0% -0.03%, #052423 0%, #00874B 43.47%, #2EAD56 100%)",

    statsData: [...commonStats, { icon: <ClockIcon />, text: "6 Months" }],
    includedData: commonIncluded,
    faq: commonFaq,
    discoverCoursesData: commonDiscoverCourses,

    roadmapData: [
      {
        month: "Month 1",
        title: "Linux, AWS & Cloud",
        topics: [
          "Master Linux: distributions, file system, basic commands, user/group management.",
          "Learn System admin: process monitoring, cron jobs, package management (apt), firewalls (ufw).",
          "Understand Networking: IP addressing, DNS, SSH basics. ",
          "Use AWS: Regions, EC2, EBS, S3, IAM (roles, users, policies). ",
        ],
      },
      {
        month: "Month 2",
        title: "AWS Networking & Git",
        topics: [
          "Grasp AWS VPC: subnets, route tables, internet gateways, security groups, NACLs",
          "Practice Elastic Load Balancer (ELB), Auto Scaling Groups (ASG), Route 53 for DNS",
          "Learn Git: repositories, commits, branches, merges, feature branching workflows.",
          "Do Collaboration: pull requests, code reviews via GitHub/Bitbucket, conflict resolution.",
        ],
      },
      {
        month: "Month 3",
        title: "Terraform & Jenkins",
        topics: [
          "Learn Terraform: IaC basics, config files (providers, resources, variables), state management. .",
          "Apply configurations, update resources, use modules and outputs for reusable infra. ",
          "Use Jenkins: setup, continuous integration, Declarative and Scripted pipelines.",
          "Integrate Jenkins with GitHub/Bitbucket; automate tests, builds and deployments.",
        ],
      },
      {
        month: "Month 4",
        title: "GitHub Actions & Bitbucket",
        topics: [
          "Perform GitHub Actions: workflow syntax (YAML), automated testing, building and deploying apps.",
          "Understand Secrets and environment management in GitHub Actions. ",
          "Execute AWS and Docker integration for continuous deployment pipelines.",
          "Make Bitbucket Pipelines: YAML config, run tests/builds, manage environment variables. ",
        ],
      },
      {
        month: "Month 5",
        title: "Docker, Compose & Monitoring",
        topics: [
          "Grasp Docker: containers vs VMs, Dockerfiles, custom images, volumes, networks.",
          "Learn Advanced Docker: layering, caching, Docker Compose for multi-container apps.",
          "Master Prometheus: metrics scraping, Node Exporter, scrape targets, queries and alerts.",
          "Use Grafana: dashboards, panels, data sources; integrate with Prometheus for visualisation.",
        ],
      },
      {
        month: "Month 6",
        title: "Kubernetes, Security & DevOps",
        topics: [
          "Practice Kubernetes: Pods, Deployments, Services, clusters, nodes; Kubernetes vs Docker Swarm. ",
          "Learn Security: IAM, VPC, secrets management, container scanning, centralised logging.",
          "Perform CI/CD optimisation, disaster recovery, backup strategies, technical documentation.",
        ],
      },
    ],

    skillsData: commonSkillData,
    includeDescription:
      "Build a Successful Career in DevOps with Cloud Computing",
  },
};

export default developmentCourses;
