import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router';
import classnames from 'classnames';
import { observer } from 'mobx-react';

import AuthStore from 'stores/AuthStore';

const Header = observer(({router}) => (

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
          <ActiveNavItem to="/" label="Home" onlyIndex={true} />
          <ActiveNavItem to="/books" label="Browse" />
        </ul>
        <AuthBox router={router} />
      </div>
    </div>
  </nav>
))

const AuthBox = observer(({router}) => (
  <ul className="nav navbar-nav navbar-right">
    {!AuthStore.isLoggedIn && 
      <ActiveNavItem to="/signin" label="Sign In" />}

    {!AuthStore.isLoggedIn && 
      <ActiveNavItem to="/signup" label="Sign Up" />}

    {AuthStore.isLoggedIn && 
      <li>
        <a 
          href="" 
          onClick={(e) => {
            e.preventDefault();
            AuthStore.logout();
          }}
        >
          logout ({AuthStore.user.login})
        </a>
      </li>
    }
  </ul>
))

const ActiveNavItem = withRouter(({to, label, router, onlyIndex = false}) => (
  <li className={classnames({active: router.isActive(to, onlyIndex)})}>
    <Link to={to}>{label}</Link>
  </li>
))

ActiveNavItem.propTypes = {
  to: PropTypes.string.isRequired
}

export default withRouter(Header);