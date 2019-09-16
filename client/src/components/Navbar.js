import React, { useState } from 'react';
import {useDarkMode} from '../hooks/useDarkMode';
import '../App.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode('dark-mode', false)
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    console.log(darkMode);
  };
  return (
    <nav className="navbar">
      <div className="dark-mode__toggle">
        <div
          data-testid="dark-toggle"
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
