import Count from "../common/Count";

interface DataType {
  id: number;
  count: number;
  count_text: string;
  text: string;
}

const count_data: DataType[] = [
  { id: 1, count: 50, count_text: "+", text: "Certified Mentors" },
  { id: 2, count: 35, count_text: "+", text: "Available Courses" },
  { id: 3, count: 5, count_text: "K+", text: "Future Leaders" },
  { id: 4, count: 100, count_text: "%", text: "Student Satisfaction" },
];

const Counter = () => {
  return (
    <section
      className="fact-area-section"
      style={{ padding: "100px 0", backgroundColor: "#fff" }}
    >
      <div className="dml-container counter-container">
        <div
          className="section__title"
          style={{ textAlign: "center", paddingBottom: 60 }}
        >
          <span
            className="sub-title"
            style={{
              display: "inline-block",
              lineHeight: 1.62,
              background: "#efeefe",
              borderRadius: 30,
              padding: "3px 16px",
              fontWeight: 500,
              color: "#5751e1",
              margin: "0 0 14px",
            }}
          >
            Extending Classrooms Beyond Walls
          </span>
          <h2 className="title" style={{ margin: 0, color: "#000" }}>
            Empowering Career Success for Future Leaders
          </h2>
        </div>
        <div
          className="fact__inner-wrap max-[991px]:!px-10 max-[991px]:!pt-[60px] max-[991px]:!pb-[30px] max-[767px]:!px-[25px] max-[767px]:!pt-[38px] max-[767px]:!pb-5"
          style={{
            background: "#282568",
            padding: "94px 70px 64px",
            borderRadius: 40,
            boxShadow: "0 25px 70px 0 rgba(40, 37, 104, 0.4)",
            zIndex: 3,
            position: "relative",
            marginBottom: -87,
          }}
        >
          <div className="fact-inner" style={{ display: "flex", flexWrap: "wrap" }}>
            {count_data.map((item) => (
              <div
                key={item.id}
                className={`counter-number mobile-padding-stats relative w-1/4 max-[991px]:w-1/2 ${
                  item.id === 1 || item.id === 3 ? "border-right-stats" : ""
                }`}
                style={{ flex: "0 0 auto" }}
              >
                {item.id !== 4 && (
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      right: -15,
                      top: "-10%",
                      width: 2,
                      height: 108,
                      borderRadius: 2,
                      background:
                        "linear-gradient(180deg, #fff, hsla(0, 0%, 100%, 0))",
                      pointerEvents: "none",
                    }}
                  />
                )}
                <div
                  className="fact__item"
                  style={{ textAlign: "center", marginBottom: 30, position: "relative" }}
                >
                  <h2
                    className="count"
                    style={{
                      marginBottom: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: 56,
                      lineHeight: 0.84,
                      marginTop: 0,
                    }}
                  >
                    <Count number={item.count} />
                    {item.count_text}
                  </h2>
                  <p
                    style={{
                      marginBottom: 0,
                      fontWeight: 500,
                      color: "#fff",
                      lineHeight: 1.2,
                      textAlign: "center",
                    }}
                  >
                    {item.text}
                  </p>
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
