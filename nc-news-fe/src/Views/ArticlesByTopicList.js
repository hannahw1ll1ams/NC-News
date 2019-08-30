import ArticleList from '../Components/ArticleList';
import React from 'react';


const ArticlesByTopicList = ({ topic }) => {
  return (
    <div>
      <p>All Articles for {topic}</p>
      <ArticleList topic={topic} />
    </div>
  )
}

export default ArticlesByTopicList;