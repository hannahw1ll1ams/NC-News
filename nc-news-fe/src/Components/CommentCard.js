import React from 'react';

const CommentCard = ({ id, author, body, created_at }) => {
  return (
    <div>
      <li>
        <p>{author}</p>
        <p>{body}</p>
        <p>{created_at}</p>
      </li>
    </div>
  );
};

export default CommentCard;