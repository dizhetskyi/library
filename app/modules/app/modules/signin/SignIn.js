import React, { Component } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

import {signInForm} from 'stores/SignInStore';
import InputField from 'shared/form/InputField';


@observer class SignIn extends Component {

  onSubmit = (e) => {
    e.preventDefault();
    console.log(toJS(signInForm))
  }

  onChange = (key, value) => {
    this.updateProperty(key, value)
  }

  updateProperty (key, value) {
    signInForm[key] = value
  }

  render(){
    return (
      <div className="sign-in">
        <form onSubmit={this.onSubmit}>
          <InputField name="login" value={signInForm.login} onChange={this.onChange} />
          <br/>
          <InputField name="password" type="password" value={signInForm.password} onChange={this.onChange} />
          <br/>
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

export default SignIn;