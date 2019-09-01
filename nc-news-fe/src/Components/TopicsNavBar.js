import React, { Component } from 'react';
import { Link } from '@reach/router';
import SearchBox from './SearchBox'
import * as api from '../api';
import Header from '../Components/Header'
import '../css/TopNavBar.css';


class TopicsNavBar extends Component {
  state = {
    topics: null
  }

  componentDidMount() {
    this.fetchTopics()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topics !== this.props.topics) {
      this.fetchTopics();
    }
  }
  fetchTopics = () => {
    api.getTopics().then((topics) => {
      // console.log(topics, '<---fetchTopics')
      this.setState({ topics: topics })
    })
  }
  render() {
    const { loggedInUser } = this.props
    // const { topics } = this.state
    // console.log(topics)
    return (
      // <div>
      //   <ul>
      //     {topics.map(topic => {
      //       const { slug } = topic
      //       return (
      //         <li><Link to={`/topics/${slug}`}>{slug}</Link>
      //         </li>)
      //     })}
      //   </ul>
      // </div>
      <nav>
        <div className='TopBarContainer'>
          <p className='Username'>Logged in as: {loggedInUser}</p>
          <SearchBox className='searchBox' />
          <span><Header className='Header' /></span>
          <div className='topics'>
            <Link to='/' className='all'>ALL</Link>
            <Link to='/topics/football' className='football'>FOOTBALL</Link>
            <Link to='/topics/coding' className='coding'>CODING</Link>
            <Link to='/topics/cooking' className='cooking'>COOKING</Link>
          </div>
        </div>
      </nav>

    );
  }
}

export default TopicsNavBar;


// const TopicsNavBar = ({ loggedInUser }) => {
//   return (
//     <nav>
//       <img class='northcoder-logo' src={Logo} alt='NorthCoders Logo' />
//       <p>Logged in as: {loggedInUser}</p>
//       <SearchBox />
//       <Link to='/topics/football' className='football'>Football</Link>
//       <Link to='/topics/coding' className='coding'>Coding</Link>
//       <Link to='/topics/cooking' className='cooking'>Cooking</Link>
//     </nav>
//   );
// };