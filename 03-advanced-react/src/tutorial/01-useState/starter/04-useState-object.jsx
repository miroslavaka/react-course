import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    hobby: 'reading books',
  });

  const updatePerson = () => {
    setPerson({
      name: 'John',
      age: 28,
      hobby: 'running',
    });
    //setPerson({name: 'susan'})
    //setPerson({...person, name: 'susan'})
  };

  return (
    <div>
      <h2>useState object example</h2>
      <h4>Name: {person.name}</h4>
      <h4>Age: {person.age}</h4>
      <h4>Hobby: {person.hobby}</h4>
      <button className="btn" onClick={updatePerson}>
        Show John
      </button>
    </div>
  );
};

export default UseStateObject;
