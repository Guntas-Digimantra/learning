import Image from 'next/image';
import Link from '@/components/ui/link';

import shape_1 from '/public/AI-first-banner.svg';
import shape_2 from '/public/cloud-computing.svg';
import shape_3 from '/public/digital-marketing.svg';
import shape_4 from '/public/data-analytics.svg';
import shape_5 from '/public/breadcrumb_shape05.svg';
import { ChevronRightIcon } from './common';

const floatIcon =
  'absolute animate-[moveUpDown_3s_ease-in-out_infinite] h-[50px] w-[50px] first:top-[30px] first:left-[100px] nth-[2]:top-[30px] nth-[2]:right-[100px] nth-[3]:top-[30px] nth-[3]:right-[600px] nth-[4]:bottom-[30px] nth-[4]:right-[400px] max-[991px]:nth-[3]:hidden max-[991px]:first:top-[70px] max-[991px]:nth-[2]:top-[70px] max-[991px]:nth-[4]:right-[200px]';

const BreadcrumbOne = ({ title, sub_title }: { title: string; sub_title: string }) => {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle,#f4e5fa,#fff_40%,#f4e5fa)] py-[107px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="w-full">
          <div className="w-full">
            <div>
              <h1 className="pb-[15px] text-[48px] font-semibold text-black max-[991px]:text-[36px]">{title}</h1>
              <nav className="flex gap-[7px] text-black" aria-label="Breadcrumb">
                <span
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                  className="text-[#5751e1]"
                >
                  <Link href="/" itemProp="item">
                    <span itemProp="name">Home</span>
                  </Link>
                  <meta itemProp="position" content="1" />
                </span>
                <span className="brightness-50">
                  <ChevronRightIcon />
                </span>
                <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span itemProp="name">{sub_title}</span>
                  <meta itemProp="position" content="2" />
                </span>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0">
        <Image src={shape_1} alt="" width={50} height={50} className={floatIcon} />
        <Image src={shape_2} alt="" width={50} height={50} className={floatIcon} />
        <Image src={shape_3} alt="" width={50} height={50} className={floatIcon} />
        <Image src={shape_4} alt="" width={50} height={50} className={floatIcon} />
        <Image
          src={shape_5}
          alt=""
          className="absolute right-0 top-0 max-[991px]:hidden"
        />
      </div>
    </section>
  );
};

export default BreadcrumbOne;
