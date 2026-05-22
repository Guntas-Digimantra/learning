import Link from '@/components/ui/link';
import ContactForm from '../home/ContactForm';
import Image from 'next/image';

const infoCard =
  'mb-[30px] flex items-center gap-[25px] rounded-[10px] border border-[#e1e1e1] bg-[#f7f7fa] p-10 max-md:p-5';

const ContactArea = () => {
  return (
    <section className="bg-white py-[100px] max-[1024px]:pb-[60px] max-[1024px]:pt-0">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex gap-[30px] max-[1024px]:mx-auto max-[1024px]:max-w-[700px] max-[1024px]:flex-col-reverse">
          <div className="w-[30%] min-[1025px]:max-[1400px]:w-[38%] max-[1024px]:mx-auto max-[1024px]:w-full">
            <ul className="list-none p-0">
              <li className={infoCard}>
                <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-[#fc8b20] text-xl leading-none max-md:h-14 max-md:w-14">
                  <Image src="/map.svg" alt="img" width={30} height={30} />
                </div>
                <div className="[&_a:hover]:text-[#fc8b20] [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-black">
                  <h4 className="title">Address</h4>
                  <Link
                    href="https://maps.app.goo.gl/XJX2zmcvUxGTqY8e7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-words text-sm"
                  >
                    #2, Knowledge Park, Science Technology Entrepreneur&apos;s park, Gill Road, Ludhiana , Punjab -
                    144006
                  </Link>
                </div>
              </li>
              <li className={infoCard}>
                <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-[#fc8b20] text-xl leading-none max-md:h-14 max-md:w-14">
                  <Image src="/contact_phone.svg" alt="img" width={30} height={30} />
                </div>
                <div className="[&_a:hover]:text-[#fc8b20] [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-black">
                  <h4 className="title">Phone</h4>
                  <Link href="tel:+91-172-613-1700" className="text-sm">
                    +91-172-613-1700
                  </Link>
                </div>
              </li>
              <li className={infoCard}>
                <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-[#fc8b20] text-xl leading-none max-md:h-14 max-md:w-14">
                  <Image src="/emial.svg" alt="img" width={30} height={30} />
                </div>
                <div className="[&_a:hover]:text-[#fc8b20] [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-black">
                  <h4 className="title">E-mail Address</h4>
                  <Link href="mailto:hello@learning.digimantra.com" className="break-all text-sm">
                    hello@learning.digimantra.com
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          <div className="w-[70%] min-[1025px]:max-[1400px]:w-[62%] max-[1024px]:mx-auto max-[1024px]:w-full">
            <div className="h-full rounded-xl border border-[#e1e1e1] bg-[#f7f7fa] px-10 pb-[42px] pt-[30px] max-[1024px]:mx-auto max-[1024px]:my-[60px] max-[1024px]:max-w-[700px] max-[1024px]:px-5 max-[1024px]:pb-[30px] max-[1024px]:pt-[25px]">
              <ContactForm />
              <p className="ajax-response mb-0"></p>
            </div>
          </div>
        </div>
        <div className="pt-10 max-[1024px]:mx-auto max-[1024px]:max-w-[700px]">
          <iframe
            className="h-[555px] w-full"
            title="Map showing the location of DigiMantra, Gill Road, Ludhiana, Punjab"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d54802.62714002022!2d75.82161483247461!3d30.85407763640731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x391a828450eb6597%3A0x5be2f38457c12082!2sDigiMantra%2C%20Gill%20Road%2C%20Ludhiana%2C%20Punjab!3m2!1d30.853963!2d75.8628967!5e0!3m2!1sen!2sin!4v1729512852774!5m2!1sen!2sin"
            width="600"
            height="450"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
