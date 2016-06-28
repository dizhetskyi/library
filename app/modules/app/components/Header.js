import React, { Component } from 'react';

import { Link } from 'react-router';

const Header = () => (
  <div className="header">
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
      </ul>
    </nav>
  </div>
)

export default Header;