import Image from 'next/image';

const Cards = () => {
  const data = [
    { title: 'Creative Arts', decription: '50+ Items', image: '/minnion.png' },
    { title: 'Creative Arts', decription: '50+ Items', image: '/minnion-2.png' },
    { title: 'Creative Arts', decription: '50+ Items', image: '/minnion.png' },
    { title: 'Creative Arts', decription: '50+ Items', image: '/minnion-2.png' },
    { title: 'Creative Arts', decription: '50+ Items', image: '/minnion.png' },
    { title: 'Creative Arts', decription: '50+ Items', image: '/minnion-2.png' },
    { title: 'Creative Arts', decription: '50+ Items', image: '/minnion.png' },
    { title: 'Creative Arts', decription: '50+ Items', image: '/minnion-2.png' },
    { title: 'Creative Arts', decription: '50+ Items', image: '/minnion.png' },
    { title: 'Creative Arts', decription: '50+ Items', image: '/minnion-2.png' },
  ];

  return (
    <section className="cards-section">
      <div className="dml-container">
        <div className="carsd-section-grid">
          {Array.isArray(data) &&
            data?.map((item, index) => (
              <div key={index} className="cards-section-item">
                <div>
                  <h3>{item?.title}</h3>
                  <p>{item?.decription}</p>
                </div>
                <Image src={item?.image} width={85} height={85} alt="img" className="cards-image" />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
export default Cards;
