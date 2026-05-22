import Image from 'next/image';

import Modal from '../ui/modal';

type Props = {
  open: boolean;
  width?: number;
  title: string;
  description: string;
  images: string[];
  landscapeMain?: boolean;
  handleClose: () => void;
};

const shell =
  'max-h-[90dvh] min-h-[670px] overflow-auto [scrollbar-width:thin] max-[640px]:min-h-0';

const card =
  'relative flex items-center justify-center overflow-hidden rounded-[20px] bg-[#f8f9fa]';

const imgCls = 'object-cover object-[0_20%]';

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
    if (imageCount === 2) {
      return `${card} flex-[1_1_50%]`;
    }

    if (imageCount === 3) {
      if (landscapeMain) {
        if (index === 0) return `${card} col-span-2 row-span-3`;
        return `${card} row-span-2`;
      }
      if (index === 0) return `${card} col-span-2 row-span-2 max-[1023px]:col-span-1 max-[1023px]:row-span-1`;
      if (index === 1) return `${card} col-span-1 max-[1023px]:col-span-1 max-[1023px]:row-span-1`;
      if (index === 2) return `${card} col-span-1 max-[1023px]:col-span-1 max-[1023px]:row-span-1`;
      return card;
    }

    if (imageCount === 4) {
      if (index === 0 || index === 3) return `${card} col-span-2 row-span-2 max-[1023px]:col-span-1 max-[1023px]:row-span-1`;
      if (index === 1 || index === 2) return `${card} col-span-1 row-span-2 max-[1023px]:col-span-1 max-[1023px]:row-span-1`;
    }

    const gridSpans: Record<number, string> = {
      0: 'col-span-2 row-span-2',
      1: 'col-span-1',
      2: 'col-span-1',
      3: 'col-span-1 row-span-2',
      4: 'col-span-2 row-span-2',
    };

    return `${card} ${gridSpans[index] ?? 'col-span-1'} max-[1023px]:col-span-1 max-[1023px]:row-span-1`;
  };

  const layoutClass =
    imageCount === 2
      ? `flex min-h-[70dvh] gap-5 ${shell}`
      : imageCount === 3 && landscapeMain
        ? `grid grid-cols-2 gap-5 auto-rows-[220px] ${shell}`
        : `grid grid-cols-3 gap-5 auto-rows-[220px] max-[1023px]:grid-cols-2 max-[1023px]:gap-4 max-[1023px]:auto-rows-[180px] max-[640px]:grid-cols-1 max-[640px]:auto-rows-[260px] ${shell}`;

  return (
    <Modal open={open} width={width} title={title} description={description} onClose={handleClose}>
      <div className={layoutClass}>
        {images.map((src, i) => (
          <div key={i} className={getItemClass(i)}>
            <Image src={src} alt={src} fill className={imgCls} />
          </div>
        ))}
      </div>
    </Modal>
  );
}
