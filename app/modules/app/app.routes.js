import App from './App';
import Home from './components/Home';

import signin from './modules/signin/signin.routes';

export default {
  path: '/',
  component: App,
  indexRoute: {
    component: Home
  },
  childRoutes: [
    signin
  ]
}