import React from 'react';
import { Link } from '@reach/router';
// import deleteCommentByClick from './DeleteCommentButton'
import VoteUpdater from './VoteUpdater'

const CommentCard = ({ votes, id, author, body, created_at, loggedInUser, deleteCommentByClick }) => {
  return (
    <div>
      <li key={id}>
        <Link to={`/users/${author}`} ><p>{author}</p></Link>
        <p>{body}</p>
        <p>{created_at}</p>
        {author === loggedInUser &&
          (<button onClick={() => { deleteCommentByClick(id) }} type='submit'>Delete</button>)
        }
        {author !== loggedInUser && (
          <VoteUpdater comment_id={id} votes={votes} />
        )}
      </li>
    </div>
  );
};

export default CommentCard;