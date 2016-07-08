import Books from './Books';

import view from './modules/bookView/bookView.routes';
import requiredAuth from 'shared/requiredAuth';

export default {
  path: '/books',
  indexRoute: {
    component: requiredAuth(Books, {role: 'user'})
  },
  childRoutes: [
    view
  ]
}