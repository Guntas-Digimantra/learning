import Image from 'next/image';
import Link from '@/components/ui/link';

import shape_1 from '../../../public/AI-first-banner.svg';
import shape_2 from '../../../public/cloud-computing.svg';
import shape_3 from '../../../public/digital-marketing.svg';
import shape_4 from '../../../public/data-analytics.svg';
import shape_5 from '../../../public/breadcrumb_shape05.svg';
import { ChevronRightIcon } from './common';

const BreadcrumbOne = ({ title, sub_title }: { title: string; sub_title: string }) => {
  return (
    <section
      className="breadcrumb-section"
      style={{ padding: '107px 0' }}
    >
      <div className="dml-container">
        <div className="breadcrumb__content">
          <h1 className="title" style={{ paddingBottom: 15 }}>
            {title}
          </h1>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <span
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="firstchild-breadcrumb"
            >
              <Link href="/" itemProp="item">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </span>
            <span className="breadcrumb-separator">
              <ChevronRightIcon />
            </span>
            <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">{sub_title}</span>
              <meta itemProp="position" content="2" />
            </span>
          </nav>
        </div>
      </div>
      <div className="breadcrumb__shape-wrap">
        <Image
          src={shape_1}
          style={{ height: '50px', width: '50px' }}
          alt=""
          className="alltuchtopdown"
        />
        <Image
          src={shape_2}
          style={{ height: '50px', width: '50px' }}
          alt=""
          className="alltuchtopdown"
        />
        <Image
          src={shape_3}
          style={{ height: '50px', width: '50px' }}
          alt=""
          className="alltuchtopdown"
        />
        <Image
          src={shape_4}
          style={{ height: '50px', width: '50px' }}
          alt=""
          className="alltuchtopdown"
        />
        <Image src={shape_5} alt="" className="shape-breadcrumb" />
      </div>
    </section>
  );
};

export default BreadcrumbOne;
