import { ColumnTaskProps } from '@/components/ColumnTask/ColumnTask.types';
import { useState, useEffect } from 'react';
import BoardContext from './Board';


const sampleTasks: ColumnTaskProps[] = [
  {
    taskHeader: 'Sample Column Header',
    status: 'doing',
    description: 'Sample Description',
    subtasks: [
      {
        status: 'pending',
        name: 'Sample Subtask'
      }
    ],
    onClick: () => { console.log('wtf)')}
  }
]
const defaultBoard = {
  name: 'Sample Board',
  tasks: sampleTasks
}

const BoardContextWrapper: React.FC<{ children: React.ReactNode | React.ReactNode[] }> = ({ children }) => {
 const [board, setBoard] = useState(defaultBoard);
 
 const changeCurrentBoard = (id: string) => {
  // Fetch here
 }

 return (<BoardContext.Provider value={{ board, changeCurrentBoard }}> {children} </BoardContext.Provider>);
};

export default BoardContextWrapper;
