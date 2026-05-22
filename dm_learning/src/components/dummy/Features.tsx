import Image from "next/image";

const data = [
  {
    image: "/get-certified-1.png",
    title: "course duration",
    description: "8 Months, if completed as per the schedule",
  },
  {
    image: "/get-certified-1.png",
    title: "eligibility",
    description:
      "All IT & Non-IT Branches No Prior Coding Knowledge is required",
  },
  {
    image: "/get-certified-1.png",
    title: "certificate",
    description: "Industry-Ready-Certification certifies your job readiness",
  },
  {
    image: "/get-certified-1.png",
    title: "scholarships",
    description: "Up to 16,000/- Attend the Free Demo for details",
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="dml-container">
        <div className="features-grid">
          {data.map((item, index) => (
            <div key={index} className="feature-item">
                <span>
              <Image src={item.image} alt={item.title} height={64} width={64} /></span> 
              <div className="">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
