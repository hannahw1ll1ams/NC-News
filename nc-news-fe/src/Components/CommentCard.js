import React from 'react';
import { Link } from '@reach/router';


const CommentCard = ({ id, author, body, created_at }) => {
  return (
    <div>
      <li>
        <Link to={`/users/${author}`} ><p>{author}</p></Link>
        <p>{created_at}</p>
        <p>{body}</p>
        <p>{created_at}</p>
      </li>
    </div>
  );
};

export default CommentCard;