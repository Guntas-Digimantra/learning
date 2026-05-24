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

const statDivider =
  "relative before:absolute before:right-[-15px] before:top-[-10%] before:h-[108px] before:w-0.5 before:rounded-sm before:bg-gradient-to-b before:from-white before:to-white/0 max-[991px]:before:hidden last:before:hidden";

const Counter = () => {
  return (
    <section className="bg-surface py-25 max-[991px]:py-15">
      <div className="mx-auto max-w-[1440px] px-[15px] max-[991px]:max-w-[540px]">
        <div className="pb-15 text-center">
          <span className="mb-3.5 inline-block rounded-[30px] bg-subtitle-bg px-4 py-[3px] font-medium leading-[1.62] text-subtitle-accent">
            Extending Classrooms Beyond Walls
          </span>
          <h2 className="title text-fg text-section-title font-semibold leading-snug">
            Empowering Career Success for Future Leaders
          </h2>
        </div>
        <div className="relative z-[3] -mb-[87px] rounded-stats bg-stats-bg px-[70px] pt-[94px] pb-16 shadow-stats max-[991px]:px-10 max-[991px]:pt-15 max-[991px]:pb-7.5 max-[767px]:px-[25px] max-[767px]:pt-[38px] max-[767px]:pb-5">
          <div className="flex flex-wrap">
            {count_data.map((item) => (
              <div
                key={item.id}
                className={`relative w-1/4 flex-none max-[991px]:w-1/2 max-[767px]:px-8 ${statDivider} ${
                  item.id === 1 || item.id === 3
                    ? "max-[991px]:border-r-2 max-[991px]:border-white"
                    : ""
                }`}
              >
                <div className="relative mb-7.5 text-center">
                  <h2 className="count mb-2.5 flex items-center justify-center text-stat-count leading-[0.84] text-white max-[767px]:text-4xl">
                    <Count number={item.count} />
                    {item.count_text}
                  </h2>
                  <p className="m-0 text-center text-base font-medium leading-tight text-white">
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
