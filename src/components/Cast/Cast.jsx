import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getCast } from 'Api/Api';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getCast(moviesId);
      setCast(data.data.cast);
    };
    fetchMovies();
  }, []);
  if (!cast) {
    return;
  }

  const actorPoster = 'https://image.tmdb.org/t/p/w300';
  return (
    <>
      {cast.map(({ id, profile_path, character, name }) => (
        <li key={id}>
          <img src={`${actorPoster}${profile_path}`} alt="" width="100"></img>
          <p>name: {name}</p>
          <p>character: {character}</p>
        </li>
      ))}
    </>
  );
};

export default Cast;
