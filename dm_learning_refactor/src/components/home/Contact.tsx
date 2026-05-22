import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="-mt-[150px] bg-[#f7f7f9] py-[90px] max-[991px]:pb-0">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex max-[991px]:flex-col">
          <div className="flex-1 px-[15px]">
            <h2 className="text-[36px] text-black max-[767px]:text-[28px]">
              Connect Anytime, <br />
              <span className="text-[#FC8B20]">Anywhere</span>
            </h2>
            <p className="mb-[30px] mt-[15px]">
              Unlock the future of education! Reach out for inquiries, enrollment details, and
              personalised councelling. Let&apos;s shape your learning journey together with advanced
              technology and support.
            </p>
            <div className="flex justify-center max-[991px]:flex max-[991px]:justify-center">
              <iframe
                className="h-[450px] w-[600px] border-0 max-[1200px]:h-[400px] max-[1200px]:w-[450px]"
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d54802.62714002022!2d75.82161483247461!3d30.85407763640731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x391a828450eb6597%3A0x5be2f38457c12082!2sDigiMantra%2C%20Gill%20Road%2C%20Ludhiana%2C%20Punjab!3m2!1d30.853963!2d75.8628967!5e0!3m2!1sen!2sin!4v1729512852774!5m2!1sen!2sin"
                width="600"
                height="450"
                loading="lazy"
                title="Map showing the location of DigiMantra, Gill Road, Ludhiana, Punjab"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="h-full rounded-xl border border-[#e1e1e1] bg-[#f7f7fa] px-10 pb-[42px] pt-[30px] max-[1024px]:mx-auto max-[1024px]:mb-[60px] max-[1024px]:max-w-[700px] max-[1024px]:px-5 max-[1024px]:pb-[30px] max-[1024px]:pt-[25px]">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
