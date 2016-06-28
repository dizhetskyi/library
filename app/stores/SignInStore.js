import {observable} from 'mobx'

var signInForm = observable({
  login: '',
  password: ''
})

export {signInForm};
