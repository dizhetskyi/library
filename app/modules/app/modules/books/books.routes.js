import Books from './Books';

import view from './modules/bookView/bookView.routes';

export default {
  path: '/books',
  indexRoute: {
    component: Books
  },
  childRoutes: [
    view
  ]
}