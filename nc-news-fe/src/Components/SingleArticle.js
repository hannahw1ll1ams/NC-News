import React from 'react';
import { Link } from '@reach/router';


const SingleArticle = ({ title, topic, created_at, author, votes, id }) => {
  return (
    <li>
      <Link to={`/articles/${id}`}><p>{title}</p></Link>
      <p>{title}</p>
      <p>{topic}</p>
      <p>{author}</p>
      <p>{id}</p>
      {/* <p>{created_at}</p>
      <p>{votes}</p> */}
    </li>
  );
};

export default SingleArticle;