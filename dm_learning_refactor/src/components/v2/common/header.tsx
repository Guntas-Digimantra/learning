'use client';

import Link from '@/components/ui/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { cn } from '@/libs/utils';
import { HEADER_ROUTES } from '@/services/constants';

import NavMain from '../navigation/nav-main';
import logo from '../../../../public/header-logo-dml.png';
import GetStartedButton from '../buttons/get-started-button';

function Header() {
  const [hideBanner, setHideBanner] = useState(false);

  useEffect(() => {
    const onScroll = () => setHideBanner(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="relative">
      <div
        className={`
          bg-primary text-center text-lg transition-all duration-1000 overflow-hidden
          ${hideBanner ? 'max-h-0 py-0 opacity-0' : 'max-h-14 py-3.5 opacity-100'}
        `}
      >
        <Link href="/student-enrollment" className="main-para">
          Applications Closing Soon - Act Fast!
        </Link>
      </div>

      <nav
        className={cn(
          hideBanner ? 'fixed top-0 bg-gray-50/30!' : 'relative',
          'z-50 bg-white border-b w-full pt-4 backdrop-filter backdrop-blur-xl transition-colors duration-500'
        )}
      >
        <div className="max-w-360 flex items-center justify-between py-3.5 px-4 mx-auto">
          <Link href="/">
            <Image src={logo} alt="logo" width={192} height={32} className="" />
          </Link>
          <NavMain routes={HEADER_ROUTES} />
          <div className="flex gap-4 items-center max-lg:hidden">
            <Link href="#" className="font-medium hover:text-primary">
              Login
            </Link>
            <GetStartedButton />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
