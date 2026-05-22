import { MapPin, Phone } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../icons/icons';

export type SocialItem = {
  label: string;
  url: string;
  Icon: React.ComponentType<{ className?: string }>;
};

export type ContactItem = {
  type: 'address' | 'phone';
  text: string;
  href?: string;
  Icon: React.ComponentType<{ className?: string }>;
};

export const SOCIAL_LINKS: Array<SocialItem> = [
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/1dmlearning',
    Icon: FacebookIcon,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/company/digimantra-learning/',
    Icon: LinkedinIcon,
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/_dmlearning/',
    Icon: InstagramIcon,
  },
];

export const CONTACT_INFO: Array<ContactItem> = [
  {
    type: 'address',
    text: 'Plot No. C-212, Ground Floor, Phase 8-B, Industrial Area, Sec 74, Sahibzada Ajit Singh Nagar, Punjab 160055',
    Icon: MapPin,
  },
  {
    type: 'address',
    text: "#2, Knowledge Park, Science & Technology Entrepreneurs' Park Guru Nanak Dev Engineering College, Gill Rd, Ludhiana, Punjab 141006",
    Icon: MapPin,
  },
  {
    type: 'phone',
    text: '+91-172-613-1700',
    href: 'tel:+911726131700',
    Icon: Phone,
  },
];
