import getMovies from 'Api/Api';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    if (!state.length === 0) {
      return;
    }
    const fetchMovies = async () => {
      const data = await getMovies();
      console.log(data.data.results);
      if (!state.length > 0) {
        setState(data.data.results);
      }
    };
    fetchMovies();
  }, [state]);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {state.map(el => (
          <li key={el.id}>
            <Link to="movies/:moviesId">{el.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
