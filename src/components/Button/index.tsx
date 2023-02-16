import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonConstants } from './ButtonConstants';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  isDisabled,
  size='large',
  text,
  onClick
}) => {
  const typeColors = ButtonConstants[type];
  const disabledClasses = isDisabled ? 'pointer-events-none hover:cursor-not-allowed opacity-50' : '';
  const primaryClasses = twMerge(`
    ${typeColors}
    ${size === 'large' ? 'h-12' : 'h-10 max-h-10'}
    w-full
    p-4
    rounded-full
    flex
    items-center
    justify-center
    hover:cursor-pointer
    w-full
    select-none
    ${disabledClasses}
  `)
  return (
    <div 
      className={primaryClasses}
      onClick={() => onClick ? onClick() : {}}
    >
      {text}
    </div>
  )
}

export default Button;