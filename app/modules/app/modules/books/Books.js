import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { apiBase } from 'config/main';
import BooksStore from 'stores/BooksStore';
import List from './components/List';

@observer
class Books extends Component {

  componentDidMount() {
    this.fetchBooks();
  }

  render(){

    const { fetching, books } = BooksStore;

    return (
      <div className="container">

        <div className="books">

          <h2>Books</h2>
          <br/>

          {fetching && <div>fetching</div>}
          {!fetching && <List books={books} />}

        </div>

      </div>
    );
  }

  fetchBooks(){
    fetch(`${apiBase}/books`)
      .then(res => res.json())
      .then(data => {
        BooksStore.fetching = false;
        BooksStore.books = data;
      });
  }
  
}

export default Books;