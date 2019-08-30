import React from 'react';
import { Link } from '@reach/router';
import '../App.css';



const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>NEWS</Link>
    </div>
  );
};

export default Header;