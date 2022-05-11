import React, { useState } from 'react';

const Dropdown = () => {
  const [option, setOption] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setOption(e.target.value);
  }

  return (
    <div className="flex justify-center m-10">
      <form onSubmit={handleSubmit}>
        <div className="border-2 border-gray-600 px-3 py-2 rounded-2xl">
          <select className="outline-none" onChange={handleChange}>
            <option disabled>Select an option</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
        <select multiple={true} value={['B', 'C']} />
      </form>
    </div>
  );
};

export default Dropdown;
