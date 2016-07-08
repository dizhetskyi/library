import { observable, action } from 'mobx';
import axios from 'axios';

import { apiBase } from 'config/main';

class BookViewStore {

  @observable book = {};
  @observable fetching = true;
  @observable error = false;

  @action
  fetchBook(id){
    axios(`${apiBase}/books/${id}`)
      .then(({data}) => {
        this.book = data;
        this.fetching = false;
      })
      .catch(err => {
        this.error = err;
        this.fetching = false;
      })
  }
}

let singleton = new BookViewStore();
export default singleton;