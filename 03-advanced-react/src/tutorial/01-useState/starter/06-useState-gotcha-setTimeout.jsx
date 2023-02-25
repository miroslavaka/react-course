import { useState } from 'react';

const UseStateGotcha = () => {
  const [state, setState] = useState(0);

  const handleClick = () => {
    // setTimeout(() => {
    //   setState(state + 1);
    // }, 5000);
    setTimeout(() => {
      console.log('button clicked');
      setState((currentValue) => {
        return currentValue + 1;
      });
    }, 3000);
  };

  return (
    <div>
      <h2>useState "gotcha" setTimeout</h2>
      <h5>{state}</h5>
      <button className="btn" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
