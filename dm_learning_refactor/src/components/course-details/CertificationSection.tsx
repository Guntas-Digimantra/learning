import React from 'react';
import Image from 'next/image';

interface CertificationSectionProps {
  titleStart: string;
  titleHighlight1: string;
  titleMid: string;
  titleHighlight2?: string;
  description: string;
  image: string;
  backgroundColor?: string;
}

const CertificationSection: React.FC<CertificationSectionProps> = ({
  titleStart,
  titleHighlight1,
  titleMid,
  titleHighlight2,
  description,
  image,
  backgroundColor
}) => {
  return (
    <section className="py-16" style={{ backgroundColor }}>
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex items-center justify-between gap-[90px] rounded-[20px] border border-[#fc8b20] p-16 max-[991px]:flex-col max-[991px]:gap-10 max-[991px]:p-10 max-[991px]:text-center">
          <div className="flex-1">
            <h2 className="text-left text-[56px] font-bold leading-[1.2] text-black [font-variant:all-small-caps] max-[1240px]:text-[40px] max-[991px]:text-center max-[991px]:text-[26px] max-[991px]:leading-[1.2]">
              {titleStart}{' '}
              <span className="text-[#fc8b20]">{titleHighlight1}</span>{' '}
              {titleMid}{' '}
              {titleHighlight2 && (
                <span>
                  <br />
                  {titleHighlight2}
                </span>
              )}
            </h2>
            <p className="pt-6 pb-0 text-xl font-normal leading-[30px] text-[#2e2e2e] max-[1240px]:text-lg max-[991px]:text-base">
              {description}
            </p>
          </div>
          <div className="shrink-0">
            <div className="relative h-64 w-64 max-[991px]:mx-auto max-[991px]:mb-[30px] max-[991px]:h-[250px] max-[991px]:w-[250px]">
              <Image
                src={image}
                alt="Certification"
                width={300}
                height={300}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
