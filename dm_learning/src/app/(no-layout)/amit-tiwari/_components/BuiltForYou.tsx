import Image from "next/image";

const ICON_STUDENT = "/amit-tiwari/icon-student.svg";
const ICON_PROFESSIONAL = "/amit-tiwari/icon-professional.svg";
const ICON_SWITCHER = "/amit-tiwari/icon-switcher.svg";
const ICON_BUSINESS = "/amit-tiwari/icon-business.svg";
const ICON_FREELANCER = "/amit-tiwari/icon-freelancer.svg";

const CARDS = [
  {
    icon: ICON_STUDENT,
    title: "Student / Fresher",
    body: "Land your first digital marketing role with a portfolio of 6 real projects. Average starting CTC of program graduates: ₹4.8 LPA, with the top 10% crossing ₹8 LPA.",
    span: "xl:col-span-2",
  },
  {
    icon: ICON_PROFESSIONAL,
    title: "Working Professional",
    body: "Switch to digital marketing or accelerate your current role. Past cohort hike: 68% on average within 12 months. Evening live classes designed around your job.",
    span: "xl:col-span-2",
  },
  {
    icon: ICON_SWITCHER,
    title: "Career Switcher",
    body: "Move into digital marketing from any background - engineering, sales, teaching, hospitality. We meet you at zero and take you to job-ready in 6 months.",
    span: "xl:col-span-2",
  },
  {
    icon: ICON_BUSINESS,
    title: "Business Owner",
    body: "Run your own SEO, ads and content in-house. Stop bleeding ₹40K-₹2L/month to mediocre agencies. Build the system once, own it forever.",
    span: "xl:col-span-3",
  },
  {
    icon: ICON_FREELANCER,
    title: "Aspiring Freelancer",
    body: "Build a ₹50K-₹2L/month freelance practice. Get our pricing playbook, proposal templates, Upwork/LinkedIn outreach scripts and your first 3 client portfolio pieces.",
    span: "xl:col-span-3",
  },
] as const;

function Card({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-white border border-at-border rounded-xl shadow-card p-6 flex flex-col gap-3.5 h-full">
      <div className="size-14 bg-at-cta rounded-2xl flex items-center justify-center shrink-0">
        <Image src={icon} alt="" width={24} height={24} unoptimized />
      </div>
      <p className="font-semibold text-xl leading-normal text-at-ink m-0">
        {title}
      </p>
      <p className="text-base leading-normal text-at-muted m-0">{body}</p>
    </div>
  );
}

export default function BuiltForYou() {
  return (
    <section className="bg-white py-12 xl:py-25">
      {/* px-6 on mobile/tablet; xl:px-0 inside the two-column container-page wrapper */}
      <div className="px-6 xl:px-0 flex flex-col gap-6">
        {/* Section header */}
        <div className="flex flex-col gap-4">
          <span className="text-at-cta text-lg font-medium uppercase tracking-wide">
            Built for You
          </span>
          <h2 className="text-at-ink font-semibold text-heading-md xl:text-heading-xl leading-normal m-0">
            Tell us where you are - we will show you what changes
          </h2>
        </div>

        {/* Cards - 1 col mobile, 2 col sm, 6 col xl (top 3 = col-span-2, bottom 2 = col-span-3) */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-6">
          {CARDS.map((card) => (
            <div key={card.title} className={card.span}>
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
