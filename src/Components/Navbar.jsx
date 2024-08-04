

// src/Components/Navbar.jsx
import React from 'react';
import PropTypes from 'prop-types';

export const Navbar = ({ onCategoryChange }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NewsMall</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'].map((category) => (
              <li className="nav-item" key={category}>
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => onCategoryChange(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
};


