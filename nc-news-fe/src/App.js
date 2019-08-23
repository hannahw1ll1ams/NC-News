import React from 'react';
import Header from './Components/Header'
import './App.css';
import TopNavBar from './Components/TopNavBar';
import TopicsNavBar from './Components/TopicsNavBar';
import ArticleList from './Components/ArticleList';
import { Router } from '@reach/router';


function App() {
  return (
    <div className="App">
      <TopNavBar className='TopNavBar' />
      <Header className='Header' />
      <TopicsNavBar className='TopicsNavBar' />
      <Router>
        <Homepage path='/' />
        <ArticleByTopicList path='/articles?topic=:topic' />
      </Router>
    </div>
  );
}

const Homepage = () => {
  return (
    <div>
      <ArticleList />
    </div>
  )
}

const ArticleByTopicList = ({ topic }) => {
  return (
    <div>
      <p>All Articles for {topic}</p>
      <ArticleList topic={topic} />
    </div>
  )
}

export default App;





// function App() {
//   return (
//     <div className="App">
//       <TopNavBar className='TopNavBar' />
//       <Header className='Header' />
//       <TopicsNavBar className='TopicsNavBar' />
//       <ArticleList />
//     </div>
//   );
// }