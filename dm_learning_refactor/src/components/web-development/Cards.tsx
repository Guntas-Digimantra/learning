import Image from 'next/image';

const Cards = () => {
  const data = [
    { title: 'Creative Arts', decription: '50+ Items', image: '/minnion.png' },
    {
      title: 'Creative Arts',
      decription: '50+ Items',
      image: '/minnion-2.png',
    },
    { title: 'Creative Arts', decription: '50+ Items', image: '/minnion.png' },
    {
      title: 'Creative Arts',
      decription: '50+ Items',
      image: '/minnion-2.png',
    },
    { title: 'Creative Arts', decription: '50+ Items', image: '/minnion.png' },
    {
      title: 'Creative Arts',
      decription: '50+ Items',
      image: '/minnion-2.png',
    },
    { title: 'Creative Arts', decription: '50+ Items', image: '/minnion.png' },
    {
      title: 'Creative Arts',
      decription: '50+ Items',
      image: '/minnion-2.png',
    },
    { title: 'Creative Arts', decription: '50+ Items', image: '/minnion.png' },
    {
      title: 'Creative Arts',
      decription: '50+ Items',
      image: '/minnion-2.png',
    },
  ];

  return (
    <section className="bg-[#110b39] py-[100px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="grid grid-cols-1 gap-5 max-md:grid-cols-1 max-xl:grid-cols-2 xl:grid-cols-5">
          {Array.isArray(data) &&
            data?.map((item, index) => (
              <div
                key={index}
                className="group flex items-center justify-between rounded-md bg-[linear-gradient(80.47deg,hsla(0,0%,100%,0.07)_2.16%,rgba(119,89,243,0.1)_46.32%,hsla(0,0%,100%,0.07)_97.43%)] p-[18px] transition-all duration-500 ease-[cubic-bezier(0,0,0.2,1)] hover:bg-[#7759f3]"
              >
                <div>
                  <h3 className="text-xl text-white">{item?.title}</h3>
                  <p className="text-sm text-[#9c9aa5] group-hover:text-white">{item?.decription}</p>
                </div>
                <Image
                  src={item?.image}
                  width={85}
                  height={85}
                  alt="img"
                  className="group-hover:drop-shadow-[0_0_7px_#fff]"
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
export default Cards;
