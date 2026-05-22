import Image from "next/image";
import icon_1 from "../../../public/features_icon01.svg";
import icon_2 from "../../../public/features_icon02.svg";
import icon_3 from "../../../public/features_icon03.svg";
import icon_4 from "../../../public/features_icon04.svg";
import icon_5 from "../../../public/features_icon05.svg";
import icon_6 from "../../../public/features_icon06.svg";
import { memo } from "react";

const feature_data = [
  {
    id: 1,
    page: "home_1",
    icon: icon_1,
    title: "Enroll with Ease",
    desc: "Secure your spot in our program and begin your learning journey.",
  },
  {
    id: 2,
    page: "home_1",
    icon: icon_2,
    title: "Learn at Your Own Pace",
    desc: "Access our cutting-edge learning platform and learn at a pace that suits you. ",
  },
  {
    id: 3,
    page: "home_1",
    icon: icon_3,
    title: "Expert Guidance",
    desc: "Engage with certified instructors who will lead interactive sessions and provide valuable insights.",
  },
  {
    id: 4,
    page: "home_1",
    icon: icon_4,
    title: "Earn Your Certificate",
    desc: "Upon completing the course, receive a certificate of completion to showcase your skills.",
  },
  {
    id: 5,
    page: "home_1",
    icon: icon_5,
    title: "Career Opportunities",
    desc: "Get access to our Career Connect Platform, connecting you with top employers and job opportunities. ",
  },
  {
    id: 6,
    page: "home_1",
    icon: icon_6,
    title: "Gain Practical Experience",
    desc: "Participate in a 6-month internship and launch your career with a potential pre-placement offer from DigiMantra.",
  },
];

const FeatureItem = memo(({ item } : any) => {
  return (
    <div key={item.id} className="feature-icon-container">
      <div className="features__item">
        <div className="features__icon">
          <Image
            src={item.icon}
            width={100}
            height={100}
            alt="img"
            unoptimized
          />
        </div>
        <div className="features__content">
          <h4 className="title">{item.title}</h4>
          <p>{item.desc}</p>
        </div>
      </div>
    </div>
  );
});

const Features = () => {
  return (
    <section className="features__area">
      <div className="dml-container">
        <div className="">
          <div className="feature-content">
            <div className="section__title">
              <h2 className="title">Start Your Learning Journey Today!</h2>
              <p>
                Ready to take the first step towards transforming your career?
                Our comprehensive program is designed to help you achieve your
                goals.
              </p>
            </div>
          </div>
        </div>
        <div className="features-content-div">
          {feature_data.map((item) => (
            <FeatureItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

FeatureItem.displayName = "FeatureItem";
export default Features;
