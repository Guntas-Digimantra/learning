import Link from "@/components/ui/link";

export default function Cta() {
  return (
    <section className="py-20 text-(--foreground) max-[768px]:py-[3.75rem]">
      <div className="mx-auto max-w-[800px] px-4 text-center">
        <h2 className="text-center font-['Sora',sans-serif] text-[clamp(1.875rem,5vw,3rem)] font-extrabold tracking-tight text-(--foreground)">
          Ready to Explore AI This Summer?
        </h2>
        <p className="mt-3 text-(--foreground) opacity-80">
          Give your child an opportunity to learn, create, and build with future-ready technology.
        </p>
        <Link
          href="#register"
          className="mt-8 inline-block rounded-full bg-(--accent-pink) px-8 py-4 text-lg font-bold text-white"
        >
          Enroll Now
        </Link>
        <p className="mt-3 pt-1 text-sm text-(--foreground) opacity-80">
          Email us at{" "}
          <a href="mailto:learning@digimantra.com" className="text-(--foreground) underline">
            learning@digimantra.com
          </a>
        </p>
      </div>
    </section>
  );
}
