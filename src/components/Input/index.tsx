import React from 'react';
import { twMerge } from 'tailwind-merge';
import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  isError,
  placeholder,
  titleText
}) => {
  const errorClasses = isError ? 'border-main_red' : '';
  const primaryClasses = twMerge(`
    bg-white
    border
    border-light_lines
    dark:bg-dark_grey
    dark:text-white
    dark:border-dark_lines
    outline-none
    p-2
    pl-3
    w-full
    rounded-md
    ${errorClasses}
  `)
  return (
    <div className="flex flex-col gap-px">
      <span className="font-bold dark:text-white text-medium_grey">{titleText}</span>
      <input 
        className={primaryClasses}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
