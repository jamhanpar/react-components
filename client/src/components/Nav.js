import React from 'react';
import { Link } from 'react-router-dom';
import { FaEarlybirds } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

const links = [
  { label: 'Home', url: '' },
  { label: 'Develop', url: 'develop' },
  { label: 'Test', url: 'test' },
  { label: 'Extra', url: 'extra' },
];

export default function Nav({ companyTitle = 'Company Name' }) {
  const linkItems = links.map((link) => (
    <li className="border border-gray-400 p-2 px-5 rounded-full shadow-md">
      <Link to={link.url}>{link.label}</Link>
    </li>
  ));

  const iconOrLinks = true ? (
    <div className="flex items-center h-6">
      <FiMenu className="w-full h-full" />
    </div>
  ) : (
    <ul className="flex gap-4">{linkItems}</ul>
  );

  return (
    <div className="w-full">
      <nav className="flex justify-between py-5 px-5">
        <div className="flex flex-row items-center gap-2 w-full">
          <div className="h-full">
            <FaEarlybirds className="h-full w-full" />
          </div>
          <h1 className="font-bold">{companyTitle}</h1>
        </div>
        {iconOrLinks}
      </nav>
    </div>
  );
}
