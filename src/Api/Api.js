import axios from 'axios';

const API_KEY = '3c435a32a4f1a357a878f5d8aef1a3fd';

async function getMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default getMovies;

// https://api.themoviedb.org/3/movie/550?api_key=3c435a32a4f1a357a878f5d8aef1a3fd