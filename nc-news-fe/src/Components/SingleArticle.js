import React from 'react';
import { Link } from '@reach/router';


const SingleArticle = ({ title, topic, created_at, author, votes, id, comment_count }) => {
  return (
    <li>
      <Link to={`/articles/${id}`}><p>{title}</p></Link>
      <p>{topic}</p>
      <Link to={`/users/${author}`} ><p>{author}</p></Link>
      <p>{created_at}</p>
      <p>Comment Count: {comment_count}</p>
    </li>
  );
};

export default SingleArticle;