import { createContext } from 'react';

export interface BoardDatabaseObject {
    id: string | number;
    name: string;
    tasks: TaskDbMock[];
    columns: string[];
};

export interface TaskDbMock {
    status: string;
    name: string; 
    description: string;
    subtasks: {
        name: string;
        isDone: boolean;
    }[];
};

export interface BoardDatabase {
    data: BoardDatabaseObject[];
    getAllBoardData: () => BoardDatabaseObject[];
    createBoardData: (args: any) => void;
    getBoardDataById: (id: string) => BoardDatabaseObject | void;
};

export const defaultBoardValue: BoardDatabaseObject[] = [
    {
        id: 1,
        name: 'Board A',
        tasks: [],
        columns: ['Board Status AA', 'Board Status AB']
    },
    {
        id: 2,
        name: 'Board B',
        tasks: [],
        columns: ['Board Status BA', 'Board Status BB']
    }
];

const defaultValue: BoardDatabase = {
    data: defaultBoardValue,
    getAllBoardData: () => defaultBoardValue,
    createBoardData: () => {},
    getBoardDataById: (id: string) => defaultBoardValue[0]
}

const ApiMockContext = createContext(defaultValue);

export default ApiMockContext;
 