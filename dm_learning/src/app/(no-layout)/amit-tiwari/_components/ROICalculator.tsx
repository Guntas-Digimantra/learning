"use client";

import { useState, useMemo } from "react";

const GOALS = [
  { label: "Get a Digital Marketing Job", multiplier: 1.75 },
  { label: "Start Freelancing", multiplier: 2.0 },
  { label: "Grow My Business", multiplier: 1.5 },
];

const EFFORT_LABELS = ["Low", "Medium", "High"] as const;
const EFFORT_MULTIPLIERS = [0.85, 1.0, 1.15];

const COURSE_FEE = 49999;

function formatINR(n: number) {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

function Divider() {
  return <div className="w-full border-t border-white/10" />;
}

export default function ROICalculator() {
  const [income, setIncome] = useState(25000);
  const [goalIdx, setGoalIdx] = useState(0);
  const [effort, setEffort] = useState(2); // 0=Low 1=Medium 2=High

  const { projected, annualJump, paybackMonths, fiveYear } = useMemo(() => {
    const base = GOALS[goalIdx].multiplier * EFFORT_MULTIPLIERS[effort];
    const projected = Math.round(income * base);
    const monthlyJump = projected - income;
    const annualJump = monthlyJump * 12;
    const paybackMonths =
      monthlyJump > 0 ? Math.ceil(COURSE_FEE / monthlyJump) : 0;
    const fiveYear = annualJump * 5;
    return { projected, annualJump, paybackMonths, fiveYear };
  }, [income, goalIdx, effort]);

  return (
    <section className="py-10 xl:py-16">
      <div className="container-page flex flex-col gap-6 xl:gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span className="text-at-cta text-sm font-medium uppercase tracking-wide">
            ROI Calculator
          </span>
          <h2 className="text-at-ink font-semibold text-heading-md xl:text-heading-xl leading-tight m-0">
            See What This Program Could Mean for Your Income
          </h2>
          <p className="text-at-muted text-lg xl:text-xl leading-relaxed m-0">
            Drag the sliders. Watch your projected post-course income, payback
            period and 5-year ROI update live.
          </p>
        </div>

        {/* Calculator card */}
        <div className="rounded-card px-6 py-8 xl:px-10 xl:py-12 flex flex-col xl:flex-row gap-10 xl:gap-15 items-stretch shadow-card-deep bg-section-dark">
          {/* Left - inputs */}
          <div className="flex flex-col gap-8 flex-1">
            <div className="flex flex-col gap-1">
              <p className="text-white font-bold text-xl m-0">
                Tell us about you
              </p>
              <p className="text-white/70 text-base leading-normal m-0">
                We&#39;ll estimate your earning potential after the program
                based on real graduate outcomes.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {/* Income slider */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-bold text-white">
                  <span>Current monthly income</span>
                  <span>{formatINR(income)}</span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={200000}
                  step={1000}
                  value={income}
                  onChange={(e) => setIncome(Number(e.target.value))}
                  className="roi-slider w-full"
                />
              </div>

              {/* Goal dropdown */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-white">Your Goal</span>
                <div className="relative">
                  <select
                    value={goalIdx}
                    onChange={(e) => setGoalIdx(Number(e.target.value))}
                    className="w-full h-10 rounded-xl border border-at-border bg-transparent text-white text-base px-3.5 pr-9 appearance-none cursor-pointer focus:outline-none"
                  >
                    {GOALS.map((g, i) => (
                      <option
                        key={g.label}
                        value={i}
                        className="text-at-ink bg-white"
                      >
                        {g.label}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              {/* Effort slider */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-bold text-white">
                  <span>Effort level</span>
                  <span>{EFFORT_LABELS[effort]}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={2}
                  step={1}
                  value={effort}
                  onChange={(e) => setEffort(Number(e.target.value))}
                  className="roi-slider w-full"
                />
              </div>
            </div>
          </div>

          {/* Right - results */}
          <div className="flex-1 bg-white/4 border border-white/20 rounded-card px-8 py-6 flex flex-col justify-center gap-4">
            <div className="flex items-center justify-between">
              <span className="text-white/70 text-xs">
                Projected monthly income (12 mo after)
              </span>
              <span className="text-white font-bold text-xl">
                {formatINR(projected)}
              </span>
            </div>
            <Divider />
            <div className="flex items-center justify-between">
              <span className="text-white/70 text-xs">Annual income jump</span>
              <span className="text-accent font-bold text-xl">
                +{formatINR(annualJump)}
              </span>
            </div>
            <Divider />
            <div className="flex items-center justify-between">
              <span className="text-white/70 text-xs">
                Course fee payback in
              </span>
              <span className="text-white font-bold text-xl">
                {paybackMonths > 0 ? `${paybackMonths} mo` : "-"}
              </span>
            </div>
            <Divider />
            <div className="flex items-center justify-between">
              <span className="text-white/70 text-xs">
                5-year cumulative upside
              </span>
              <span className="text-accent font-bold text-xl">
                +{formatINR(fiveYear)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
