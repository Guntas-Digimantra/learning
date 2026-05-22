import Image from "next/image";

const Logos = () => {
  const logos = [
    "/amazon.png",
    "/microsoft.png",
    "/ibm.png",
    "/google.png",
    "/meta.png",
    "/digimantra.png",
    "/infosys.png",
    "/tcs.png",
    "/tech-mahindra.png",
    "/hcl.png",
    "/wipro.png",
    "/cognizant.png",
    "/capgemini.png",
    "/accenture.png",
  ];

  return (
    <section className="logos-section">
      <div className="dml-container">
        <p className="why-us-desc">WHY CHOOSE US</p>
        <h2>Our learners work at</h2>
        <div className="logos-grid">
          <div className="logos-wrapper wrapper-one">
          {logos?.slice(0,5).map((logo, index) => (
            <div key={index} className="logo">
              <Image src={logo} alt="logo" width={235} height={84} />
            </div>
          ))}
          </div>
          <div className="logos-wrapper wrapper-two">
           {logos?.slice(5,9).map((logo, index) => (
            <div key={index} className="logo">
              <Image src={logo} alt="logo" width={235} height={84} />
            </div>
          ))}
          </div>
            <div className="logos-wrapper wrapper-three">
          {logos?.slice(9,14).map((logo, index) => (
            <div key={index} className="logo">
              <Image src={logo} alt="logo" width={235} height={84} />
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
