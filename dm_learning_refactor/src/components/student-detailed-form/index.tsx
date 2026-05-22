import Link from '@/components/ui/link';
import StudentDetailForm from './StudentDetailForm';
import Image from 'next/image';
import BreadcrumbOne from '../common/BreadcrumbOne';

const infoCard =
  'mb-[30px] flex items-center gap-[25px] rounded-[10px] border border-[#e1e1e1] bg-[#f7f7fa] p-10 max-md:p-5';

const StudentEnrollment = () => {
  return (
    <main>
      <BreadcrumbOne title="Student Detail Form" sub_title="Detail form" />
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
                <StudentDetailForm />
                <p className="ajax-response mb-0"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StudentEnrollment;
