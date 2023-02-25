import { useState } from 'react';

const UseStateBasics = () => {
  //console.log(useState());

  //ACCESSING useState values:
  // const value = useState('hello')[0];
  // const func = useState('hello')[1];
  // console.log('value: ', value);
  // console.log('func: ', func);

  //ACCESSING useState value by destructuring:
  const [count, setCount] = useState(0);
  //console.log('value: ', count);
  //console.log('func: ', setCount);

  const handleClick = () => {
    setCount(count + 1);
    console.log('count: ', count);
  };

  return (
    <div>
      <h2>You clicked {count} times</h2>
      <button className="btn" onClick={handleClick}>
        Increase on click
      </button>
    </div>
  );
};

export default UseStateBasics;
