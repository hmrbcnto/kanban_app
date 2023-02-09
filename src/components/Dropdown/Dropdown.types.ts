export interface DropdownItem {
  id: string | number;
  key: string | number;
  value: string;
  display: string;
};

export interface DropdownProps {
  id: string;
  key: string | number;
  dropdownItems: DropdownItem[];
  onChange: (value: string) => void;
  value: string | number;
  title?: string;
};
