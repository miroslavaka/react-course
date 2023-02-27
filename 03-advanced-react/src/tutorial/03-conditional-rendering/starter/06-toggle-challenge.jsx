import { useState } from 'react';

// - create state value (boolean)
// - return a button and a component/element
// - when user clicks the button
//    - toggle state value
//    - conditionally render component/element

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);
  const toggleValue = () => {
    if (showAlert) {
      setShowAlert(false);
      return;
    }
    setShowAlert(true);
  };
  return (
    <div>
      <h2>toggle challenge</h2>
      <button className="btn" onClick={toggleValue}>
        toggle value
      </button>

      {/* <button className="btn" onClick={()=>setShowAlert(!showAlert)}>
        toggle value
      </button> */}

      {/* only if showAlert is true, display Alert component: */}
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">hello world</div>;
};

export default ToggleChallenge;
