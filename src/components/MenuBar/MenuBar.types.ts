export interface MenuBarProps {
  menuItems: MenuItemProps[];  
};

export interface MenuItemProps {
  display: string;
  link: string;
  isActive?: string;
};
