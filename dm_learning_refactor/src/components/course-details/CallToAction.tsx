import React from "react";
import Link from "@/components/ui/link";

interface CallToActionProps {
  title: React.ReactNode;
  description: string;
  backgroundColor?: string;
  boxBackground?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  backgroundColor = "#FFF6EA",
  boxBackground = "#FFFFFF",
}) => {
  return (
    <section className="py-16" style={{ backgroundColor }}>
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div
          className="flex flex-col items-center gap-12 rounded-xl bg-white py-16 text-center max-[991px]:px-5 max-[991px]:py-[60px]"
          style={{
            background: boxBackground.startsWith("url")
              ? `${boxBackground} center/cover no-repeat`
              : boxBackground,
          }}
        >
          <div className="relative z-[2] mx-auto max-w-[900px]">
            <h2 className="text-center text-[56px] font-bold leading-[1.2] text-black [font-variant:all-small-caps] [&_span]:text-[#fc8b20] max-[1240px]:text-[48px] max-[991px]:text-[40px] max-[600px]:text-[32px]">
              {title}
            </h2>
            <p className="pt-3.5 text-center text-2xl font-normal leading-[150%] text-[#2e2e2e] max-[991px]:text-xl max-[600px]:text-lg">
              {description}
            </p>
            <button
              className="mt-5 inline-flex cursor-pointer items-center rounded-full border-0 bg-black px-[30px] py-3.5 text-base font-semibold text-white"
            >
              <Link href='/student-enrollment'>Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
