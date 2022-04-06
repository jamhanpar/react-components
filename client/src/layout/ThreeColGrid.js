import React from 'react';

import Card from '../components/Cards/Card';
import Card1 from '../components/Cards/Card1';
import Card2 from '../components/Cards/Card2';

const ThreeColGrid = () => {
  return (
    <div className="grid grid-cols-3 w-full h-80">
      <div className="p-4 flex justify-center items-center">
        <Card />
      </div>
      <div className="p-4 flex justify-center items-center">
        <Card1 />
      </div>
      <div className="p-4 flex justify-center items-center">
        <Card2 />
      </div>
    </div>
  );
};

export default ThreeColGrid;
