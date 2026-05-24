import Image from "next/image";
import { Check } from "lucide-react";

const HIGHLIGHTS = [
  "15+ Years of Industry Experience",
  "Worked with 100+ Brands & D2C Startups",
  "Specialised in Performance Marketing, SEO, and Growth",
  "312K+ YouTube Subscribers & 19M+ Views",
  "Trainer & Industry Consultant",
];

export default function MeetMentor() {
  return (
    <section id="about" className="bg-bg-muted py-12 xl:py-25">
      <div className="mx-auto w-full max-w-[76.25rem] px-6 flex flex-col xl:flex-row gap-8 xl:gap-12 items-center">
        {/* Photo */}
        <div className="w-full xl:w-129 xl:h-148 shrink-0 rounded-card overflow-hidden relative aspect-[516/592] xl:aspect-auto">
          <Image
            src="/amit-tiwari/amit-tiwari-on-stage.png"
            alt="Amit Tiwari"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8 flex-1">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-at-cta text-base font-medium uppercase">
                Meet Your Mentor
              </span>
              <h2 className="text-at-ink font-semibold text-heading-md xl:text-heading-xl leading-tight m-0">
                Amit Tiwari - Mentor. Strategist. Digital Growth Expert.
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-at-muted text-xl leading-snugish m-0">
                With 15+ years in digital marketing, Amit has helped 100+ brands and trained over 10,000 students across India. His teaching style is practical, hands-on, and focused on outcomes- not theory.
              </p>
              <p className="text-at-muted text-xl leading-snugish m-0">
                He&#39;s a YouTube SEO educator with thousands of paying
                students, and an active marketing consultant for D2C and B2B
                brands.
              </p>
            </div>
          </div>

          {/* Bullet list */}
          <div className="flex flex-col gap-3">
            {HIGHLIGHTS.map((item) => (
              <div key={item} className="flex gap-3 items-start">
                <div className="size-5 rounded-full bg-at-cta flex items-center justify-center shrink-0 mt-0.75">
                  <Check size={12} className="text-white" strokeWidth={3} />
                </div>
                <span className="text-at-ink text-base leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
