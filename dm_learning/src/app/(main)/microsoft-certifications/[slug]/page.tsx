import MicrosoftSlugPage from "@/components/certification-slug";
import { Metadata } from "next";

type Slug =
  | "ai-engineer"
  | "data-analyst"
  | "solutions-architect"
  | "devops-engineer"
  | "data-engineer"
  | "information-protection-administrator"
  | "security-operations-analyst"
  | "data-scientist"
  | "security-engineer"
  | "developer-(beginner)"
  | "developer-(intermediate)"
  | "functional-consultant";

const metadataMapping: Record<Slug, { metaTitle: string; metaDescription: string }> = {
  "ai-engineer": {
    metaTitle: "Microsoft Certification for AI Engineers",
    metaDescription:
      "Build a solid foundation as an AI engineer with Microsoft certification. Learn to work with Azure AI Services, NLP, and computer vision to grow professionally.",
  },
  "data-analyst": {
    metaTitle: "Microsoft Certification for Data Analysts",
    metaDescription:
      "Learn data preparation and modeling with Power BI through Microsoft data analyst certification. Gain practical skills and earn certification with DMLearning.",
  },
  "solutions-architect": {
    metaTitle: "Microsoft Certification for Solutions Architects",
    metaDescription:
      "Get certified as a Microsoft Solutions Architect. Master designing identity, governance, business continuity, and monitoring solutions in Azure environments.",
  },
  "developer-(beginner)": {
    metaTitle: "Microsoft Certification for Developers | Build Core Skills",
    metaDescription:
      "Get certified as a Microsoft Developer. Learn C#, build web apps, backend APIs, microservices, and mobile apps to build a solid foundation for your career.",
  },
  "developer-(intermediate)": {
    metaTitle: "Microsoft Certification for Developers | Build with Azure",
    metaDescription:
      "Advance your development skills with Microsoft certification for developers. Master Azure App Services, Functions, and Blob storage to build cloud solutions.",
  },
  "devops-engineer": {
    metaTitle: "Microsoft Certification for DevOps Engineers",
    metaDescription:
      "Become a Microsoft-certified DevOps engineer. Learn CI with Azure Pipelines, GitHub Actions, and release strategy design for efficient software delivery.",
  },
  "data-engineer": {
    metaTitle: "Microsoft Certification for Data Engineers",
    metaDescription:
      "Become a Microsoft-certified Data Engineer. Learn to perform data engineering tasks with Azure Synapse SQL and Apache Spark pools for powerful data solutions.",
  },

  "information-protection-administrator": {
    metaTitle: "Microsoft Certification for Data Protection Administrators",
    metaDescription:
      "Become a Microsoft-certified Information Protection Administrator. Learn data protection, loss prevention, and lifecycle management in Microsoft 365.",
  },
  "security-operations-analyst": {
    metaTitle: "Microsoft Certification for Security Operations Analysts",
    metaDescription:
      "Become a Microsoft-certified Security Operations Analyst. Learn to mitigate threats using Microsoft Defender XDR, Purview, and Defender for Endpoint",
  },
  "data-scientist": {
    metaTitle: "Microsoft Certification for Data Scientists",
    metaDescription:
      "Become a Microsoft-certified Data Scientist. Master Azure Machine Learning tools to experiment, configure workspaces, and build innovative data science models.",
  },

  "security-engineer": {
    metaTitle: "Microsoft Certification for Security Engineers",
    metaDescription:
      "Become a Microsoft Certified Security Engineer. Learn to protect organizations and systems against vulnerabilities, security incidents and persistent threats",
  },
  "functional-consultant": {
    metaTitle: "Microsoft Certification for Functional Consultant",
    metaDescription:
      "Become a Microsoft certified functional consultant. Learn Dynamics 365, Power Platform, and more, and earn certification to excel as a functional consultant.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: Slug }>;
}): Promise<Metadata> {
  const resolvedParams = await params;

  const { slug } = resolvedParams;

  const pageData = metadataMapping[slug] || {
    metaTitle: "Microsoft Certification",
    metaDescription: "Microsoft Certifications Courses",
  };

  return {
    title: pageData.metaTitle,
    description: pageData.metaDescription,
    openGraph: {
      title: pageData.metaTitle,
      description: pageData.metaDescription,
    },
  };
}

const Page = () => {
  return <MicrosoftSlugPage />;
};

export default Page;
