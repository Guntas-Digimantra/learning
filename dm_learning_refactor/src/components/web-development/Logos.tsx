import Image from 'next/image';

const Logos = () => {
  const logos = [
    '/amazon.png',
    '/microsoft.png',
    '/ibm.png',
    '/google.png',
    '/meta.png',
    '/digimantra.png',
    '/infosys.png',
    '/tcs.png',
    '/tech-mahindra.png',
    '/hcl.png',
    '/wipro.png',
    '/cognizant.png',
    '/capgemini.png',
    '/accenture.png',
  ];

  return (
    <section className="py-[100px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <p className="mb-0 text-center text-base font-extrabold text-[#525fe1]">WHY CHOOSE US</p>
        <h2 className="mb-[50px] text-center text-[#231f40]">Our learners work at</h2>
        <div className="flex flex-col gap-8">
          <div className="flex justify-between">
            {logos?.slice(0, 5).map((logo, index) => (
              <div key={index}>
                <Image src={logo} alt="logo" width={235} height={84} />
              </div>
            ))}
          </div>
          <div className="flex justify-between px-[150px] max-lg:px-0">
            {logos?.slice(5, 9).map((logo, index) => (
              <div key={index}>
                <Image src={logo} alt="logo" width={235} height={84} />
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            {logos?.slice(9, 14).map((logo, index) => (
              <div key={index}>
                <Image src={logo} alt="logo" width={235} height={84} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
