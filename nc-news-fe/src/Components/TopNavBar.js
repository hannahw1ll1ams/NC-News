import React from 'react';
import { Link } from '@reach/router';


const TopNavBar = () => {
  return (
    <nav>
      <Link to='/'>NC</Link>
      <Link to='/News'>News</Link>
    </nav>
  );
};

export default TopNavBar;