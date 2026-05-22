'use client';

import Image from 'next/image';
import styles from '../../../public/css/collaborators.module.css';

const PARTNER_LOGOS = [
  '/collaborations/ctu.svg',
  '/collaborations/cgc.svg',
  '/collaborations/ct-group.svg',
  '/collaborations/shoolini.svg',
  '/collaborations/iitr.svg',
  '/collaborations/cgc-j.png',
  '/collaborations/dbu.png',
  '/collaborations/chitkara.png',
  '/collaborations/mau.png',
  '/collaborations/pct.png',
  '/collaborations/mmk.png',
];

export default function CollaborationsSection() {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>
        OUR <span>COLLABORATIONS</span>
      </h2>

      <div className={styles.slider}>
        <div className={`${styles.fade} ${styles.left}`} />
        <div className={`${styles.fade} ${styles.right}`} />
        <div className={styles.track}>
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((src, i) => (
            <div key={i} className={styles.logo}>
              <Image
                src={src}
                alt=""
                width={180}
                height={80}
                className={styles.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
