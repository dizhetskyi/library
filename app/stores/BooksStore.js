import { observable, action } from 'mobx';
import axios from 'axios';

import { apiBase } from 'config/main';

class BooksStore {

  @observable books = [];
  @observable fetching = true;

  @action
  fetchBooks() {
    axios(`${apiBase}/books`)
      .then( ({data: books}) => {
        this.books = books;
        this.fetching = false;
      })
  }
  
}

let singleton = new BooksStore();
export default singleton;