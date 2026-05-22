"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Pathway = () => {
  const data = [
    {
      title: "Learn",
      description:
        "Experience seamless learning with problem-solving modules, leaderboard, and awards.",
      image: "/learn.png",
    },
    {
      title: "Excel",
      description:
        "Track your skill level and make meaningful progress for you to grow.",
      image: "/excel.png",
    },
    {
      title: "Standout",
      description:
        "Standout to recruiters, showcase ratings, get feedback, and interview insights.",
      image: "/standard.png",
    },
  ];

  const currentIndexRef = useRef(0); // To track the current index without causing re-renders
  const [selectedIndex, setSelectedIndex] = useState(0); // Tracks the currently active item

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndexRef.current + 1) % data.length; // Loop through indices
      currentIndexRef.current = nextIndex; // Update the ref
      setSelectedIndex(nextIndex); // Update the state to re-render
    }, 3000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [data.length]);

  return (
    <section className="pathway-section">
      <div className="dml-container">
        <div>
          <h2>A 3-stage learning model to turn you into a Coding Ninja</h2>

          {/* List Section */}
          <div className="pathway-content-wrapper">
            <div className="pathway-content">
              <ul>
                {data.map((item, index) => (
                  <li
                    key={index}
                    className={`pathway-item ${
                      selectedIndex === index ? "active" : ""
                    }`}
                    onClick={() => setSelectedIndex(index)}
                  >
                    <div className="pathway-content-text">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>

                    <div className="pathway-content-image-mobile">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={400}
                        priority={true}
                      
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image for desktop */}
            <div className="pathway-content-image-desktop">
              {selectedIndex !== null && (
                <Image
                  src={data[selectedIndex].image}
                  alt={data[selectedIndex].title}
                  width={400}
                  height={400}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pathway;
