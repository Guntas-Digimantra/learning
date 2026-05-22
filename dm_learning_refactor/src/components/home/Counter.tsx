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
    <section className="bg-white py-[100px] max-[767px]:py-[60px]">
      <div className="mx-auto max-w-[1440px] px-[15px] max-[991px]:max-w-[540px]">
        <div className="pb-[60px] text-center">
          <span className="mb-3.5 inline-block rounded-[30px] bg-[#efeefe] px-4 py-[3px] font-medium leading-[1.62] text-[#5751e1]">
            Extending Classrooms Beyond Walls
          </span>
          <h2 className="text-black">Empowering Career Success for Future Leaders</h2>
        </div>
        <div className="relative z-[3] -mb-[87px] rounded-[40px] bg-[#282568] px-[70px] pb-16 pt-[94px] shadow-[0_25px_70px_0_rgba(40,37,104,0.4)] max-[991px]:px-10 max-[991px]:pb-[30px] max-[991px]:pt-[60px] max-[767px]:px-[25px] max-[767px]:pb-5 max-[767px]:pt-[38px]">
          <div className="flex flex-wrap">
            {count_data.map((item) => (
              <div
                key={item.id}
                className={`relative w-1/4 flex-[0_0_auto] max-[991px]:w-1/2 max-[767px]:px-8 ${
                  item.id === 1 || item.id === 3 ? "max-[991px]:border-r-2 max-[991px]:border-white" : ""
                } before:absolute before:right-[-15px] before:top-[-10%] before:h-[108px] before:w-0.5 before:rounded-sm before:bg-gradient-to-b before:from-white before:to-transparent last:before:hidden max-[991px]:before:hidden`}
              >
                <div className="relative mb-[30px] text-center">
                  <h2 className="mb-2.5 flex items-center justify-center text-[56px] leading-[0.84] text-white max-[767px]:text-[36px]">
                    <Count number={item.count} />
                    {item.count_text}
                  </h2>
                  <p className="mb-0 text-center font-medium leading-[1.2] text-white max-[767px]:text-base">
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
