import React, { useState } from 'react';
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

const MenuBar: React.FC<MenuBarProps> = ({ menuItems }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(true);
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
    w-1/3
    bg-white
    dark:bg-dark_grey
    shadow-md
    hidden
    ${openMenu ? 'sm:flex hidden' : 'hidden'}
    flex-col
    justify-between
  `);

  const mobileVisibilityClasses = twMerge(`
    justify-center 
    ml-0 
    w-1/16 
    rounded-r-full 
    p-2 
    z-[100] 
    absolute 
    fixed 
    left-0 
    bottom-0 
    bg-main_purple 
    mb-3
    hover:cursor-pointer
    hidden
    sm:flex
    lg:hidden 
    ${openMenu ? 'hidden' : 'flex'}
  `);

  const logoClasses = twMerge(`
    ${openMenu ? 'hidden' : 'flex'}
  `);

  return (
    <>
      {/* Topbar */}
      <div className={mobileMenuBarClasses}>
        <div className="flex gap-4">
          <div className={`sm:border-r sm:border-light_lines w-auto p-2 ${logoClasses}`}>
            <Image src={logoMobile} alt="mobile logo" className="flex sm:hidden"/>
            <Image src={logoDark} alt="light logo" className="hidden sm:flex dark:hidden" />
            <Image src={logoLight} alt="dark logo" className="hidden dark:sm:flex" />
          </div>  
          <div className="flex gap-2 font-extrabold text-xl items-center dark:text-white">
            Platform Launch
            <Image src={chevronDown} alt="chevron down" className="object-none" width={10} height={7} />
          </div>
        </div>
        <div className="flex gap-4 w-1/4">
          <Button
            text={<Image src={addTask} alt="cross icon" className="object-none dark:text" />}
            type="primary"
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
            {menuItems.map((menuItem: MenuItemProps) => (
                <MenuItem
                  display={menuItem.display}
                  link={menuItem.link}
                  key={menuItem.link}
                />
              ))}
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