import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

import { findeFilms } from 'Api/Api';
import s from '../Movies/Movies.module.css';

const Movies = () => {
  const [findingMovies, setFindingMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get('movieName');
    const location = useLocation();

  useEffect(() => {
      if (!movieName) {
      return;
    }
    const fetchMovies = async () => {
      const data = await findeFilms(movieName);
      setFindingMovies(data.data.results);
    };
    fetchMovies();
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ movieName: form.elements.movieName.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input className={s.input} name="movieName" type="text" />
          <button className={s.btn} type="submit">Find</button>
        </label>
      </form>
      <ul>
        {findingMovies && findingMovies.map(({id, original_title}) => (<li key={id}>
              <Link to={`/movies/${id}`} state={{from: location}} className={s.link}>{original_title}</Link></li>))}
      </ul>
    </>
  );
};

export default Movies;
