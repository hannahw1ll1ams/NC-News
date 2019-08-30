import React from 'react';
import { Link } from '@reach/router';
import SearchBox from './SearchBox'


const TopNavBar = ({ loggedInUser }) => {
  return (
    <nav>
      {/* <p>Logged in as: {loggedInUser}</p> */}
      <Link to='/'>News</Link>
      <SearchBox />
    </nav>
  );
};

export default TopNavBar;