import Image from "next/image";

const stepList = [
  { icon: "/step-1.svg", title: "Learn the skills" },
  { icon: "/step-1.svg", title: "Prep for interviews" },
  { icon: "/step-1.svg", title: "Get hired" },
];

const Steps = () => {
  return (
    <section className="steps-section">
      <div className="dml-container">
        <div
          style={{
            backgroundImage: "url(/background-develop.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            padding: "60px 20px",
          }}
        >
          <div className="steps-content">
            <div className="steps-content-right">
              <ul>
                {Array.isArray(stepList) &&
                  stepList?.map((step, index) => (
                    <li key={index}>
                      <Image
                        src={step?.icon}
                        height={70}
                        width={70}
                        alt="step-1"
                      />
                      <p>{step?.title}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
