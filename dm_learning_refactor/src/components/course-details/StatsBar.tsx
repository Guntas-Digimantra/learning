import React from 'react';

export interface StatItem {
  icon?: React.ReactNode;
  text: string;
}

export interface StatsBarProps {
  stats: StatItem[];
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}

const StatsBar: React.FC<StatsBarProps> = ({
  stats,
  backgroundColor,
  borderColor,
  textColor = '#101828',
}) => {
  return (
    <div className="relative z-10 -mt-[42px] max-[1024px]:mt-0 max-[1024px]:py-5 max-[600px]:mt-0 max-[600px]:py-5">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div
          style={{
            background:
              borderColor || 'linear-gradient(90deg, #ff7a18, #ffb347)',
            padding: '2px',
            borderRadius: '12px',
          }}
        >
          <div
            style={{
              background: backgroundColor || '#fff',
              borderRadius: '10px',
              color: textColor,
            }}
            className="flex items-center justify-center gap-6 rounded-[20px] px-8 py-6 shadow-[0_4px_32px_0_rgba(0,0,0,0.08)] max-[1024px]:flex-wrap max-[1024px]:gap-5 max-[1024px]:px-6"
          >
            {stats.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center gap-2 max-[1024px]:w-[calc(50%-10px)] max-[1024px]:justify-center max-[1024px]:p-0 max-[600px]:w-full max-[600px]:justify-start max-[600px]:pl-5">
                  {item.icon && (
                    <span className="flex items-center justify-center">{item.icon}</span>
                  )}
                  <span className="text-center text-xl font-normal leading-[50.934px] text-black max-[1024px]:text-lg max-[1024px]:leading-[1.4] max-[600px]:text-base">
                    {item.text}
                  </span>
                </div>
                {index < stats.length - 1 && (
                  <div className="h-6 w-px bg-[#d1d1d1] max-[1024px]:hidden" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
