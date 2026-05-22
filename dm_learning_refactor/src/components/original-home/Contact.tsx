import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="bg-[#f7f7f9] pt-[90px] pb-[90px] max-lg:pb-0 -mt-[150px] relative z-10">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="flex max-lg:flex-col gap-8 max-lg:gap-10">
          <div className="flex-1 w-1/2 max-lg:w-full px-[15px]">
            <h2 className="text-[36px] max-md:text-[28px] text-black font-bold mb-4">
              Connect Anytime, <br />
              <span className="text-[#fc8b20]">Anywhere</span>
            </h2>
            <p className="mt-[15px] mb-[30px] text-gray-700">
              Unlock the future of education! Reach out for inquiries,
              enrollment details, and personalised councelling. Let&apos;s shape
              your learning journey together with advanced technology and
              support.
            </p>
            <div className="w-full overflow-hidden rounded-xl">
              <iframe
                className="w-[600px] h-[450px] max-xl:w-[450px] max-xl:h-[400px] max-w-full border-none"
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d54802.62714002022!2d75.82161483247461!3d30.85407763640731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x391a828450eb6597%3A0x5be2f38457c12082!2sDigiMantra%2C%20Gill%20Road%2C%20Ludhiana%2C%20Punjab!3m2!1d30.853963!2d75.8628967!5e0!3m2!1sen!2sin!4v1729512852774!5m2!1sen!2sin"
                loading="lazy"
                title="Map showing the location of DigiMantra, Gill Road, Ludhiana, Punjab"
              ></iframe>
            </div>
          </div>
          <div className="flex-1 w-1/2 max-lg:w-full">
            <div className="h-full rounded-[12px] border border-[#e1e1e1] bg-[#f7f7fa] pt-[30px] px-[40px] pb-[42px] max-lg:mx-auto max-lg:max-w-[700px] max-lg:my-[60px] max-lg:p-[25px_20px_30px]">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
