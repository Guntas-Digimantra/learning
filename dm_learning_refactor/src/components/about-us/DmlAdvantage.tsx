import Image, { StaticImageData } from 'next/image';
import icon_1 from '../../../public/h2_features_icon02.svg';
import icon_2 from '../../../public/h2_features_icon03.svg';
import icon_3 from '../../../public/h3_features_icon02.svg';

interface DataType {
  id: number;
  icon: StaticImageData;
  title: string;
  desc: string;
  cardClassName: string;
  iconClassName: string;
}

const feature_data: DataType[] = [
  {
    id: 1,
    icon: icon_1,
    title: 'Self-Paced Learning',
    desc: 'Learn at your own pace, anytime, anywhere. Our personalized approach helps you fill knowledge gaps and accelerate your learning journey. With 24/7 access, you can fit learning into your busy schedules. ',
    cardClassName:
      'min-h-[310px] rounded-[20px] border border-[#c9e4e9] bg-[#f1fdff] p-[40px_40px_40px_50px] shadow-[8px_8px_0_0_#c9e4e9] max-[767px]:p-[15px]',
    iconClassName: 'bg-[#1bcbe3]',
  },
  {
    id: 2,
    icon: icon_2,
    title: 'Expert-Led Content',
    desc: 'Access a vast library of trusted, standards-aligned courses and lessons, covering a range of topics including cloud computing, artificial intelligence, finance, sales & marketing, and more! ',
    cardClassName:
      'min-h-[310px] rounded-[20px] border border-[#c8c1ed] bg-[#edeaff] p-[40px_40px_40px_50px] shadow-[8px_8px_0_0_#d9d5f1] max-[767px]:p-[15px]',
    iconClassName: 'bg-[#5751e1]',
  },
  {
    id: 3,
    icon: icon_3,
    title: 'Empowered Learning Experience',
    desc: 'Get the support you need to succeed with our tools that empower teachers to identify knowledge gaps, tailor instructions, and provide personalized guidance.',
    cardClassName:
      'min-h-[310px] rounded-[20px] border border-[#ebe0c4] bg-[#fff7e2] p-[40px_40px_40px_50px] shadow-[8px_8px_0_0_#e5decb] max-[767px]:p-[15px]',
    iconClassName: 'bg-[#ffc224]',
  },
];

const DmlAdvantage = () => {
  return (
    <section className="bg-[#f7f7f9] py-[100px] max-[767px]:py-[60px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="mb-[50px] text-center">
          <span className="mb-[14px] inline-block rounded-[30px] bg-[#efeefe] px-4 py-[3px] text-[#5751e1] font-medium leading-[1.62]">
            Our Top Features
          </span>
          <h2 className="text-[40px] text-[#121212] max-[767px]:pb-[15px] max-[767px]:text-[28px]">
            Experience the DMLearning Advantage
          </h2>
          <p>
            We&apos;re committed to providing a learning experience that&apos;s tailored to your needs. Here&apos;s what
            you can expect:
          </p>
        </div>
        <div className="flex flex-row gap-[30px] max-[991px]:mx-auto max-[991px]:max-w-[500px] max-[991px]:flex-col">
          {feature_data.map((item) => (
            <div key={item.id} className="flex-[1_1_calc(33.33%-20px)]">
              <div
                className={`relative z-[1] mb-[30px] transition-all duration-300 ease-out hover:shadow-none ${item.cardClassName}`}
              >
                <div>
                  <div className="flex items-center gap-[15px] pb-6">
                    <div
                      className={`flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full text-white ${item.iconClassName}`}
                    >
                      <Image src={item.icon} alt="icon" className="h-10 fill-white" />
                    </div>
                    <span className="text-[22px] font-semibold text-[#121212]">{item.title}</span>
                  </div>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DmlAdvantage;
