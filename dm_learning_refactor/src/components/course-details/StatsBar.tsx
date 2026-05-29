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
    <div className="stats-bar-container">
      <div className="dml-container">
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
            className='stats-bar-box'
          >
            {stats.map((item, index) => (
              <React.Fragment key={index}>
                <div className="stat-item">
                  {item.icon && <span className="stat-icon">{item.icon}</span>}
                  <span className="stat-text">{item.text}</span>
                </div>
                {index < stats.length - 1 && (
                  <div className="stat-divider"></div>
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
