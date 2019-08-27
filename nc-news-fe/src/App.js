import React from 'react';
import Header from './Components/Header'
import './App.css';
import TopNavBar from './Components/TopNavBar';
import TopicsNavBar from './Components/TopicsNavBar';
import ArticleList from './Components/ArticleList';
import { Router } from '@reach/router';
import SelectedArticle from './Components/SelectedArticle'
import CommentsForArticle from './Components/CommentsForArticle'
import UserByUsernamePage from './Components/UserByUsernamePage'


function App() {
  return (
    <div className="App">
      <TopNavBar className='TopNavBar' />
      <Header className='Header' />
      <TopicsNavBar className='TopicsNavBar' />
      <Router>
        <Homepage path='/' />
        <ArticlesByTopicList path='/:topic' />
        <SelectedArticleByID path='/articles/:article_id' />
        <CommentsBySelectedArticle path='/:article_id/comments' />
        <UserbyUsername path='/user/:username' />
      </Router>
    </div>
  );
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

const CommentsBySelectedArticle = ({ article_id }) => {
  return (
    <div>
      <SelectedArticle id={article_id} />
      <CommentsForArticle id={article_id} />
    </div>
  )
}

const UserbyUsername = ({ username }) => {
  console.log(username)
  return (
    <UserByUsernamePage username={username} />
  )
}

export default App;


