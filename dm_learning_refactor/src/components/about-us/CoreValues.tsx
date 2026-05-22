import Image from 'next/image';

const CoreValues = () => {
  const coreCardsData = [
    {
      image: '/innovation.svg',
      title: 'Innovation Driven',
      description: 'Encourage creativity and embrace ideas to drive progress.',
    },
    {
      image: '/vector2.svg',
      title: 'Learner Focus',
      description: 'Prioritize meeting Learner needs and exceeding expectations to build loyalty.',
    },
    {
      image: '/vector3.svg',
      title: 'Innovation Catalyst',
      description: 'We drive forward thinking by providing the knowledge to embrace new technologies.',
    },
    {
      image: '/vector4.svg',
      title: 'Teamwork',
      description: 'We collaborate openly, leverage diversity to achieve common goals.',
    },
    {
      image: '/vector5.svg',
      title: 'Transparency',
      description: 'We Build trust through openness, sharing knowledge, and being accountable.',
    },
    {
      image: '/vector6.svg',
      title: 'Result-Driven',
      description: 'We rely on evidence-based insights to inform our decisions and drive results.',
    },
  ];

  return (
    <section className="core-values">
      <div className="dml-container core-container">
        <div className="core-image">
          <img src="/core.svg"></img>
        </div>
        <div className="core-content">
          <h2>
            OUR <span className="orange-letter">CORE VALUES</span>
          </h2>
          <div className="core-card">
            {coreCardsData.map((item, idx) => (
              <div className="core-cards" key={idx}>
                <div className="cards-flex">
                  <Image src={item.image} alt="Core Value" width={24} height={24} />
                  <h4>{item.title}</h4>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
