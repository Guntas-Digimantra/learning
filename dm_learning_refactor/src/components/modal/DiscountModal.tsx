'use client';

import { useEffect, useState } from 'react';
import '../../../public/css/modal.css';
import ContactForm from '../home/ContactForm';
import Image from 'next/image';
import logo from '../../../public/header-logo-dml.png';

export default function HomepageModal({ isModal = true }: { isModal?: boolean }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [showModal]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setShowModal(false);
  if (!showModal) return null;

  return (
    <section className="discount-modal">
      <div className="modal-backdrop" onClick={closeModal}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={closeModal} aria-label="Close modal">
            <svg
              stroke="currentColor"
              fill="#000"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </button>
          <div className="discount-modal-container">
            <div className="discount-modal-content">
              <div>
                <Image src={logo} alt="logo-img" height={26} width={160} className="header-logo-img" />
                <p>Build skills. Get mentorship. Start your tech career with expert-guided, project-based learning.</p>
              </div>
              <Image src="/contact-popup2.png" alt="modal-img" height={400} width={400} />
            </div>
            <div className="contact-form-discount">
              <h2>Contact Us</h2>
              <p>Have questions? Let us help you choose the right course and start your learning journey today.</p>
              <ContactForm isModal={isModal} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
