import { Fragment } from 'react';

export default function HamburgerMenu({ links = [] }) {
  return (
    <Fragment>
      <button className="w-6 h-6">
        <div className="w-full h-0.5 block bg-black rounded-full" />
        <div className="w-full h-1 block bg-gradient-to-b from-white" />
        <div className="w-full h-0.5 block bg-black rounded-full" />
        <div className="w-full h-1 block bg-gradient-to-b from-white" />
        <div className="w-full h-0.5 block bg-black rounded-full" />
        <nav className="sidebar-menu">
          {/* <ul className="flex gap-4">{links}</ul> */}
        </nav>
      </button>
      {/* <button className="hamburger-menu w-6 h-6 block m-5 bg-gradient-to-b from-cyan-500 to-blue-500">
        <nav className="sidebar-menu">
          <ul className="flex gap-4">{links}</ul>
        </nav>
      </button> */}
    </Fragment>
  );
}
