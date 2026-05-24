"use client";

import { Check } from "lucide-react";

function scrollToHeroForm() {
  const form = document.getElementById("hero-form");
  if (!form) return;
  form.scrollIntoView({ behavior: "smooth", block: "center" });
  const firstInput = form.querySelector<HTMLElement>("input,textarea,select");
  firstInput?.focus({ preventScroll: true });
}

const INCLUDES = [
  "72 live sessions",
  "6 hands-on monthly projects + capstone",
  "Lifetime access to recordings & resources",
  "Live campaign mentor reviews",
  "Placement support + portfolio building",
  "Industry certificate on completion",
];

const EMI_OPTIONS = [
  { label: "3-Month EMI", value: "₹16,666 / month · 0% interest" },
  { label: "6-Month EMI", value: "₹8,333 / month · 0% interest" },
  { label: "12-Month EMI", value: "₹4,999 / month · 0% interest" },
  { label: "One-Time", value: "Save extra ₹5,000" },
];

const SEATS_FILLED = 22;
const TOTAL_SEATS = 30;
const DEADLINE = new Date("2026-06-01T00:00:00");

function daysUntilDeadline() {
  const now = new Date();
  const diff = DEADLINE.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export default function ProgramFee() {
  const fillPct = Math.round((SEATS_FILLED / TOTAL_SEATS) * 100);
  const daysLeft = daysUntilDeadline();

  return (
    <section className="py-10 xl:py-16">
      <div className="mx-auto flex w-full max-w-[76.25rem] flex-col gap-6 px-6 xl:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-2 items-start text-left">
          <span className="text-at-cta text-sm font-medium uppercase tracking-wide">
            Program Fee
          </span>
          <h2 className="text-at-ink font-semibold text-heading-md xl:text-heading-xl leading-tight m-0">
            Invest in a 6-Month Career Transformation
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-15 items-start xl:items-center">
          {/* Pricing card */}
          <div className="w-full xl:w-[555px] xl:shrink-0 bg-white border border-at-border rounded-card shadow-card overflow-hidden">
            {/* Dark header */}
            <div className="flex flex-col gap-8 bg-[linear-gradient(175deg,var(--color-at-deep-start)_1%,var(--color-at-deep-end)_100%)] p-6 xl:p-8">
              {/* Early-bird badge */}
              <span className="self-start bg-at-cta text-white text-xs font-extrabold uppercase tracking-wide px-4 py-1 rounded-full">
                Early-Bird Offer · Ends 31 May
              </span>

              {/* Fee */}
              <div className="flex flex-col gap-1">
                <p className="text-white/70 text-base leading-normal m-0">
                  Total Program Fee
                </p>
                <p className="text-white font-bold text-heading-md leading-tight m-0">
                  ₹49,999
                </p>
                <p className="text-white text-base leading-normal m-0">
                  EMI starts at{" "}
                  <span className="font-semibold text-at-cta">
                    ₹4,999/month
                  </span>{" "}
                  · 0% interest
                </p>
              </div>

              {/* Seats progress */}
              <div className="flex flex-col gap-2">
                <div className="bg-white/10 rounded-full h-2.25 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-at-cta to-at-gradient-end"
                    style={{ width: `${fillPct}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-white">
                  <p className="m-0">
                    <span className="font-bold text-white">{SEATS_FILLED}</span>{" "}
                    <span className="text-white/70">
                      of {TOTAL_SEATS} seats filled
                    </span>
                  </p>
                  <p className="m-0">
                    <span className="text-white/70">Closing in</span>{" "}
                    <span className="font-bold text-white">{daysLeft}d</span>
                  </p>
                </div>
              </div>
            </div>

            {/* White body */}
            <div className="flex flex-col gap-8 px-6 pb-6 pt-6 xl:px-8 xl:pb-8 xl:pt-8">
              {/* Checklist */}
              <ul className="flex flex-col gap-4 m-0 p-0 list-none">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex gap-2 items-center">
                    <Check
                      size={18}
                      className="text-at-cta shrink-0"
                      strokeWidth={2.5}
                    />
                    <span className="text-at-ink text-base">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Money-back */}
              <div className="flex flex-col gap-1">
                <p className="text-at-ink font-semibold text-base m-0">
                  7-Day Money-Back Guarantee
                </p>
                <p className="text-at-muted text-base leading-snugish m-0">
                  Not happy after your first live class? Get a full refund - no questions asked.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex justify-center">
                <button
                  onClick={scrollToHeroForm}
                  className="h-13.5 px-10 bg-at-cta border-[1.5px] border-at-cta text-white font-medium text-base rounded-full cursor-pointer hover:bg-at-cta-dark transition-colors"
                >
                  Talk to Advisor
                </button>
              </div>
            </div>
          </div>

          {/* Right - EMI options */}
          <div className="flex flex-col gap-6 xl:gap-12 flex-1 min-w-0">
            <div className="flex flex-col gap-4">
              <h3 className="text-at-ink font-semibold text-heading-sm xl:text-heading-md leading-tight m-0">
                Flexible Payment Options
              </h3>
              <p className="text-at-muted text-lg xl:text-xl leading-snugish m-0">
                Pay one-time and save 30%, or split your fees across 3, 6, or 12 EMI instalments at 0% interest, with our partner financing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {EMI_OPTIONS.map((opt) => (
                <div
                  key={opt.label}
                  className="bg-white border border-at-border rounded-2xl shadow-card px-6 py-8 flex flex-col gap-2"
                >
                  <p className="text-at-muted text-base leading-snugish m-0">
                    {opt.label}
                  </p>
                  <p className="text-at-ink font-semibold text-xl leading-relaxed m-0">
                    {opt.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
