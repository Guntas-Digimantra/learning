import Count from '../common/Count';

interface DataType {
  id: number;
  count: number;
  count_text: string;
  text: string;
}

const count_data: DataType[] = [
  {
    id: 1,
    count: 50,
    count_text: '+',
    text: 'Certified Mentors',
  },
  {
    id: 2,
    count: 35,
    count_text: '+',
    text: 'Available Courses',
  },
  {
    id: 3,
    count: 5,
    count_text: 'K+',
    text: 'Future Leaders',
  },
  {
    id: 4,
    count: 100,
    count_text: '%',
    text: 'Student Satisfaction',
  },
];

const WebCounter = () => {
  return (
    <section className="bg-[#161439]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="mx-auto grid max-w-[1000px] grid-cols-2 gap-[26px] px-4 py-[60px] text-white max-md:px-4 max-md:py-[60px] md:grid-cols-4 md:gap-0 md:px-[30px]">
          {count_data.map((item) => (
            <div className="text-center" key={item.id}>
              <h2 className="count">
                <Count number={item.count} />
                {item.count_text}
              </h2>
              <p className="text-[#eff4fc]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebCounter;
