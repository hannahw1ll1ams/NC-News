import React, { Component } from 'react';
import './App.css';
import TopicsNavBar from './Components/TopicsNavBar';
import { Router } from '@reach/router';
import ErrorPage from './Components/ErrorPage'
import Homepage from './Views/Homepage'
import ArticlesByTopicList from './Views/ArticlesByTopicList'
import SelectedArticleByID from './Views/SelectedArticleByID'
import CommentsBySelectedArticle from './Views/CommentsBySelectedArticle'
import UserByUsername from './Views/UserByUsername'
import ArticlesByUserList from './Views/ArticlesByUserList'

class App extends Component {
  state = {
    loggedInUser: 'grumpy19'
  }
  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        <TopicsNavBar loggedInUser={loggedInUser} />
        <Router>
          <Homepage path='/' loggedInUser={loggedInUser} />
          <ArticlesByTopicList path='/topics/:topic' loggedInUser={loggedInUser} />
          <SelectedArticleByID path='/:topic/articles/:article_id' loggedInUser={loggedInUser} />
          <SelectedArticleByID path='/articles/:article_id' loggedInUser={loggedInUser} />
          <CommentsBySelectedArticle path='/articles/:article_id/comments' loggedInUser={loggedInUser} />
          <UserByUsername path='/users/:username' />
          <ArticlesByUserList path='/articles/user/:username' loggedInUser={loggedInUser} />
          <ErrorPage default error={{ status: 404, msg: 'Page Not Found' }} />
        </Router>
      </div>
    );
  }
}
export default App;


