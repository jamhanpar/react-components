import React from 'react';

const Nav = () => {
  return (
    <div>
      <nav className="flex justify-between p-4 border-b-2 border-gray-200">
        <div>
          <h1 className="font-bold">Company</h1>
        </div>
        <ul className="flex gap-4">
          <li>
            <a href="#">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Github</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
