import { observable, computed, action } from 'mobx';
import decode from 'jwt-decode';
import axios from 'axios';

import { authBase } from 'config/main';

class AuthStore {

  @observable user = null;
  @observable fetching = true
  @observable token = null;

  storageKey = 'jwt';

  constructor(){
    this.getToken();

    if (this.token === null){
      this.fetching = false;
    } else {
      this.validateToken();
    }

  }

  @computed 
  get isLoggedIn(){
    return !this.fetching && this.user !== null;
  }

  @action
  login(token){
    this.user = decode(token);
    this.setToken(token);
  }

  @action
  logout(){
    this.user = null;
    this.removeToken();
    this.fetching = false;
  }

  getToken(){
    this.token = localStorage.getItem(this.storageKey) || null;
  }

  setToken(token){
    this.token = token;
    localStorage.setItem(this.storageKey, token);
  }

  removeToken(){
    this.token = null;
    localStorage.removeItem(this.storageKey);
  }

  @action
  validateToken(){

    let url = `${authBase}/validateToken`;
    let options = {
      headers: {
        'x-access-token': this.token
      },
      method: 'post'
    };

    axios(url, options)
      .then(({data}) => {
        if (data.success){
          this.user = decode(this.token);
        } else {
          this.removeToken();
        }
        this.fetching = false;
      });
  }
  
}

let singleton = new AuthStore();
export default singleton;