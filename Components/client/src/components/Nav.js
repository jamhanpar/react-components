import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Nav() {
  return (
    <nav className='flex flex-col md:flex-row justify-between items-center p-4'>
      <h1 className='font-bold'>Component Library</h1>
      <ul className='flex gap-4'>
        <li className='flex justify-center items-center'>
          <a href='#'>Home</a>
        </li>
        <li className='flex justify-center items-center'>
          <a href='#'>
            <FaLinkedin />
          </a>
        </li>
        <li className='flex justify-center items-center'>
          <a href='#'>
            <FaGithub />
          </a>
        </li>
      </ul>
    </nav>
  );
}
