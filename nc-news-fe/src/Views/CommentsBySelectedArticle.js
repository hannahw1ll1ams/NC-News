import SelectedArticle from '../Components/SelectedArticle'
import React from 'react';
import CommentsForArticle from '../Components/CommentsForArticle'

const CommentsBySelectedArticle = ({ article_id, loggedInUser }) => {
  return (
    <div>
      <SelectedArticle id={article_id} />
      <CommentsForArticle id={article_id} loggedInUser={loggedInUser} />
    </div>
  )
}

export default CommentsBySelectedArticle;