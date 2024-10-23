import React, { useState } from 'react';
import axios from 'axios';

function MovieSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '97ff0cccd476d9f213ba935157939e49';

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: { api_key: API_KEY, query: searchTerm },
      });
      setMovies(response.data.results);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch movie data.');
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="movie-results">
        {movies.length > 0 && movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <h3>{movie.title}</h3>
            <p>Rating: {movie.vote_average}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;
