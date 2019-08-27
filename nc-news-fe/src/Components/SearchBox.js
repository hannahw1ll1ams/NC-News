import React, { Component } from 'react';
import * as api from './api';
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
  //   async event => {
  //     const newInvoice = await this.handleSubmit
  //     navigate(`/invoices/${newInvoice.id}`)
  //   }
  // }


  componentDidMount() {
    this.fetchUserbyUsername();
  }

  fetchUserbyUsername = () => {
    const { username } = this.state;
    api.getUser(username).then((username) => {
      this.setState({ username, isLoading: false })
    })
  }

  render() {
    const { isLoading } = this.state
    if (isLoading) return <p>Loading...</p>
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Find a user" onChange={this.handleChange} />
          <button type='submit'>Search</button>
        </form>

        {/* <li>
          <p>{username}</p>
          <p>{name}</p>
          <img src={avatar_url} alt={name} />
        </li> */}
      </div >
    );
  }
}

export default SearchBox;