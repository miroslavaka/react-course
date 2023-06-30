import { useState } from 'react';
import { data } from '../../../data';

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted, ', name);

    console.log('id will be: ', Date.now());
    const newUser = { id: Date.now(), name };
    const userUpdate = [...users, newUser];
    setUsers(userUpdate);
  };

  const handleChange = (e) => {
    //console.log(e.target.value);
    setName(e.target.value);
  };

  const removeUser = (id) => {
    console.log(id);
    const userUpdate = users.filter((person) => id !== person.id);
    setUsers(userUpdate);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <h2>Users:</h2>
      {users.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <button className="btn" onClick={() => removeUser(item.id)}>
              x
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
