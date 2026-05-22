import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="blog__post-area">
      <div className="dml-container">
        <div className="blog-post-content">
          <div className="w-50 connect-anywhere-container">
            <h2>
              Connect Anytime, <br />
              <span className="courses-orange">Anywhere</span>
            </h2>
            <p className="unlock-content">
              Unlock the future of education! Reach out for inquiries,
              enrollment details, and personalised councelling. Let&apos;s shape
              your learning journey together with advanced technology and
              support.
            </p>
            <div className="map-container">
              <iframe
                className="digi-map"
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d54802.62714002022!2d75.82161483247461!3d30.85407763640731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x391a828450eb6597%3A0x5be2f38457c12082!2sDigiMantra%2C%20Gill%20Road%2C%20Ludhiana%2C%20Punjab!3m2!1d30.853963!2d75.8628967!5e0!3m2!1sen!2sin!4v1729512852774!5m2!1sen!2sin"
                width="600"
                height="450"
                unoptimized
                title="Map showing the location of DigiMantra, Gill Road, Ludhiana, Punjab"
              ></iframe>
            </div>
          </div>
          <div className="w-50">
            <div className="contact-form-wrap">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
