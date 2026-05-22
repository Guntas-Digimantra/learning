'use client';

import { cn } from '@/libs/utils';
import { Route } from '@/types/general.types';
import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

type SidebarProps = {
  routes: Array<Route>;
  open: boolean;
  onClose: () => void;
  pathname: string;
};

function MobileDropdown({ route }: { route: Route }) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex justify-between items-center w-full py-2 text-left font-medium"
      >
        {route.label}
        <ChevronDown size={18} className={cn('transition-transform', open && 'rotate-180')} />
      </button>

      {open && (
        <ul className="ml-4 mt-2 space-y-2">
          {route.subLinks?.map((sub) => (
            <li key={sub.label}>
              <a href={sub.url} className="block text-sm text-gray-600 hover:text-orange-500">
                {sub.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function MobileSidebar({ routes, open, onClose, pathname }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={cn(
          'fixed inset-0 h-dvh w-dvw bg-black/40 z-40 transition-opacity lg:hidden',
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-dvh w-72 bg-primary text-background z-50 shadow-xl lg:hidden',
          'transition-transform duration-300',
          open ? 'translate-x-0 visible' : 'translate-x-full invisible'
        )}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-semibold text-lg">Menu</span>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Links */}
        <ul className="p-4 space-y-2">
          {routes.map((route) =>
            route?.subLinks?.length ? (
              <MobileDropdown key={route.label} route={route} />
            ) : (
              <li key={route.label}>
                <a
                  href={route.url}
                  className={cn(
                    'block py-2 text-base',
                    pathname === route.url && 'font-bold underline underline-offset-6 decoration-3 decoration-solid'
                  )}
                >
                  {route.label}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}
