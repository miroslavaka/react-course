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
    <section>
      <h2>fetch data example</h2>
      <h3>Github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, avatar_url, login, html_url } = user;

          return (
            <li key={id}>
              <img className="img" src={avatar_url} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
