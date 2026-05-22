import Image from "next/image";

const data = [
  {
    image: "/get-certified-1.png",
    title: "Live Sessions (Monday to Friday)",
    description:
      "To learn coding best practices, get interview tips, discuss doubts and more from experts.",
  },
  {
    image: "/get-certified-1.png",
    title: "Live Sessions (Monday to Friday)",
    description:
      "To learn coding best practices, get interview tips, discuss doubts and more from experts.",
  },
  {
    image: "/get-certified-1.png",
    title: "Live Sessions (Monday to Friday)",
    description:
      "To learn coding best practices, get interview tips, discuss doubts and more from experts.",
  },
  {
    image: "/get-certified-1.png",
    title: "Live Sessions (Monday to Friday)",
    description:
      "To learn coding best practices, get interview tips, discuss doubts and more from experts.",
  },
  {
    image: "/get-certified-1.png",
    title: "Live Sessions (Monday to Friday)",
    description:
      "To learn coding best practices, get interview tips, discuss doubts and more from experts.",
  },
  {
    image: "/get-certified-1.png",
    title: "Live Sessions (Monday to Friday)",
    description:
      "To learn coding best practices, get interview tips, discuss doubts and more from experts.",
  },
  {
    image: "/get-certified-1.png",
    title: "Live Sessions (Monday to Friday)",
    description:
      "To learn coding best practices, get interview tips, discuss doubts and more from experts.",
  },
  {
    image: "/get-certified-1.png",
    title: "Live Sessions (Monday to Friday)",
    description:
      "To learn coding best practices, get interview tips, discuss doubts and more from experts.",
  },
];

const CourseOverview = () => {
  return (
    <section className="course-overview-section">
      <div className="dml-container">
        <div className="course-overview-content">
          <h2>MERN Stack Course Overview</h2>
          <p>
            You&apos;ll become a skilled MERN Stack Developer with industry-ready
            certification. Start learning from the basics of programming and
            build advanced skills in MongoDB, Express, React, and Node.js.
            Enroll in our MERN Stack Developer certificate course today, and
            open the door to a huge number of opportunities in software
            development.
          </p>
          <h3>Key Highlights</h3>
        </div>
        <div className="course-overview-wrapper">
          <div className="course-overview-grid">
            {data.map((item, index) => (
              <div key={index} className="course-overview-card">
                <span>
                  <Image
                    src={item.image}
                    alt="course-overview"
                    height={80}
                    width={80}
                  />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
