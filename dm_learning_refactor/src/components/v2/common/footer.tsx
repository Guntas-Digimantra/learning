import Link from '@/components/ui/link';
import Image from 'next/image';

import { cn } from '@/libs/utils';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/services/constants-with-icons';

import { FooterItem } from '@/types/general.types';
import { FOOTER_SECTIONS } from '@/services/constants';

import footerLogo from '../../../../public/header-logo-dml.png';

type SocialLinkProps = {
  label: string;
  url: string;
  Icon: React.ComponentType<{ className?: string }>;
  className?: string;
};

type FooterLinkItemProps = {
  label: string;
  url?: string;
};

type FooterColumnProps = {
  title: string;
  links: Array<FooterItem>;
};

type ContactItemProps = {
  text: string;
  href?: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const SocialLink = ({ label, url, Icon, className }: SocialLinkProps) => {
  return (
    <li>
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit our ${label} page`}
        className={cn('inline-flex items-center justify-center transition-colors hover:text-primary', className)}
      >
        <Icon className="size-6" />
      </Link>
    </li>
  );
};

const FooterLinkItem = ({ label, url }: FooterLinkItemProps) => {
  return (
    <li>
      {url ? (
        <Link href={url} className={cn('text-sm text-white hover:text-primary transition-colors')}>
          {label}
        </Link>
      ) : (
        <span className="text-sm text-white">{label}</span>
      )}
    </li>
  );
};

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold text-gray-400">{title}</h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <FooterLinkItem key={link.label} label={link.label} url={link.url} />
        ))}
      </ul>
    </div>
  );
};

const ContactItem = ({ text, href, Icon }: ContactItemProps) => {
  const content = (
    <div className="flex gap-3 items-start text-gray-300">
      <Icon className="w-5 h-5 mt-1 shrink-0 text-gray-400" />
      <span className="text-sm leading-6">{text}</span>
    </div>
  );

  return <li>{href ? <Link href={href}>{content}</Link> : content}</li>;
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-footer-background py-16">
      <div className="max-w-360 px-6 sm:px-10 text-white mx-auto">
        <div className="md:flex justify-between items-start">
          <div className="max-w-76 flex flex-col gap-4">
            <Link href="/">
              <Image src={footerLogo} alt="footer-img" width={192} height={32} className="" />
            </Link>
            <p className="text-sm">
              Transform, Transpire and Thrive with DMLearning.Transform, Transpire and Thrive with DMLearning.
              Transform, Transpire and Thrive with DMLearning.Transform, Transpire and Thrive with DMLearning.
            </p>
            <ul className="flex gap-4 mt-8 max-md:hidden">
              {SOCIAL_LINKS.map((item) => (
                <SocialLink key={item.label} label={item.label} url={item.url} Icon={item.Icon} />
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start lg:flex-row lg:gap-12 gap-6 max-md:mt-10">
            <div className="grid grid-cols-3 gap-12">
              {FOOTER_SECTIONS.map((section) => (
                <FooterColumn key={section.title} title={section.title} links={section.links} />
              ))}
            </div>

            <div className="space-y-5 max-w-109">
              <h3 className="text-base font-semibold text-white">Get In Touch</h3>

              <ul className="space-y-4">
                {CONTACT_INFO.map((item, i) => (
                  <ContactItem key={i} text={item.text} href={item.href} Icon={item.Icon} />
                ))}
              </ul>
              <ul className="max-md:flex gap-4 mt-8 hidden">
                {SOCIAL_LINKS.map((item) => (
                  <SocialLink key={item.label} label={item.label} url={item.url} Icon={item.Icon} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="text-white text-sm lg:mt-13 mt-6">
          Copyright © <span>{year}</span> DMLearning
        </p>
      </div>
    </footer>
  );
}
