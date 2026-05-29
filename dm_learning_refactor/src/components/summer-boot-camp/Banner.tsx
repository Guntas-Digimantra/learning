'use client';
import Image from 'next/image';
import React, { FC } from 'react';
import Link from '@/components/ui/link';
import bootCamp from '../../../public/summer-herobanner.png';

interface BannerProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const Banner: FC<BannerProps> = ({
  description = "Join our Summer Bootcamp to gain hands-on experience in crucial engineering skills relevant to the IT sector. Connect with industry professionals, engage in practical projects, and equip yourself with the insights needed to launch a successful tech career. Don't just learn—experience the future of technology!",
  buttonText = 'Make your summer count!',
  onButtonClick,
}) => (
  <section className="boot-camp-section">
    <div className="dml-container">
      <div className="hero-boot">
        <div className="hero-content">
          <div className="desc-box">
            <span className="sync-text">Welcome to Bootcamp</span>
          </div>
          <h1>
            DML Summer <span className="courses-orange">Bootcamp!</span>
          </h1>
          <p>{description}</p>
          <div>
            <Link href="/student-enrollment" onClick={onButtonClick} className="dml-button">
              {buttonText}
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <Image src={bootCamp} alt="Summer Bootcamp" priority />
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
