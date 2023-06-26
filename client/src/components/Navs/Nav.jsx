import React from 'react';
import { Link } from 'react-router-dom';
import { FaEarlybirds } from 'react-icons/fa';
import HamburgerMenu from './HamburgerMenu';
import DarkModeBtn from '../Buttons/DarkModeBtn';

const links = [
  { label: 'Home', url: '' },
  { label: 'Dev', url: 'dev' },
  { label: 'Test', url: 'test' },
];

export default function Nav({
  companyTitle = 'Company Name',
  showDarkMode = true,
}) {
  const linkItems = links.map((link, index) => (
    <li
      key={link.label + index}
      className='border border-gray-400 p-2 px-5 rounded-full shadow-md hover:shadow-inner hover:border-gray-700 cursor-pointer'
    >
      <Link to={link.url}>{link.label}</Link>
    </li>
  ));

  // TODO: update true to screensize
  const iconOrLinks = false ? (
    <div className='flex items-center h-6'>
      <HamburgerMenu links={linkItems} />
    </div>
  ) : (
    <ul className='flex gap-4'>
      {linkItems}
      {showDarkMode && <DarkModeBtn />}
    </ul>
  );

  return (
    <div className='w-full'>
      <nav className='flex justify-between py-4 px-4 sm:py-5 sm:px-5'>
        <div className='flex flex-row items-center gap-2 w-full'>
          <div className='h-full'>
            <FaEarlybirds className='h-full w-full' />
          </div>
          <h1 className='font-bold'>{companyTitle}</h1>
        </div>
        {iconOrLinks}
      </nav>
    </div>
  );
}
