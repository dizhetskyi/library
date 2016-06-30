import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';

import Form from 'stores/Form';
import InputField from 'shared/form/InputField';

@observer 
class SignIn extends Component {

  componentWillMount() {
    this.form = new Form([
      {name: 'login', value: '', label: 'Login'},
      {name: 'password', value: '', label: 'Password'}
    ]);
  }
  
  render(){
    return (
      <div className="container">
        <div className="sign-in">
          <div className="row">
          
            <form className="col-sm-4 col-sm-push-4" onSubmit={this.onSubmit} autocomplete="off">

              <h2>Sign in</h2>
              <br/>
              <InputField 
                input={this.form.fields.login} 
                onChange={this.form.setField} 
              />
              <InputField 
                input={this.form.fields.password} 
                onChange={this.form.setField} 
                type="password"
              />
              <button className="btn btn-primary" type="submit" disabled={this.form.pristine || !this.form.valid}>Sign In</button>
              
            </form>

          </div>

        </div>

      </div>
    );
  }
  
  @autobind
  onSubmit(e) {
    e.preventDefault();
    console.log(this.form.serialize())
  }

}

export default SignIn;