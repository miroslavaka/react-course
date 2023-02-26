import { useEffect, useState } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      //here we can set condition - if response is not ok
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const user = await response.json();
      console.log(user);
      setUser(user);
    } catch (error) {
      setIsError(true);
      // fetch only cares about network errors
      console.log(error);
    }
    //once we are done with loading we want to set it to false
    //if there is error - display error message
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  //loading - waiting for data to arrive (display loading state)
  //sucess - received data, dispaly data
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }

  //---------------------DESTRUCTURE OBJECT USER-------------------
  const { avatar_url, name, company, bio } = user;
  return (
    <section>
      <h2>Fetch Data </h2>

      <img
        style={{ width: '200px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at: {company}</h4>
      <p>{bio}</p>
    </section>
  );
};
export default MultipleReturnsFetchData;
