import RegisterForm from "./RegisterForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,hsl(235,60%,10%),hsl(230,45%,14%))] py-16 pb-12 text-(--foreground) max-[768px]:pb-0">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(99,102,241,.4), transparent 40%), radial-gradient(circle at 80% 60%, rgba(96,165,250,.3), transparent 50%)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1280px] grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start gap-12 px-4 max-[900px]:grid-cols-1">
        <div>
          <h1 className="font-['Sora',sans-serif] text-[clamp(2.25rem,6vw,3.75rem)] font-extrabold leading-[1.15] tracking-tight text-(--foreground)">
            AI Summer Camp 2026{" "}
            <span className="text-(--accent-yellow)">Turn Curiosity into AI Creation</span>{" "}
            <span className="block text-(--accent-cyan)">No Coding Needed</span>
          </h1>

          <p className="mt-4 text-lg font-semibold text-(--foreground)">
            For Young Innovators (Age 10–17)
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            {[
              "Beginner Friendly",
              "Expert-Led Live Classes",
              "Hands-on AI Projects",
              "Laptop/Desktop Required",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-(--white-15) bg-(--white-10) px-4 py-2 text-(--foreground)"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="text-2xl text-(--foreground) line-through opacity-60">₹2,599</span>
            <span className="text-[clamp(3rem,8vw,3.75rem)] font-extrabold text-(--accent-yellow)">
              ₹699
            </span>
            <span className="rounded-full border border-(--accent-pink) px-3 py-2 text-xs font-bold text-(--accent-pink)">
              Summer Offer
            </span>
          </div>

          <p className="mt-2 text-sm text-(--foreground) opacity-80">One-time · No hidden charges</p>

          <div className="mt-8 rounded-2xl border border-(--white-10) bg-(--white-05) p-5 text-center">
            <p className="font-bold text-(--accent-yellow)">Limited Seats Available</p>
            <p className="mt-1 text-sm text-(--foreground) opacity-90">June Batch Now Open</p>
            <p className="mt-2 font-semibold text-(--accent-cyan)">
              Build future-ready AI skills this summer
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-6 text-sm font-medium text-(--foreground)">
            <span>✔ Expert Mentorship</span>
            <span>✔ Future-Focused Learning Experience</span>
          </div>
        </div>

        <RegisterForm />
      </div>
    </section>
  );
}
