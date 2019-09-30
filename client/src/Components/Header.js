import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <>
      <Link to="/"><h1>Newspaper Name</h1></Link>
      <Link to="/"><h3>Articles</h3></Link>
      <Link to="/admin"><h3>Admin</h3></Link>
    </>
)

export default Header;
