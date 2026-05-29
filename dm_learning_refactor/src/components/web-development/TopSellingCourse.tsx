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
    <section className="top-selling-course-section">
      <div className="dml-container">
        <h2>Top Selling Courses</h2>
        <p className="description">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
        </p>
        <div className="top-course-grid">
          {Array.isArray(cardsData) &&
            cardsData?.map((card) => (
              <div key={card?.id} className="card">
                <div className="image-wrapper">
                  <div className="card-main">
                    <Image
                      src={card?.mainImage}
                      alt={card?.title}
                      width={231}
                      height={261}
                      className="card-main-image"
                    />
                  </div>

                  <div className="card-side-images">
                    {card?.sideImages?.map((img, index) => (
                      <Image
                        key={index}
                        src={img}
                        alt={`Side Image ${index + 1}`}
                        width={82}
                        height={82}
                        className="card-side-image"
                      />
                    ))}
                  </div>
                </div>

                <h3>{card?.title}</h3>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellinCourse;
