import React from 'react';
import { twMerge } from 'tailwind-merge';
import { TextAreaProps } from './TextArea.types';

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  isError,
  placeholder,
  titleText,
  rows=1
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
    resize-none
    ${errorClasses}
  `)
  return (
    <div className="flex flex-col gap-px">
      <span className="font-bold dark:text-white text-medium_grey">{titleText}</span>
      <textarea 
        className={primaryClasses}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  );
}


export default TextArea;
