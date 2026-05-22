'use client';

import React, { useEffect, useState } from 'react';
import Link from '@/components/ui/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/libs/utils';
import { Route } from '@/types/general.types';
import { useMediaQuery } from '@/hooks/use-media-query';

import { MobileSidebar } from './mobile-sidebar';
import { Menu } from 'lucide-react';

type SubRoute = {
  label: string;
  url?: string;
};

type DropdownNavItemProps = React.ComponentProps<'li'> & {
  label: string;
  subLinks: SubRoute[];
  activePathName: string;
  linkClassName?: string;
};

export const RouteLink = ({
  label,
  url,
  isActive = false,
  rootClassName,
  className,
  ...props
}: React.ComponentProps<'li'> & {
  label: string;
  url: string;
  isActive?: boolean;
  rootClassName?: string;
}) => {
  return (
    <li className={rootClassName} {...props}>
      <Link
        href={url}
        prefetch
        className={cn(
          'text-lg font-semibold no-underline hover:text-primary underline-fill',
          isActive ? 'text-primary' : 'text-indigo-950',
          className
        )}
      >
        {label}
      </Link>
    </li>
  );
};

export const DropdownNavItem = ({
  label,
  subLinks,
  activePathName,
  linkClassName,
  className,
  ...props
}: DropdownNavItemProps) => {
  const subLinksUrls = subLinks.map((sub) => sub.url);

  const isActive = subLinksUrls.includes(activePathName);

  return (
    <li {...props} className={cn('group relative list-none', className)}>
      <span
        className={cn(
          'cursor-pointer text-lg font-semibold hover:text-primary',
          isActive && 'text-primary font-semibold',
          linkClassName
        )}
      >
        {label}
      </span>

      <ul
        className={cn(
          'absolute left-2 z-50 bg-background rounded-lg flex-col gap-4 hidden min-w-50 shadow-xs',
          'group-hover:flex p-4'
        )}
      >
        {subLinks.map((subRoute) => (
          <RouteLink
            key={subRoute.label.toLowerCase()}
            label={subRoute.label}
            url={subRoute.url ?? '#'}
            className="no-underline text-base font-medium"
          />
        ))}
      </ul>
    </li>
  );
};

export default function NavMain({ routes }: { routes: Array<Route> }) {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const isTabletOrMobile = useMediaQuery('(max-width:1024px)');

  useEffect(() => {
    if (!isTabletOrMobile) {
      setOpen(false);
    }
  }, [isTabletOrMobile]);

  return (
    <>
      <ul className="lg:flex hidden gap-6 m-auto">
        {routes.map((route) =>
          route?.subLinks?.length ? (
            <DropdownNavItem
              key={route.label.toLowerCase()}
              activePathName={pathname}
              label={route.label}
              subLinks={route.subLinks}
            />
          ) : (
            <RouteLink key={route.label.toLowerCase()} label={route.label} url={route?.url ?? ''} />
          )
        )}
      </ul>
      <button onClick={() => setOpen(true)} className="lg:hidden p-2">
        <Menu size={20} />
      </button>

      <MobileSidebar routes={routes} open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </>
  );
}
