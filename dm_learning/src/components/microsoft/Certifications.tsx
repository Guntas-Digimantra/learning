import Image from "next/image";

const Certifications = () => {
  const certificationData = [
    { img: "/ai-engineer-microsoft.png", courseTitle: "AI Engineer" },
    { img: "/data-analyst.png", courseTitle: "Data Analyst" },
    { img: "/functional consultant.png", courseTitle: "Functional Consultant" },
    { img: "/developer.png", courseTitle: "Developer-(Beginner)" },
    {
      img: "/developer-intermediate.png",
      courseTitle: "Developer-(Intermediate)",
    },
    { img: "/devops.png", courseTitle: "DevOps Engineer" },
    {
      img: "/info-protection-adminstration.png",
      courseTitle: "Information Protection Administrator",
    },
    {
      img: "/securtiy-operation.png",
      courseTitle: "Security Operations Analyst",
    },
    { img: "/data-scientist.png", courseTitle: "Data Scientist" },
    { img: "/security-engineer.png", courseTitle: "Security Engineer" },
    { img: "/solution-architect.png", courseTitle: "Solutions Architect" },
    { img: "/data-engineer.png", courseTitle: "Data Engineer" },
  ];

  return (
    <section className="microsoft-certifications" id="certification-career">
      <div className="dml-container">
        <div>
          <h2>Certifications Career Path</h2>
          <div className="certifcate-content">
            {certificationData?.map((item, i) => (
              <a
                key={i}
                href={`/microsoft-certifications/${item.courseTitle
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                <Image
                  src={item.img}
                  alt="certification-images"
                  width={400}
                  height={200}
                />
                <h3>{item.courseTitle}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
