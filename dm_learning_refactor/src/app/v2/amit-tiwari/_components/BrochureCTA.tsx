import Image from "next/image";

export default function BrochureCTA() {
  return (
    <section className="py-10 xl:py-15">
      <div className="px-6 xl:px-0">
        <div className="bg-white border border-at-border rounded-2xl shadow-card overflow-hidden flex items-stretch">
          {/* Left - text + button */}
          <div className="flex flex-col gap-5 xl:gap-7.5 p-6 xl:p-10 flex-1 min-w-0">
            <div className="flex flex-col gap-3.5">
              <h2 className="text-at-ink font-semibold text-2xl xl:text-4xl leading-tight m-0">
                Need to know more?
              </h2>
              <p className="text-at-muted text-base leading-normal m-0">
                Get complete course details, curriculum, tools, and career
                opportunities by downloading the course brochure.
              </p>
            </div>
            <a
              href="/amit-tiwari/DMLearning%20brochure.pdf"
              download="DMLearning brochure.pdf"
              className="self-start inline-flex items-center justify-center bg-at-cta border border-at-cta text-white font-medium text-base leading-6 px-4 h-13.5 w-103 max-w-full rounded-full hover:bg-at-cta-dark hover:border-at-cta-dark transition-colors no-underline"
            >
              Download Brochure
            </a>
          </div>

          {/* Right - illustration */}
          <div className="relative hidden xl:block w-116 shrink-0">
            <Image
              src="/amit-tiwari/brochure-mockup.png"
              alt=""
              fill
              className="object-contain object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
