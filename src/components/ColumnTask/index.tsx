import ModalContext from '@/context/modal/Modal';
import React, { useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { ColumnTaskProps } from './ColumnTask.types';

const ColumnTask: React.FC<ColumnTaskProps> = ({
  taskHeader,
  status,
  description,
  subtasks,
  onClick
}) => {
  const { setIsModalVisible } = useContext(ModalContext);
  const mainClasses = twMerge(`
    bg-white
    dark:bg-dark_grey
    w-[280px]
    h-[88px]
    px-4
    py-2
    flex
    flex-col
    rounded-md
    shadow-md
    hover:shadow-lg
    gap
    hover:cursor-pointer
    select-none
  `);

  return (
    <div className={mainClasses} onClick={() => setIsModalVisible({
      type: 'task',
      method: 'update',
      title: 'Modify Task',
      status: ''
    })}>
      <p className="font-semibold text-lg dark:text-white text-black">{taskHeader}</p>
      <p className="text-md text-medium_grey">0 of 3 subtasks</p>
    </div>
  )
}

export default ColumnTask;