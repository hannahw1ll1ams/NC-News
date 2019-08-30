import React, { Component } from 'react';

class CommentCreator extends Component {
  state = {
    newComment: null
  }
  handleChange = (event) => {
    this.setState({ newComment: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const { newComment } = this.state;
    this.props.postNewComment(newComment)
    event.target.comment_body.value = "";
    this.setState({ newComment: "" })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            TYPE YOUR NEW COMMENT HERE:
          <input name="comment_body" onChange={this.handleChange} required />
            <button>Submit</button>
          </label>
        </form>
      </div>
    );
  }
}

export default CommentCreator;