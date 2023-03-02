import { ColumnTaskProps } from '@/components/ColumnTask/ColumnTask.types';
import { createContext } from 'react';

interface BoardContextValues {
  board?: {
    name: string,
    tasks: ColumnTaskProps[],
    statuses: string[]
  },
  changeCurrentBoard: (id: string) => void
}

const defaultValue: BoardContextValues = {
  board: {
    name: 'Default Board Name',
    tasks: [],
    statuses: ['Status A', 'Status B']
  },
  changeCurrentBoard: (id: string) => {}
};

const BoardContext = createContext(defaultValue);

export default BoardContext;
