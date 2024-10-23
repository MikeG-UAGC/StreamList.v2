import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StreamList from './components/StreamList';
import Movies from './components/Movies';
import Cart from './components/Cart';
import About from './components/About';
import NotFound from './components/NotFound';
import { CartProvider } from './CartContext'; // Import CartProvider
import './App.css'; // Assuming App.css has the styles
import MovieSearch from './components/MovieSearch'; // Correct path to MovieSearch


function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          {/* Navigation Menu */}
          <nav className="navbar">
            <div className="logo">
              <h2>EZTech Movie</h2>
            </div>
            <ul className="nav-links">
              <li>
                <Link to="/">StreamList</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
              <Link to="/search">Search Movies</Link> {/* New Search Route */}
            </li>
            </ul>
          </nav>

          {/* Routing to Different Pages */}
          <Routes>
            <Route path="/" element={<StreamList />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/search" element={<MovieSearch />} /> {/* MovieSearch Route */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
