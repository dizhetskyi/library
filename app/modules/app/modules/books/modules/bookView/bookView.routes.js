import BookView from './BookView';

import requiredAuth from 'shared/requiredAuth';

export default {
  path: '/books/:id',
  component: BookView,
  onEnter: requiredAuth({role: 'admin'})
}