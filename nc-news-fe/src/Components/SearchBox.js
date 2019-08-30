import React, { Component } from 'react';
// import * as api from './api';
import { navigate } from "@reach/router"



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
    this.setState({ username: this.state.input })
    navigate(`/users/${this.state.username}`)
  }

  render() {
    // const { isLoading } = this.state
    // if (isLoading) return <p>Loading...</p>
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Find a user" onChange={this.handleChange} required />
          <button type='submit'>Search</button>
        </form>
      </div >
    );
  }
}

export default SearchBox;