import React from 'react';
import { twMerge } from 'tailwind-merge';
import { BoardColumnProps } from './BoardColumn.types';
import ColumnTask from '../ColumnTask';
import { ColumnTaskProps } from '../ColumnTask/ColumnTask.types';


const BoardColumn: React.FC<BoardColumnProps> = ({
  name,
  tasks,
  onClick
}) => {
  const mainClasses = twMerge(`
    w-4/5
    sm:w-2/5
    lg:w-1/5
    bg-transparent
    flex
    flex-col
    gap-4
    px-4
  `);

  return (
   <div className={mainClasses}>
    <p className="text-medium_grey"> {name} </p>
    <div>
      {tasks?.map((task: ColumnTaskProps) => {
        return (
          <ColumnTask
            name={task.name}
            status={task.status}
            description={task.description}
            subtasks={task.subtasks}
            key={task.name}
            onClick={onClick}
        />
        )
      })}
    </div>
   </div> 
  )
};

export default BoardColumn;
