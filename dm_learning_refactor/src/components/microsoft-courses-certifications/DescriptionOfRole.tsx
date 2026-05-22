import Image from 'next/image';

interface BannerProps {
  secondSectionTitle: string;
  descImage: string;
  secondSectionDescription: string;
}

const DescriptionOfRole: React.FC<BannerProps> = ({ secondSectionTitle, secondSectionDescription, descImage }) => {
  return (
    <section className="bg-[#171717] py-[100px] max-[1024px]:py-[60px]">
      <div className="mx-auto flex max-w-[1440px] px-[15px] max-[1024px]:flex-col">
        <div className="flex-1 pr-[30px] max-[1024px]:pb-[30px] max-[1024px]:pr-0 max-[1024px]:text-center">
          <Image src={descImage} width={580} height={450} alt="description-role" />
        </div>
        <div className="flex-1 content-center py-[15px] max-[1024px]:text-center">
          <h2 className="text-[32px] text-[#e6e6e6]">{secondSectionTitle}</h2>
          <p className="pt-1.5 text-[#e6e6e6]">{secondSectionDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default DescriptionOfRole;
