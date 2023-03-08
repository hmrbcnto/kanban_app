import React from 'react';
import Image from 'next/image';
import { MenuItemProps } from './MenuBar.types';
import iconBoard from '../../../assets/icon-board.svg';
import { twMerge } from 'tailwind-merge';

const MenuItem: React.FC<MenuItemProps> = ({
  name,
  link,
  isActive,
  onClick,
  isCreate,
  id
}) => {
  const activeClasses = isActive ? 'bg-main_purple' : '';
  const mainClasses = twMerge(`
    flex
    gap-2
    items-center 
    p-2 
    pl-0 
    md:w-[80%] 
    w-full
    hover:bg-main_purple 
    rounded-r-full 
    text-medium_grey 
    hover:text-white 
    hover:cursor-pointer
    ${activeClasses}
    ${isCreate ? 'text-main_purple' : ''}
  `);
  return (
    <div 
      className={mainClasses} onClick={() => onClick ? onClick() : ''}
      id={id}
    >
      <Image src={iconBoard} alt="icon board"  className="ml-4 font-main_purple "/>
      <span className="font-bold">{name}</span>
    </div>
  )
};

export default MenuItem;
