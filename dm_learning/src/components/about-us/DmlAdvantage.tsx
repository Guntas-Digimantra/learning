import Image, { StaticImageData } from "next/image";
import icon_1 from "../../../public/h2_features_icon02.svg"
import icon_2 from "../../../public/h2_features_icon03.svg"
import icon_3 from "../../../public/h3_features_icon02.svg"

interface DataType {
   id: number;
   icon: StaticImageData;
   title: string;
   desc: string;
}[];

const feature_data: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      title: "Self-Paced Learning",
      desc: "Learn at your own pace, anytime, anywhere. Our personalized approach helps you fill knowledge gaps and accelerate your learning journey. With 24/7 access, you can fit learning into your busy schedules. ",
   },

   {
      id: 2,
      icon: icon_2,
      title: "Expert-Led Content",
      desc: "Access a vast library of trusted, standards-aligned courses and lessons, covering a range of topics including cloud computing, artificial intelligence, finance, sales & marketing, and more! ",
   },

   {
      id: 3,
      icon: icon_3,
      title: "Empowered Learning Experience",
      desc: "Get the support you need to succeed with our tools that empower teachers to identify knowledge gaps, tailor instructions, and provide personalized guidance.",
   },
]

const DmlAdvantage = () => {
   return (
      <section className="dml-advantages-section">
         <div className="dml-container">
            <div className="">
               <div className="">
                  <div className="top-features">
                     <span className="sub-title">Our Top Features</span>
                     <h2 className="title">Experience the DMLearning Advantage</h2>
                     <p>We&apos;re committed to providing a learning experience that&apos;s tailored to your needs. Here&apos;s what you can expect:</p>
                  </div>
               </div>
            </div>
            <div className="features__item-wrap">
               <div className="feature-styling">
                  {feature_data.map((item) => (
                     <div key={item.id} className="">
                        <div className="features__item-two">
                           <div className="features__content-two">
                              <div className="content-top">
                                 <div className="features__icon-two">
                                    <Image src={item.icon} alt="icon" className="injectable-features"/>
                                 </div>
                                 <span className="title">{item.title}</span>
                              </div>
                              <p>{item.desc}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default DmlAdvantage;
