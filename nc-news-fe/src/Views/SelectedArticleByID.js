import ArticleList from '../Components/ArticleList';
import React from 'react';
import SelectedArticle from '../Components/SelectedArticle'


const SelectedArticleByID = ({ topic, article_id, loggedInUser }) => {
  return (
    <div className='container'>
      <ArticleList topic={topic} article_id={article_id} />
      <SelectedArticle id={article_id} loggedInUser={loggedInUser} />
    </div>
  )
}

export default SelectedArticleByID;