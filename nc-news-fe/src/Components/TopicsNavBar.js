import React from 'react';
import { Link } from '@reach/router';
import Logo from '../images/north-coders-logo.png'

const TopicsNavBar = ({ loggedInUser }) => {
  return (
    <nav>
      <img class='northcoder-logo' src={Logo} alt='NorthCoders Logo' />
      <p>Logged in as: {loggedInUser}</p>
      <Link to='/topics/football' className='football'>Football</Link>
      <Link to='/topics/coding' className='coding'>Coding</Link>
      <Link to='/topics/cooking' className='cooking'>Cooking</Link>
    </nav>
  );
};

export default TopicsNavBar;