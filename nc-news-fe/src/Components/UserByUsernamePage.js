import React, { Component } from 'react';
import * as api from '../api';
import { Link } from '@reach/router';
import ErrorPage from './ErrorPage'
import ReactLoading from 'react-loading';


class UserByUsernamePage extends Component {
  state = {
    user: null,
    isLoading: true,
    error: null
  }
  componentDidMount() {
    this.fetchUserbyUsername();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.username !== this.props.username) {
      this.fetchUserbyUsername();
    }
  }
  fetchUserbyUsername = () => {
    const { username } = this.props;
    api.getUser(username).then((user) => {
      this.setState({ user, isLoading: false })
    })
      .catch(error => {
        this.setState({
          error: {
            msg: error.response.data.msg,
            status: error.response.status
          }, isLoading: false
        })
      })
  }
  render() {
    const { user, isLoading, error } = this.state;
    if (isLoading) return (<ReactLoading type="spin" color="pink" height={667} width={375} />)
    if (error) return <ErrorPage error={error} />
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