'use client';
import MicrosoftCoursesCertifications from '@/components/microsoft-courses-certifications';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface PageData {
  title: string;
  description: string;
  descImage: string;
  image: string;
  secondSectionTitle: string;
  secondSectionDescription: string;
  allYouNeedToDo: (
    | {
        title: string;
        content: {
          image: string;
          title: string;
          width: number;
          height: number;
          description: string;
        }[];
      }
    | {
        image: string;
        title: string;
        width: number;
        height: number;
        description: string;
      }
  )[];
}

type Slug =
  | 'ai-engineer'
  | 'data-analyst'
  | 'solutions-architect'
  | 'devops-engineer'
  | 'data-engineer'
  | 'information-protection-administrator'
  | 'security-operations-analyst'
  | 'data-scientist'
  | 'security-engineer'
  | 'developer-(beginner)'
  | 'developer-(intermediate)'
  | 'functional-consultant';

export const metadataMapping: Record<Slug, PageData> = {
  'ai-engineer': {
    title: 'Training for AI Engineers',
    description: 'Microsoft Learn helps you discover the tools and skills you need to become an AI Engineer.',
    descImage: '/ai-dec-image.png',
    image: '/ai-engineer-banner.png',
    secondSectionTitle: 'What is an AI engineer?',
    secondSectionDescription:
      'Artificial intelligence (AI) engineers are responsible for developing, programming and training the complex networks of algorithms that make up AI so that they can function like a human brain. This role requires combined expertise in software development, programming, data science and data engineering. Though this career is related to data engineering, AI engineers are rarely required to write the code that develops scalable data sharing.',
    allYouNeedToDo: [
      {
        image: '/all-you-need-to-know-2.png',
        width: 200,
        height: 162,
        title: 'Get started with Azure AI Services',
        description: '9 hr 40 min',
      },
      {
        image: '/all-you-need-to-know-1.png',
        width: 200,
        height: 174,
        title: 'Develop natural language processing solutions with Azure AI Services',
        description: '9 hr 46 min',
      },
      {
        image: '/all-you-need-to-know-3.png',
        width: 200,
        height: 155,
        title: 'Create computer vision solutions with Azure AI Vision',
        description: '7 hr 34 min',
      },
      {
        image: '/certificate.png',
        width: 231,
        height: 163,
        title: 'Get certified with DMLearning',
        description: '',
      },
    ],
  },
  'data-analyst': {
    title: 'Training for Data Analysts',
    description: 'Microsoft Learn helps you discover the tools and skills you need to become a data analyst.',
    image: '/data-analyst-banner.png',
    descImage: '/data-analyst-dec.png',
    secondSectionTitle: 'What is a data analyst?',
    secondSectionDescription:
      "A data analyst enables businesses to maximize the value of their data assets through visualization and reporting tools. They're also responsible for profiling, cleaning, and transforming data. Their responsibilities also include designing and building scalable and effective data models, and enabling and implementing the advanced analytics capabilities into reports for analysis. A data analyst works with the pertinent stakeholders to identify appropriate and necessary data and reporting requirements, and then they're tasked with turning raw data into relevant and meaningful insights.",
    allYouNeedToDo: [
      {
        image: '/data-analytics-1.png',
        width: 200,
        height: 164,
        title: 'Get started with Microsoft data analytics',
        description: '3 hr 23 min',
      },
      {
        image: '/data-analytics-2.png',
        title: 'Prepare data for analysis with Power BI',
        width: 200,
        height: 174,
        description: '5 hr 47 min',
      },
      {
        image: '/data-analytics-3.png',
        title: 'Model data with Power BI',
        width: 200,
        height: 140,
        description: '9 hr 56 min',
      },
      {
        image: '/certificate.png',
        width: 231,
        height: 163,
        title: 'Get certified with DMLearning',
        description: '',
      },
    ],
  },

  'solutions-architect': {
    title: 'Training for solutions architects',
    description:
      'Microsoft Learn helps you discover the content and gain the experience you need to help you succeed as a solutions architect.',
    image: '/solution-banner.png',
    descImage: '/soln-architect-dec.png',
    secondSectionTitle: 'What is a solutions architect?',
    secondSectionDescription:
      'Solutions architects are a customer-facing role, owning the overall technical relationship and strategy between the customer and organization. They lead architectural design sessions, develop proof of concepts/pilots, implement projects, and deliver ongoing refinement and enhancement. Responsibilities for this role include advising stakeholders and translating business requirements into designs for secure, scalable, and reliable solutions.',

    allYouNeedToDo: [
      {
        image: '/soln-architect-1.png',
        title: 'AZ-305 Microsoft Azure Architect Design Prerequisites',
        width: 200,
        height: 164,
        description: '7 hr 19 min',
      },
      {
        image: '/soln-architect-3.png',
        title: 'AZ-305: Design identity, governance, and monitor solutions',
        width: 200,
        height: 174,
        description: '5 hr 5 min',
      },
      {
        image: '/soln-architect-2.png',
        title: 'AZ-305: Design business continuity solutions',
        width: 200,
        height: 140,
        description: '3 hr 46 min',
      },
      {
        image: '/certificate.png',
        width: 231,
        height: 163,
        title: 'Get certified with DMLearning',
        description: '',
      },
    ],
  },

  'developer-(beginner)': {
    title: 'Training for Developers',
    description: 'Microsoft Learn helps you discover the tools and skills you need to become a developer.',
    image: '/developer-banner.png',
    descImage: '/developer-dec.png',
    secondSectionTitle: 'What is a developer?',
    secondSectionDescription:
      "As a developer you leverage your end-to-end technical expertise in large scale distributed systems' infrastructure, code, inter- and intra-service dependencies, and operations to develop and improve the reliability, performance, efficiency, latency, and scalability of services and/or products operating at scale proactively and continuously. This role includes advisory on code optimization, sharing expertise and insights drawn from working across related services or products, and participating in incident response throughout development and operations lifecycles.",
    allYouNeedToDo: [
      {
        title: 'Learn C#',
        content: [
          {
            image: '/developer-1.png',
            title: 'Write your first code using C# (Get started with C#, Part 1)',
            width: 200,
            height: 164,
            description: '5 hr 45 min',
          },
          {
            image: '/developer-2.png',
            title: 'Create and run simple C# console applications (Get started with C#, Part 2)',
            width: 200,
            height: 164,
            description: '7 hr 30 min',
          },
          {
            image: '/developer-3.png',
            title: 'Add logic to C# console applications (Get started with C#, Part 3)',
            width: 200,
            height: 176,
            description: '7 hr 30 min',
          },
          {
            image: '/developer-4.png',
            title: 'Work with variable data in C# console applications (Get started with C#, Part 4)',
            width: 200,
            height: 164,
            description: '7 hr 30 min',
          },
          {
            image: '/developer-5.png',
            title: 'Create methods in C# console applications (Get started with C#, Part 5)',
            width: 200,
            height: 164,
            description: '5 hr 30 min',
          },
          {
            image: '/certificate.png',
            width: 231,
            height: 163,
            title: 'Get certified with DMLearning',
            description: '',
          },
        ],
      },
      {
        title: 'Web Apps',
        content: [
          {
            image: '/webapps1.png',
            title: 'Build web apps with ASP.NET Core for beginners',
            width: 171,
            height: 164,
            description: '4 hr 33 min',
          },
          {
            image: '/webapps2.png',
            title: 'Create a web UI with ASP.NET Core',
            width: 200,
            height: 174,
            description: '1 hr 15 min',
          },
          {
            image: '/webapps3.png',
            title: 'Build your first web app with Blazor',
            width: 200,
            height: 174,
            description: '1 hr 15 min',
          },
          {
            image: '/certificate.png',
            width: 231,
            height: 163,
            title: 'Get certified with DMLearning',
            description: '',
          },
        ],
      },
      {
        title: 'Backend APIs and Microservices',
        content: [
          {
            image: '/backend-api-1.png',
            title: 'Understand ASP.NET Core fundamentals',
            width: 146,
            height: 126,
            description: '3 hr 22 min',
          },
          {
            image: '/backend-api-2.png',
            title: 'Create cloud-native apps and services with .NET and ASP.NET Core',
            width: 200,
            height: 140,
            description: '6 hr 25 min',
          },
          {
            image: '/certificate.png',
            width: 231,
            height: 163,
            title: 'Get certified with DMLearning',
            description: '',
          },
        ],
      },
      {
        title: 'Mobile & Desktop Apps',
        content: [
          {
            image: '/mobile-1.png',
            title: 'Build mobile and desktop apps with .NET MAUI',
            width: 140,
            height: 116,
            description: '8 hr 22 min',
          },
          {
            image: '/mobile-2.png',
            title: 'Choose the best UI framework for a native Windows development project',
            width: 200,
            height: 140,
            description: '1 hr 10 min',
          },
          {
            image: '/certificate.png',
            width: 231,
            height: 163,
            title: 'Get certified with DMLearning',
            description: '',
          },
        ],
      },
    ],
  },

  'developer-(intermediate)': {
    title: 'Training for Developers',
    description: 'Microsoft Learn helps you discover the tools and skills you need to become a developer.',
    image: '/developer-banner.png',
    descImage: '/developer-inter-dec.png',
    secondSectionTitle: 'What is a developer?',
    secondSectionDescription:
      "As a developer you leverage your end-to-end technical expertise in large scale distributed systems' infrastructure, code, inter- and intra-service dependencies, and operations to develop and improve the reliability, performance, efficiency, latency, and scalability of services and/or products operating at scale proactively and continuously. This role includes advisory on code optimization, sharing expertise and insights drawn from working across related services or products, and participating in incident response throughout development and operations lifecycles.",
    allYouNeedToDo: [
      {
        image: '/developer-intermediate-1.png',
        title: 'AZ-204: Implement Azure App Service web apps',
        width: 192,
        height: 154,
        description: '7 hr 45 min',
      },
      {
        image: '/developer-intermediate-2.png',
        title: 'AZ-204: Implement Azure Functions',
        width: 200,
        height: 174,
        description: '8 hr 33 min',
      },
      {
        image: '/developer-intermediate-3.png',
        title: 'AZ-204: Develop solutions that use Blob storage',
        width: 155,
        height: 150,
        description: '8 hr 22 min',
      },
      {
        image: '/certificate.png',
        width: 231,
        height: 163,
        title: 'Get certified with DMLearning',
        description: '',
      },
    ],
  },

  'devops-engineer': {
    title: 'Training for DevOps Engineers',
    description: 'Microsoft Learn helps you discover the tools and skills you need to become a DevOps engineer.',
    image: '/devops-banner.png',
    descImage: '/devops-dec.png',
    secondSectionTitle: 'What is a DevOps engineer?',
    secondSectionDescription:
      'A DevOps engineer is a developer or infrastructure administrator who also has subject matter expertise in working with people, processes, and products to enable continuous delivery of value in organizations. The DevOps engineers assists in designing and implementing strategies for collaboration, code, infrastructure, source control, security, compliance, continuous integration, testing, delivery, monitoring, and feedback.',
    allYouNeedToDo: [
      {
        image: '/devops-1.png',
        title: 'AZ-400: Development for enterprise DevOps',
        width: 200,
        height: 164,
        description: '8 hr 45 min',
      },
      {
        image: '/devops-2.png',
        title: 'AZ-400: Implement CI with Azure Pipelines and GitHub Actions',
        width: 200,
        height: 174,
        description: '8 hr 33 min',
      },
      {
        image: '/devops-3.png',
        title: 'AZ-400: Design and implement a release strategy',
        width: 200,
        height: 140,
        description: '8 hr 22 min',
      },
      {
        image: '/certificate.png',
        width: 231,
        height: 163,
        title: 'Get certified with DMLearning',
        description: '',
      },
    ],
  },

  'data-engineer': {
    title: 'Training for Data Engineers',
    description: 'Microsoft Learn helps you discover the tools and skills you need to become a data engineer.',
    image: '/data-engineer-banner.png',
    descImage: '/data-engineer-dec.png',
    secondSectionTitle: 'What is a data engineer?',
    secondSectionDescription:
      'A data engineer integrates, transforms, and consolidates data from various structured and unstructured data systems into structures that are suitable for building analytics solutions. The data engineer also helps design and support data pipelines and data stores that are high-performing, efficient, organized, and reliable, given a specific set of business requirements and constraints.',
    allYouNeedToDo: [
      {
        image: '/data-engineer-1.png',
        title: 'Get started with data engineering on Azure',
        width: 200,
        height: 164,
        description: '4 hr 18 min',
      },
      {
        image: '/data-engineer-2.png',
        title: 'Build data analytics solutions using Azure Synapse serverless SQL pools',
        width: 200,
        height: 174,
        description: '5 hr 17 min',
      },
      {
        image: '/data-engineer-3.png',
        title: 'Perform data engineering with Azure Synapse Apache Spark Pools',
        width: 200,
        height: 178,
        description: '5 hr 10 min',
      },
      {
        image: '/certificate.png',
        width: 231,
        height: 163,
        title: 'Get certified with DMLearning',
        description: '',
      },
    ],
  },

  'information-protection-administrator': {
    title: 'Training for Information Protection Administrators',
    description:
      'Microsoft Learn helps you discover the tools and skills you need to become an information protection administrator.',
    image: '/ipa-banner.png',
    descImage: '/ipa-dec.png',
    secondSectionTitle: 'What is an information protection administrator?',
    secondSectionDescription:
      'The Microsoft information protection administrator plans and implements controls that meet organizational information protection and governance requirements by using Microsoft 365 information protection services. This person is responsible for translating information protection requirements and controls into technical implementation.',
    allYouNeedToDo: [
      {
        image: '/ipa-1.png',
        title: 'SC-400: Implement Information Protection in Microsoft 365',
        width: 200,
        height: 154,
        description: '4 hr 18 min',
      },
      {
        image: '/ipa-2.png',
        title: 'SC-400: Implement Data Loss Prevention',
        width: 200,
        height: 130,
        description: '5 hr 17 min',
      },
      {
        image: '/ipa-3.png',
        title: 'SC-400: Implement Data Lifecycle and Records Management',
        width: 200,
        height: 150,
        description: '5 hr 10 min',
      },
      {
        image: '/certificate.png',
        width: 231,
        height: 163,
        title: 'Get certified with DMLearning',
        description: '',
      },
    ],
  },

  'security-operations-analyst': {
    title: 'Training for Security Operations Analysts',
    description:
      'Microsoft Learn helps you discover the tools and skills you need to become a security operations analyst.',
    image: '/security-operation-banner.png',
    descImage: '/security-analyst-dec.png',
    secondSectionTitle: 'What is an security operations analyst?',
    secondSectionDescription:
      'Your responsibility is to reduce organizational risk by rapidly remediating active attacks in the environment, advising on improvements to threat protection practices, and referring violations of organizational policies to appropriate stakeholders.',
    allYouNeedToDo: [
      {
        image: '/security-operational-1.png',
        title: 'SC-200: Mitigate threats using Microsoft Defender XDR',
        width: 200,
        height: 164,
        description: '4 hr 18 min',
      },
      {
        image: '/security-operational-2.png',
        title: 'SC-200: Mitigate threats using Microsoft Purview',
        width: 200,
        height: 174,
        description: '5 hr 17 min',
      },
      {
        image: '/security-operational-3.png',
        title: 'SC-200: Mitigate threats using Microsoft Defender for Endpoint',
        width: 200,
        height: 150,
        description: '5 hr 10 min',
      },
      {
        image: '/certificate.png',
        width: 231,
        height: 163,
        title: 'Get certified with DMLearning',
        description: '',
      },
    ],
  },

  'data-scientist': {
    title: 'Training for Data Scientists',
    description: 'Microsoft Learn helps you discover the tools and skills you need to become a data scientist.',
    image: '/data-scientist-banner.png',
    descImage: '/data-sci-dec.png',
    secondSectionTitle: 'What is a data scientist?',
    secondSectionDescription:
      'A data scientist is a data expert who helps collect, analyze and interpret large amounts of data in order to solve complex business problems. They combine statistics, computer science and business acumen to help an organization understand more about itself and achieve its goals. Oftentimes this involves taking messy, unstructured data from a multitude of sources and devising methods for making sense of it, using machine learning, artificial intelligence, and statistical analysis in order to uncover trends and challenge existing assumptions.',
    allYouNeedToDo: [
      {
        image: '/data-scientist-1.png',
        title: 'Explore and configure the Azure Machine Learning workspace',
        width: 200,
        height: 164,
        description: '4 hr 18 min',
      },
      {
        image: '/data-scientist-2.png',
        title: 'Experiment with Azure Machine Learning',
        width: 200,
        height: 174,
        description: '5 hr 17 min',
      },
      {
        image: '/certificate.png',
        width: 231,
        height: 163,
        title: 'Get certified with DMLearning',
        description: '',
      },
    ],
  },

  'security-engineer': {
    title: 'Training for Security Engineers',
    description: 'Microsoft Learn helps you discover the tools and skills you need to become a security engineer.',
    image: '/data-analyst-banner.png',
    descImage: '/security-dec.png',
    secondSectionTitle: 'What is an security engineer?',
    secondSectionDescription:
      'Security engineers are responsible for protecting organizations and systems against vulnerabilities, security incidents and persistent threats. They perform many functions including developing and implementing secure network solutions, responding to security escalations, completing assessments and penetration testing, managing audits and security technology systems, and architecting secure systems.',
    allYouNeedToDo: [
      {
        image: '/security-eng-1.png',
        title: 'AZ-500: Manage identity and access',
        width: 200,
        height: 164,
        description: '4 hr 18 min',
      },
      {
        image: '/security-eng-2.png',
        title: 'AZ-500: Secure networking',
        width: 200,
        height: 174,
        description: '5 hr 17 min',
      },
      {
        image: '/security-eng-3.png',
        title: 'AZ-500: Secure compute, storage, and databases',
        width: 200,
        height: 140,
        description: '5 hr 17 min',
      },
      {
        image: '/certificate.png',
        width: 231,
        height: 163,
        title: 'Get certified with DMLearning',
        description: '',
      },
    ],
  },

  'functional-consultant': {
    title: 'Functional Consultant',
    description:
      "You're a domain expert who helps others implement the latest technology solutions to meet their needs. Take the training to develop the skills and gain the expertise needed to become a successful functional consultant.",
    image: '/functional-con-banner.png',
    descImage: '/functional-dec.png',
    secondSectionTitle: 'What is a functional consultant?',
    secondSectionDescription:
      'Functional consultants are domain experts who help others implement the latest technology solutions to meet their needs. They help people and organizations work through complex business challenges and create elegant solutions that drive success. In addition, they serve as a bridge between business problems and technical solutions. Explore the Microsoft Learn official collection below to discover the skills and gain the expertise needed to become a successful functional consultant.',
    allYouNeedToDo: [
      {
        image: '/func-consultant-1.png',
        title: 'Microsoft Certified: Dynamics 365 Finance Functional Consultant Associate',
        width: 200,
        height: 164,
        description: '4 hr 18 min',
      },
      {
        image: '/func-consultant-2.png',
        title: 'Microsoft Certified: Dynamics 365 Supply Chain Management Functional Consultant Associate',
        width: 200,
        height: 174,
        description: '5 hr 17 min',
      },
      {
        image: '/func-consultant-3.png',
        title: 'Microsoft Certified: Dynamics 365 Supply Chain Management Functional Consultant Expert',
        width: 200,
        height: 140,
        description: '5 hr 17 min',
      },
      {
        image: '/func-consultant-4.png',
        title: 'Microsoft Certified: Power Platform Functional Consultant Associate',
        width: 200,
        height: 140,
        description: '5 hr 17 min',
      },
      {
        image: '/func-consultant-5.png',
        title: 'Microsoft Certified: Dynamics 365 Business Central Functional Consultant Associate',
        width: 200,
        height: 140,
        description: '5 hr 17 min',
      },
      {
        image: '/func-consultant-6.png',
        title: 'Microsoft Certified: Dynamics 365 Customer Service Functional Consultant Associate',
        width: 200,
        height: 140,
        description: '5 hr 17 min',
      },
      {
        image: '/certificate.png',
        width: 231,
        height: 163,
        title: 'Get certified with DMLearning',
        description: '',
      },
    ],
  },
};

const MicrosoftSlugPage = () => {
  const params = useParams();
  const slug = params.slug as Slug | undefined;

  const [pageData, setPageData] = useState<PageData | null>(null);

  useEffect(() => {
    if (slug) {
      setPageData(metadataMapping[slug]);
    }
  }, [slug]);

  if (!pageData) return;

  return <MicrosoftCoursesCertifications data={pageData} />;
};

export default MicrosoftSlugPage;
