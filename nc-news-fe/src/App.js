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
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        <TopNavBar className='TopNavBar' loggedInUser={loggedInUser} />
        <Header className='Header' />
        <TopicsNavBar className='TopicsNavBar' />
        <Router>
          <Homepage path='/' loggedInUser={loggedInUser} />
          <ArticlesByTopicList path='/:topic' loggedInUser={loggedInUser} />
          <SelectedArticleByID path='/articles/:article_id' loggedInUser={loggedInUser} />
          <CommentsBySelectedArticle path='/:article_id/comments' loggedInUser={loggedInUser} />
          <UserbyUsername path='/users/:username' />
          <ArticlesByUserList path='/articles/user/:username' loggedInUser={loggedInUser} />
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

const SelectedArticleByID = ({ article_id, loggedInUser }) => {
  return (
    <div>
      <ArticleList />
      <SelectedArticle id={article_id} loggedInUser={loggedInUser} />
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
  return (
    <ArticleList author={username} />
  )
}

export default App;


