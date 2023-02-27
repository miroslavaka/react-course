// - create state value
//   - user - default value null
// - create two functions
//   - login - set's user equal to object with name property
//   - logout - set's user equal to null
// - in jsx use ? to display two different setups (1. if user exists - go with 'hello there' and user name. 2. if user is already logged in I don´t want display login button - it does not make sense, I want to display logout button )
// - h4 with "hello there, user name" and logout button
// - h4 with "please login " and login button

import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    //normally connect to db or api
    setUser({
      name: 'vegan food truck',
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      <h2>user challenge</h2>
      {user !== null ? (
        <div>
          <h4>hello there! {user.name}</h4>
          <button className="btn" onClick={logout}>logout</button>
        </div>
      ) : (
        <div>
          <h4>please login</h4>
          <button className="btn" onClick={login}>login</button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
