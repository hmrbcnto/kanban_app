import React from 'react';
import { twMerge } from 'tailwind-merge';
import { DropdownItem } from './Dropdown.types';

const DropdownItem: React.FC<DropdownItem> = ({
  id,
  key,
  value,
  display
}) => {
  const dropdownItemClasses = twMerge(`
    bg-inherit
  `);
  return (
    <></>
  );
};

export default DropdownItem;
