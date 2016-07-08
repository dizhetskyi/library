import React, { Component } from 'react';
import { observer } from 'mobx-react';

import BooksStore from 'stores/BooksStore';
import List from './components/List';

@observer
class Books extends Component {

  componentWillMount() {
    BooksStore.fetchBooks();
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
  
}

export default Books;