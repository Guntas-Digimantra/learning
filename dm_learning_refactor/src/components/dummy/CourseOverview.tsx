import Image from 'next/image';

const data = [
  {
    image: '/get-certified-1.png',
    title: 'Live Sessions (Monday to Friday)',
    description: 'To learn coding best practices, get interview tips, discuss doubts and more from experts.',
  },
  {
    image: '/get-certified-1.png',
    title: 'Live Sessions (Monday to Friday)',
    description: 'To learn coding best practices, get interview tips, discuss doubts and more from experts.',
  },
  {
    image: '/get-certified-1.png',
    title: 'Live Sessions (Monday to Friday)',
    description: 'To learn coding best practices, get interview tips, discuss doubts and more from experts.',
  },
  {
    image: '/get-certified-1.png',
    title: 'Live Sessions (Monday to Friday)',
    description: 'To learn coding best practices, get interview tips, discuss doubts and more from experts.',
  },
  {
    image: '/get-certified-1.png',
    title: 'Live Sessions (Monday to Friday)',
    description: 'To learn coding best practices, get interview tips, discuss doubts and more from experts.',
  },
  {
    image: '/get-certified-1.png',
    title: 'Live Sessions (Monday to Friday)',
    description: 'To learn coding best practices, get interview tips, discuss doubts and more from experts.',
  },
  {
    image: '/get-certified-1.png',
    title: 'Live Sessions (Monday to Friday)',
    description: 'To learn coding best practices, get interview tips, discuss doubts and more from experts.',
  },
  {
    image: '/get-certified-1.png',
    title: 'Live Sessions (Monday to Friday)',
    description: 'To learn coding best practices, get interview tips, discuss doubts and more from experts.',
  },
];

const CourseOverview = () => {
  return (
    <section className="py-[100px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div>
          <h2 className="mb-[18px]">MERN Stack Course Overview</h2>
          <p>
            You&apos;ll become a skilled MERN Stack Developer with industry-ready certification. Start learning from the
            basics of programming and build advanced skills in MongoDB, Express, React, and Node.js. Enroll in our MERN
            Stack Developer certificate course today, and open the door to a huge number of opportunities in software
            development.
          </p>
          <h3 className="my-10 font-medium">Key Highlights</h3>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-10 max-sm:grid-cols-1">
            {data.map((item, index) => (
              <div key={index} className="flex gap-2.5">
                <span>
                  <Image src={item.image} alt="course-overview" height={80} width={80} />
                </span>
                <div>
                  <h3 className="text-xl">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
