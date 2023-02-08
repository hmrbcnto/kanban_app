import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonConstants } from './ButtonConstants';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  isDisabled,
  size='large',
  text
}) => {
  const typeColors = ButtonConstants[type];
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
    w-60
    select-none
  `)
  return (
    <div className={primaryClasses}>
      {text}
    </div>
  )
}

export default Button;