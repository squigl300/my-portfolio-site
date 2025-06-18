// src/components/Navbar.jsx

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Your Name
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/ai-projects" className="nav-links">AI Projects</a>
          </li>
          <li className="nav-item">
            <a href="/current-focus" className="nav-links">Current Focus</a>
          </li>
          <li className="nav-item">
            <a href="/blog" className="nav-links">Blog & About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;