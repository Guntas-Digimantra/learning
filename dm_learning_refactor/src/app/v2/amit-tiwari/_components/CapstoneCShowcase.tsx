const PROJECTS = [
  {
    tag: "SEO",
    metric: "5x Organic Traffic",
    gradient: "linear-gradient(to bottom right, #ff7d27, #ff5e00)",
    title: "Local Bakery - Tier 2 City",
    author: "Built by Neha S. · Cohort #4",
    stats: [
      { value: "+412%", label: "Organic Clicks" },
      { value: "#1", label: "Local Pack" },
      { value: "3 mo", label: "Timeline" },
    ],
  },
  {
    tag: "Paid Ads",
    metric: "₹500 to ₹38k",
    gradient: "linear-gradient(to bottom right, #3f5c83, #10315c)",
    title: "D2C Skincare Launch",
    author: "Built by Rohit V. · Cohort #5",
    stats: [
      { value: "7.6x", label: "ROAS" },
      { value: "132", label: "Orders" },
      { value: "₹500", label: "Spend" },
    ],
  },
  {
    tag: "Email + CRO",
    metric: "+28% Conversion",
    gradient: "linear-gradient(to bottom right, #36a760, #0d8c3d)",
    title: "SaaS Onboarding Flow",
    author: "Built by Sneha I. · Cohort #4",
    stats: [
      { value: "+28%", label: "Activation" },
      { value: "5", label: "Drip emails" },
      { value: "22%", label: "CTR" },
    ],
  },
  {
    tag: "Social",
    metric: "0 to 18k Followers",
    gradient: "linear-gradient(to bottom right, #8450d9, #5d22b9)",
    title: "Personal Brand on Instagram",
    author: "Built by Aryan P. · Cohort #6",
    stats: [
      { value: "18K", label: "Followers" },
      { value: "4 mo", label: "Timeline" },
      { value: "9.2%", label: "Engagement" },
    ],
  },
  {
    tag: "YouTube",
    metric: "5x Organic Traffic",
    gradient: "linear-gradient(to bottom right, #3096b0, #0c7d9a)",
    title: "EdTech Channel Growth",
    author: "Built by Priya K. · Cohort #5",
    stats: [
      { value: "150K", label: "Subs" },
      { value: "2.3M", label: "Views" },
      { value: "6 mo", label: "Timeline" },
    ],
  },
  {
    tag: "Shopify",
    metric: "₹14L Revenue",
    gradient: "linear-gradient(to bottom right, #ed3030, #c92d2d)",
    title: "Handmade Jewellery Store",
    author: "Built by Karan M. · Cohort #6",
    stats: [
      { value: "₹14L", label: "Revenue" },
      { value: "3.8x", label: "ROAS" },
      { value: "5 mo", label: "Timeline" },
    ],
  },
];

export default function CapstoneShowcase() {
  return (
    <section className="py-10 xl:py-16">
      <div className="container-page flex flex-col gap-6 xl:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <span className="text-at-cta text-sm font-medium uppercase tracking-wide">
            Capstone Showcase
          </span>
          <h2 className="text-at-ink font-semibold text-heading-md xl:text-heading-xl leading-tight m-0">
            Real Campaigns Built by Past Students
          </h2>
          <p className="text-at-muted text-lg xl:text-xl leading-relaxed m-0 max-w-xl">
            A peek at the kind of work you will graduate with every student leaves with a portfolio of live, attributable campaigns.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="bg-white border border-at-border rounded-card shadow-card overflow-hidden flex flex-col"
            >
              {/* Thumbnail */}
              <div
                className="flex flex-col justify-between p-6 h-50"
                style={{ background: project.gradient }}
              >
                {/* Tag badge */}
                <span className="self-start px-3 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-wide backdrop-blur-sm bg-white/15 border border-white/50">
                  {project.tag}
                </span>

                {/* Metric */}
                <p className="text-white font-bold text-heading-sm leading-tight m-0">
                  {project.metric}
                </p>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex flex-col gap-1">
                  <p className="text-at-ink font-bold text-lg leading-snug m-0">
                    {project.title}
                  </p>
                  <p className="text-at-muted text-sm leading-normal m-0">
                    {project.author}
                  </p>
                </div>

                <div className="flex gap-4">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col gap-0.5 flex-1">
                      <p className="text-at-cta font-semibold text-base leading-normal m-0">
                        {stat.value}
                      </p>
                      <p className="text-at-muted text-xs leading-normal m-0">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
