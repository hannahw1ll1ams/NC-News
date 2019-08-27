import React, { Component } from 'react';
import * as api from './api';
import SingleArticle from './SingleArticle';
import '../App.css';


class ArticleList extends Component {
  state = {
    articles: null,
    isLoading: true,
    error: null
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('updateeeeeee!!')
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { topic } = this.props
    console.log(topic)
    api.getArticles(topic).then(({ articles }) => {
      console.log(articles)
      this.setState({ articles, isLoading: false })
    })
  }

  render() {
    const { articles, isLoading } = this.state;

    if (isLoading) return <p>Loading...</p>
    return (<div className='articleList'>
      <ul>
        {articles.map(article => {
          const { article_id, title, topic, created_at, author, votes } = article;
          return <SingleArticle id={article_id} title={title} topic={topic} key={article_id} created_at={created_at} author={author} votes={votes} />
        })}
      </ul>
    </div>
    );
  }
}

export default ArticleList;