export const webinarConfig = {
  "top-1-percent-students-webinar": {
    title: "Top 1% Students Webinar | DMLearning",
    description:
      "Master Modern AI & Advanced Intelligence in 60 Minutes. From ChatGPT to Agentic Systems — understand what is really happening, the skills you need today, and how to position yourself.",
  },
  "ai-masterclass": {
    title: "Top-1-percent-students-webinar | DMLearning",
    description:
      "Master Modern AI & Advanced Intelligence in 60 Minutes. Live Webinar — From ChatGPT to Agentic Systems.",
  },
};

export type WebinarSlug = keyof typeof webinarConfig;
export const webinarSlugs = Object.keys(webinarConfig) as WebinarSlug[];
