import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';

import { getMovies } from 'Api/Api';
import s from '../MoviesDetails/MoviesDetails.module.css';

const MoviesDetails = () => {
  const [movies, setMovies] = useState(null);
  const { moviesId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies(moviesId);
      setMovies(data);
    };
    fetchMovies();
  }, [moviesId]);
  if (!movies) {
    return;
  }

  const { vote_average, overview, genres, title, poster_path } = movies.data;
  const poster = 'https://image.tmdb.org/t/p/w300' + poster_path;
  return (
    <div className={s.conteiner}>
      <Link to={location.state?.from ?? '/'} className={s.back}>Back</Link>
      <img src={poster} alt="" className={s.img}></img>
      <div className={s.text}>
      <h2>{title}</h2>
      <p>vote average: {vote_average}</p>
      <p>overview: {overview}</p>
      <p>genres: {genres.map(el => `${el.name} `)}</p>
      <h3>Additional information</h3>
      </div>

      <Link to="cast" className={s.link} state={{from: location.state.from}}>Cast</Link>
      <Link to="reviews" className={s.link} state={{from: location.state.from}}>Reviews</Link>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MoviesDetails;
