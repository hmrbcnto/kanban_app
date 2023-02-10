import React from 'react';
import Image from 'next/image';
import { MenuItemProps } from './MenuBar.types';
import iconBoard from '../../../assets/icon-board.svg';
import { twMerge } from 'tailwind-merge';

const MenuItem: React.FC<MenuItemProps> = ({
  display,
  link,
  isActive
}) => {
  const activeClasses = isActive ? 'bg-main_purple' : '';
  const mainClasses = twMerge(`
    flex
    gap-2
    items-center 
    p-2 
    pl-0 
    w-[80%] 
    hover:bg-main_purple 
    rounded-r-full 
    text-medium_grey 
    hover:text-white 
    hover:cursor-pointer
    ${activeClasses}
  `);
  return (
    <div className={mainClasses}>
      <Image src={iconBoard} alt="icon board"  className="ml-4 "/>
      <span className="font-bold">{display}</span>
    </div>
  )
};

export default MenuItem;