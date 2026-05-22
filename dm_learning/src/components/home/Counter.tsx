import Count from "../common/Count";

interface DataType {
  id: number;
  count: number;
  count_text: string;
  text: string;
};

const count_data: DataType[] = [
  {
    id: 1,
    count: 50,
    count_text: "+",
    text: "Certified Mentors",
  },
  {
    id: 2,
    count: 35,
    count_text: "+",
    text: "Available Courses",
  },
  {
    id: 3,
    count: 5,
    count_text: "K+",
    text: "Future Leaders",
  },
  {
    id: 4,
    count: 100,
    count_text: "%",
    text: "Student Satisfaction",
  },
];

const Counter = () => {
  return (
    <section className="fact-area-section">
      <div className="dml-container counter-container">
        <div className="section__title">
          <span className="sub-title">Extending Classrooms Beyond Walls</span>
          <h2 className="title">
            Empowering Career Success for Future Leaders
          </h2>
        </div>
        <div className="fact__inner-wrap">
          <div className="fact-inner">
            {count_data.map((item) => (
              <div
                key={item.id}
                className={`counter-number mobile-padding-stats ${
                  item.id === 1 || item.id === 3 ? "border-right-stats" : ""
                }`}
              >
                <div className="fact__item">
                  <h2 className="count">
                    <Count number={item.count} />
                    {item.count_text}
                  </h2>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
