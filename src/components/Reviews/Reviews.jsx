import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getReviews } from 'Api/Api';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getReviews(moviesId);
      setReviews(data.data.results);
    };
    fetchMovies();
  }, [moviesId]);

  if (!reviews) {
    return;
  }

  return (
    <>
      {reviews.length !== 0 ? (
        reviews.map(el => (
          <li key={el.id}>
            <p>author: {el.author}</p>
            <p>content: {el.content}</p>
          </li>
        ))
      ) : (
        <div>No Reviews</div>
      )}
    </>
  );
};

export default Reviews;
