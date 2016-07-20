import { observable, action } from 'mobx';
import axios from 'axios';

import { apiBase } from 'config/main';

class BookViewStore {

  @observable book = {};
  @observable fetching = true;
  @observable error = false;

  @action
  async fetchBook(id){
    const { data } = await axios(`${apiBase}/books/${id}`).catch(err => this.error = true);

    this.book = data;
    this.fetching = false;
  }
}

let singleton = new BookViewStore();
export default singleton;