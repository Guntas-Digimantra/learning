import Image from "next/image";

const CARDS = [
  {
    icon: "/amit-tiwari/ph-icon-schedule.svg",
    title: "6 Months · 72 Sessions",
    description:
      "Live classes Mon-Wed-Fri, 1.5-2 hours each. Beginner → Pro in 24 weeks.",
  },
  {
    icon: "/amit-tiwari/ph-icon-campaigns.svg",
    title: "Real Live Campaigns",
    description:
      "Run a real ₹500 Google Ads + Meta Ads campaign with mentor review.",
  },
  {
    icon: "/amit-tiwari/ph-icon-ai.svg",
    title: "AI-Powered Curriculum",
    description:
      "Claude, Meta Ads, Hostinger and more - learn to 10x productivity with AI.",
  },
  {
    icon: "/amit-tiwari/ph-icon-placement.svg",
    title: "Placement Support",
    description:
      "Resume + LinkedIn optimization, mock interviews, freelancer playbook.",
  },
];

export default function ProgramHighlights() {
  return (
    <section className="py-10 xl:py-15">
      <div className="px-6 xl:px-0 flex flex-col gap-x-6 gap-y-14 xl:gap-10">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span className="text-at-cta text-sm font-medium uppercase tracking-wide">
            Program Highlights
          </span>
          <h2 className="text-at-ink font-semibold text-heading-md xl:text-heading-xl leading-tight m-0">
            India&#39;s Most Comprehensive Live Digital Marketing Program
          </h2>
          <p className="text-at-muted text-lg xl:text-xl leading-relaxed m-0 max-w-2xl">
            Designed for freshers, jobseekers, and small business owners who
            want to master digital marketing the practical way - with live
            mentoring and real projects.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-14">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-xl shadow-card p-8 pt-12 relative"
            >
              {/* Icon badge */}
              <div className="absolute -top-7 left-8 size-14 bg-at-cta rounded-2xl flex items-center justify-center">
                <Image
                  src={card.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 object-contain"
                  unoptimized
                />
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-at-ink font-semibold text-lg leading-snug m-0">
                  {card.title}
                </p>
                <p className="text-at-muted text-base leading-relaxed m-0">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
