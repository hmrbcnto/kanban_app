import { ColumnTaskProps } from '@/components/ColumnTask/ColumnTask.types';
import { createContext } from 'react';
import { TaskDbMock } from '../apimock/ApiMock';

export interface BoardSummaryObject {
  id: string;
  name: string;
}

export interface BoardObject {
  name: string;
  tasks: TaskDbMock[];
  statuses: string[];
}
export interface BoardContextValues {
  currentBoard?: BoardObject;
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
