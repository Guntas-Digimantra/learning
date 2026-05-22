import Image from "next/image";
import { Check, X } from "lucide-react";

const features = [
  "Live mentor-led classes",
  "Hands-on projects with mentor review",
  "Real ad budget campaigns",
  "AI tools deeply integrated",
  "Placement & freelance support",
  "Industry certificate",
  "EMI & money-back guarantee",
  "Community + alumni network",
  "Exclusive Doubt Sessions",
];

const dmlValues = [
  "72 live sessions with Amit",
  "6 projects + capstone",
  "Live ₹500 campaigns",
  "Claude, Meta Ads, Hostinger and more",
  "Resume, mock interviews, network",
  "DMLearning + Google/Meta paths",
  "0% EMI + 7-day refund",
  "Private Slack, alumni hires",
  "Yes",
];

type OtherValue = { icon: "check" | "cross" | null; text: string };

const otherValues: OtherValue[] = [
  { icon: null, text: "Mostly recorded" },
  { icon: null, text: "Limited feedback" },
  { icon: "cross", text: "Demo accounts only" },
  { icon: null, text: "As an add-on" },
  { icon: null, text: "Generic job board" },
  { icon: "check", text: "Available" },
  { icon: null, text: "EMI only, no refund" },
  { icon: null, text: "Static forum" },
  { icon: null, text: "No" },
];

const ROW_H = "h-[65px]"; /* 65px = 16.25 spacing units - no clean built-in */

export default function CompareAlternatives() {
  return (
    <section className="py-10 xl:py-15">
      <div className="px-6 xl:px-0 flex flex-col gap-6 xl:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h2 className="text-at-ink font-semibold text-heading-md xl:text-heading-xl leading-tight m-0">
            How We <span className="text-at-cta">Compare</span> to the
            Alternatives
          </h2>
          <p className="text-at-muted text-lg xl:text-xl leading-relaxed m-0">
            Honest, side-by-side comparison so you can make the right call.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto -mx-6 xl:mx-0">
          <div className="min-w-160 mx-6 xl:mx-0">
            <div className="flex items-stretch overflow-hidden">
              {/* Features column */}
              <div className="flex-1 flex flex-col">
                {/* Header cell */}
                <div className="flex items-center h-20 px-4 border-b border-at-border">
                  <span className="text-at-ink font-bold text-base xl:text-xl">
                    Features
                  </span>
                </div>
                {features.map((feat, i) => (
                  <div
                    key={i}
                    className={`flex items-center ${ROW_H} px-4 ${i < features.length - 1 ? "border-b border-at-border" : ""}`}
                  >
                    <span className="text-at-ink text-base leading-snug">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* DMLearning column - highlighted */}
              <div className="flex-1 flex flex-col bg-at-cta/6 border-2 border-at-cta rounded-card overflow-hidden">
                {/* Header cell */}
                <div className="flex items-center justify-center h-20 px-4 border-b border-at-cta-border">
                  <Image
                    src="/amit-tiwari/logo.png"
                    alt="DMLearning"
                    width={160}
                    height={27}
                    className="h-7 w-auto"
                  />
                </div>
                {dmlValues.map((val, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-center gap-2 ${ROW_H} px-4 ${i < dmlValues.length - 1 ? "border-b border-at-cta-border" : ""}`}
                  >
                    <Check
                      size={18}
                      className="shrink-0 text-success"
                      strokeWidth={2.5}
                    />
                    <span className="text-at-ink font-semibold text-sm text-center leading-snug">
                      {val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Other Bootcamps column */}
              <div className="flex-1 flex flex-col">
                {/* Header cell */}
                <div className="flex items-center justify-center h-20 px-4 border-b border-at-border">
                  <span className="text-at-ink font-bold text-base xl:text-xl text-center">
                    Other Courses
                  </span>
                </div>
                {otherValues.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-center gap-2 ${ROW_H} px-4 ${i < otherValues.length - 1 ? "border-b border-at-border" : ""}`}
                  >
                    {item.icon === "check" && (
                      <Check
                        size={18}
                        className="shrink-0"
                        style={{ color: "#59BF2F" }}
                        strokeWidth={2.5}
                      />
                    )}
                    {item.icon === "cross" && (
                      <X
                        size={18}
                        className="shrink-0 text-red-500"
                        strokeWidth={2.5}
                      />
                    )}
                    <span className="text-at-ink font-medium text-sm text-center leading-snug">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
