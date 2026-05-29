import Link from '@/components/ui/link';

const StillHaveQuestions = () => {
  return (
    <section className="question-section">
      <div className="dml-container">
        <div className="microsoft-question-row flex flex-col items-center justify-center gap-[35px] text-center min-[1025px]:flex-row min-[1025px]:justify-between">
          <h3 className="!text-[36px] !font-semibold !leading-[1.3] max-[1024px]:!text-[28px]">
            Still have questions about certifications?
          </h3>
          <div>
            <Link href="/contact" className="microsoft-button-transparent">
              Let&apos;s Connect
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StillHaveQuestions;
