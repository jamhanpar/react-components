import React, { useContext } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { HiOutlineLightBulb, HiLightBulb } from 'react-icons/hi';

export default function DarkModeBtn({
  darkIconColor = 'black',
  lightIconColor = 'yellow',
}) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <button onClick={toggleDarkMode}>
        {darkMode ? (
          <HiOutlineLightBulb size={32} color={darkIconColor} />
        ) : (
          <HiLightBulb size={32} color={lightIconColor} />
        )}
      </button>
    </>
  );
}
