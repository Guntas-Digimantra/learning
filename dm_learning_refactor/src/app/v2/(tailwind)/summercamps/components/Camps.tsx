import Image from "next/image";

export default function Camps() {
  return (
    <section
      id="camps"
      className="bg-[hsl(230,45%,14%)] py-20 text-(--foreground) max-[768px]:py-[3.75rem]"
    >
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="mb-12 text-center font-['Sora',sans-serif] text-[clamp(1.875rem,5vw,3rem)] font-extrabold tracking-tight text-(--foreground)">
          Choose the Right AI Camp for Your Child
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 max-[900px]:grid-cols-1">
          {[
            {
              img: "/explorers-camp.jpg",
              alt: "Young AI Creators",
              pill: "Age 10–13",
              pillCyan: true,
              title: "Young AI Creators",
              desc: "A fun and beginner-friendly introduction to Artificial Intelligence for young learners who love to explore, create, and experiment.",
              learns: [
                "Understand AI in simple terms",
                "Explore how AI learns and makes decisions",
                "Create images, stories, and content using AI",
                "Build a simple AI assistant",
                "Design a beginner-friendly AI webpage/project",
                "Present their final project with confidence",
              ],
              chips: ["AI Story Creator", "AI Art Generator", "AI Homework Buddy", "AI Quiz Challenge"],
            },
            {
              img: "/innovators-camp.jpg",
              alt: "Future Builders Camp",
              pill: "Age 14–17",
              pillCyan: false,
              title: "Future Builders Camp",
              desc: "Designed for teens interested in technology, innovation, and future-ready skills.",
              learns: [
                "Understand AI tools and real-world applications",
                "Use Generative AI effectively",
                "Learn prompt writing techniques",
                "Build AI chatbots and smart assistants",
                "Solve practical challenges with AI",
                "Develop and showcase an AI mini project",
              ],
              chips: ["AI Study Planner", "Career Guidance Bot", "Smart Learning Assistant", "AI Idea Generator"],
            },
          ].map((camp) => (
            <div
              key={camp.title}
              className="overflow-hidden rounded-3xl border border-(--white-10) bg-(--white-05) text-(--foreground)"
            >
              <Image
                src={camp.img}
                alt={camp.alt}
                width={600}
                height={224}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                    camp.pillCyan
                      ? "bg-[rgba(96,165,250,.2)] text-(--accent-cyan)"
                      : "bg-[rgba(165,158,255,.2)] text-(--accent-pink)"
                  }`}
                >
                  {camp.pill}
                </span>
                <h3 className="mt-3 font-['Sora',sans-serif] text-2xl font-bold text-(--foreground)">
                  {camp.title}
                </h3>
                <p className="mt-2 text-(--foreground) opacity-80">{camp.desc}</p>
                <h4 className="mt-5 font-semibold text-(--foreground)">Students will learn to</h4>
                <ul className="mt-2 list-none text-sm text-(--foreground) opacity-90">
                  {camp.learns.map((l) => (
                    <li key={l} className="py-0.5">
                      • {l}
                    </li>
                  ))}
                </ul>
                <h4 className="mt-4 font-semibold text-(--foreground)">Sample Projects</h4>
                <div className="mt-2 flex flex-wrap gap-2 text-sm">
                  {camp.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-(--white-10) bg-(--white-10) px-3 py-1 text-(--foreground)"
                    >
                      {c}
                    </span>
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
