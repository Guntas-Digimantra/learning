import Image from "next/image";

interface BannerProps {
  secondSectionTitle: string;
  descImage:string;
  secondSectionDescription: string;
}

const DescriptionOfRole: React.FC<BannerProps> = ({
  secondSectionTitle,
  secondSectionDescription,
  descImage
}) => {
  return (
    <section className="description-role-section">
      <div className="dml-container description-role-content">
        <div className="description-role-left">
          <Image
            src={descImage}
            width={580}
            height={450}
            alt="description-role"
          />
        </div>
        <div className="description-role-right">
          <h2>{secondSectionTitle}</h2>
          <p>{secondSectionDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default DescriptionOfRole;
