// src/Components/NewsBoard.jsx
import React, { useState, useEffect } from 'react';
import { NewsItem } from './NewsItem';


export const NewsBoard = ({ category }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const endpoint = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;

    setLoading(true);
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data.articles)) {
          setNews(data.articles);
        } else {
          setNews([]);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the news:', error);
        setNews([]);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="row">
        {news.length > 0 ? (
          news.map((article, index) => (
            <div key={index} className="col-sm-12 col-md-6 col-lg-4">
              <NewsItem
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage}
              />
            </div>
          ))
        ) : (
          <p>No news available</p>
        )}
      </div>
    </div>
  );
};






