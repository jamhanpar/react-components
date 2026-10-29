import React, { useState } from 'react';

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <p className={toggle ? 'visible' : 'hidden'}>Hide on Toggle</p>
    </div>
  );
};

export default Toggle;
