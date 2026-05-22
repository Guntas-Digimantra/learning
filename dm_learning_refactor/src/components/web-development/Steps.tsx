import Image from 'next/image';

const stepList = [
  { icon: '/step-1.svg', title: 'Learn the skills' },
  { icon: '/step-1.svg', title: 'Prep for interviews' },
  { icon: '/step-1.svg', title: 'Get hired' },
];

const Steps = () => {
  return (
    <section className="bg-[#1c0922] py-[100px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="rounded-lg bg-[url('/background-develop.jpg')] bg-cover bg-center px-5 py-[60px]">
          <div className="flex items-center justify-center max-lg:justify-center">
            <div>
              <ul className="flex flex-col items-center max-lg:flex-col lg:flex-row">
                {Array.isArray(stepList) &&
                  stepList?.map((step, index) => (
                    <li
                      key={index}
                      className={`relative text-center ${
                        index === 2
                          ? 'mb-0 mr-0'
                          : 'mb-[30px] mr-0 max-lg:mb-[30px] max-lg:mr-0 max-lg:after:hidden lg:mb-0 lg:mr-[122px] after:absolute after:right-[-122px] after:top-[-19px] after:h-[90px] after:w-[150px] after:bg-[url("/step-arrow.png")] after:bg-no-repeat after:content-[""]'
                      }`}
                    >
                      <Image src={step?.icon} height={70} width={70} alt="step-1" />
                      <p className="mt-3 max-w-full text-lg text-white max-lg:max-w-full lg:max-w-[180px]">
                        {step?.title}
                      </p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
