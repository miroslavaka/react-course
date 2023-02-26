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
        const user = await response.json();
        console.log(user);
        setUser(user);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      //once we are done with loading we want to set it to false
      setIsLoading(false);
    };
    fetchData();
  }, []);

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
