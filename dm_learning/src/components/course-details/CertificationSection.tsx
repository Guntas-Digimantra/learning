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
    <section className="certification-section" style={{ backgroundColor }}>
      <div className="dml-container">
        <div className="certification-box">
          <div className="certification-content">
            <h2 className="certification-title">
              {titleStart} <span>{titleHighlight1}</span> {titleMid} {titleHighlight2 && <span><br />{titleHighlight2}</span>}
            </h2>
            <p className="certification-description">{description}</p>
          </div>
          <div className="certification-image-container">
            <div className="certification-image-circle">
              <Image 
                src={image} 
                alt="Certification" 
                width={300} 
                height={300} 
                className="certification-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
