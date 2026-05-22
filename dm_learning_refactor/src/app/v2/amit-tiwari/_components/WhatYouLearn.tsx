"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "@/components/ui/modal";
import CounsellingForm from "./CounsellingForm";

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M2 6L5 9L10 3"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ up = false }: { up?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={`text-at-cta${up ? " rotate-180" : ""}`}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface Month {
  label: string;
  title: string;
  badge: string;
  sessions?: number;
  outcome?: string;
  description?: string;
  topics?: string[];
  tools?: string[];
  projectTitle?: string;
  projectDesc?: string;
}

const MONTHS: Month[] = [
  {
    label: "Foundation · Beginner",
    title: "Digital Marketing Basics",
    badge: "Month 01",
    sessions: 12,
    outcome: "Build a website + write SEO content",
    topics: [
      "Digital Marketing orientation, jargon, sales funnel & 4Ps/7Ps",
      "Foundations of Artificial Intelligence (ChatGPT, Claude basics)",
      "Graphic design for websites & social media (Canva)",
      "Website planning - domains, hosting, DNS, browsers",
      "WordPress + Elementor - build pages, navigation, mobile-first design",
      "Website plugins - chatbot, lead form, WhatsApp button",
      "Introduction to Search Engines & SEO ranking factors",
      "Keyword research & search-intent mapping",
    ],
    tools: [
      "WordPress",
      "Elementor",
      "Ubersuggest",
      "Canva",
      "ChatGPT",
      "GoDaddy",
    ],
    projectTitle: "Month 1 Project",
    projectDesc:
      "Create a fully functional blog + complete a basic SEO audit on a live page.",
  },
  {
    label: "Level: Beginner+",
    title: "SEO + Social Media Mastery (AI Powered)",
    badge: "Month 02",
    sessions: 12,
    outcome: "Rank content on Google, grow organic social following",
    topics: [
      "Technical SEO: site speed, Core Web Vitals, sitemaps",
      "Google Search Console setup & analysis",
      "Backlink building: white hat strategies",
      "Instagram Marketing - Reels, hashtags, algorithm",
      "Facebook Page & Group marketing",
      "YouTube channel setup & video SEO",
      "LinkedIn for personal branding & B2B",
      "Content Calendar creation (30-day plan)",
    ],
    tools: [
      "Google Search Console",
      "SEMrush (free)",
      "Meta Business Suite",
      "YouTube Studio",
      "Buffer",
      "Canva Pro",
      "Notion",
    ],
    projectTitle: "Month 2 Project",
    projectDesc:
      "Create a Social Media Calendar and implement On-Page SEO strategies.",
  },
  {
    label: "Level: Intermediate",
    title: "Paid Advertising & PPC · Level: Intermediate",
    badge: "Month 03",
    sessions: 12,
    outcome: "Set up & manage paid campaigns with real budgets",
    topics: [
      "Introduction to PPC: how ad auctions work",
      "Google Search Ads: structure, match types, extensions",
      "Google Display & YouTube Ads",
      "Meta Ads Manager - Facebook & Instagram campaigns",
      "Custom audiences, lookalike, and retargeting",
      "Ad copywriting - hook, body, CTA frameworks",
      "Landing pages for lead generation",
      "Budget planning, bidding strategies, ROAS",
    ],
    tools: [
      "Google Ads",
      "Meta Ads Manager",
      "Canva",
      "Carrd",
      "Unbounce",
      "Google Analytics",
    ],
    projectTitle: "Month 3 Project",
    projectDesc: "Run and optimize a live ₹500 Google Ads campaign.",
  },
  {
    label: "Level: Intermediate+",
    title: "Data, Email & Automation · Level: Intermediate+",
    badge: "Month 04",
    sessions: 12,
    outcome: "Track performance, automate campaigns, improve conversions",
    topics: [
      "Google Analytics 4: setup, events, goals",
      "Google Tag Manager basics",
      "Email marketing: list building, segmentation",
      "Campaign creation - subject lines, CTAs, design",
      "Email automation & drip sequences",
      "Conversion Rate Optimisation (CRO) & heatmaps",
      "Marketing funnel mapping (TOFU/MOFU/BOFU)",
      "Google Data Studio dashboards & reporting",
      "Mobile Marketing",
    ],
    tools: [
      "GA4",
      "Google Tag Manager",
      "Mailchimp",
      "HubSpot Free",
      "Hotjar",
      "Looker Studio",
      "WhatsApp Business",
    ],
    projectTitle: "Month 4 Project",
    projectDesc:
      "Create an email drip sequence and build a GA4 analytics dashboard.",
  },
  {
    label: "Level: Advanced",
    title: "E-Commerce + AI Marketing · Level: Advanced",
    badge: "Month 05",
    sessions: 12,
    outcome: "Market products online, use AI to 10x productivity",
    topics: [
      "E-Commerce landscape in India: Amazon, Flipkart, Shopify",
      "Product listing optimization - titles, images, A+ content",
      "Performance marketing for e-commerce (Shopping Ads)",
      "Meta Catalog & dynamic product ads",
      "Influencer marketing - micro vs macro, ROI",
      "AI tools: Claude, Meta Ads, Hostinger and more",
      "Video marketing & Reels strategy",
      "Online Reputation Management (ORM)",
      "App Marketing & ASO basics",
    ],
    tools: [
      "Shopify",
      "Amazon Seller Central",
      "Meta Catalog",
      "ChatGPT",
      "Canva AI",
      "Jasper",
      "CapCut",
      "Google My Business",
    ],
    projectTitle: "Month 5 Project",
    projectDesc:
      "Plan and execute an e-commerce product launch mini-campaign.",
  },
  {
    label: "Level: Pro",
    title: "PRO & PLACEMENT  ·  Level: PRO",
    badge: "Month 06",
    sessions: 12,
    outcome: "Job-ready, freelance-ready, agency-ready",
    topics: [
      "Full-funnel 360° campaign strategy",
      "Digital marketing for local businesses",
      "Freelancing - platforms, pricing, proposals",
      "Portfolio building - case studies, personal brand",
      "Agency model - client management, retainers",
      "Resume + LinkedIn optimization for DM jobs",
      "Interview preparation - mock rounds",
      "Emerging trends 2025 - AI, voice, short video",
      "CAPSTONE: Full campaign presentation",
    ],
    tools: [
      "All tools",
      "Upwork",
      "Fiverr",
      "Notion",
      "LinkedIn",
      "Canva",
      "Google Slides",
    ],
    projectTitle: "Month 6 Project",
    projectDesc:
      "Develop and present a complete 360° digital marketing campaign.",
  },
];

const INITIAL_COUNT = 3;

export default function WhatYouLearn() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    function onUnlocked() {
      setShowAll(true);
      setIsModalOpen(false);
    }
    window.addEventListener("curriculum-unlocked", onUnlocked);
    return () => window.removeEventListener("curriculum-unlocked", onUnlocked);
  }, []);

  const visibleMonths = showAll ? MONTHS : MONTHS.slice(0, INITIAL_COUNT);

  return (
    <section id="programs" className="py-12 xl:py-25">
      <div className="px-6 xl:px-0 flex flex-col gap-6 xl:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span className="text-at-cta text-lg font-medium uppercase tracking-wide">
            6-Month Curriculum
          </span>
          <h2 className="text-at-ink font-semibold text-heading-md xl:text-heading-xl leading-tight tracking-[-1px] m-0">
            What You&apos;ll Learn - Month by Month
          </h2>
          <p className="text-at-muted text-xl leading-normal m-0">
            Here&apos;s a preview of the first two months. Get the full 6-month
            course details, projects and tools instantly.
          </p>
        </div>

        {/* Accordion */}
        <div className="relative">
          <div className="flex flex-col">
            {visibleMonths.map((month, i) => {
              const isExpanded = expandedIndex === i;
              const isLast = i === visibleMonths.length - 1;

              return (
                <div key={i} className={!isLast ? "mb-8" : ""}>
                  {/* Card */}
                  <div className="bg-white rounded-3xl shadow-card p-6 flex flex-col gap-6">
                    {/* Card header */}
                    <div
                      className={`flex gap-4 items-start${isExpanded ? " border-b border-at-border pb-4" : ""}`}
                    >
                      <div className="flex-1 min-w-0 flex flex-col gap-3">
                        {/* Level badge */}
                        <div className="inline-flex self-start items-center px-3 py-1.25 rounded-full bg-at-cta/10 border border-at-cta-border">
                          <span className="text-at-cta text-xs font-medium">
                            {month.label}
                          </span>
                        </div>

                        {/* Title + meta */}
                        <div className="flex flex-col gap-2">
                          <p className="text-at-ink font-bold text-xl leading-snug m-0">
                            {month.title}
                          </p>
                          <div className="flex flex-wrap gap-4 items-center">
                            <span className="bg-at-cta text-white text-xs font-medium px-3 py-1.5 rounded-full">
                              {month.badge}
                            </span>
                            {month.sessions != null && (
                              <span className="text-sm leading-none">
                                <span className="font-semibold text-at-ink">
                                  Sessions:{" "}
                                </span>
                                <span className="text-at-muted">
                                  {month.sessions}
                                </span>
                              </span>
                            )}
                            {month.outcome && (
                              <span className="text-sm leading-none">
                                <span className="font-semibold text-at-ink">
                                  Outcome:{" "}
                                </span>
                                <span className="text-at-muted">
                                  {month.outcome}
                                </span>
                              </span>
                            )}
                            {month.description && (
                              <span className="text-at-muted text-sm leading-normal">
                                {month.description}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Toggle chevron */}
                      <button
                        onClick={() => setExpandedIndex(isExpanded ? -1 : i)}
                        className="rounded-xl bg-at-cta/10 p-2 shrink-0 flex items-center justify-center border-0 cursor-pointer"
                        aria-label={isExpanded ? "Collapse" : "Expand"}
                      >
                        <ChevronIcon up={isExpanded} />
                      </button>
                    </div>

                    {/* Expanded body */}
                    {isExpanded && month.topics && (
                      <div className="flex flex-col xl:flex-row gap-6 items-start">
                        {/* Topics checklist */}
                        <div className="flex-1 min-w-0 flex flex-col gap-5">
                          {month.topics.map((topic, j) => (
                            <div key={j} className="flex gap-3 items-start">
                              <div className="shrink-0 mt-0.5 size-5 bg-at-cta rounded-full flex items-center justify-center">
                                <CheckIcon />
                              </div>
                              <p className="text-at-ink text-base leading-snug m-0">
                                {topic}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Right column */}
                        <div className="flex-1 min-w-0 flex flex-col gap-4">
                          {month.tools && (
                            <div className="flex flex-col gap-3">
                              <p className="text-at-ink text-base font-semibold m-0">
                                TOOLS YOU WILL MASTER
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {month.tools.map((tool) => (
                                  <span
                                    key={tool}
                                    className="bg-white border border-at-border rounded-full px-3 py-1 text-at-ink text-sm"
                                  >
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          {month.projectTitle && (
                            <div className="flex flex-col gap-3">
                              <p className="text-at-ink text-base font-semibold m-0">
                                {month.projectTitle}
                              </p>
                              <p className="text-at-muted text-sm leading-normal m-0">
                                {month.projectDesc}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Fade overlay + button - only when collapsed, desktop only */}
          {!showAll && (
            <div className="hidden xl:flex absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/85 to-transparent items-end justify-center pointer-events-none">
              <button
                onClick={() => {
                  const form = document.getElementById("counselling-form-el");
                  if (form) {
                    form.scrollIntoView({ behavior: "smooth", block: "center" });
                    form.classList.remove("form-highlight");
                    void form.offsetWidth;
                    form.classList.add("form-highlight");
                    setTimeout(() => form.classList.remove("form-highlight"), 2600);
                    const firstInput = form.querySelector<HTMLElement>("input,textarea,select");
                    firstInput?.focus({ preventScroll: true });
                  }
                }}
                className="pointer-events-auto translate-y-1/2 bg-at-cta border-none text-white font-medium text-base px-8 h-13.5 rounded-full hover:bg-at-cta-dark transition-colors cursor-pointer"
              >
                View Complete Curriculum
              </button>
            </div>
          )}
        </div>

        {/* Mobile-only "View Complete Curriculum" button - shown below accordion when collapsed */}
        {!showAll && (
          <div className="flex xl:hidden justify-center mt-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-at-cta border-none text-white font-medium text-base px-8 h-13.5 rounded-full hover:bg-at-cta-dark transition-colors cursor-pointer"
            >
              View Complete Curriculum
            </button>
          </div>
        )}

        {/* Show less - only when expanded */}
        {showAll && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(false)}
              className="bg-at-cta border-none text-white font-medium text-base px-8 h-13.5 rounded-full hover:bg-at-cta-dark transition-colors cursor-pointer"
            >
              Show Less
            </button>
          </div>
        )}

        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          width={500}
          title="Get Your Course Curriculum"
          description="Fill in your details to get the course curriculum on your email."
        >
          <CounsellingForm
            className="flex flex-col gap-5"
            hideHeader
            buttonText="Submit"
          />
        </Modal>
      </div>
    </section>
  );
}
