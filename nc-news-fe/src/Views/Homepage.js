import ArticleList from '../Components/ArticleList';
import React from 'react';
import '../css/Homepage.css'


const Homepage = () => {
  return (
    <div className='Homepage'>
      <p>THESE ARE ALL THE ARTICLES!</p>
      <ArticleList />
    </div>
  )
}

export default Homepage;