import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from 'react';
import { Navbar } from './Components/Navbar';
import { NewsBoard } from './Components/NewsBoard';
import { NewsItem } from './Components/NewsItem';

console.log("App component loaded");

function App() {
  const [category, setCategory] = useState('general');

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };
  

  return (
    <div className="App">
      <Navbar onCategoryChange={handleCategoryChange}/>

      <NewsBoard category={category}/>
      
    </div>
  );
}

export default App;

