import React from 'react';
import { Link } from '@reach/router';


const SingleArticle = ({ title, topic, created_at, author, votes, id }) => {
  return (
    <li>
      <Link to={`/articles/${id}`}><p>{title}</p></Link>
      <p>{topic}</p>
      <Link to={`users/${author}`} ><p>{author}</p></Link>
      <p>{created_at}</p>
      {/* <p>{id}</p>
      <p>{votes}</p> */}
    </li>
  );
};

export default SingleArticle;