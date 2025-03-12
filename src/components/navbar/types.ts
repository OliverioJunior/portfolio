export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
  icon?: React.ReactNode;
  children?: NavItem[];
}

export interface NavbarProps {
  items: NavItem[];
  logo?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'transparent' | 'colored';
  position?: 'fixed' | 'static' | 'sticky';
  onNavItemClick?: (item: NavItem) => void;
}