import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [names, setNames] = useState(data);

  const removeName = (value) => {
    const newNames = names.filter((item) => item.name !== value);
    setNames(newNames);
  };

  const clearAllItems = () => {
    setNames([]);
  };

  return (
    <div>
      <h2>useState array example</h2>
      {names.map((item) => {
        const { id, name } = item;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <button onClick={() => removeName(name)}>Remove</button>
          </div>
        );
      })}
      <button style={{ marginTop: '2rem' }} onClick={clearAllItems}>
        Clear items
      </button>
    </div>
  );
};

export default UseStateArray;
