import React from 'react';
import Image from 'next/image';
import Link from "@/components/ui/link";

export interface IncludedItem {
  iconUrl?: string;
  iconSvg?: React.ReactNode;
  text: string;
}

export interface CourseIncludedSectionProps {
  title: any;
  description: string;
  buttonText: string;
  includedTitle: string;
  includedItems: IncludedItem[];
  backgroundColor?: string;
}

const CourseIncludedSection: React.FC<CourseIncludedSectionProps> = ({
  title,
  description,
  buttonText,
  includedTitle,
  includedItems,
  backgroundColor = '#FFF6EA', // Default background color matches the design
}) => {
  return (
    <section
      className="course-included-section"
      style={{ background: backgroundColor }}
    >
      <div className="dml-container">
        <div className="course-included-flex">
          {/* Left Side Info */}
          <div className="course-included-info">
            <h2 className="course-included-title">{title}</h2>
            <p className="course-included-description">{description}</p>
            <button className="dml-button course-included-btn">
              <Link href='/student-enrollment'>
              {buttonText}
              </Link>
            </button>
          </div>

          {/* Right Side Card */}
          <div className="course-included-card">
            <h3 className="course-included-card-title">{includedTitle}</h3>
            <ul className="course-included-list">
              {includedItems.map((item, index) => (
                <li key={index} className="course-included-list-item">
                  <span className="included-icon">
                    {item.iconSvg ? (
                      item.iconSvg
                    ) : item.iconUrl ? (
                      <Image
                        src={item.iconUrl}
                        alt="icon"
                        width={16}
                        height={16}
                      />
                    ) : null}
                  </span>
                  <span className="included-text">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseIncludedSection;
