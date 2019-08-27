import React from 'react';
import { Link } from '@reach/router';
import SearchBox from './SearchBox'


const TopNavBar = ({ updateSearchTerm }) => {
  return (
    <nav>
      <p>NC</p>
      <Link to='/'>News</Link>
      <SearchBox />
      {/* path='/users/:username' */}
    </nav>
  );
};

export default TopNavBar;