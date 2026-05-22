import Image from 'next/image';
import Link from '@/components/ui/link';

const Certifications = () => {
  const certificationData = [
    { img: '/ai-engineer-microsoft.png', courseTitle: 'AI Engineer' },
    { img: '/data-analyst.png', courseTitle: 'Data Analyst' },
    { img: '/functional consultant.png', courseTitle: 'Functional Consultant' },
    { img: '/developer.png', courseTitle: 'Developer-(Beginner)' },
    {
      img: '/developer-intermediate.png',
      courseTitle: 'Developer-(Intermediate)',
    },
    { img: '/devops.png', courseTitle: 'DevOps Engineer' },
    {
      img: '/info-protection-adminstration.png',
      courseTitle: 'Information Protection Administrator',
    },
    {
      img: '/securtiy-operation.png',
      courseTitle: 'Security Operations Analyst',
    },
    { img: '/data-scientist.png', courseTitle: 'Data Scientist' },
    { img: '/security-engineer.png', courseTitle: 'Security Engineer' },
    { img: '/solution-architect.png', courseTitle: 'Solutions Architect' },
    { img: '/data-engineer.png', courseTitle: 'Data Engineer' },
  ];

  return (
    <section className="bg-black py-[100px] max-[1024px]:py-[60px]" id="certification-career">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div>
          <h2 className="mb-[50px] text-center text-white">Certifications Career Path</h2>
          <div className="grid grid-cols-3 gap-[100px] max-[991px]:grid-cols-2 max-[991px]:gap-[60px] max-[575px]:grid-cols-1">
            {certificationData?.map((item, i) => (
              <Link
                key={i}
                href={`/microsoft-certifications/${item.courseTitle.toLowerCase().replace(/ /g, '-')}`}
                className="flex flex-col justify-between transition-[transform,opacity] duration-300 ease-in-out hover:scale-[1.07]"
              >
                <Image
                  src={item.img}
                  alt="certification-images"
                  width={400}
                  height={200}
                  className="w-full rounded-[26px] px-5 py-[15px]"
                />
                <h3 className="rounded-[15px] bg-[#443f3f] p-3 text-center text-lg text-white">{item.courseTitle}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
