'use client';

import Image from 'next/image';

const outerIcons = ['/out.svg', '/java.svg', '/outone.svg', '/rotating-circle-icons/nextjs.svg'];
const innerIcons = ['/python.svg', '/react.svg', '/robot.svg', '/rotating-circle-icons/tailwindcss.svg'];

function IconBlock({ children, index }: { children: React.ReactNode; index: number }) {
  const positions = [
    'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
    'top-1/2 right-0 translate-x-1/2 -translate-y-1/2',
    'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
    'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2',
  ];

  return (
    <div
      className={`
        absolute w-16 h-16 max-sm:size-10 rounded-full
        flex items-center justify-center
        bg-linear-to-b from-primary to-white
        shadow
        ${positions[index % 4]}
      `}
    >
      {children}
    </div>
  );
}

export default function RotatingCircle() {
  return (
    <section className="flex items-center justify-center pt-20 overflow-hidden">
      <div className="relative w-[90vw] max-w-200 aspect-square">
        {/* OUTER */}
        <div className="relative flex items-center justify-center w-full h-full rounded-full border border-primary animate-rotate will-change-transform">
          {outerIcons.map((src, i) => (
            <IconBlock key={src} index={i}>
              <Image src={src} width={56} height={56} alt="" className="animate-rotate-reverse" />
            </IconBlock>
          ))}
        </div>

        {/* INNER */}
        <div className="bg-linear-to-t from-primary/15 to white absolute top-1/2 left-1/2 w-full sm:h-3/4 sm:max-w-xl h-60 max-w-60 rounded-full border border-primary animate-circle-rotate will-change-transform">
          {innerIcons.map((src, i) => (
            <IconBlock key={src} index={i}>
              <Image src={src} width={56} height={56} alt="" className="animate-img-rotate will-change-transform" />
            </IconBlock>
          ))}
        </div>

        {/* CENTER */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 lg:-translate-y-[22%] -translate-y-1/3 lg:w-full lg:max-w-2/3">
          <Image src="/woman-attending-online.svg" width={571} height={435} alt="center illustration" />
        </div>
      </div>
    </section>
  );
}
