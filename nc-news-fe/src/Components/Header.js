import React from 'react';
import '../css/Header.css';
import Logo from '../images/no-arrow-news-title.png'



const Header = () => {
  return (
    <div>
      <img className='NC-NEWS-TITLE' src={Logo} alt='NC-NEWS-TITLE' />
    </div>
  );
};

export default Header;