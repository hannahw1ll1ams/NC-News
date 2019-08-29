import React, { Component } from 'react';
import * as api from './api';
import '../App.css';
import { Link } from '@reach/router';
import ArticleVoteUpdater from './ArticleVoteUpdater'
import ErrorPage from './ErrorPage'


class SelectedArticle extends Component {
  state = {
    article: null,
    isLoading: true,
    error: null
  }

  componentDidMount() {
    this.fetchSingleArticle()
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('updateeeeeee!!')
    if (prevProps.id !== this.props.id) {
      this.fetchSingleArticle();
    }
  }

  fetchSingleArticle = () => {
    const { id } = this.props
    api.getSingleArticle(id).then(({ article }) => {
      this.setState({ article, isLoading: false })
    })
      .catch(error => {
        console.dir(error)
        this.setState({
          error: {
            msg: error.response.data.msg,
            status: error.response.status
          }, isLoading: false
        })
      })
  }

  render() {
    const { article, isLoading, error } = this.state
    const { loggedInUser } = this.props;
    if (isLoading) return <p>Loading...</p>
    if (error) return <ErrorPage error={error} />
    const { title, body, article_id, topic, author, votes, comment_count } = article;

    return (
      <div className='selectedArticle'>
        <p>THIS IS YOUR SELECTED ARTICLE</p>
        <p>{title}</p>
        <Link to={`/users/${author}`}><p>{author}</p>
        </Link>
        <p>{topic}</p>
        <p>{body}</p>
        {author !== loggedInUser && (
          <ArticleVoteUpdater article_id={article_id} votes={votes} />
        )}
        <Link to={`/${article_id}/comments`}><p>Comments : {comment_count}</p></Link>
      </div>
    );
  }
}

export default SelectedArticle;