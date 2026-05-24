import Image from "next/image";

export default function Why() {
  return (
    <section className="py-20 text-(--foreground) max-[768px]:py-[3.75rem]">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="text-center font-['Sora',sans-serif] text-[clamp(1.875rem,5vw,3rem)] font-extrabold tracking-tight text-(--foreground)">
          How This Camp Helps Your Child
        </h2>
        <p className="mt-3 text-center text-(--foreground) opacity-80">
          More than just screen time, it is a productive summer learning experience.
        </p>

        <div className="mt-10 grid grid-cols-5 gap-4 max-[1024px]:grid-cols-2 max-[900px]:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] max-[768px]:grid-cols-1">
          {[
            { n: "1", title: "Explore New Technology", p: "Get introduced to the world of Artificial Intelligence." },
            { n: "2", title: "Learn by Doing", p: "Hands-on activities and practical project work." },
            { n: "3", title: "Boost Creativity", p: "Use AI tools to create images, content, and projects." },
            { n: "4", title: "Improve Thinking Skills", p: "Encourage curiosity, logic, and innovation." },
            { n: "5", title: "Build Confidence", p: "Learn to present and communicate ideas effectively." },
          ].map(({ n, title, p }) => (
            <div
              key={n}
              className="flex flex-col items-center rounded-2xl border border-(--white-10) bg-(--white-05) p-5 text-center text-(--foreground)"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--brand) font-bold text-white">
                {n}
              </div>
              <h4 className="mt-3 font-bold text-(--foreground)">{title}</h4>
              <p className="mt-1 text-sm text-(--foreground) opacity-80">{p}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-10 max-[900px]:grid-cols-1">
          <div>
            <p className="text-sm tracking-[0.2em] text-(--foreground) uppercase opacity-70">
              By the End of the Camp
            </p>
            <h3 className="mt-2 font-['Sora',sans-serif] text-[clamp(1.875rem,5vw,2.25rem)] font-extrabold text-(--foreground)">
              Students will understand, use, and create with{" "}
              <span className="text-(--accent-cyan)">AI confidently</span>{" "}
            </h3>
          </div>
          <Image
            src="/ai-creators.jpg"
            alt="AI creators"
            width={600}
            height={400}
            className="h-auto w-full rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,.5)]"
          />
        </div>
      </div>
    </section>
  );
}
