import React, { useContext } from 'react';
import Switch from '@/components/Switch';
import ThemeContext from '@/context/theme/Theme';
import lightSvg from '@/../assets/icon-light-theme.svg';
import darkSvg from '@/../assets/icon-dark-theme.svg';
import Image from 'next/image';

const ThemeSwitch: React.FC = () => {
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);

  return (
    <Switch
      leftIcon={<Image src={lightSvg} alt="sun"/>}
      rightIcon={<Image src={darkSvg} alt="moon" />}
      onClick={() =>  { changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light') }}
      checked={currentTheme === 'dark'}
    />
  );
};

export default ThemeSwitch;
