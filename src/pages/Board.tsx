import MenuBar from '@/components/MenuBar';
import { MenuItemProps } from '@/components/MenuBar/MenuBar.types';
import React from 'react';

const Board: React.FC = () => {
  const sampleMenuItems: MenuItemProps[] = [
    {
      display: 'Platform Launch',
      link: 'platform',
    },
    {
      display: 'Platform Chonk',
      link: 'chonk',
    }
  ];

  return (
    <>
      <MenuBar 
        menuItems={sampleMenuItems}
      />
      <div className="w-screen h-screen bg-light_grey dark:bg-very_dark_grey">
      </div>
    </>
  )
};

export default Board;
