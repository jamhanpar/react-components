import React from 'react';

export default function ThreeColGrid({children}) {
  return (
    <div className="grid grid-cols-3 w-full h-80">
      {children}
    </div>
  );
};