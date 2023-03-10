import React, { useState } from "react";
import ApiMockContext, { defaultBoardValue, BoardDatabaseObject } from "./ApiMock";
import { BoardObject } from "../board/Board";

const ApiMockContextWrapper: React.FC<{children: React.ReactNode | React.ReactNode[] }> = ({ children }) => {
    const [boardsDb, setBoardsDb] = useState<BoardDatabaseObject[]>(defaultBoardValue);
    
    const createBoardData = (newBoard: BoardObject) => {
        const boardsDbDupe = [...boardsDb];
        const newBoardDbObject: BoardDatabaseObject = {
            name: newBoard.name,
            tasks: newBoard.tasks,
            columns: newBoard.statuses,
            id: boardsDb.length + 1
        };

        setBoardsDb([...boardsDbDupe, newBoardDbObject]);
    };

    const getAllBoardData = () => {
        return boardsDb;
    };

    const getBoardDataById = (id: string) => {
        return boardsDb.find((board: BoardDatabaseObject) => board.id === id);
    };

    
    return (<ApiMockContext.Provider value={{ 
            data: boardsDb,
            getAllBoardData,
            createBoardData,
            getBoardDataById
        }}>
            {children}
        </ApiMockContext.Provider>
    )
}