import { Routes, Route } from 'react-router-dom';

import Home from './Home/Home';
import Movies from './Movies/Movies';
import MoviesId from './MoviesId/MoviesId';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import SharedLayout from './SharedLayout/SharedLayout';


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="ovies" element={<Movies />} />
          <Route path="/movies/:moviesId" element={<MoviesId />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
