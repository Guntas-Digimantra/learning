const DML_BUTTON_CLASS =
  'inline-flex h-[54px] max-w-[173px] cursor-pointer items-center justify-center rounded-[24px] border-0 bg-black px-8 py-4 font-sans text-base font-semibold text-white transition-[linear_0.3s] hover:bg-white hover:text-black';

import Link from '@/components/ui/link';

const Banner = () => {
  return (
    <section className="min-h-[652px] bg-[url('/web-bg-banner.jpg')] bg-cover bg-top py-[110px] md:min-h-[952px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="mx-auto max-w-[682px] text-center">
          <h2 className="text-white [&_span]:bg-gradient-to-b [&_span]:from-[#e7e6ec] [&_span]:to-[#8875ff] [&_span]:bg-clip-text [&_span]:text-transparent">
            Frontend Web <span>Development</span>
          </h2>
          <p className="mt-5 mb-[50px] text-[#8f9bb7]">
            This comprehensive program is designed for aspiring developers who want to master the art of creating
            visually stunning and highly interactive websites. You will learn the foundational technologies of the web,
            including HTML, CSS, and JavaScript, while gaining hands-on experience through real-world projects.
          </p>
          <Link href="/courses" className={DML_BUTTON_CLASS}>
            Start Learning
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
