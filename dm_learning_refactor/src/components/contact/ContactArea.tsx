import ContactForm from '../home/ContactForm';
import ContactInfo from '../common/ContactInfo';

const ContactArea = () => {
  return (
    <section className="contact-area-section bg-white" style={{ padding: '100px 0' }}>
      <div className="dml-container">
        <div className="contact-us-container flex gap-[30px] max-[1024px]:mx-auto max-[1024px]:max-w-[700px] max-[1024px]:flex-col-reverse">
          <ContactInfo />

          <div className="contact-form-container w-[70%] min-[1025px]:max-[1400px]:w-[62%] max-[1024px]:mx-auto max-[1024px]:w-full">
            <div className="contact-form-wrap h-full rounded-xl border border-[#e1e1e1] bg-[#f7f7fa] px-10 pb-[42px] pt-[30px] max-[1024px]:mx-auto max-[1024px]:my-[60px] max-[1024px]:max-w-[700px] max-[1024px]:px-5 max-[1024px]:pb-[30px] max-[1024px]:pt-[25px]">
              <ContactForm />
              <p className="ajax-response mb-0"></p>
            </div>
          </div>
        </div>
        <div className="contactus-map-container pt-10 max-[1024px]:mx-auto max-[1024px]:max-w-[700px]">
          <iframe
            className="digi-contact-map h-[555px] w-full border-0"
            title="Map showing the location of DigiMantra, Gill Road, Ludhiana, Punjab"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d54802.62714002022!2d75.82161483247461!3d30.85407763640731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x391a828450eb6597%3A0x5be2f38457c12082!2sDigiMantra%2C%20Gill%20Road%2C%20Ludhiana%2C%20Punjab!3m2!1d30.853963!2d75.8628967!5e0!3m2!1sen!2sin!4v1729512852774!5m2!1sen!2sin"
            width={600}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
