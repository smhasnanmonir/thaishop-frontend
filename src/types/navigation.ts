// Navigation domain types — used by PrimaryNav, Footer, MobileDrawer, etc.

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}
