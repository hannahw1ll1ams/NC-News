import React from 'react';
import { Link } from '@reach/router';
// import deleteCommentByClick from './DeleteCommentButton'
import VoteUpdater from './VoteUpdater'
import formatDateAppearance from '../utils/changeDateFormat'

const CommentCard = ({ votes, id, author, body, created_at, loggedInUser, deleteCommentByClick }) => {
  return (
    <div>
      <li key={id}>
        <Link to={`/users/${author}`} ><p>{author}</p></Link>
        <p>{body}</p>
        <p>Created at: {formatDateAppearance(created_at)}</p>
        {author === loggedInUser &&
          (<button onClick={() => { deleteCommentByClick(id) }} type='submit'>Delete</button>)
        }
        {author !== loggedInUser && (
          <VoteUpdater id={id} votes={votes} item='comments' />
        )}
      </li>
    </div>
  );
};

export default CommentCard;