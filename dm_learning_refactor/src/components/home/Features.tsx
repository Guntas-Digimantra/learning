import icon_1 from "../../../public/features_icon01.svg";
import icon_2 from "../../../public/features_icon02.svg";
import icon_3 from "../../../public/features_icon03.svg";
import icon_4 from "../../../public/features_icon04.svg";
import icon_5 from "../../../public/features_icon05.svg";
import icon_6 from "../../../public/features_icon06.svg";
import { memo } from "react";

const feature_data = [
  { id: 1, icon: icon_1, title: "Enroll with Ease", desc: "Secure your spot in our program and begin your learning journey." },
  { id: 2, icon: icon_2, title: "Learn at Your Own Pace", desc: "Access our cutting-edge learning platform and learn at a pace that suits you. " },
  { id: 3, icon: icon_3, title: "Expert Guidance", desc: "Engage with certified instructors who will lead interactive sessions and provide valuable insights." },
  { id: 4, icon: icon_4, title: "Earn Your Certificate", desc: "Upon completing the course, receive a certificate of completion to showcase your skills." },
  { id: 5, icon: icon_5, title: "Career Opportunities", desc: "Get access to our Career Connect Platform, connecting you with top employers and job opportunities. " },
  { id: 6, icon: icon_6, title: "Gain Practical Experience", desc: "Participate in a 6-month internship and launch your career with a potential pre-placement offer from DigiMantra." },
];

const FeatureItem = memo(({ item }: { item: (typeof feature_data)[number] }) => (
  <div className="feature-icon-container flex-[0_0_auto] w-1/4 px-[15px] max-[991px]:w-1/2 max-[767px]:!w-full">
    <div className="features__item mb-[30px] text-center">
      <div className="features__icon mb-[22px] min-h-[93px] transition-all duration-300 ease-out">
        <img
          src={item.icon.src}
          width={100}
          height={100}
          alt="img"
          loading="eager"
          decoding="sync"
        />
      </div>
      <div className="features__content">
        <h4 className="title">{item.title}</h4>
        <p
          className="m-0"
          style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
        >
          {item.desc}
        </p>
      </div>
    </div>
  </div>
));

FeatureItem.displayName = "FeatureItem";

const Features = () => {
  return (
    <section className="features__area bg-[#282568] max-[767px]:!pt-[60px] max-[767px]:!pb-[60px]" style={{ padding: '120px 0 90px' }}>
    <div className="dml-container">
      <div>
        <div
          className="feature-content mx-auto w-1/2 text-center max-[991px]:!w-full"
          style={{ paddingBottom: 40 }}
        >
          <div className="section__title">
            <h2 className="title !text-[36px] !font-semibold !text-white max-[767px]:!text-[28px] max-[767px]:!leading-[1.3]">
              Start Your Learning Journey Today!
            </h2>
            <p
              className="text-[16px] leading-[1.7] text-[#acaacc]"
              style={{ marginTop: 15, fontFamily: 'var(--font-poppins), sans-serif' }}
            >
              Ready to take the first step towards transforming your career? Our comprehensive
              program is designed to help you achieve your goals.
            </p>
          </div>
        </div>
      </div>
      <div className="features-content-div flex flex-wrap justify-center">
        {feature_data.map((item) => (
          <FeatureItem key={item.id} item={item} />
        ))}
      </div>
    </div>
    </section>
  );
};

export default Features;
