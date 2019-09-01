import React, { Component } from 'react';
import { navigate } from "@reach/router"
// import ReactLoading from 'react-loading';


class SearchBox extends Component {
  state = {
    username: "",
    isLoading: true
  }
  handleChange = (event) => {
    this.setState({ username: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    event.target.user_body.value = "";
    const { username } = this.state;
    navigate(`/users/${username}`)
    this.setState({ username: "" })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="user_body" placeholder="Find a user" onChange={this.handleChange} required />
          <button type='submit'>Search</button>
        </form>
      </div >
    );
  }
}

export default SearchBox;