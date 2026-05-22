const STATS = [
  { value: "50+", label: "Certified Mentors" },
  { value: "500+", label: "Campaigns Run" },
  { value: "100+", label: "Brands Served" },
  { value: "10K+", label: "Students Trained" },
];

export default function Numerology() {
  return (
    <section className="bg-bg-muted py-10 xl:py-15">
      <div className="container-page">
        <div className="bg-white rounded-xl shadow-card p-6 xl:p-10">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-y-8 xl:gap-y-0 xl:divide-x xl:divide-at-border">
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col gap-1 xl:px-8 xl:first:pl-0 xl:last:pr-0"
              >
                <span className="font-bold text-heading-md xl:text-heading-xl leading-tight text-at-ink">
                  {value}
                </span>
                <span className="text-base xl:text-heading-sm leading-normal text-at-muted">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
