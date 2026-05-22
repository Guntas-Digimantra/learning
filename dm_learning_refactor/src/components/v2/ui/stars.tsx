import { useId } from 'react';

export const RatingStars = ({ count }: { count: number }) => {
  const uid = useId();
  return [...Array(5)].map((_, index) => {
    const fillPercent = Math.min(Math.max(count - index, 0), 1) * 100;
    const gradId = `grad-${uid}-${index}`;

    return (
      <svg key={index} viewBox="0 0 24 24" width="20" height="20">
        <defs>
          <linearGradient id={gradId}>
            <stop offset={`${fillPercent}%`} stopColor="var(--primary)" />
            <stop offset={`${fillPercent}%`} stopColor="#d1d5db" />
          </linearGradient>
        </defs>

        <path
          fill={`url(#${gradId})`}
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        />
      </svg>
    );
  });
};
