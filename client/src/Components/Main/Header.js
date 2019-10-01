import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => (
  <>
    <div className="container">
      <div>
      <Link to="/"><h1 className="header">Newspaper Name</h1></Link>
      </div>
      <div className="buttons">
      <Link to="/"><h3 className="header-menu">Articles</h3></Link>
      <Link to="/admin" className="header-menu"><h3>Admin</h3></Link>
      </div>
    </div>
  </>
)

export default Header;
