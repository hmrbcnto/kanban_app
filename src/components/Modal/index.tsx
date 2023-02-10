import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ModalProps } from './Modal.types';

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  isVisible,
  closeFunction,
  isWarning
}) => {
  const fireCloseFunction = (e: any) => e.currentTarget === e.target && closeFunction && closeFunction();
  const containerClasses = twMerge(`
    container_div 
    h-screen 
    w-screen 
    z-[102] 
    bg-black/50
    ${isVisible ? 'flex' : 'hidden'}
    items-center 
    justify-center
    fixed
  `);

  const modalClasses = twMerge(`
    bg-white
    dark:bg-dark_grey
    p-6
    rounded-md
    w-auto
    lg:min-w-[480px]
    h-auto
    fixed
    shadow-sm
    z-[104]
  `);

  return (
    <div className={containerClasses} onClick={fireCloseFunction}>
      <div className={modalClasses}>
        <p className={`font-semibold text-lg dark:text-white mb-4 ${isWarning ? 'text-main_red' : ''}`}>{title}</p>
        {children}
      </div>
    </div>
  )
};

export default Modal;