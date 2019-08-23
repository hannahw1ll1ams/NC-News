import React, { Component } from 'react';
import * as api from './api';
import SingleArticle from './SingleArticle';


class ArticleList extends Component {
  state = {
    articles: null,
    isLoading: true,
    error: null
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    console.log(this.props)
    const { topic } = this.props
    console.log(topic)
    api.getArticles(topic).then((articles) => {
      this.setState({ articles, isLoading: false })
    })
  }

  render() {
    const { isLoading, articles } = this.state;
    if (isLoading) return <p>Loading...</p>
    return (
      <ul>
        {articles.map(article => {
          const { article_id, title } = article;
          return <SingleArticle key={article_id} id={article_id} title={title} />
        })}
      </ul>
    );
  }
}

export default ArticleList;