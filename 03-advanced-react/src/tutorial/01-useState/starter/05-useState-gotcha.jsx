import { useState } from 'react';

const UseStateGotcha = () => {
  const [state, setState] = useState(0);
  // const handleClick = () => {
  //   setState(state + 1);
  //   console.log(state);
  // };
  const handleClick = () => {
    setState((prevState) => {
      //return prevState + 1;
      const newState = prevState + 1;
      return newState;
    });
  };

  return (
    <div>
      <h2>useState "gotcha"</h2>
      <h5>{state}</h5>
      <button className="btn" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
