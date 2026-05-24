import Image from "next/image";

const LOGOS = [
  { src: "/amit-tiwari/partner-razorpay.png", alt: "Razorpay" },
  { src: "/amit-tiwari/partner-zomato.png", alt: "Zomato" },
  { src: "/amit-tiwari/partner-cultfit.png", alt: "Cult.fit" },
  { src: "/amit-tiwari/partner-mamaearth.png", alt: "Mamaearth" },
  { src: "/amit-tiwari/partner-boat.png", alt: "boAt" },
  { src: "/amit-tiwari/partner-myglamm.png", alt: "MyGlamm" },
  { src: "/amit-tiwari/partner-sleepyowl.png", alt: "Sleepy Owl Coffee" },
  { src: "/amit-tiwari/partner-dunzo.png", alt: "Dunzo" },
  { src: "/amit-tiwari/partner-curefit.png", alt: "Cure.fit" },
  { src: "/amit-tiwari/partner-webengage.png", alt: "WebEngage" },
  { src: "/amit-tiwari/partner-upgrad.png", alt: "upGrad" },
];

export default function HiringPartners() {
  return (
    <section className="bg-bg-muted py-10 xl:py-16">
      <div className="mx-auto w-full max-w-[76.25rem] px-6 flex flex-col gap-6 xl:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <span className="text-at-cta text-sm font-medium uppercase tracking-wide">
            Hiring Partners
          </span>
          <h2 className="text-at-ink font-semibold text-heading-md xl:text-heading-xl leading-tight m-0">
            Where Our Alumni Work
          </h2>
          <p className="text-at-muted text-lg xl:text-xl leading-relaxed m-0 max-w-md">
            120+ brands, agencies and startups across India have hired
            DMLearning graduates.
          </p>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
          {LOGOS.map((logo) => (
            <div
              key={logo.alt}
              className="bg-white border border-at-border rounded-2xl shadow-card flex items-center justify-center px-8 py-8 h-28"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}

          {/* +100 More */}
          <div className="bg-white border border-at-border rounded-2xl shadow-card flex items-center justify-center px-8 py-8 h-28">
            <p className="text-at-muted text-lg leading-normal m-0 text-center">
              +100 More
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
