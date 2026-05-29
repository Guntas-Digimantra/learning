'use client';
import React from 'react';
import Image from 'next/image';
import Link from '@/components/ui/link';
import heroImage from '../../../public/advanced-banner.png';

const Banner: React.FC = () => {
  return (
    <section className="industrial-banner">
      <div className="banner-content-advanced">
        <div>
          <h1>
            Advanced Industrial Training & <b>Internship</b>
          </h1>
          <p>
            Build your dream career by mastering essential soft skills and technical topics through flexible learning,
            hands-on practice, and personalized support.
          </p>
          <div>
            <Link href="/courses" className="dml-button">
              Explore programs
            </Link>
          </div>
        </div>
        <div>
          <Image src={heroImage} alt="bannerimage" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
