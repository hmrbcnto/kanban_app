import React from 'react';
import ReactSwitch from 'react-switch';
import { SwitchProps } from './Switch.types';

const Switch: React.FC<SwitchProps> = ({
  onClick,
  onColor,
  offColor,
  leftIcon,
  rightIcon,
  checked
}) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      {leftIcon}
      <ReactSwitch 
        onChange={onClick}
        checked={checked}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={onColor}
        offColor={offColor}
      />
      {rightIcon}
    </div>
  );
}

export default Switch;
