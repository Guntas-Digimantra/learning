'use client';

import { useEffect } from 'react';

type Props = {
  open: boolean;
  width?: number;
  title?: string;
  description?: string;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({
  open,
  width = 320,
  title,
  description,
  onClose,
  children,
}: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (open) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex animate-fade-in items-center justify-center bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative my-6 max-h-[95vh] min-w-[320px] max-w-[95vw] animate-scale-in overflow-y-auto rounded-[18px] bg-white p-6 max-[380px]:m-3 max-[380px]:p-4"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: `${width}px`, width: '100%' }}
      >
        <div className="flex items-start justify-between border-b border-[#e4e4e7] pb-6 max-[380px]:pb-4">
          <div className="flex flex-col items-start gap-1">
            {title ? <span className="text-xl font-semibold">{title}</span> : null}
            {description ? (
              <span className="text-sm text-[#2e2e2e]">{description}</span>
            ) : null}
          </div>
          <button
            type="button"
            className="absolute top-3 right-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-none bg-white/15 text-lg"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div className="mt-6 max-[380px]:mt-4">{children}</div>
      </div>
    </div>
  );
}
