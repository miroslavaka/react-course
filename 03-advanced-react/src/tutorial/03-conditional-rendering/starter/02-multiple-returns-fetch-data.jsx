import { useEffect, useState } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('');

  useEffect(() => {
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

  return (
    <section>
      <h2>Fetch Data </h2>
      <img
        style={{ width: '200px', borderRadius: '25px' }}
        src={user.avatar_url}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <h4>works at: {user.company}</h4>
      <p>{user.bio}</p>
    </section>
  );
};
export default MultipleReturnsFetchData;
