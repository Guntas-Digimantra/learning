import Link from "@/components/ui/link";

const StillHaveQuestions = () => {
  return (
    <section className="question-section">
      <div className="dml-container">
        <div className="question-content">
          <h3>Still have questions about certifications?</h3>
          <div className="">
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
