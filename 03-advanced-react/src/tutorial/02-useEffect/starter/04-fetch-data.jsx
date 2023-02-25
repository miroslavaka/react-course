import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((response) => response.json())
      .then((data) => {
        console.log('data:', data);
        setUsers(data);
        console.log('users:', users);
      });
  }, []);
  return (
    <>
      <h2>fetch data example</h2>
      <h3>Github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { avatar_url, login, url } = user;

          return (
            <li>
              <img className="img" src={avatar_url} />
              <h5>{login}</h5>
              <a href={url}>Profile</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default FetchData;
