import React from 'react';
import { Link } from '@reach/router';

const TopicsNavBar = () => {
  return (
    <nav>
      {/* <Link to='/' className='home'>Home</Link> */}
      <Link to='/topics/football' className='football'>Football</Link>
      <Link to='/topics/coding' className='coding'>Coding</Link>
      <Link to='/topics/cooking' className='cooking'>Cooking</Link>
    </nav>
  );
};

export default TopicsNavBar;