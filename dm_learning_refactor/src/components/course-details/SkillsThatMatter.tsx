import React from 'react';

export interface SkillItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SkillsThatMatterProps {
  titleStart: string;
  titleHighlight: string;
  titleEnd: string;
  items: SkillItem[];
}

const SkillsThatMatter: React.FC<SkillsThatMatterProps> = ({
  titleStart,
  titleHighlight,
  titleEnd,
  items,
}) => {
  return (
    <section className="bg-[#fafafa] py-16">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <h2 className="mb-10 text-center text-[56px] font-semibold leading-[1.2] text-[#2e2e2e] [font-variant:all-small-caps] max-[1240px]:text-[48px] max-[991px]:text-[40px] max-[600px]:text-[32px]">
          {titleStart}{' '}
          <span className="text-[#fc8b20] [font-variant:all-small-caps]">{titleHighlight}</span>{' '}
          {titleEnd}
        </h2>

        <div className="grid grid-cols-4 gap-8 max-[1024px]:grid-cols-2 max-[991px]:grid-cols-2 max-[991px]:gap-x-[30px] max-[991px]:gap-y-[50px] max-[600px]:grid-cols-1">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative mt-[30px] rounded-xl bg-white px-[30px] pb-[30px] pt-[50px] shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              <div className="absolute -top-[30px] left-[30px] flex h-16 w-16 items-center justify-center rounded-[40px] bg-[#2e2e2e] p-4 [&_img]:brightness-0 [&_img]:invert">
                {item.icon}
              </div>
              <h3 className="mb-3.5 text-2xl font-semibold leading-[150%] text-[#2e2e2e] max-[600px]:text-xl">
                {item.title}
              </h3>
              <p className="text-lg font-normal leading-[150%] text-[#2e2e2e] max-[600px]:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsThatMatter;
