import { cn } from '@/libs/utils';
import React from 'react';

export default function ContainerSection({
  children,
  className,
  ...props
}: { children: React.ReactNode; className?: string } & React.ComponentProps<'section'>) {
  return (
    <section className={cn('max-w-360 w-full py-16 max-xl:px-4', className)} {...props}>
      {children}
    </section>
  );
}
