import { cn } from '@/libs/utils';
import Count from '../ui/stat-counter';

const count_data = [
  { id: 1, count: 50, count_text: '+', text: 'Certified Mentors' },
  { id: 2, count: 35, count_text: '+', text: 'Available Courses' },
  { id: 3, count: 500, count_text: '+', text: 'Students Empowered' },
  { id: 4, count: 5, count_text: '+', text: 'Global Centers' },
];

export default function StatsSection() {
  return (
    <div className="bg-primary py-15">
      <div className="max-w-294 flex justify-between items-center mx-auto lg:gap-27 sm:gap-14 gap-4 px-4">
        {count_data.map((item) => (
          <div key={item.id} className={cn('text-start text-white max-w-fit w-full')}>
            <h2 className="sm:text-4xl text-xl text-white font-semibold">
              {/* <Count number={item.count} /> */}
              <Count number={item.count} suffix={item.count_text} />
              {/* {item.count} */}
              {/* {item.count_text} */}
            </h2>
            <hr className="mt-2 bg-gray-300 h-0.5" />
            <p className="mt-2 text-sm font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
