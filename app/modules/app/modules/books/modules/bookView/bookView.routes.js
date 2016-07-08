import BookView from './BookView';

import requiredAuth from 'shared/requiredAuth';

export default {
  path: '/books/:id',
  component: requiredAuth(BookView, {role: 'admin'})
}