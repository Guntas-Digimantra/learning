import Link from '@/components/ui/link';
import Image from 'next/image';

const ContactInfo = () => {
  return (
    <div className="contact-info-wrap w-[30%] min-[1025px]:max-[1400px]:w-[38%] max-[1024px]:mx-auto max-[1024px]:w-full max-[1024px]:max-w-[700px]">
      <ul className="list-wrap list-none p-0">
        <li className="mb-[30px] flex items-center gap-[25px] rounded-[10px] border border-[#e1e1e1] bg-[#f7f7fa] p-10 max-md:p-5">
          <div className="icon flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-[#fc8b20] text-xl leading-none max-md:h-14 max-md:w-14">
            <Image src="/map.svg" alt="img" width={30} height={30} />
          </div>
          <div className="content [&_a:hover]:text-[#fc8b20] [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-black">
            <h4 className="title">Address</h4>
            <Link
              href="https://maps.app.goo.gl/XJX2zmcvUxGTqY8e7"
              target="_blank"
              rel="noopener noreferrer"
              className="break-words text-sm"
            >
              #2, Knowledge Park, Science Technology Entrepreneur&apos;s park, Gill Road, Ludhiana ,
              Punjab - 144006
            </Link>
          </div>
        </li>
        <li className="mb-[30px] flex items-center gap-[25px] rounded-[10px] border border-[#e1e1e1] bg-[#f7f7fa] p-10 max-md:p-5">
          <div className="icon flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-[#fc8b20] text-xl leading-none max-md:h-14 max-md:w-14">
            <Image src="/contact_phone.svg" alt="img" width={30} height={30} />
          </div>
          <div className="content [&_a:hover]:text-[#fc8b20] [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-black">
            <h4 className="title">Phone</h4>
            <Link href="tel:+91-172-613-1700" className="text-sm">
              +91-172-613-1700
            </Link>
          </div>
        </li>
        <li className="mb-[30px] flex items-center gap-[25px] rounded-[10px] border border-[#e1e1e1] bg-[#f7f7fa] p-10 max-md:p-5">
          <div className="icon flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-[#fc8b20] text-xl leading-none max-md:h-14 max-md:w-14">
            <Image src="/emial.svg" alt="img" width={30} height={30} />
          </div>
          <div className="content [&_a.email-link]:break-all [&_a:hover]:text-[#fc8b20] [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-black">
            <h4 className="title">E-mail Address</h4>
            <Link href="mailto:learning@digimantra.com " className="email-link text-sm">
              learning@digimantra.com
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
