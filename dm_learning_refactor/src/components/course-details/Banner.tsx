import React from 'react';
import Image from 'next/image';
import Link from "@/components/ui/link";

export interface BannerProps {
  title: string;
  subtitle?: string;
  description: string;
  buttonText?: string;
  bgImage?: string;
  rightImage?: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  description,
  buttonText = "Enroll Now",
  bgImage,
  rightImage
}) => {
  return (
    <section
      className="course-hero-banner"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="dml-container">
        <div className="banner-content-flex">
          <div className="banner-left-text">
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
            <p>{description}</p>
            <button className="dml-button"><Link href='/student-enrollment'>{buttonText}</Link></button>
          </div>
          <div className="banner-right-image">
            {rightImage && (
              <Image
                src={rightImage}
                alt="Course Graphic"
                width={500}
                height={500}
                className="hero-graphic"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
