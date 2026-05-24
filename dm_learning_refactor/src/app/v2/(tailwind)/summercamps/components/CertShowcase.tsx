import { Icons } from "./Icons";

export default function CertShowcase() {
  return (
    <section className="py-20 text-(--foreground) max-[768px]:py-[3.75rem]">
      <div className="mx-auto max-w-[900px] px-4 text-center">
        <h2 className="text-center font-['Sora',sans-serif] text-[clamp(1.875rem,5vw,3rem)] font-extrabold tracking-tight text-(--foreground)">
          Show What You Built
        </h2>
        <p className="mt-3 text-(--foreground) opacity-80">
          Students present their final AI project and share what they built during the camp. Each participant
          receives a Certificate of Completion after successfully finishing the program.
        </p>
        <div className="mt-10 grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[768px]:grid-cols-1">
          {[
            { icon: <Icons.Trophy size={40} />, color: "text-(--accent-yellow)", label: "Confidence Building" },
            { icon: <Icons.Msg size={40} />, color: "text-(--accent-cyan)", label: "Communication Skills" },
            { icon: <Icons.Bulb size={40} />, color: "text-(--accent-pink)", label: "Creative Thinking" },
          ].map(({ icon, color, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-(--white-10) bg-(--white-05) p-5 text-(--foreground)"
            >
              <div className={`flex justify-center ${color}`}>{icon}</div>
              <p className="mt-3 font-bold text-(--foreground)">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
