import Image from 'next/image';

const Adavantages = () => {
  const cards = [
    {
      image: '/why-frontend.png',
      title: 'WHY FRONT END WEB DEVELOPMENT?',
      description: [
        'More than 50% of the highest paying jobs across industries show significant demand for coding skills and web development literacy. Statistics source: Burning Glass, Beyond Tech.',
      ],
    },
    {
      image: '/skills-you-learn.png',
      title: "THE SKILLS YOU'LL LEARN",
      description: ['Programmer', 'Developer', 'Engineer', 'Data Scientist', 'Game Developer'],
    },
    {
      image: '/career-path.png',
      title: 'CAREER PATHS',
      description: ['Programmer', 'Developer', 'Engineer', 'Data Scientist', 'Game Developer'],
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-[100px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="grid grid-cols-1 gap-[30px] min-[1361px]:grid-cols-3 min-[992px]:max-[1360px]:grid-cols-2">
          {Array.isArray(cards) &&
            cards?.map((card, index) => (
              <div key={index} className="rounded-[14px] bg-white p-[50px] shadow-[0px_4px_10px_rgba(33,85,186,0.08)]">
                <Image src={card.image} alt="img-cards" height={91} width={91} />
                <h2 className="my-5 text-[28px] uppercase">{card?.title}</h2>
                <ul className={index > 0 ? 'list-disc pl-5' : ''}>
                  {card?.description.map((item, descIndex) => (
                    <li key={descIndex} className="text-xl font-normal text-[#7f8490]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Adavantages;
