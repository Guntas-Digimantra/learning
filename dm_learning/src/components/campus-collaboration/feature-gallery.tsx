import Image from 'next/image';
import styles from './feature-gallery.module.css';

type Item = {
  src: string;
  title?: string;
  subtitle?: string;
};

export default function FeatureGallery({ items }: { items: Item[] }) {
  const [hero, top, bottom] = items;

  return (
    <div className={styles.grid}>
      <Card {...hero} area={styles.hero} />
      <Card {...top} area={styles.top} />
      <Card {...bottom} area={styles.bottom} />
    </div>
  );
}

function Card({ src, title, subtitle, area }: Item & { area: string }) {
  return (
    <div className={`${styles.card} ${area}`}>
      <Image src={src} alt={title || ''} fill className={styles.img} />

      {(title || subtitle) && (
        <div className={styles.overlay}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}
    </div>
  );
}
