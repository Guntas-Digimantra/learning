import Image from 'next/image';

const CourseForYou = () => {
  const data = [
    {
      image: '/course-for-you-1.png',
      description:
        'More than 50% of the highest paying jobs across industries show significant demand for coding skills and web development literacy.',
    },
    {
      image: '/course-for-you-2.png',
      description:
        'More than 50% of the highest paying jobs across industries show significant demand for coding skills and web development literacy.',
    },
    {
      image: '/course-for-you-3.png',
      description:
        'More than 50% of the highest paying jobs across industries show significant demand for coding skills and web development literacy.',
    },
  ];

  return (
    <section className="pb-[100px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="mb-10 text-center">
          <p className="font-extrabold text-[#525fe1]">WHY CHOOSE US</p>
          <h2>This one&apos;s for you if...</h2>
        </div>
        <div className="flex justify-between text-center max-lg:flex-col max-lg:items-center max-lg:gap-10">
          {Array.isArray(data) &&
            data.map((item, index) => (
              <div
                key={index}
                className={`max-w-[400px] ${index === 1 ? 'px-3 max-lg:px-0' : ''}`}
              >
                <div>
                  <Image src={item.image} alt="course-for-you" width={243} height={243} />
                </div>
                <div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CourseForYou;
