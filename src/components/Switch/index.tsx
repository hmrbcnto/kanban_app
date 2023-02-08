import React from 'react';
import ReactSwitch from 'react-switch';
import { SwitchProps } from './Switch.types';

const Switch: React.FC<SwitchProps> = ({
  onClick,
  switchColor,
  leftIcon,
  rightIcon,
  checked
}) => {
  return (
    <div className="flex gap-2">
      {leftIcon}
      <ReactSwitch 
        onChange={onClick}
        checked={checked}
      />
      {rightIcon}
    </div>
  );
}

export default Switch;
