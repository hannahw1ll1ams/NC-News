import React from 'react';
import { Link } from '@reach/router';
// import deleteCommentByClick from './DeleteCommentButton'


const CommentCard = ({ id, author, body, created_at, loggedInUser, deleteCommentByClick }) => {
  return (
    <div>
      <li key={id}>
        <Link to={`/users/${author}`} ><p>{author}</p></Link>
        <p>{body}</p>
        <p>{created_at}</p>
        {/* <DeleteCommentButton loggedInUser={loggedInUser} /> */}
        <button onClick={() => { deleteCommentByClick(id) }} type='submit'>Delete</button>
      </li>
    </div>
  );
};

export default CommentCard;