import Image from 'next/image';
import '../../../public/css/home-page.css';

const Purpose = () => {
  const data = [
    {
      image: '/vision.svg',
      title: 'Vision',
      description:
        'Empowering every learner with accessible, high-impact digital education that drives real-world success and lifelong growth.',
    },
    {
      image: '/mission.svg',
      title: 'Mission',
      description:
        'Bridging the gap between academia and the digital workforce by combining emerging technologies with experiential learning to shape future-ready professionals.',
    },
    {
      image: '/values.svg',
      title: 'Values',
      description:
        'We uphold trust, drive innovation, act with integrity, and embrace accountability to deliver meaningful, future-focused, and responsible learning experiences.',
    },
  ];
  return (
    <section className="purpose-shaping">
      <div className="dml-container inner-about">
        <div className="purpose-content">
          <h2>
            DRIVEN BY <span className="orange-letter">PURPOSE</span>
          </h2>
        </div>
        <div className="purpose-cards">
          {data.map((item, index) => (
            <div key={index} className="journey-card">
              <div className="cards-flex">
                <Image src={item.image} alt={item.title} width={74} height={74} />
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Purpose;
