import BoardContext from '@/context/board/Board';
import ModalContext from '@/context/modal/Modal';
import React, { useContext } from 'react';
import { MenuItemProps } from '../MenuBar/MenuBar.types';
import MenuItem from '../MenuBar/MenuItem';
import Modal from '../Modal';
import ThemeSwitch from '../ThemeSwitch';
import { SelectBoardModalProps } from './SelectBoardModal.types';

const SelectBoardModal: React.FC<SelectBoardModalProps> = ({
  menuItems,
  isVisible,
  closeFunction
}) => {
  const { changeCurrentBoard } = useContext(BoardContext);
  const { setIsModalVisible } = useContext(ModalContext);
  return (
    <>
      <Modal
        isVisible={isVisible}
        closeFunction={closeFunction}
        title={`All Boards (${menuItems.length})`}
      >
        <div className="flex flex-col w-full">
          {menuItems.map((menuItem: MenuItemProps) => (
            <MenuItem
              name={menuItem.name}
              link={menuItem.link}
              key={menuItem.link}
              id={menuItem.id}
              onClick={() => changeCurrentBoard(menuItem.id)}
            />
          ))}
        </div>
        <MenuItem
          name="+ Create New Board"
          key="create_board"
          onClick={() => {
            setIsModalVisible({
              type: 'board',
              method: 'create',
              title: 'Create a New Board',
              status: ''
            });
            closeFunction();
          }}
          id={'default'}
          isCreate={true}
        />
        <ThemeSwitch />
      </Modal>
    </>
  )
}

export default SelectBoardModal;
