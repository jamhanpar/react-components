import React, { useContext } from 'react';
import DarkModeBtn from '../components/Buttons/DarkModeBtn';
import { DarkModeContext } from '../contexts/DarkModeContext';

export default function Develop() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <main
      className={`flex justify-center items-center ${
        darkMode ? 'bg-dark' : 'bg-light'
      }`}
    >
      <DarkModeBtn />
    </main>
  );
}
