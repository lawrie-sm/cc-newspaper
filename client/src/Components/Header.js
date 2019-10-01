import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => (
  <>
    <div class="container">
      <div>
      <Link to="/"><h1 class="header">Newspaper Name</h1></Link>
      </div>
      <div class="buttons">
      <Link to="/"><h3 class="header">Articles</h3></Link>
      <Link to="/admin" class="header"><h3>Admin</h3></Link>
      </div>
    </div>
  </>
)

export default Header;
