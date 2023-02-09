import React from 'react';
import ReactSwitch from 'react-switch';
import { SwitchProps } from './Switch.types';

const Switch: React.FC<SwitchProps> = ({
  onClick,
  onColor,
  offColor,
  leftIcon,
  rightIcon,
  isChecked
}) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      {leftIcon}
      <ReactSwitch 
        onChange={onClick}
        checked={isChecked}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={onColor}
        offColor={offColor}
        height={24}
      />
      {rightIcon}
    </div>
  );
}

export default Switch;
