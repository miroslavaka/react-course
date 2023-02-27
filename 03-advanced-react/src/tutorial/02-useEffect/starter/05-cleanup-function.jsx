import { useState, useEffect } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <h2>cleanup function</h2>

      <button
        className="btn"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    console.log('use effect');
  }, []);

  return (
    <div>
      <h4>Hello there</h4>
    </div>
  );
};

export default CleanupFunction;
