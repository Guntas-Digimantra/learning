import { Icons } from "./Icons";

export default function ProgramDetails() {
  return (
    <section id="details" className="bg-[hsl(230,45%,14%)] py-20 text-(--foreground) max-[768px]:py-[3.75rem]">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="mb-12 text-center font-['Sora',sans-serif] text-[clamp(1.875rem,5vw,3rem)] font-extrabold tracking-tight text-(--foreground)">
          Program Details
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4 max-[576px]:grid-cols-1">
          {[
            { icon: <Icons.Clock />, color: "text-(--accent-cyan)", label: "DURATION", val: "2 Weeks" },
            { icon: <Icons.Book />, color: "text-(--accent-yellow)", label: "TOTAL LEARNING", val: "12 Hours" },
            { icon: <Icons.Video />, color: "text-(--accent-pink)", label: "SESSIONS", val: "6 Sessions" },
            { icon: <Icons.Clock />, color: "text-(--accent-cyan)", label: "PER SESSION", val: "2 Hours" },
            { icon: <Icons.Calendar />, color: "text-(--accent-yellow)", label: "SCHEDULE", val: "3 Classes/Week" },
          ].map(({ icon, color, label, val }) => (
            <div
              key={label}
              className="rounded-2xl border border-(--white-10) bg-(--white-05) p-5 text-center text-(--foreground)"
            >
              <div className={`mx-auto mb-3 h-7 w-7 ${color}`}>{icon}</div>
              <p className="text-xs font-semibold tracking-widest text-(--foreground) opacity-70">
                {label}
              </p>
              <p className="mt-1 text-lg font-bold text-(--foreground)">{val}</p>
            </div>
          ))}
        </div>

        <h3 className="my-[3.75rem] mb-8 text-center font-['Sora',sans-serif] text-[clamp(1.5rem,4vw,1.875rem)] font-bold text-(--foreground)">
          What Students Will Create
        </h3>

        <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[768px]:grid-cols-1">
          {[
            { icon: <Icons.Bot size={40} />, label: "AI Assistant", color: "text-(--accent-cyan)" },
            { icon: <Icons.Image size={40} />, label: "AI Art & Image Creation", color: "text-(--accent-pink)" },
            { icon: <Icons.Rocket size={40} />, label: "Mini Innovation Projects", color: "text-(--accent-yellow)" },
          ].map(({ icon, label, color }) => (
            <div
              key={label}
              className="flex flex-col items-center rounded-2xl border border-(--white-10) bg-[linear-gradient(135deg,var(--white-10),var(--white-05))] p-6 text-center text-(--foreground)"
            >
              <div className={color}>{icon}</div>
              <h4 className="mt-4 text-xl font-bold text-(--foreground)">{label}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
