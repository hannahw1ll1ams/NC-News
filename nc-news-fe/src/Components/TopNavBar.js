import React from 'react';
import { Link } from '@reach/router';
import SearchBox from './SearchBox'
import Logo from '../images/north-coders-logo.png'


const TopNavBar = ({ loggedInUser }) => {
  return (
    <nav>
      <img class='northcoder-logo' src={Logo} alt='NorthCoders Logo' />
      <p>NC</p>
      <p>Logged in as: {loggedInUser}</p>
      <Link to='/'>News</Link>
      <SearchBox />
    </nav>
  );
};

export default TopNavBar;