import React from 'react';
import { Link } from '@reach/router';
import SearchBox from './SearchBox'


const TopNavBar = ({ loggedInUser }) => {
  return (
    <nav>
      <p>NC</p>
      <p>Logged in as: {loggedInUser}</p>
      <Link to='/'>News</Link>
      <SearchBox />
      {/* path='/users/:username' */}
    </nav>
  );
};

export default TopNavBar;