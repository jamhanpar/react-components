import React, { useState } from 'react';

export default function Dropdown({ options = [] }) {
  const [selected, setSelected] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(selected);
  }

  function handleChange(e) {
    setSelected(e.target.value);
  }

  return (
    <div className='flex justify-center m-10'>
      <form onSubmit={handleSubmit}>
        <div className='border-2 border-gray-600 px-3 py-2 rounded-2xl'>
          <select className='outline-none' onChange={handleChange}>
            <option disabled>Select an option</option>
            {options.map(option => {
              const [label, value] = option;
              return <option value={value}>{label}</option>;
            })}
          </select>
        </div>
      </form>
    </div>
  );
}
