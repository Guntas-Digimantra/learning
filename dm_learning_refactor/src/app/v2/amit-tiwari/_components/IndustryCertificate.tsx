import Image from "next/image";
import { Check } from "lucide-react";

const CERT_ITEMS = [
  "DMLearning Course Completion Certificate",
  "Eligibility for Google Ads & Meta Blueprint exams",
  "HubSpot inbound + email-marketing certifications",
  "Capstone project showcased in your portfolio",
  "LinkedIn-ready badge to share with recruiters",
  "Add DMLearning Certificate to your LinkedIn profile",
];

export default function IndustryCertificate() {
  return (
    <section className="py-12 xl:py-25">
      <div className="mx-auto w-full max-w-[76.25rem] px-6 flex flex-col xl:flex-row gap-6 xl:gap-13 items-center">
        {/* Certificate image */}
        <div className="relative w-full xl:w-173 xl:shrink-0 h-70 sm:h-90 xl:h-[462px] rounded-card border border-at-border shadow-card overflow-hidden">
          <Image
            src="/amit-tiwari/certificate-image.png"
            alt="DMLearning Certificate of Completion"
            fill
            className="object-cover"
          />
          <Image
            src="/amit-tiwari/certificate-overlay.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8 xl:gap-8 flex-1 min-w-0">
          {/* Heading group */}
          <div className="flex flex-col gap-4">
            <span className="text-at-cta text-sm font-medium uppercase tracking-wide">
              Industry Certificate
            </span>
            <h2 className="text-at-ink font-semibold text-heading-md xl:text-heading-xl leading-tight m-0">
              Earn A Certificate That Strengthens Your Career
            </h2>
            <p className="text-at-muted text-lg xl:text-xl leading-relaxed m-0">
              Upon successful completion of the course, receive a verifiable
              DMLearning certificate that can be directly added to your{" "}
              <span className="text-linkedin font-semibold">LinkedIn</span>{" "}
              profile and shared with recruiters.
            </p>
          </div>

          {/* Checklist */}
          <ul className="flex flex-col gap-3 m-0 p-0 list-none">
            {CERT_ITEMS.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <span className="shrink-0 size-5 rounded-full bg-at-cta flex items-center justify-center mt-0.75">
                  <Check size={12} className="text-white" strokeWidth={3} />
                </span>
                <span className="text-at-ink text-base leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
