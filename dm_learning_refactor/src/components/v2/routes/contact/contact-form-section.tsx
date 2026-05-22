import Link from 'next/link';
import { Locate, MessageCircle, PhoneCall } from 'lucide-react';

import ContactForm from '../../forms/contact-form';
import ContainerSection from '../../common/container-section';

const contactInfo = [
  {
    type: 'location',
    icon: <Locate />,
    url: 'https://maps.app.goo.gl/6sx6Yh2iNLUPihRo8',
    data: 'Ground Floor, Plot No. C - 212, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 140307',
  },
  { type: 'email', icon: <MessageCircle />, data: 'hello@learning.digimantra.com' },
  { type: 'phone', icon: <PhoneCall />, data: '+91-172-613-1700' },
];

export default function ContactFormSection() {
  return (
    <ContainerSection className="mx-auto">
      <div className="bg-primary/5 relative overflow-hidden rounded-3xl flex lg:flex-nowrap flex-wrap">
        <div className="bg-primary sm:py-19 sm:px-11 p-6 rounded-3xl lg:max-w-xl max-w-full w-full flex flex-col justify-between items-start">
          <div className="w-full">
            <h3 className="text-3xl sm:text-4xl font-bold sm:mb-14 mb-7">Get in touch</h3>
            <div className="flex flex-col gap-8 items-start sm:text-2xl font-semibold text-[#F0F0F0]">
              {contactInfo?.map(({ type, icon, data, url }) => (
                <div
                  key={type}
                  className="flex min-[364px]:flex-row flex-col min-[364px]:items-center items-start gap-5"
                >
                  <span>{icon}</span>
                  {['email', 'phone'].includes(type) ? (
                    <Link
                      href={type === 'email' ? `mailto:${data}` : `tel:${data}`}
                      target="__blank"
                      rel="noopener noreferrer"
                    >
                      {data}
                    </Link>
                  ) : (
                    <Link href={url ?? ''} target="__blank" rel="noopener noreferrer">
                      {data}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* <div className="flex flex-col sm:gap-5 gap-2">
            <p className="sm:text-2.5xl font-semibold lg:mt-0 mt-10">Available on:</p>
            <div className="flex sm:flex-nowrap flex-wrap items-center gap-2.5">
              <Link
                href="https://apps.apple.com/in/app/welltra-ai/id6474238774"
                target="_blank"
                rel="noopner noreferrer"
              >
                <Image src="/contact/app_store.png" alt="app store" width={172} height={54} className="h-14" />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.welltra&hl=en&gl=US&pli=1"
                target="_blank"
                rel="noopner noreferrer"
              >
                <Image src="/contact/play_store.png" alt="play store" width={190} height={54} className="h-14" />
              </Link>
            </div>
          </div> */}
        </div>

        <div className="xl:p-20 min-[364px]:p-6 p-4 w-full">
          <h4 className="text-3xl sm:text-4xl font-bold mb-8">
            Send Us a <span className="text-primary">Message</span>
          </h4>
          <ContactForm />
        </div>
      </div>
    </ContainerSection>
  );
}
