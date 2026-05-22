import Image from "next/image";

const STEPS = [
  {
    step: "Step 1",
    icon: "/amit-tiwari/hiw-icon-apply.svg",
    title: "Apply & Counsel",
    description:
      "Free 15-min counselling call. We help you decide if this program is the right fit for your goals.",
  },
  {
    step: "Step 2",
    icon: "/amit-tiwari/hiw-icon-learn.svg",
    title: "Learn Live + Build",
    description:
      "72 live sessions, 6 hands-on monthly projects, weekly mentor reviews and a private peer community.",
  },
  {
    step: "Step 3",
    icon: "/amit-tiwari/hiw-icon-placed.svg",
    title: "Get Placed / Freelance",
    description:
      "Resume + LinkedIn rebuild, mock interviews, portfolio site, freelance playbook and our hiring partner network.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-10 xl:py-15">
      <div className="px-6 xl:px-0 flex flex-col gap-6 xl:gap-10">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span className="text-at-cta text-sm font-medium uppercase tracking-wide">
            How it Works
          </span>
          <h2 className="text-at-ink font-semibold text-heading-md xl:text-heading-xl leading-tight m-0">
            From Application to Job-Ready in 3 Simple Steps
          </h2>
          <p className="text-at-muted text-lg xl:text-xl leading-relaxed m-0">
            A guided, mentor-led pathway designed to take you from beginner to a
            confident, hire-ready digital marketer.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-white border border-at-border rounded-xl shadow-card p-6 flex flex-col items-center gap-6 text-center"
            >
              <span className="text-at-ink font-medium text-base">
                {item.step}
              </span>

              <div className="size-14 bg-at-cta rounded-2xl flex items-center justify-center shrink-0">
                <Image
                  src={item.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 object-contain"
                  unoptimized
                />
              </div>

              <div className="flex flex-col gap-4.5 items-center">
                <p className="text-at-ink font-bold text-xl leading-snug m-0">
                  {item.title}
                </p>
                <p className="text-at-muted text-sm leading-relaxed m-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
