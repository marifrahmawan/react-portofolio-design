import React, { useContext } from 'react';

import { ThemeContext } from '../../context';

import Sun from '../../img/sun.png';
import Moon from '../../img/moon.png';
import './toggle.css';

const Toggle = () => {
  const themeCtx = useContext(ThemeContext);

  const onChangeTheme = () => {
    themeCtx.themeHandler();
  };

  return (
    <div className="toggle" onClick={onChangeTheme}>
      <img src={Sun} alt="" className="toggle-icon" />
      <img src={Moon} alt="" className="toggle-icon" />
      <div
        className={`toggle-button ${themeCtx.darkMode ? 'dark' : 'light'}`}
      ></div>
    </div>
  );
};

export default Toggle;
