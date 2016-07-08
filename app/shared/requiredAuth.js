import React from 'react';

import AuthStore from 'stores/AuthStore';
import { browserHistory } from 'react-router';

function requiresAuth(Component, options) {  
  class AuthenticatedComponent extends React.Component {
    
    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect() {
      const { role = 'user', redirectTo = '/signin'} = options

      if (!AuthStore.isLoggedIn){
        browserHistory.push(redirectTo);
      } else {
        if (AuthStore.user.role !== role){
          browserHistory.push(redirectTo);
        }
      }
    }

    render() {
      return (
        <div className="authenticated">
          { AuthStore.isLoggedIn ? <Component {...this.props} /> : null }
        </div>
      );
    }
  }

  return AuthenticatedComponent;
}

export default requiresAuth;