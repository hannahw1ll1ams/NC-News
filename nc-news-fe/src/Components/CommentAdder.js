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
    return (
      <div>
        <button onClick={() => { this.handleClick() }} disabled={this.state.isAddingComment}>ADD COMMENT</button>
        {this.state.isAddingComment && <CommentCreator postNewComment={this.props.postNewComment} />}
      </div >
    );
  }
};

export default CommentAdder;