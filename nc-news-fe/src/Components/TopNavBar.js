import React from 'react';
import { Link } from '@reach/router';
import SearchBox from './SearchBox'


const TopNavBar = () => {
  return (
    <nav>
      {/* <Link to='/'>NC</Link> */}
      <p>NC</p>
      <Link to='/'>News</Link>
      <SearchBox />
    </nav>
  );
};

export default TopNavBar;