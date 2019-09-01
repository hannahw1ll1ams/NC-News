import React, { Component } from 'react';
import * as api from '../api';
import ArticleCard from './ArticleCard';
import '../App.css';
import Sorter from './Sorter'
import ErrorPage from './ErrorPage'
import ReactLoading from 'react-loading';


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
    console.log("updatee")
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }

  fetchArticles = (sort_by, order) => {
    const { topic, author } = this.props
    api.getArticles(topic, author, sort_by, order).then(({ articles }) => {
      this.setState({ articles, isLoading: false })
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
    const { articles, isLoading, error } = this.state;
    const articles_topic = this.props.topic;
    const selected_article_id = this.props.article_id;
    if (isLoading) return (<ReactLoading type="spin" color="pink" height={667} width={375} />)
    if (error) return <ErrorPage error={error} />

    return (<div>
      <Sorter fetchArticles={this.fetchArticles} />
      <ul>
        {articles.map(article => {
          const { article_id, title, topic, created_at, author, votes, comment_count } = article;
          return <ArticleCard id={article_id} title={title} topic={topic} key={article_id} created_at={created_at} author={author} votes={votes} comment_count={comment_count} articles_topic={articles_topic} selected_article_id={selected_article_id} />
        })}
      </ul>
    </div>
    );
  }
}

export default ArticleList;