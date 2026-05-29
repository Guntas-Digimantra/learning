import Image, { StaticImageData } from 'next/image';
import icon_1 from '../../../public/h2_features_icon02.svg';
import icon_2 from '../../../public/h2_features_icon03.svg';
import icon_3 from '../../../public/h3_features_icon02.svg';

interface DataType {
  id: number;
  icon: StaticImageData;
  title: string;
  desc: string;
  cardClass: string;
  iconBgClass: string;
}

const feature_data: DataType[] = [
  {
    id: 1,
    icon: icon_1,
    title: 'Self-Paced Learning',
    desc: 'Learn at your own pace, anytime, anywhere. Our personalized approach helps you fill knowledge gaps and accelerate your learning journey. With 24/7 access, you can fit learning into your busy schedules. ',
    cardClass:
      'border-[#c9e4e9] bg-[#f1fdff] shadow-[8px_8px_0_0_#c9e4e9]',
    iconBgClass: 'bg-[#1bcbe3]',
  },
  {
    id: 2,
    icon: icon_2,
    title: 'Expert-Led Content',
    desc: 'Access a vast library of trusted, standards-aligned courses and lessons, covering a range of topics including cloud computing, artificial intelligence, finance, sales & marketing, and more! ',
    cardClass:
      'border-[#c8c1ed] bg-[#edeaff] shadow-[8px_8px_0_0_#d9d5f1]',
    iconBgClass: 'bg-[#5751e1]',
  },
  {
    id: 3,
    icon: icon_3,
    title: 'Empowered Learning Experience',
    desc: 'Get the support you need to succeed with our tools that empower teachers to identify knowledge gaps, tailor instructions, and provide personalized guidance.',
    cardClass:
      'border-[#ebe0c4] bg-[#fff7e2] shadow-[8px_8px_0_0_#e5decb]',
    iconBgClass: 'bg-[#ffc224]',
  },
];

const DmlAdvantage = () => {
  return (
    <section className="dml-advantages-section bg-[#f7f7f9]" style={{ padding: '100px 0' }}>
      <div className="dml-container">
        <div className="top-features text-center" style={{ marginBottom: 50 }}>
          <span
            className="sub-title inline-block rounded-[30px] bg-[#efeefe] font-medium leading-[1.62] text-[#5751e1]"
            style={{ marginBottom: 14, padding: '3px 16px' }}
          >
            Our Top Features
          </span>
          <h2 className="title !text-[40px] !leading-[52px] !font-semibold text-[#121212] max-[767px]:!text-[28px]">
            Experience the DMLearning Advantage
          </h2>
          <p
            className="text-base leading-[1.7] text-[#6d6c80]"
            style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
          >
            We&apos;re committed to providing a learning experience that&apos;s tailored to your needs.
            Here&apos;s what you can expect:
          </p>
        </div>
        <div className="features__item-wrap">
          <div className="feature-styling flex flex-row gap-[30px] max-[991px]:mx-auto max-[991px]:max-w-[500px] max-[991px]:flex-col">
            {feature_data.map((item) => (
              <div key={item.id} style={{ flex: '1 1 calc(33.33% - 20px)' }}>
                <div
                  className={`features__item-two relative z-[1] min-h-[310px] rounded-[20px] border transition-all duration-300 ease-out hover:!shadow-none ${item.cardClass}`}
                  style={{ padding: '40px 40px 40px 50px', marginBottom: 30 }}
                >
                  <div className="features__content-two">
                    <div className="content-top flex items-center gap-[15px]" style={{ paddingBottom: 24 }}>
                      <div
                        className={`features__icon-two flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full text-white ${item.iconBgClass}`}
                      >
                        <Image
                          src={item.icon}
                          alt="icon"
                          className="injectable-features h-10 fill-white"
                        />
                      </div>
                      <span className="title text-[22px] font-semibold text-[#121212]">
                        {item.title}
                      </span>
                    </div>
                    <p
                      className="text-base leading-[1.7] text-[#6d6c80]"
                      style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DmlAdvantage;
