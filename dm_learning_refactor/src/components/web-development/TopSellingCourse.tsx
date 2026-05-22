import Image from 'next/image';

const TopSellinCourse = () => {
  const cardsData = [
    {
      id: 1,
      title: 'Axtronic Electronics VS-10',
      category: '3D Models',
      itemsCount: 805,
      mainImage: '/top-selling-course-1.jpg',
      sideImages: ['/top-selling-1.jpeg', '/top-selling1-1.jpeg', '/top-selling2-1.jpeg'],
    },
    {
      id: 2,
      title: 'Axtronic Electronics VS-10',
      category: '3D Models',
      itemsCount: 805,
      mainImage: '/top-selling-course-1.jpg',
      sideImages: ['/top-selling-1.jpeg', '/top-selling1-1.jpeg', '/top-selling2-1.jpeg'],
    },
    {
      id: 3,
      title: 'Axtronic Electronics VS-10',
      category: '3D Models',
      itemsCount: 805,
      mainImage: '/top-selling-course-1.jpg',
      sideImages: ['/top-selling-1.jpeg', '/top-selling1-1.jpeg', '/top-selling2-1.jpeg'],
    },
  ];

  return (
    <section className="bg-[#110b39] py-[100px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <h2 className="text-[30px] text-white">Top Selling Courses</h2>
        <p className="mb-[30px]">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
        </p>
        <div className="mx-auto grid grid-cols-1 gap-[30px] max-md:max-w-[450px] max-lg:grid-cols-2 max-lg:max-w-none xl:grid-cols-3">
          {Array.isArray(cardsData) &&
            cardsData?.map((card) => (
              <div
                key={card?.id}
                className="rounded-lg border border-[#ffffff12] bg-white/[0.03] p-8"
              >
                <div className="flex justify-between">
                  <div>
                    <Image
                      src={card?.mainImage}
                      alt={card?.title}
                      width={231}
                      height={261}
                      className="rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col justify-between pl-2.5">
                    {card?.sideImages?.map((img, index) => (
                      <Image
                        key={index}
                        src={img}
                        alt={`Side Image ${index + 1}`}
                        width={82}
                        height={82}
                        className="rounded-lg"
                      />
                    ))}
                  </div>
                </div>

                <h3 className="mt-3 text-lg text-white">{card?.title}</h3>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellinCourse;
