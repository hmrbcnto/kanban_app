import { getBoardList } from '@/apis/board';
import { ColumnTaskProps } from '@/components/ColumnTask/ColumnTask.types';
import { useState, useEffect } from 'react';
import BoardContext, { BoardSummaryObject } from './Board';


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
  tasks: sampleTasks,
  statuses: ['Status A', 'Status B']
}

const BoardContextWrapper: React.FC<{ children: React.ReactNode | React.ReactNode[] }> = ({ children }) => {
 const [currentBoard, setCurrentBoard] = useState(defaultBoard);
 const [boardList, setBoardList] = useState<BoardSummaryObject[]>([])

  useEffect(() => {
    const boardListData = getBoardList();
    setBoardList(boardListData);
  }, [])

 const changeCurrentBoard = (id: string) => {
  // Fetch here
 }

 return (<BoardContext.Provider value={{ currentBoard, boardList, changeCurrentBoard }}> {children} </BoardContext.Provider>);
};

export default BoardContextWrapper;
