import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import axios from 'axios';

import { authBase } from 'config/main';
import Form from 'stores/Form';
import InputField from 'shared/form/InputField';
import AuthStore from 'stores/AuthStore';

@observer 
class SignIn extends Component {

  form = new Form([
    {name: 'login', value: '', label: 'Login'},
    {name: 'password', value: '', label: 'Password'}
  ]);

  render(){
    return (
      <div className="container">
        <div className="sign-in">
          <div className="row">
          
            <form className="col-sm-6 col-sm-push-3 col-lg-4 col-lg-push-4" onSubmit={this.onSubmit} autocomplete="off">

              <h2>Sign in</h2>
              <br/>
              <InputField 
                input={this.form.fields.login} 
              />
              <InputField 
                input={this.form.fields.password} 
                type="password"
              />
              <button 
                className="btn btn-primary" 
                type="submit" 
                disabled={this.form.pristine || !this.form.valid}
              >
                Sign In
              </button>
              
            </form>

          </div>
        </div>
      </div>
    );
  }
  
  @autobind
  onSubmit(e) {
    e.preventDefault();
    
    const { router } = this.props;
    
    let url = `${authBase}/signin`;
    let data = JSON.stringify(this.form.serialize());
    let options = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data
    }

    axios(url, options)
      .then(({data}) => {
        if (data.success){
          AuthStore.login(data.token);
        } else {
          console.log(data.message);
        }
      });

  }

}

export default SignIn;