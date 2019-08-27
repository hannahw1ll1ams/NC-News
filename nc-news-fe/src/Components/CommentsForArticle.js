import React, { Component } from 'react';
import * as api from './api';
import CommentCard from './CommentCard'

class CommentsForArticle extends Component {
  state = {
    comments: null,
    isLoading: true
  }

  componentDidMount() {
    this.fetchCommentsForArticle()
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('updateeeeeee!!')
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

  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) return <p>Loading...</p>
    return (
      <div>
        <h2>COMMENTS</h2>
        <ul>
          {comments.map(comment => {
            const { comment_id, author, body, created_at } = comment;
            return <CommentCard id={comment_id} author={author} body={body} created_at={created_at} />
          })}
        </ul>
      </div>
    );
  }
}

export default CommentsForArticle;