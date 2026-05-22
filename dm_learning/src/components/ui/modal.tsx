'use client';

import { useEffect } from 'react';
import styles from './modal.module.css';

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
  // close on ESC + lock body scroll
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
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: `${width}px`, width: '100%' }}
      >
        <div className={styles.header}>
          <div className={styles.heading}>
            {title ? <span className={styles.title}>{title}</span> : null}
            {description ? (
              <span className={styles.description}>{description}</span>
            ) : null}
          </div>
          <button className={styles.close} onClick={onClose}>
            ✕
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
