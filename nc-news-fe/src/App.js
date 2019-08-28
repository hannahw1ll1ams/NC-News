import React, { Component } from 'react';
import Header from './Components/Header'
import './App.css';
import TopNavBar from './Components/TopNavBar';
import TopicsNavBar from './Components/TopicsNavBar';
import ArticleList from './Components/ArticleList';
import { Router } from '@reach/router';
import SelectedArticle from './Components/SelectedArticle'
import CommentsForArticle from './Components/CommentsForArticle'
import UserByUsernamePage from './Components/UserByUsernamePage'


class App extends Component {
  state = {
    loggedInUser: 'grumpy19'
  }
  render() {
    return (
      <div className="App">
        <TopNavBar className='TopNavBar' loggedInUser={this.state.loggedInUser} />
        <Header className='Header' />
        <TopicsNavBar className='TopicsNavBar' />
        <Router>
          <Homepage path='/' />
          <ArticlesByTopicList path='/:topic' />
          <SelectedArticleByID path='/articles/:article_id' />
          <CommentsBySelectedArticle path='/:article_id/comments' loggedInUser={this.state.loggedInUser} />
          <UserbyUsername path='/users/:username' />
          <ArticlesByUserList path='/articles/user/:username' />
        </Router>
      </div>
    );
  }
}

const Homepage = () => {
  return (
    <div>
      <p>THESE ARE ALL THE ARTICLES!</p>
      <ArticleList />
    </div>
  )
}

const ArticlesByTopicList = ({ topic }) => {
  return (
    <div>
      <p>All Articles for {topic}</p>
      <ArticleList topic={topic} />
    </div>
  )
}

const SelectedArticleByID = ({ article_id }) => {
  return (
    <div>
      <ArticleList />
      <SelectedArticle id={article_id} />
    </div>
  )
}

const CommentsBySelectedArticle = ({ article_id, loggedInUser }) => {
  return (
    <div>
      <SelectedArticle id={article_id} />
      <CommentsForArticle id={article_id} loggedInUser={loggedInUser} />
    </div>
  )
}

const UserbyUsername = ({ username }) => {
  return (
    <UserByUsernamePage username={username} />
  )
}

const ArticlesByUserList = ({ username }) => {
  console.log(username, "<--- user")
  return (
    <ArticleList author={username} />
  )
}

export default App;


