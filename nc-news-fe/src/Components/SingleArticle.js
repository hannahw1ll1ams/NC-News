import React from 'react';
import { Link } from '@reach/router';


const SingleArticle = ({ title, topic, created_at, author, votes, id, comment_count, articles_topic, selected_article_id }) => {
  return (
    <li>
      {/* 
      if url has topic in it, then {`articles/${id}`}, if doesn't then another {`/articles/${id}`}*/}
      <Link to={!articles_topic ? `/articles/${id}` : `/${articles_topic}/articles/${id}`}><p>{title}</p></Link>
      <p>{topic}</p>
      <Link to={`/users/${author}`} ><p>{author}</p></Link>
      <p>Votes: {votes}</p>
      <p>{created_at}</p>
      <p>Comment Count: {comment_count}</p>
    </li >
  );
};

export default SingleArticle;