import { ColumnTaskProps } from '@/components/ColumnTask/ColumnTask.types';
import { createContext } from 'react';

interface BoardContextValues {
  board?: {
    name: string,
    tasks: ColumnTaskProps[]
  },
  changeCurrentBoard: (id: string) => void
}

const defaultValue: BoardContextValues = {
  board: {
    name: 'Default Board Name',
    tasks: []
  },
  changeCurrentBoard: (id: string) => {}
};

const BoardContext = createContext(defaultValue);

export default BoardContext;
