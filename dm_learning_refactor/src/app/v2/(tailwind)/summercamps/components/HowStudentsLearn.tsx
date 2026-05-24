import { Icons } from "./Icons";

export default function HowStudentsLearn() {
  return (
    <section className="bg-[hsl(230,45%,14%)] pt-0 pb-20 text-(--foreground) max-[768px]:pb-[3.75rem]">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="text-center font-['Sora',sans-serif] text-[clamp(1.875rem,5vw,3rem)] font-extrabold tracking-tight text-(--foreground)">
          How Students <span className="text-(--accent-yellow)">Learn</span>
        </h2>
        <p className="mx-auto mt-3 max-w-[640px] text-center text-(--foreground) opacity-80">
          A practical and engaging learning experience where students explore, create, and build with AI.
        </p>
        <div className="mt-10 grid grid-cols-5 gap-4 max-[1024px]:grid-cols-2 max-[900px]:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] max-[768px]:grid-cols-1">
          {[
            { title: "Live Learning Sessions", sub: "Interactive classes with guided learning and demonstrations" },
            { title: "Hands-on Activities", sub: "Practice concepts through exercises and real-time activities" },
            { title: "Build Projects", sub: "Work on beginner-friendly AI projects from idea to creation" },
            { title: "Collaborative Learning", sub: "Participate in group tasks, discussions, and challenges" },
            { title: "Project Showcase", sub: "Present final projects and share learnings with confidence" },
          ].map(({ title, sub }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-2xl border border-(--white-10) bg-(--white-05) p-5 text-center text-(--foreground)"
            >
              <div className="text-(--accent-cyan)">
                <Icons.Sparkle />
              </div>
              <h4 className="mt-3 font-bold text-(--foreground)">{title}</h4>
              <p className="mt-1 text-sm text-(--foreground) opacity-80">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
