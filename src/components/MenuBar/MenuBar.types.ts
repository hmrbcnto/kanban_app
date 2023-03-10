export interface MenuBarProps {
  menuItems?: MenuItemProps[];  
};

export interface MenuItemProps {
  name: string;
  id: string;
  link?: string;
  isActive?: string;
  onClick?: () => void;
  isCreate?: boolean;
};
