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
    <div key={item.id} className="flex-none w-1/4 px-[15px] max-lg:w-1/2 max-sm:w-full">
      <div className="text-center mb-[30px]">
        <div className="mb-[22px] min-h-[93px] transition-all duration-300 ease-out flex justify-center">
          <Image
            src={item.icon}
            width={100}
            height={100}
            alt="img"
            loading="lazy"
          />
        </div>
        <div className="text-white">
          <h4 className="mb-2 text-[20px] font-medium">{item.title}</h4>
          <p className="text-[#acaacc] text-base">{item.desc}</p>
        </div>
      </div>
    </div>
  );
});

const Features = () => {
  return (
    <section className="bg-[#282568] pt-[120px] pb-[90px] max-md:py-[60px]">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="">
          <div className="w-1/2 mx-auto text-center text-white pb-10 max-lg:w-full">
            <div>
              <h2 className="text-[36px] max-md:text-[28px] font-bold mb-4">Start Your Learning Journey Today!</h2>
              <p>
                Ready to take the first step towards transforming your career?
                Our comprehensive program is designed to help you achieve your
                goals.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
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
