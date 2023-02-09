import React, { useContext } from 'react';
import Switch from '@/components/Switch';
import ThemeContext from '@/context/theme/Theme';
import lightSvg from '@/../assets/icon-light-theme.svg';
import darkSvg from '@/../assets/icon-dark-theme.svg';
import Image from 'next/image';

const ThemeSwitch: React.FC = () => {
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);

  return (
    <div className="w-full bg-light_lines rounded-md p-2">
      <Switch
        leftIcon={<Image src={lightSvg} alt="sun" className="text-dark_grey"/>}
        rightIcon={<Image src={darkSvg} alt="moon" className="text-dark_grey" />}
        onClick={() =>  { changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light') }}
        isChecked={currentTheme === 'dark'}
        onColor="#635FC7"
        offColor="#635FC7"
      />
    </div>
  );
};

export default ThemeSwitch;
