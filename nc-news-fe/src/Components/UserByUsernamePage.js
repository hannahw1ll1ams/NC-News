import React, { Component } from 'react';
import * as api from './api';
import { Link } from '@reach/router';


class UserByUsernamePage extends Component {
  state = {
    user: null,
    isLoading: true
  }

  componentDidMount() {
    this.fetchUserbyUsername();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('updateeeeeee!!')
    if (prevProps.username !== this.props.username) {
      this.fetchUserbyUsername();
    }
  }

  fetchUserbyUsername = () => {
    const { username } = this.props;
    // console.log(username)
    api.getUser(username).then((user) => {
      this.setState({ user, isLoading: false })
    })
  }
  render() {
    const { user, isLoading } = this.state;
    if (isLoading) return <p>Loading...</p>
    const { username, avatar_url, name } = user;
    return (
      <div>
        <p>INTRODUCING {name}!</p>
        <p>Username: {username}</p>
        <img src={avatar_url} alt={name} />
        <Link to={`/articles/user/${username}`}><p>For all articles by {name}</p></Link>
      </div>
    );
  }
}

export default UserByUsernamePage;