import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '97ff0cccd476d9f213ba935157939e49'; // Replace with your actual TMDB API key
  const TMDB_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await axios.get(TMDB_API_URL);
        setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch movies.');
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <div className="movie-details">
              <h3 className="movie-title">{movie.title}</h3>
              <p className="movie-rating">Rating: {movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <button className="load-more-button" onClick={loadMoreMovies}>
          Load More
        </button>
      )}

      {error && <p>{error}</p>}
    </div>
  );
}

export default Movies;
