// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';
import search from '../assets/search-solid.svg';
import Avatar from './Avatar/Avatar.jsx'
import Button from '../components/Button/Button';
import './Navbar.css';

const Navbar = () => {
  const User = JSON.parse(localStorage.getItem('Profile'));

  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-item nav-btn">About</Link>
        <Link to="/" className="nav-item nav-btn">Products</Link>
        <Link to="/" className="nav-item nav-btn">For Teams</Link>
        
        <form className="nav-search-form">
          <input type="text" placeholder="Search..." />
          <img src={search} alt="search" width="18" className="search-icon" />
        </form>

        {User == null ? (
          <Link to="/auth" className="nav-item nav-links">Log in</Link>
        ) : (
          <>
            <Avatar backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" color="white">
              <Link to="/user" style={{ color: "white", textDecoration: 'none' }}>
                {User.name ? User.name.charAt(0).toUpperCase() : 'U'}
              </Link>
            </Avatar>
            <button className="nav-item nav-links">Log Out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
