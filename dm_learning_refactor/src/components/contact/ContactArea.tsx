'use client';

import { useEffect, useState } from 'react';
import ContactForm from '../home/ContactForm';
import ContactInfo from '../common/ContactInfo';

const ContactArea = () => {
  const [viewportWidth, setViewportWidth] = useState<number>(1200);

  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const isTabletOrBelow = viewportWidth <= 1024;
  const is991OrBelow = viewportWidth <= 991;

  return (
    <section className="contact-area-section bg-white max-[1024px]:pb-[60px] max-[1024px]:pt-0">
      <div className="dml-container">
        <div
          className="contact-us-container"
          style={{
            display: 'flex',
            flexDirection: isTabletOrBelow ? 'column-reverse' : 'row',
            gap: is991OrBelow ? '50px' : '30px',
          }}
        >
          <ContactInfo />

          <div className="contact-form-container">
            <div className="contact-form-wrap h-full rounded-xl border border-[#e1e1e1] bg-[#f7f7fa] px-10 pb-[42px] pt-[30px] max-[1024px]:px-5 max-[1024px]:pb-[30px] max-[1024px]:pt-[25px]">
              <ContactForm />
              <p className="ajax-response mb-0"></p>
            </div>
          </div>
        </div>
        <div
          className="contactus-map-container"
          style={{ paddingTop: 40 }}
        >
          <iframe
            className="digi-contact-map"
            title="Map showing the location of DigiMantra, Gill Road, Ludhiana, Punjab"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d54802.62714002022!2d75.82161483247461!3d30.85407763640731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x391a828450eb6597%3A0x5be2f38457c12082!2sDigiMantra%2C%20Gill%20Road%2C%20Ludhiana%2C%20Punjab!3m2!1d30.853963!2d75.8628967!5e0!3m2!1sen!2sin!4v1729512852774!5m2!1sen!2sin"
            style={{ width: '100%', height: '555px', border: 'none' }}
            width={600}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
