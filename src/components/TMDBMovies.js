import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TMDBMovies() {
  const [movies, setMovies] = useState([]); // State to store the retrieved movies
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track any errors

  const API_KEY = '97ff0cccd476d9f213ba935157939e49';
  const TMDB_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  // Retrieve popular movies from the TMDB API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(TMDB_API_URL);
        setMovies(response.data.results);
        setLoading(false);
      } catch (err) {
        setError('Error fetching data from TMDB API');
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <p>Loading movies...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <h2>{movie.title}</h2>
            <p>Rating: {movie.vote_average}</p>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TMDBMovies;
