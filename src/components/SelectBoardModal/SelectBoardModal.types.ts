import { MenuItemProps } from "../MenuBar/MenuBar.types";

export interface SelectBoardModalProps {
  menuItems: MenuItemProps[],
  isVisible?: boolean;
  closeFunction: () => void;
}
