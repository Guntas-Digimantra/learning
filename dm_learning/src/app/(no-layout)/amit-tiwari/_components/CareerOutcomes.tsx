import Image from "next/image";

const STATS = [
  {
    icon: "/amit-tiwari/co-icon-growth.svg",
    value: "92%",
    description:
      "Of graduates reported a job, freelance contract or business growth within 90 days",
  },
  {
    icon: "/amit-tiwari/co-icon-salary.svg",
    value: "68%",
    description:
      "Average salary hike for working professionals after course completion",
  },
  {
    icon: "/amit-tiwari/co-icon-ctc.svg",
    value: "₹14 LPA",
    description:
      "Highest CTC offered to a 2025 cohort graduate (Performance Marketer role)",
  },
  {
    icon: "/amit-tiwari/co-icon-partners.svg",
    value: "120+",
    description:
      "Hiring partner brands and agencies actively recruiting from our alumni",
  },
];

export default function CareerOutcomes() {
  return (
    <section className="py-10 xl:py-15">
      <div className="px-6 xl:px-0 flex flex-col gap-x-6 gap-y-14 xl:gap-10">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span className="text-at-cta text-sm font-medium uppercase tracking-wide">
            Career Outcomes
          </span>
          <h2 className="text-at-ink font-semibold text-heading-md xl:text-heading-xl leading-tight m-0">
            Real Numbers from Past Cohorts
          </h2>
          <p className="text-at-muted text-lg xl:text-xl leading-relaxed m-0 max-w-2xl">
            Aggregated outcomes across the last 6 graduating cohorts of
            DMLearning students.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-x-5 gap-y-12">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="bg-white rounded-xl shadow-card p-6 pt-12 xl:p-10 xl:pt-12 relative"
            >
              <div className="absolute -top-7 left-8 size-14 bg-at-cta rounded-2xl flex items-center justify-center">
                <Image
                  src={stat.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 object-contain"
                  unoptimized
                />
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-at-ink font-semibold text-xl leading-snug m-0">
                  {stat.value}
                </p>
                <p className="text-at-muted text-base leading-relaxed m-0">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-at-muted text-sm italic leading-relaxed m-0">
          * Data based on a 2024-2025 alumni survey. Outcomes vary by individual
          effort, prior experience and market conditions.
        </p>
      </div>
    </section>
  );
}
