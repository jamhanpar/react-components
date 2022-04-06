import React from 'react';

import Card1 from '../components/Cards/Card1';

const OneTwoColGrid = () => {
  return (
    <div className="grid grid-cols-3 w-full h-96">
      <div className="col-span-1 p-4 flex justify-center items-center bg-gray-600 rounded-r-lg">
        <Card1 />
      </div>
      <div className="col-span-2 p-4 flex flex-col justify-center items-center">
        <h1 className="text-xl text-bold text-red-400 pb-4">Lorem Ipsum</h1>
        <p className="w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  );
};

export default OneTwoColGrid;
