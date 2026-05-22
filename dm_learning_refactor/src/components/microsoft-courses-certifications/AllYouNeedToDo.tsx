import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { ChevronRightIcon } from '../common/common';

interface TimelineItemData {
  image: string;
  title: string;
  width: number;
  height: number;
  description: string;
}

interface PageData {
  allYouNeedToDo: (
    | {
        title: string;
        content: TimelineItemData[];
      }
    | TimelineItemData
  )[];
}

const timelineClasses =
  "relative mx-auto flex max-w-[900px] flex-col gap-10 before:absolute before:top-[72px] before:bottom-20 before:left-1/2 before:w-0.5 before:-translate-x-1/2 before:border before:border-dashed before:border-[#c8e1ff] before:content-[''] max-md:before:hidden";

const timelineItemClasses =
  'relative flex items-center justify-between gap-5 max-md:flex-col md:even:flex-row-reverse';

const timelineIconClasses =
  'flex w-full max-w-[50%] items-center justify-center max-md:max-w-full [&_img]:max-w-full';

const timelineContentClasses =
  "relative w-full max-w-[50%] px-[30px] after:absolute after:top-1/2 after:-left-2.5 after:h-3.5 after:w-3.5 after:-translate-y-1/2 after:rounded-full after:border-[3px] after:border-[#a5cbfa] after:bg-[#f4f9fe] after:content-[''] max-md:max-w-full max-md:text-center max-md:after:hidden md:even:after:right-[-10px] md:even:after:left-auto";

function TimelineItemRow({ item }: { item: TimelineItemData }) {
  return (
    <div className={timelineItemClasses}>
      <div className={timelineIconClasses}>
        <Image
          src={item.image}
          alt={item.title}
          width={item.width}
          height={item.height}
          style={{
            width: `${item.width}px`,
            height: `${item.height}px`,
          }}
        />
      </div>
      <div className={timelineContentClasses}>
        <h3 className="mb-2.5 text-xl text-[#e6e6e6]">{item.title}</h3>
        <p className="text-base text-[#e6e6e6]">{item.description}</p>
      </div>
    </div>
  );
}

const AllYouNeedToDo: React.FC<PageData> = ({ allYouNeedToDo }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const params = useParams();
  const currentParam = params?.slug;

  return (
    <section className="bg-[#171717] py-[60px] max-[1024px]:p-0">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="text-center">
          <p className="mb-10 text-[32px] font-bold text-[#e6e6e6]">Career Path</p>
        </div>

        {currentParam === 'developer-(beginner)' ? (
          <div className="flex flex-col">
            {allYouNeedToDo.map((item, index) => (
              <div key={index} className="overflow-hidden border-y border-[#333]">
                <div
                  className="flex cursor-pointer items-center gap-3 px-5 py-[30px] text-white"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className={openIndex === index ? '-rotate-90' : 'rotate-90'}>
                    <ChevronRightIcon />
                  </div>
                  {'content' in item && <h2 className="text-xl">{item.title}</h2>}
                </div>
                {openIndex === index && 'content' in item && (
                  <div className="py-[60px]">
                    <div className={timelineClasses}>
                      {item.content.map((subItem, subIndex) => (
                        <TimelineItemRow key={subIndex} item={subItem} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className={timelineClasses}>
            {allYouNeedToDo?.map((item, index) => {
              if ('content' in item) {
                return item?.content?.map((subItem, subIndex) => (
                  <TimelineItemRow key={`${index}-${subIndex}`} item={subItem} />
                ));
              }

              return <TimelineItemRow key={index} item={item} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllYouNeedToDo;
