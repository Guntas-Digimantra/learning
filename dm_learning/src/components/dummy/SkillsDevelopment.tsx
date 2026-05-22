import Image from "next/image";

const skillImage = [
  { text: "HTML", image: "/html.svg" },
  { text: "CSS", image: "/css.svg" },
  { text: "Python", image: "/python.svg" },
  { text: "React JS", image: "/react.svg" },
  { text: "Git", image: "/git.svg" },
  { text: "JavaScript", image: "/javascript.svg" },
  { text: "Node JS", image: "/node.svg" },
  { text: "Express JS", image: "/express.svg" },
  { text: "Mongo DB", image: "/mongo.svg" },
];

const SkillsDevelopment = () => {
  return (
    <section className="skills-development-section">
      <div className="dml-container">
        <div className="skill-content-wrapper">
          <div className="">
            <h2>Skills You&apos;ll Learn</h2>
            <p>
              This comprehensive course thoroughly covers essential MERN stack
              developer skills including:
            </p>
            <div className="skill-image-grid">
              {skillImage.map((image, index) => (
                <div key={index} className="skill-image-card">
                  <Image
                    src={image.image}
                    alt="skills-logo"
                    height={56}
                    width={56}
                  />
                  <div className="text-styling">{image.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="skill-image-wrapper">
            <Image
              src="/skill-development.png"
              alt="skills-image"
              height={400}
              width={450}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsDevelopment;
