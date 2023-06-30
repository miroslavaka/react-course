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
    const intId = setInterval(() => {
      console.log('hello from interval');
    }, 1000);
    return () => {
      clearInterval(intId);
    };
  }, []);

  return (
    <div>
      <h4>Hello there</h4>
    </div>
  );
};

export default CleanupFunction;
