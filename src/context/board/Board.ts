import { ColumnTaskProps } from '@/components/ColumnTask/ColumnTask.types';
import { createContext } from 'react';


export interface BoardSummaryObject {
  id: string;
  name: string;
}

export interface BoardObject {
  name: string;
  columns: string[];
}
interface BoardContextValues {
  currentBoard?: {
    name: string;
    tasks: ColumnTaskProps[];
    statuses: string[];
  };
  boardList: BoardSummaryObject[];
  changeCurrentBoard: (id: string) => void;
  createNewBoard: (newBoard: BoardObject) => void;
}

const defaultValue: BoardContextValues = {
  currentBoard: {
    name: 'Default Board Name',
    tasks: [],
    statuses: ['Status A', 'Status B']
  },
  boardList: [
    {
      name: 'Board A',
      id: '12345'
    },
    {
      name: 'Board B',
      id: '12346'
    }
  ],
  changeCurrentBoard: (id: string) => {},
  createNewBoard: (newBoard: BoardObject) => {},
};

const BoardContext = createContext(defaultValue);

export default BoardContext;
