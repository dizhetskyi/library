import App from './App';
import Home from './components/Home';

import signin from './modules/signin/signin.routes';
import signup from './modules/signup/signup.routes';
import books from './modules/books/books.routes';

export default {
  path: '/',
  component: App,
  indexRoute: {
    component: Home
  },
  childRoutes: [
    signin,
    signup,
    books
  ]
}