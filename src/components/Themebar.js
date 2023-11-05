import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Themebar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <h1>My Website</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Themebar;