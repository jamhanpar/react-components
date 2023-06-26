import React, { useState } from 'react';
import { FaGripVertical } from 'react-icons/fa';

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {/* <button onClick={() => setToggle(!toggle)}>{toggle ? 'Turn On' : 'Turn Off'}</button> */}
      <button onClick={() => setToggle(!toggle)}>
        <FaGripVertical />
      </button>
      {toggle && <div class="border border-red-400">Content</div>}
    </div>
  );
};

export default Toggle;
