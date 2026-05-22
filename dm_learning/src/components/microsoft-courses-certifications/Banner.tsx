import Image from "next/image";
interface BannerProps {
  title: string;
  image: string;
  description: string;
}

const Banner: React.FC<BannerProps> = ({ title, image, description }) => {
  return (
    <section className="career-path-training-section">
      <div className="dml-container career-path-content">
        <div className="career-path-left">
          <p className="career-path">career path</p>
          <h1>{title}</h1>
          <p className="career-description">{description}</p>
        </div>
        <div className="career-path-right">
          <Image src={image} alt="banner-img" width={500} height={100} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
