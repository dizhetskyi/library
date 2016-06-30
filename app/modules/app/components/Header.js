import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import classnames from 'classnames';

const Header = ({router}) => (

  <nav className="navbar navbar-default" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link className="navbar-brand" to="/">Corevalue Library</Link>
      </div>
  
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav">          
          <li className={classnames({active: router.isActive('/', true)})}><Link to="/">Home</Link></li>          
          <li className={classnames({active: router.isActive('/books')})}><Link to="/books">Browse</Link></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">          
          <li className={classnames({active: router.isActive('/signin')})}><Link to="/signin">Sign In</Link></li>
        </ul>
      </div>
    </div>
  </nav>
)

export default withRouter(Header);