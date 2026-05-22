import Link from '@/components/ui/link';

const transparentButtonClass =
  'rounded-[36px] border-2 border-white px-[34px] py-4 text-base font-semibold leading-6 text-white transition-colors hover:bg-white hover:text-black max-[767px]:px-3 max-[767px]:py-2 max-[767px]:text-[15px]';

const StillHaveQuestions = () => {
  return (
    <section className="bg-black py-[60px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex items-center justify-between text-center max-[1024px]:flex-col max-[1024px]:gap-[35px]">
          <h3 className="text-[#f5f5f5]">Still have questions about certifications?</h3>
          <div>
            <Link href="/contact" className={transparentButtonClass}>
              Let&apos;s Connect
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StillHaveQuestions;
