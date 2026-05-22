import Image from "next/image";

const CtaComponent = () => {
  return (
    <section className="cta-section">
      <div className="dml-container">
        <div className="cta-content">
          <div className="cta-content-left">
            <h2>Your tech career starts here</h2>
            <p>
              Sign up for the course and go through all the admission stages to
              embark on a new career journey in less than half a year.
            </p>
            <button className="dml-button">Get Started</button>
          </div>
          <div className="cta-content-right">
            <Image src="/cta.svg" height={300} width={300} alt="cta" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CtaComponent;
