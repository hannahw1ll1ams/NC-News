import React from 'react';
import { Link } from '@reach/router';
import '../css/ArticleList.css';
import formatDateAppearance from '../utils/changeDateFormat'


const ArticleCard = ({ title, topic, created_at, author, votes, id, comment_count, articles_topic, selected_article_id }) => {
  return (
    <li className={`singleArticle-${topic}`}>
      <Link to={!articles_topic ? `/articles/${id}` : `/${articles_topic}/articles/${id}`}><p>{title}</p></Link>
      {/* <p>{topic}</p> */}
      <Link to={`/users/${author}`} ><p>{author}</p></Link>
      <p>Votes: {votes}</p>
      <p className='time'>Created at: {formatDateAppearance(created_at)}</p>
      <p>Comment Count: {comment_count}</p>
    </li>
  );
};

export default ArticleCard;