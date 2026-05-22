import Image from 'next/image';

interface BannerProps {
  title: string;
  image: string;
  description: string;
}

const Banner: React.FC<BannerProps> = ({ title, image, description }) => {
  return (
    <section className="bg-[#091f2c] pt-[60px] max-[991px]:pt-[100px] max-[1024px]:pb-[50px]">
      <div className="mx-auto flex max-w-[1440px] px-[15px]">
        <div className="flex-1 content-center">
          <p className="uppercase tracking-[0.225rem] text-white">career path</p>
          <h1 className="leading-[1.2] text-white">{title}</h1>
          <p className="pt-2.5 pb-[35px] text-white">{description}</p>
        </div>
        <div className="flex-1 pt-[60px] text-right max-[1024px]:hidden">
          <Image src={image} alt="banner-img" width={500} height={100} className="h-full" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
