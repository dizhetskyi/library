import Books from './Books';

import view from './modules/bookView/bookView.routes';
import requiredAuth from 'shared/requiredAuth';

export default {
  path: '/books',
  indexRoute: {
    component: Books
  },
  onEnter: requiredAuth(),
  childRoutes: [
    view
  ]
}