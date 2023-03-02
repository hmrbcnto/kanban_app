import BoardColumn from '@/components/BoardColumn';
import ColumnTask from '@/components/ColumnTask';
import { ColumnTaskProps } from '@/components/ColumnTask/ColumnTask.types';
import TaskForm from '@/components/Forms/TaskForm';
import ModifyForm from '@/components/Forms/TaskForm/Modify';
import MenuBar from '@/components/MenuBar';
import { MenuItemProps } from '@/components/MenuBar/MenuBar.types';
import Modal from '@/components/Modal';
import ModalContext from '@/context/modal/Modal';
import Script from 'next/script';
import React, { useContext, useState, useEffect } from 'react';
import { getBoardData } from '../apis/board';

const sampleMenuItems: MenuItemProps[] = [
  {
    display: 'Platform Launch',
    link: 'platform',
    id: 'menuitem1'
  },
  {
    display: 'Platform Chonk',
    link: 'chonk',
    id: 'menuitem2'
  }
];

const Board: React.FC = () => {
  const { setIsModalVisible } = useContext(ModalContext);
  const [board, setBoard] = useState<any>({});

  useEffect(() => {
    // const data = await getBoardData();
    const boardData = getBoardData();
    
    setBoard(boardData);
  }, [])
  return (
    <>
      <MenuBar 
        menuItems={sampleMenuItems}
      />
      <div className="w-screen h-screen bg-light_grey dark:bg-very_dark_grey pt-20 flex gap-4 overflow-scroll overflow-x-scroll">
        <BoardColumn
          name="todo"
          tasks={board.tasks}
          onClick={() => {}}
        />
        <BoardColumn
          name="todo"
          tasks={board.tasks}
          onClick={() => {}}
        />
      </div>
    </>
  )
};

export default Board;
