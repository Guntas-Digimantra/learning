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
    <section className="py-[100px] bg-white">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="text-center max-w-[500px] mx-auto mb-10">
          <span className="inline-block leading-[1.62] bg-[#efeefe] rounded-[30px] py-[3px] px-4 font-medium text-[#5751e1] mb-3.5">Extending Classrooms Beyond Walls</span>
          <h2 className="text-black text-4xl max-md:text-[28px] font-semibold text-center mb-10">
            Empowering Career Success for Future Leaders
          </h2>
        </div>
        <div className="bg-[#282568] pt-[94px] px-[70px] pb-[64px] max-lg:pt-[60px] max-lg:px-10 max-lg:pb-[30px] rounded-[40px] shadow-[0_25px_70px_0_rgba(40,37,104,0.4)] z-10 relative -mb-[87px]">
          <div className="flex flex-wrap">
            {count_data.map((item, index) => (
              <div
                key={item.id}
                className={`flex-none w-1/4 max-lg:w-1/2 relative max-sm:px-8 
                  before:content-[''] before:absolute before:-right-[15px] before:-top-[10%] before:w-[2px] before:h-[108px] before:rounded-[2px] before:bg-[linear-gradient(180deg,#fff,transparent)] last:before:hidden max-lg:before:hidden
                  ${(item.id === 1 || item.id === 3) ? "max-lg:border-r-2 max-lg:border-white" : ""}
                `}
              >
                <div className="text-center mb-[30px] relative">
                  <h2 className="mb-2.5 flex items-center justify-center text-white text-[56px] leading-[0.84]">
                    <Count number={item.count} />
                    {item.count_text}
                  </h2>
                  <p className="m-0 font-medium text-white leading-[1.2] text-center">{item.text}</p>
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
