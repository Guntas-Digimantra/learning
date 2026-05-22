import Image from 'next/image';

type Item = {
  src: string;
  title?: string;
  subtitle?: string;
};

export default function FeatureGallery({ items }: { items: Item[] }) {
  const [hero, top, bottom] = items;

  return (
    <div className="grid h-[520px] grid-cols-[2fr_1fr] grid-rows-2 gap-5 [grid-template-areas:'hero_top'_'hero_bottom'] max-[900px]:h-auto max-[900px]:grid-cols-1 max-[900px]:grid-rows-[auto_auto_auto] max-[900px]:[grid-template-areas:'hero'_'top'_'bottom']">
      <Card {...hero} areaClass="[grid-area:hero]" />
      <Card {...top} areaClass="[grid-area:top]" />
      <Card {...bottom} areaClass="[grid-area:bottom]" />
    </div>
  );
}

function Card({
  src,
  title,
  subtitle,
  areaClass,
}: Item & { areaClass: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[20px] bg-[#eee] max-[900px]:h-96 ${areaClass}`}
    >
      <Image src={src} alt={title || ''} fill className="object-cover" />

      {(title || subtitle) && (
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/75 to-transparent p-5 text-white">
          {title && <h3 className="mb-1 text-xl font-semibold">{title}</h3>}
          {subtitle && <p className="max-w-[576px] text-sm text-white">{subtitle}</p>}
        </div>
      )}
    </div>
  );
}
