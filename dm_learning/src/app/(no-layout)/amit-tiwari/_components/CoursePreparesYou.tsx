import { Check } from "lucide-react";

const COL_1 = [
  "Digital Marketing Manager",
  "Digital Marketing Executive",
  "SEO Specialist",
  "Performance Marketer",
  "Social Media Manager",
  "Google & Meta Ads Expert",
  "Content Marketing Strategist",
  "Marketing Automation Specialist",
];

const COL_2 = [
  "E-Commerce Marketer",
  "Freelance Digital Marketer",
  "Personal Brand Consultant",
  "AI-Powered Marketing Professional",
  "Agency Owner or Marketing Consultant",
  "Analytics & Conversion Tracking Specialist",
  "Growth Marketing Executive",
  "Client Acquisition & Lead Generation Expert",
];

function Item({ label }: { label: string }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="size-5 rounded-full bg-at-cta flex items-center justify-center shrink-0 mt-0.75">
        <Check size={12} className="text-white" strokeWidth={3} />
      </div>
      <span className="text-at-ink text-base leading-snug">{label}</span>
    </div>
  );
}

export default function CoursePreparesYou() {
  return (
    <section className="py-10 xl:py-15">
      <div className="px-6 xl:px-0 flex flex-col gap-6 xl:gap-10">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span className="text-at-cta text-sm font-medium uppercase tracking-wide">
            Career Opportunities
          </span>
          <h2 className="text-at-ink font-semibold text-heading-md xl:text-heading-xl leading-tight m-0">
            What This Course Prepares You For
          </h2>
        </div>

        {/* Two-column list */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
          <div className="flex flex-col gap-3 flex-1">
            {COL_1.map((item) => (
              <Item key={item} label={item} />
            ))}
          </div>
          <div className="flex flex-col gap-3 flex-1">
            {COL_2.map((item) => (
              <Item key={item} label={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
