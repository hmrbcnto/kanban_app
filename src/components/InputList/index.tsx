import React from 'react';
import Input from '../Input';
import { InputListProps } from './InputList.types';
import crossSvg from '../../../assets/icon-cross.svg';
import Image from 'next/image';
import Button from '../Button';

const InputList: React.FC<InputListProps> = ({
  titleText,
  initialValue,
  onChange,
  value,
  onRemove,
  onAdd
}) => {

  return (
    <div className="flex flex-col gap-2 items-center w-full">
      <span className="font-bold dark:text-white text-medium_grey self-start">{titleText}</span>
      {value?.map((item, index) => {
        return (
          <div className="flex w-full gap-2 items-center" key={index}>
            <Input 
              value={item}
              onChange={(e: string) => onChange(e, index)}
              key={index}
            />
            <Image 
              src={crossSvg} 
              alt="remove input svg" 
              className="hover:cursor-pointer object-none" 
              onClick={() => onRemove(index)}
            />
          </div>
        )
      })}
      <Button 
        type="secondary"
        text="+ Add New Subtask"
        onClick={onAdd}
      />
    </div>
  );
}

export default InputList;
