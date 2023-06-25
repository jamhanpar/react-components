import React from 'react';

import Card from '../components/Cards/Card';
import Card1 from '../components/Cards/Card1';

const TwoOneColGrid = () => {
  return (
    <div className="grid grid-cols-3 w-full h-80">
      <div className="col-span-2 p-4 flex justify-center items-center">
        <Card />
      </div>
      <div className="col-span-1 p-4 flex justify-center items-center bg-gray-600">
        <Card1 />
      </div>
    </div>
  );
};

export default TwoOneColGrid;
