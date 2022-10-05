import axios from 'axios';

const API_KEY = '3c435a32a4f1a357a878f5d8aef1a3fd';

export const getTrendMovies = async function () {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getMovies = async function (movie_id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getCast = async function (movie_id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getReviews = async function (movie_id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const findeFilms = async function (movie) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
