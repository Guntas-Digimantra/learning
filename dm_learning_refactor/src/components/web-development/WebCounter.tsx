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
    <section className="web-counter-section">
      <div className="dml-container">
        <div className="web-counter-wrapper">
          {count_data.map((item) => (
            <div className="counter-number" key={item.id}>
              <h2 className="count">
                <Count number={item.count} />
                {item.count_text}
              </h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebCounter;
