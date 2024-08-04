

// src/Components/NewsItem.jsx
import React from 'react';
import PropTypes from 'prop-types';

export const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className="card mb-3" style={{ width: '18rem' }}>
      {urlToImage && <img src={urlToImage} className="card-img-top" alt={title} />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string,
};




