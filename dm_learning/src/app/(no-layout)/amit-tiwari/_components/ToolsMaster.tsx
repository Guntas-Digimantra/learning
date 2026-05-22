"use client";

import { useState } from "react";
import Image from "next/image";
import { tools } from "../tools/tools-data";

const INITIAL_COUNT = 15;

export default function ToolsMaster() {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? tools : tools.slice(0, INITIAL_COUNT);

  return (
    <section id="resources" className="py-10 xl:py-15">
      <div className="px-6 xl:px-0 flex flex-col gap-6 xl:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <span className="text-at-cta text-base font-medium uppercase tracking-wide">
            TOOLS YOU WILL MASTER
          </span>
          <h2 className="text-at-ink font-semibold text-heading-md xl:text-heading-xl leading-tight m-0">
            Hands-On With 50+ Industry-Standard Tools
          </h2>
        </div>

        {/* Grid + expand */}
        <div className="flex flex-col gap-6">
          <div
            className="relative"
            style={
              !expanded
                ? {
                    maskImage:
                      "linear-gradient(to bottom, black 60%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 60%, transparent 100%)",
                  }
                : undefined
            }
          >
            <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(116px,1fr))]">
              {visible.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-white border border-at-border rounded-lg shadow-card-sm flex flex-col items-center justify-center gap-3 p-4 h-25.5"
                >
                  <div className="flex-1 flex items-center justify-center min-h-0 w-full">
                    <div className="relative w-18 h-10.5">
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-at-ink text-xs font-medium text-center leading-tight m-0 whitespace-nowrap">
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA button */}
          <div className="flex justify-center">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="bg-at-cta border border-at-cta text-white font-medium text-base leading-6 px-8 h-13.5 rounded-full hover:bg-at-cta-dark hover:border-at-cta-dark transition-colors cursor-pointer min-w-55"
            >
              {expanded ? "Show Less" : "View Complete Tools"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
