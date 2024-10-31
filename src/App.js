import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StreamList from './components/StreamList';
import Movies from './components/Movies';
import Cart from './components/Cart';
import About from './components/About';
import MovieSearch from './components/MovieSearch';
import { CartContext } from './CartContext';
import './App.css';

function App() {
  const { cartItems } = useContext(CartContext);

  return (
    <Router>
      <div>
        {/* Navigation Menu */}
        <nav className="navbar">
          <div className="logo">
            <h2>EZTech Movie</h2>
            {/* Logo Image */}
            <img src="/logo-75x75.png" alt="EZTech Logo" style={{ width: '75px', height: '75px', marginLeft: '10px' }} />
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">StreamList</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              {/* Show the number of items in the cart next to the Cart link */}
              <Link to="/cart">
                Cart ({cartItems.length}) {/* Display cart item count */}
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/search">Search Movies</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<MovieSearch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
