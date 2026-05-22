import Image from "next/image";

const Adavantages = () => {
  const cards = [
    {
      image:"/why-frontend.png",
      title: "WHY FRONT END WEB DEVELOPMENT?",
      description: [
        "More than 50% of the highest paying jobs across industries show significant demand for coding skills and web development literacy. Statistics source: Burning Glass, Beyond Tech.",
      ],
    },
    {
      image:"/skills-you-learn.png",
      title: "THE SKILLS YOU'LL LEARN",
      description: [
        "Programmer",
        "Developer",
        "Engineer",
        "Data Scientist",
        "Game Developer",
      ],
    },
    {
      image:"/career-path.png",
      title: "CAREER PATHS",
      description: [
        "Programmer",
        "Developer",
        "Engineer",
        "Data Scientist",
        "Game Developer",
      ],
    },
  ];

  return (
    <section className="advantages-section">
      <div className="dml-container">
        <div className="advantages-content">
          {Array.isArray(cards) && cards?.map((card, index) => (
            <div key={index} className="advantages-card">
              <Image src={card.image} alt="img-cards" height={91} width={91}/>
              <h2>{card?.title}</h2>
              <ul>
                {card?.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adavantages;
