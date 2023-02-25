import { useState } from 'react';

const ErrorExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>useState error example</h2>
      <p>{count}</p>
      <button className="btn" onClick={handleClick}>
        Increase on click
      </button>
    </>
  );
};

export default ErrorExample;
