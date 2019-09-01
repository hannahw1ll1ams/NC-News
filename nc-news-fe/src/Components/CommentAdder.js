import React, { Component } from 'react';
import CommentCreator from './CommentCreator'

class CommentAdder extends Component {
  state = {
    isAddingComment: false
  }

  handleClick = () => {
    this.setState({ isAddingComment: true })
  }

  render() {
    const { isAddingComment } = this.state;
    const { postNewComment } = this.props;
    return (
      <div>
        <button onClick={() => { this.handleClick() }} disabled={isAddingComment}>ADD COMMENT</button>
        {isAddingComment && <CommentCreator postNewComment={postNewComment} />}
      </div >
    );
  }
};

export default CommentAdder;