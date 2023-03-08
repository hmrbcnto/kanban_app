import React, { useContext, useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { MenuBarProps, MenuItemProps } from './MenuBar.types';
import logoMobile from '../../../assets/logo-mobile.svg';
import chevronUp from '../../../assets/icon-chevron-up.svg';
import chevronDown from '../../../assets/icon-chevron-down.svg';
import hideSidebar from '../../../assets/icon-hide-sidebar.svg';
import showSidebar from '../../../assets/icon-show-sidebar.svg';
import logoLight from '../../../assets/logo-light.svg';
import logoDark from '../../../assets/logo-dark.svg';
import addTask from '../../../assets/icon-add-task-mobile.svg';
import verticalEllipsis from '../../../assets/icon-vertical-ellipsis.svg';
import Image from 'next/image';
import Button from '../Button';
import ThemeSwitch from '../ThemeSwitch';
import MenuItem from './MenuItem';
import ModalContext from '@/context/modal/Modal';
import BoardContext from '@/context/board/Board';
import SelectBoardModal from '../SelectBoardModal';

const MenuBar: React.FC<MenuBarProps> = () => {
  const { boardList } = useContext(BoardContext);
  const { setIsModalVisible } = useContext(ModalContext);
  const { currentBoard, changeCurrentBoard } = useContext(BoardContext);
  // TODO: Turn these two useStates into a singular useReducer??? Think about it.
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, [])

  const mobileMenuBarClasses = twMerge(`
    absolute
    fixed
    z-[100]
    w-full
    h-16
    p-2
    bg-white
    dark:bg-dark_grey
    flex
    items-center
    justify-between
  `);

  const sideBarMenuClasses = twMerge(`
    absolute
    fixed
    z-[101]
    h-full
    bg-white
    dark:bg-dark_grey
    shadow-md
    hidden
    ${openMenu ? 'sm:flex hidden w-1/3' : 'hidden w-0'}
    flex-col
    justify-between
    transition
    ease-in-out
    duration-300
  `);

  const mobileVisibilityClasses = twMerge(`
    justify-center 
    ml-0 
    w-1/16 
    rounded-r-full 
    p-4 
    z-[100] 
    absolute 
    fixed 
    left-0 
    bottom-0 
    bg-main_purple 
    mb-3
    hover:cursor-pointer
    hover:bg-hover_purple
    sm:flex
    hidden
    ${openMenu ? 'hidden' : 'sm:flex'}
  `);

  const logoClasses = twMerge(`
    ${openMenu ? 'hidden' : 'flex'}
  `);

  return (
    <>
      {/* Mobile Change Bar Modal */}
      <SelectBoardModal
        menuItems={boardList}
        isVisible={isMobileModalOpen}
        closeFunction={() => setIsMobileModalOpen(false)}
      />
      {/* Topbar */}
      <div className={mobileMenuBarClasses}>
        <div className="flex gap-4">
          <div className={`sm:border-r sm:border-light_lines w-auto p-2 ${logoClasses}`}>
            <Image src={logoMobile} alt="mobile logo" className="flex sm:hidden"/>
            <Image src={logoDark} alt="light logo" className="hidden sm:flex dark:hidden" />
            <Image src={logoLight} alt="dark logo" className="hidden dark:sm:flex" />
          </div>  
          <div 
            className="flex gap-2 font-extrabold text-xl items-center dark:text-white hover:cursor-pointer"
            onClick={() => {
              windowSize <= 640 ? setIsMobileModalOpen(true) : ''
            }}
          >
            {currentBoard?.name}
            <Image src={chevronDown} alt="chevron down" className="object-none" width={10} height={7} />
          </div>
        </div>
        <div className="flex gap-4 w-1/4">
          <Button
            text={<><Image src={addTask} alt="cross icon" className="object-none dark:text" /><span className="font-semibold text-white hidden md:block pl-2">Add New Task </span></>}
            type="primary"
            onClick={() => setIsModalVisible({
              type: 'warning',
              method: 'create',
              title: 'Delete this task?',
              status: 'warning'
            })}
          />
          <Image src={verticalEllipsis} alt="vertical ellipsis" className="object-none" />
        </div>
      </div>
      {/* Sidemenu */}
      <div className={sideBarMenuClasses}>
        <div className="flex flex-col gap-10">
          <div className={`sm:border-r sm:border-light_lines w-auto p-2 pl-8 pt-6 flex`}>
            <Image src={logoDark} alt="light logo" className="hidden sm:flex dark:hidden" />
            <Image src={logoLight} alt="dark logo" className="hidden dark:sm:flex" />
          </div>
          <div className="">
            <p className="text-medium_grey pl-4 pb-2"> ALL BOARDS (3)</p>
            {boardList.map((menuItem: MenuItemProps) => (
                <MenuItem
                  name={menuItem.name}
                  link={menuItem.link}
                  key={menuItem.link}
                  id={menuItem.id}
                  onClick={() => changeCurrentBoard(menuItem.id)}
                />
              ))}
             <MenuItem
                name="+ Create New Board"
                key="create_board"
                onClick={() => setIsModalVisible({
                  type: 'board',
                  method: 'create',
                  title: 'Create a New Board',
                  status: ''
                })}
                id={'default'}
                isCreate={true}
              /> 
          </div>
        </div>
        <div className="flex flex-col p-4 justify-center gap-4">
          <ThemeSwitch />
          <div 
            className="w-full font-semibold flex gap-2 ml-4 text-medium_grey hover:cursor-pointer"
            onClick={() => setOpenMenu(false)}
          >
            <Image src={hideSidebar} alt="hide sidebar icon" height={16} width={18} className="object-none"/>
            Hide Sidebar
          </div>
        </div>
      </div>
      {/* Eye Thingy */}
      <div 
        className={mobileVisibilityClasses}
        onClick={() => setOpenMenu(true)}
      >
        <Image src={showSidebar} alt="show sidebar" />
      </div>
    </>
  )
};

export default MenuBar;