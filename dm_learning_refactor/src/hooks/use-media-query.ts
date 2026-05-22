'use client';

import { useSyncExternalStore } from 'react';

const IS_SERVER = typeof window === 'undefined';

export function useMediaQuery(query: string, defaultValue = false) {
  const subscribe = (callback: () => void) => {
    if (IS_SERVER) return () => {};

    const mediaQuery = window.matchMedia(query);
    mediaQuery.addEventListener('change', callback);

    return () => {
      mediaQuery.removeEventListener('change', callback);
    };
  };

  const getSnapshot = () => (IS_SERVER ? defaultValue : window.matchMedia(query).matches);

  return useSyncExternalStore(subscribe, getSnapshot, () => defaultValue);
}
