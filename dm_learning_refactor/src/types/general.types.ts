export interface Route {
  label: string;
  url?: string;
  subLinks?: Array<{
    label: string;
    url?: string;
  }>;
}

export type FooterItem = {
  label: string;
  url?: string;
};

export type FooterSection = {
  title: string;
  links: Array<FooterItem>;
};
