import Image from 'next/image';

const data = [
  {
    image: '/get-certified-1.png',
    title: 'course duration',
    description: '8 Months, if completed as per the schedule',
  },
  {
    image: '/get-certified-1.png',
    title: 'eligibility',
    description: 'All IT & Non-IT Branches No Prior Coding Knowledge is required',
  },
  {
    image: '/get-certified-1.png',
    title: 'certificate',
    description: 'Industry-Ready-Certification certifies your job readiness',
  },
  {
    image: '/get-certified-1.png',
    title: 'scholarships',
    description: 'Up to 16,000/- Attend the Free Demo for details',
  },
];

const Features = () => {
  return (
    <section className="bg-[#0f172a] py-[60px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="grid grid-cols-4 gap-2.5 max-[991px]:grid-cols-2 max-md:grid-cols-1">
          {data.map((item, index) => (
            <div key={index} className="flex gap-2.5">
              <span className="w-full max-w-[75px]">
                <Image src={item.image} alt={item.title} height={64} width={64} />
              </span>
              <div>
                <h3 className="mb-1 text-sm font-semibold uppercase text-[#94a3b8]">{item.title}</h3>
                <p className="text-white">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
