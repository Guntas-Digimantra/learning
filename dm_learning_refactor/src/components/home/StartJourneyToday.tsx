import Image from 'next/image';

const StartJourneyToday = () => {
  const data = [
    {
      image: '/projects.svg',
      title: 'Real-World Projects',
      description: 'Secure your spot in our program and begin your learning journey.',
    },
    {
      image: '/certificate.svg',
      title: 'Recognized Certificates',
      description: 'Secure your spot in our program and begin your learning journey.',
    },
    {
      image: '/jobs.svg',
      title: 'Job-Ready Skills',
      description: 'Secure your spot in our program and begin your learning journey.',
    },
  ];

  return (
    <section className="start-journey-section">
      <div className="dml-container">
        <div className="start-journey-container">
          <div className="start-journey-header">
            <h2>
              ONE PLATFORM,<span className="orange-letter">UNLIMITED OPPORTUNITIES</span>
            </h2>
            <p>
              Take the first step toward transforming your career with our all practical programs designed to support
              your success
            </p>
          </div>

          <div className="journey-cards">
            {data.map((item, index) => (
              <div key={index} className="journey-card">
                <div className="cards-flex">
                  <Image src={item.image} alt={item.title} width={76} height={76} />
                  <h3>{item.title}</h3>
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

export default StartJourneyToday;
