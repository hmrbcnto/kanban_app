import React, { useState } from 'react';
import { DropdownProps, DropdownItem } from './Dropdown.types';
import chevronUp from '../../../assets/icon-chevron-up.svg';
import chevronDown from '../../../assets/icon-chevron-down.svg';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';


const Dropdown: React.FC<DropdownProps> = ({
  id,
  key,
  dropdownItems,
  onChange,
  value,
  title
}) => {
  const [isListOpen, setIsListOpen] = useState<boolean>(false);

  const baseClasses = twMerge(`
    w-full
    border
    border-solid
    border-light_lines
    rounded-md
    p-2
    px-3
    focus:border-main_purple
    dark:bg-dark_grey
    dark:text-white
    flex
    justify-between
    items-center
    select-none
    min-h-[2.5rem]
  `);

  const handleOnClick = (value: string) => {
    onChange(value);
    setIsListOpen(false);
  }

  return (
    <div className="flex flex-col gap-1 overflow-y">
      <span className="font-bold dark:text-white text-medium_grey">{title}</span>
      <div 
        className={baseClasses}
        onClick={() => setIsListOpen(!isListOpen)}
        tabIndex={0}
        id={id}
        key={key}
      >
        <span>{value || ''}</span>
        { isListOpen ? 
          <Image src={chevronUp} alt="chevron up" /> :
          <Image src={chevronDown} alt="chevron down" /> 
        }
      </div>
      <div
        className={`${baseClasses} ${isListOpen ? 'visible' : 'hidden'} flex flex-col p-0 px-0`}
      >
        {dropdownItems.map((item: DropdownItem) => (
          <div
            key={item.key}
            className="self-start hover:bg-hover_purple w-full p-2 px-2 rounded-md dark:text-medium_grey dark:bg-very_dark_grey border-transparent"
            onClick={() => handleOnClick(item.value)}
          >
            {item.display}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dropdown;
