import React, { Component } from 'react';
import * as api from '../api';
import CommentCard from './CommentCard'
import CommentAdder from './CommentAdder'
import ReactLoading from 'react-loading';


class CommentsForArticle extends Component {
  state = {
    comments: null,
    isLoading: true
  }
  componentDidMount() {
    this.fetchCommentsForArticle()
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      this.fetchCommentsForArticle();
    }
  }
  fetchCommentsForArticle = () => {
    const { id } = this.props;
    api.getCommentsForArticle(id).then(({ comments }) => {
      this.setState({ comments, isLoading: false })
    })
  }
  deleteCommentByClick = (id) => {
    this.setState(({ comments }) => {
      return { comments: comments.filter(comment => comment.comment_id !== id) }
    })
    api.deleteComment(id)
  }
  postNewComment = (newComment) => {
    const { loggedInUser, id } = this.props;
    api.sendNewComment(newComment, loggedInUser, id).then((newlyPostedComment) => {
      const allComments = [newlyPostedComment, ...this.state.comments];
      this.setState({ comments: allComments })
      // this.setState((currentState) => return { comments: [newlyPostedComment, ...currentState.comments] })??
    })
  }

  render() {
    const { comments, isLoading } = this.state;
    const { loggedInUser } = this.props;
    if (isLoading) return (<ReactLoading type="spin" color="pink" height={667} width={375} />)
    return (
      <div>
        <h2>COMMENTS</h2>
        <CommentAdder postNewComment={this.postNewComment} />
        <ul>
          {comments.map(comment => {
            const { comment_id, author, body, created_at, votes } = comment;
            return <CommentCard key={comment_id} votes={votes} id={comment_id} author={author} body={body} created_at={created_at} loggedInUser={loggedInUser} deleteCommentByClick={this.deleteCommentByClick} />
          })}
        </ul>
      </div>
    );
  }
}

export default CommentsForArticle;