import React, { Component } from 'react';
import { observable, reaction } from 'mobx';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import { withRouter } from 'react-router';
import axios from 'axios';

import { authBase } from 'config/main';
import Form from 'stores/Form';
import InputField from 'shared/form/InputField';
import AuthStore from 'stores/AuthStore';

@observer 
class SignUp extends Component {
  
  form = new Form([
    {name: 'login', value: '', label: 'Login'},
    {name: 'password', value: '', label: 'Password'},
    {name: 'password_repeat', value: '', label: 'Password Repeat'}
  ]);

  constructor(){
    super();

    let { password, password_repeat} = this.form.fields;

    reaction(
      () => password.value !== password_repeat.value,
      different => {
        if (different){
          password_repeat.error.set('repeat', 'Password and Password Repeat are different');
        } else {
          password_repeat.error.delete('repeat');
        }
      }
    );

  }
  
  render(){
    const { form } = this;
    
    return (
      <div className="container">
        <div className="sign-in">
          <div className="row">
          
            <form className="col-sm-6 col-sm-push-3 col-lg-4 col-lg-push-4" onSubmit={this.onSubmit} autocomplete="off">

              <h2>Sign Up</h2>
              <br/>
              <InputField 
                input={form.fields.login} 
              />
              <InputField 
                input={form.fields.password} 
                type="password"
              />
              <InputField 
                input={form.fields.password_repeat} 
                type="password"
              />
              <button className="btn btn-primary" type="submit" disabled={form.pristine || !form.valid}>Sign Up</button>
              
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
    
    let url = `${authBase}/signup`;
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
          router.push('/signin');
        } else {
          console.log(data.message);
        }
      });
  }

}

export default withRouter(SignUp);