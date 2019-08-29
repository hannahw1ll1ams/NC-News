import React, { Component } from 'react';
import * as api from './api';
import SingleArticle from './SingleArticle';
import '../App.css';
import Sorter from './Sorter'


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

  fetchArticles = (sort_by, order) => {
    const { topic, author } = this.props
    console.log(topic, "<---topic")
    // console.log(username, "<---username")
    // console.log(sort_by, "<---sort_by")
    // console.log(order, "<---order")

    api.getArticles(topic, author, sort_by, order).then(({ articles }) => {
      // console.log(articles)
      this.setState({ articles, isLoading: false })
    })
  }

  render() {
    const { articles, isLoading } = this.state;
    const articles_topic = this.props.topic;
    const selected_article_id = this.props.article_id;

    if (isLoading) return <p>Loading...</p>
    return (<div className='articleList'>
      <Sorter fetchArticles={this.fetchArticles} />
      <ul>
        {articles.map(article => {
          const { article_id, title, topic, created_at, author, votes, comment_count } = article;
          return <SingleArticle id={article_id} title={title} topic={topic} key={article_id} created_at={created_at} author={author} votes={votes} comment_count={comment_count} articles_topic={articles_topic} selected_article_id={selected_article_id} />
        })}
      </ul>
    </div>
    );
  }
}

export default ArticleList;