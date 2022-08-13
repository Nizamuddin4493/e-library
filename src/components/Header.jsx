import React from 'react';
import { Link } from 'react-router-dom';
import UserIcon from './images/user.png';

const Header = () => (
  <>
    <div className="header">
      <h1>Book Store CMS</h1>
      <ul className="nav">
        <li><Link to="/" className="links">Books</Link></li>
        <li><Link to="/Categories" className="links">Categories</Link></li>
      </ul>
      <img src={UserIcon} alt="User Icon" />
    </div>
  </>
);

export default Header;
