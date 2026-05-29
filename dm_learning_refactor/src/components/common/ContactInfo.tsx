'use client';

import Link from '@/components/ui/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const ContactInfo = () => {
  const pathname = usePathname();
  const [viewportWidth, setViewportWidth] = useState<number>(1200);

  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const isContactPageMobile = pathname?.includes('/contact') && viewportWidth <= 575;

  return (
    <div className="contact-info-wrap w-[30%] min-[1025px]:max-[1400px]:w-[38%] max-[1024px]:mx-auto max-[1024px]:w-full max-[1024px]:max-w-[700px]">
      <ul className="list-wrap list-none p-0">
        <li
          className="mb-[30px] flex items-center gap-[25px] rounded-[10px] border border-[#e1e1e1] bg-[#f7f7fa] p-10 max-md:p-5"
          style={isContactPageMobile ? { minHeight: 185 } : undefined}
        >
          <div className="icon flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-[#fc8b20] text-xl leading-none max-md:h-14 max-md:w-14">
            <Image src="/map.svg" alt="img" width={30} height={30} />
          </div>
          <div className="content [&_a:hover]:text-[#fc8b20]">
            <h4 className="title text-xl font-semibold leading-[34px] text-black">Address</h4>
            <p>
              <Link
                href="https://maps.app.goo.gl/XJX2zmcvUxGTqY8e7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-medium leading-[23.8px] text-[#6d6c80]"
              >
                #2, Knowledge Park, Science Technology Entrepreneur&apos;s park, Gill Road, Ludhiana ,
                Punjab - 144006
              </Link>
            </p>
          </div>
        </li>
        <li className="mb-[30px] flex items-center gap-[25px] rounded-[10px] border border-[#e1e1e1] bg-[#f7f7fa] p-10 max-md:p-5">
          <div className="icon flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-[#fc8b20] text-xl leading-none max-md:h-14 max-md:w-14">
            <Image src="/contact_phone.svg" alt="img" width={30} height={30} />
          </div>
          <div className="content [&_a:hover]:text-[#fc8b20]">
            <h4 className="title text-xl font-semibold leading-[34px] text-black">Phone</h4>
            <Link href="tel:+91-172-613-1700" className="text-[14px] font-medium leading-[23.8px] text-[#6d6c80]">
              +91-172-613-1700
            </Link>
          </div>
        </li>
        <li className="mb-[30px] flex items-center gap-[25px] rounded-[10px] border border-[#e1e1e1] bg-[#f7f7fa] p-10 max-md:p-5">
          <div className="icon flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-[#fc8b20] text-xl leading-none max-md:h-14 max-md:w-14">
            <Image src="/emial.svg" alt="img" width={30} height={30} />
          </div>
          <div className="content [&_a.email-link]:break-all [&_a:hover]:text-[#fc8b20]">
            <h4 className="title text-xl font-semibold leading-[34px] text-black">E-mail Address</h4>
            <Link
              href="mailto:learning@digimantra.com "
              className="email-link text-[14px] font-medium leading-[23.8px] text-[#6d6c80]"
            >
              learning@digimantra.com
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
