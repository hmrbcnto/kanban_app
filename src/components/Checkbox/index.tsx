import React from 'react';
import { twMerge } from 'tailwind-merge';
import { CheckboxProps } from './Checkbox.types';
import checkIcon from '../../../assets/icon-check.svg';
import Image from 'next/image';

const Checkbox: React.FC<CheckboxProps> = ({
  isChecked,
  onClick,
  text
}) => {
  const isBoxChecked = isChecked ? 'bg-main_purple' : 'dark:bg-dark_grey bg-white'
  const checkedClasses = isChecked ? 'line-through text-dark_lines' : '';
  const primaryClassNames = twMerge(`
    flex
    bg-light_grey
    hover:bg-medium_grey
    dark:bg-very_dark_grey
    dark:hover:bg-main_purple
    dark:text-white
    font-bold
    items-center
    w-full
    p-1
    pl-2
    gap-2
    rounded-md
    ${checkedClasses}
  `)

  return (
    <div className={primaryClassNames} onClick={onClick}>
      <div className={`${isBoxChecked} h-4 w-4 border border-solid flex items-center justify-center rounded-sm`}>
        <Image className={isChecked ? 'visible z-2' : 'hidden' } src={checkIcon} alt="check icon" width={10} height={8}/>
      </div>
      {text}
    </div>
  )
}

export default Checkbox;
