import 'toastr/toastr.scss';
import './scss/main.scss';

import 'jquery';
import toastr from 'toastr';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import axios from 'axios';
  
import routes from './modules/app/app.routes';

toastr.options = Object.assign({}, toastr.options, {
  newestOnTop: true,
  positionClass: "toast-bottom-right",
  preventDuplicates: true
})

window.addEventListener('unhandledrejection', event => {
  event.preventDefault();
});

axios.interceptors.response.use(function (response) {  
  return response;
}, function (err) {
  
  if (err.status === 401){
    toastr.error('You need to be authorized to perform this action', 'Error');
    browserHistory.push('/signin');
  }

  return Promise.reject(err);
});

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);