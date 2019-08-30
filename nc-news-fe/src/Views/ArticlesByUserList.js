import React from 'react';
import ArticleList from '../Components/ArticleList';


const ArticlesByUserList = ({ username }) => {
  return (
    <ArticleList author={username} />
  )
}

export default ArticlesByUserList;