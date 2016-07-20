import AuthStore from 'stores/AuthStore';
import toastr from 'toastr';

const requiredAuth = ({redirectTo = '/signin', role} = {}) => (nextState, replace) => {

  if (AuthStore.fetching) return;

  if (!AuthStore.isLoggedIn || (role && !AuthStore.checkRole(role))){

    toastr.error('You have no permissions to perform this action', 'Access denied');

    replace({
      pathname: redirectTo,
      state: {
        nextPathname: nextState.location.pathname
      }
    })
  }

}

export default requiredAuth;