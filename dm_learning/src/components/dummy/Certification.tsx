import Image from "next/image";

const list = [
  {
    image: "/get-certified-1.png",
    title: "Industry-Ready Certification [IRC]",
    description:
      "Unlike any academic certificate, for the first-time in India, IRC certifies your job readiness.",
  },
  {
    image: "/get-certified-2.png",
    title: "Shareable, Credible and Official",
    description:
      "Add it to your LinkedIn, share it on Twitter & WhatsApp, or via Email. Make your profile stand out everywhere.",
  },
  {
    image: "/get-certified-3.png",
    title: "Let companies compete for you",
    description:
      "IRC certifies your industry-readiness and gets you placed with higher salaries.",
  },
];

const Certification = () => {
  return (
    <section className="certification-section">
      <div className="dml-container">
        <div className="certification-wrapper">
          <div className="certification-content">
            <h2>Get Certified</h2>
            <p className="certification-description">
              Yes, you&apos;ll get a certificate representing your Industry Readiness
              once you submit your projects and clear the pre placement test.
            </p>
            <ul>
              {list.map((item, index) => (
                <li key={index} className="certification-list">
                  <span className="certification-image-wrapper">
                    <Image
                      src={item.image}
                      alt="certification-images"
                      height={72}
                      width={72}
                    />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="batch-detail">Next batch starting soon</p>
            <button className="dml-button">Limited Seats</button>
          </div>
          <div className="certification-image">
            <Image
              src="/skill-certificate.png"
              alt="certification-images"
              height={550}
              width={450}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
