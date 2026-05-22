import Image from 'next/image';

import Modal from '../ui/modal';

import styles from './gallery-modal.module.css';

type Props = {
  open: boolean;
  width?: number;
  title: string;
  description: string;
  images: string[];
  landscapeMain?: boolean;
  handleClose: () => void;
};

export default function GalleryModal({
  open,
  width = 1330,
  title,
  description,
  images,
  landscapeMain = false,
  handleClose,
}: Props) {
  const imageCount = images.length;

  const getItemClass = (index: number) => {
    const base = styles.card;

    if (imageCount === 2) {
      return base + ' ' + styles.flexItem;
    }

    if (imageCount === 3) {
      if (landscapeMain) {
        if (index === 0) return `${base} ${styles.landscapeMain0}`;
        return base + ' ' + styles.landscapeMainItem;
      }
      if (index === 0) return `${base} ${styles.item0}`;
      if (index === 1) return `${base} ${styles.fourImagesFirst}`;
      if (index === 2) return `${base} ${styles.threeImagesFirst}`;
      return base;
    }

    if (imageCount === 4) {
      if (index === 0 || index === 3)
        return `${base} ${styles.fourGroupItemLarge}`;
      if (index === 2 || index === 1)
        return `${base} ${styles.fourGroupItemSmall}`;
    }

    return `${base} ${styles[`item${index}`]}`;
  };

  return (
    <Modal
      open={open}
      width={width}
      title={title}
      description={description}
      onClose={handleClose}
    >
      <div
        className={
          imageCount === 2
            ? styles.flex
            : imageCount === 3 && landscapeMain
              ? styles.landscapeMain
              : styles.grid
        }
      >
        {images.map((src, i) => (
          <div key={i} className={getItemClass(i)}>
            <Image src={src} alt={src} fill className={styles.img} />
          </div>
        ))}
      </div>
    </Modal>
  );
}
