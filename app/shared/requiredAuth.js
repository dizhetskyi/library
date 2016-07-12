import AuthStore from 'stores/AuthStore';
import toastr from 'toastr';

const requiredAuth = ({redirectTo = '/signin', role} = {}) => (nextState, replace) => {
  if (!AuthStore.isLoggedIn || (role && !AuthStore.checkRole(role))){

    toastr.error('No', 'Yes');

    replace({
      pathname: redirectTo,
      state: {
        nextPathname: nextState.location.pathname
      }
    })
  }
}

export default requiredAuth;