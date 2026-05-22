import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { ChevronRightIcon } from "../common/common";

interface PageData {
  allYouNeedToDo: (
    | {
        title: string;
        content: {
          image: string;
          title: string;
          width: number;
          height: number;
          description: string;
        }[];
      }
    | {
        image: string;
        title: string;
        width: number;
        height: number;
        description: string;
      }
  )[];
}

const AllYouNeedToDo: React.FC<PageData> = ({ allYouNeedToDo }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const params = useParams();
  const currentParam = params?.slug;

  return (
    <section className="all-you-need-section">
      <div className="dml-container">
        <div className="all-you-need-top">
          <p className="title">Career Path</p>
        </div>

        {currentParam === "developer-(beginner)" ? (
          <div className="accordion">
            {allYouNeedToDo.map((item, index) => (
              <div key={index} className="accordion-item">
                <div
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  <div
                    className={`right-arrow ${
                      openIndex === index ? "top-arrow" : "right-arrow"
                    }`}
                  >
                    <ChevronRightIcon />
                  </div>
                  {"content" in item && <h2>{item.title}</h2>}
                </div>
                {openIndex === index && "content" in item && (
                  <div className="developer-timeline">
                    <div className="timeline">
                      {item.content.map((subItem, subIndex) => (
                        <div key={subIndex} className="timeline-item">
                          <div className="icon">
                            <Image
                              src={subItem.image}
                              alt={subItem.title}
                              width={subItem.width}
                              height={subItem.height}
                              style={{
                                width: `${subItem.width}px`,
                                height: `${subItem.height}px`,
                              }}
                            />
                          </div>
                          <div className="content">
                            <h3>{subItem.title}</h3>
                            <p>{subItem.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="timeline">
            {allYouNeedToDo?.map((item, index) => {
              if ("content" in item) {
                return item?.content?.map((subItem, subIndex) => (
                  <div key={`${index}-${subIndex}`} className="timeline-item">
                    <div className="icon">
                      <Image
                        src={subItem.image}
                        alt={subItem.title}
                        width={subItem.width}
                        height={subItem.height}
                        style={{
                          width: `${subItem.width}px`,
                          height: `${subItem.height}px`,
                        }}
                      />
                    </div>
                    <div className="content">
                      <h3>{subItem.title}</h3>
                      <p>{subItem.description}</p>
                    </div>
                  </div>
                ));
              }

              return (
                <div key={index} className="timeline-item">
                  <div className="icon">
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
                  <div className="content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllYouNeedToDo;
