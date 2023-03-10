import { getBoardList } from '@/apis/board';
import { ColumnTaskProps } from '@/components/ColumnTask/ColumnTask.types';
import { useState, useEffect } from 'react';
import BoardContext, { BoardObject, BoardSummaryObject } from './Board';
import { TaskDbMock } from '../apimock/ApiMock';

const sampleTasks: ColumnTaskProps[] = [
  {
    name: 'Sample Column Header',
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
];

const defaultBoard: BoardObject = {
  name: 'Sample Board',
  tasks: [{
    status: 'Sample Status',
    name: 'Sample Name', 
    description: 'ahehehe',
    subtasks: []
  }],
  statuses: ['Status A', 'Status B']
}

const BoardContextWrapper: React.FC<{ children: React.ReactNode | React.ReactNode[] }> = ({ children }) => {
 const [currentBoard, setCurrentBoard] = useState<BoardObject | undefined>(defaultBoard);
 const [boardList, setBoardList] = useState<BoardSummaryObject[]>([])

  useEffect(() => {
    const boardListData = getBoardList();
    setBoardList(boardListData);
  }, [])

 const changeCurrentBoard = (id: string) => {
  // Query here
 }

  const createNewBoard = (newBoard: BoardObject) => {
    // Request here, run on return
    const newBoardList: BoardSummaryObject[] = [
      ...boardList,
      {
        name: newBoard.name,
        id: '123456'
      }
    ];
    // Validation here
    setBoardList(newBoardList);
  }

 return (<BoardContext.Provider value={{ currentBoard, boardList, changeCurrentBoard, createNewBoard }}> {children} </BoardContext.Provider>);
};

export default BoardContextWrapper;
