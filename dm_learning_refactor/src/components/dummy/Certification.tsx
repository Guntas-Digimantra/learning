import Image from 'next/image';

const list = [
  {
    image: '/get-certified-1.png',
    title: 'Industry-Ready Certification [IRC]',
    description: 'Unlike any academic certificate, for the first-time in India, IRC certifies your job readiness.',
  },
  {
    image: '/get-certified-2.png',
    title: 'Shareable, Credible and Official',
    description:
      'Add it to your LinkedIn, share it on Twitter & WhatsApp, or via Email. Make your profile stand out everywhere.',
  },
  {
    image: '/get-certified-3.png',
    title: 'Let companies compete for you',
    description: 'IRC certifies your industry-readiness and gets you placed with higher salaries.',
  },
];

const Certification = () => {
  return (
    <section className="bg-[#f1f5f9]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex flex-row gap-5 py-[100px] max-md:flex-col max-md:gap-10">
          <div className="flex-1">
            <h2>Get Certified</h2>
            <p className="pb-[50px]">
              Yes, you&apos;ll get a certificate representing your Industry Readiness once you submit your projects and
              clear the pre placement test.
            </p>
            <ul>
              {list.map((item, index) => (
                <li key={index} className="mb-[50px] flex flex-row gap-5 max-md:mb-[30px] max-md:gap-2.5">
                  <span className="w-full max-w-[80px]">
                    <Image src={item.image} alt="certification-images" height={72} width={72} />
                  </span>
                  <div>
                    <h3 className="text-lg text-black">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="pb-[18px] text-lg font-semibold">Next batch starting soon</p>
            <button
              type="button"
              className="h-[54px] max-w-[173px] rounded-3xl bg-black px-8 py-4 font-dm-sans text-base font-semibold text-white hover:bg-white hover:text-black"
            >
              Limited Seats
            </button>
          </div>
          <div className="mx-auto flex-1 text-center">
            <Image src="/skill-certificate.png" alt="certification-images" height={550} width={450} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
