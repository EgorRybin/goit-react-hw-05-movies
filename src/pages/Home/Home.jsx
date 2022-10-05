import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getTrendMovies } from 'Api/Api';
import s from '../Home/Home.module.css'

const Home = () => {
  const [state, setState] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getTrendMovies();
      if (!state.length > 0) {
        setState(data.data.results);
      }
    };
    fetchMovies();
  }, [state.length]);

  return (
    <>
      <h1 className={s.title}>Trending today</h1>
      <ul>
        {state.map(({id, original_title}) => (
          <li key={id} >
            <Link to={`movies/${id}`} state={{from: location}} className={s.item}>{original_title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
