



import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { cart } = useCart();
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-contact">
          <span><FontAwesomeIcon icon={faPhone} /> +91-8867990788</span>
          <span><FontAwesomeIcon icon={faEnvelope} /> cutieskin@essentials.com</span>
          <span><FontAwesomeIcon icon={faMapMarkerAlt} />Coimbatore</span>
        </div>
      </div>
      <div className="navbar-main">
        <div className="navbar-left">
          <Link to="/" className="logo">Cutie Skin Essentials</Link>
        </div>
        <div className="navbar-right">
          <Link to="/">Home</Link>
          {isAuthenticated ? (
            <>
              <Link to="/products">Products</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contactus">Contact Us</Link>
              <Link to="/logout" onClick={logout}>Logout</Link>
              <Link to="/cart">
                <button className="cart-button">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
                </button>
              </Link>
            </>
          ) : (
            <Link to="/signin">Sign-In</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
