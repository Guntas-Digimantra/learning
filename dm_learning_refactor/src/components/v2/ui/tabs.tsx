'use client';

import { cn } from '@/libs/utils';
import React, { useState } from 'react';

type TabItem = {
  label: string;
  value: string;
  content: React.ReactNode | (({ activeTab }: { activeTab?: string }) => React.ReactNode);
};

type TabsProps = {
  items: TabItem[];
  defaultValue?: string;
  className?: string;
  tabButtonClassName?: string;
  tabHeaderClassName?: string;
  onTabChange?: () => void;
};

export function Tabs({
  items,
  defaultValue,
  className = '',
  tabButtonClassName = '',
  tabHeaderClassName,
  onTabChange,
}: TabsProps) {
  const [active, setActive] = useState(defaultValue ?? items[0]?.value);

  const activeTab = items.find((t) => t.value === active);

  return (
    <div className={`w-full ${className}`}>
      {/* Header */}
      <div className={cn('flex border-b border-gray-200 gap-6', tabHeaderClassName)}>
        {items.map((tab) => {
          const isActive = active === tab.value;

          return (
            <button
              key={tab.value}
              onClick={() => {
                setActive(tab.value);
                if (onTabChange) onTabChange();
              }}
              role="tab"
              aria-selected={isActive}
              className={cn(
                isActive ? 'text-primary' : 'hover:text-primary',
                'relative py-3 text-sm font-medium transition w-full',
                tabButtonClassName
              )}
            >
              <span className="line-clamp-1 overflow-hidden">{tab.label}</span>

              {/* underline */}
              <span
                className={`
                  absolute left-0 -bottom-px h-0.5 w-full bg-primary
                  transition-transform duration-300
                  ${isActive ? 'scale-x-100' : 'scale-x-0'}
                `}
              />
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="">
        <div key={active} className="animate-fade-in">
          {typeof activeTab?.content === 'function' ? <activeTab.content activeTab={active} /> : activeTab?.content}
        </div>
      </div>
    </div>
  );
}
