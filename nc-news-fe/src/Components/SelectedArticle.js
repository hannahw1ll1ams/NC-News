import React, { Component } from 'react';
import * as api from './api';
import '../App.css';
import { Link } from '@reach/router';


class SelectedArticle extends Component {
  state = {
    article: null,
    isLoading: true
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
    console.log(id);
    api.getSingleArticle(id).then(({ article }) => {
      // console.log(article)
      this.setState({ article, isLoading: false })
    })
  }

  render() {
    console.log(this.state)
    const { article, isLoading } = this.state
    if (isLoading) return <p>Loading...</p>

    // const { isLoading, article: { title } } = this.state;
    const { title, body, article_id } = article;
    return (
      <div className='selectedArticle'>
        <p>THIS IS YOUR SELECTED ARTICLE</p>
        <p>{title}</p>
        <p>{body}</p>
        <Link to={`/${article_id}/comments`}><p>Comments</p></Link>

        {/* <p>{topic}</p>
        <p>{author}</p> */}
      </div>
    );
  }
}

export default SelectedArticle;