import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';

import { apiBase } from 'config/main';
import Store from './store';

@observer
class BookView extends Component {

  store = new Store();

  componentDidMount() {
    const { id } = this.props.routeParams;
    this.fetchBook(id);
  }

  render(){
    return (
      <div className="container">
        {this.renderBookView()}
      </div>
    );
  }

  renderBookView(){

    const { fetching, error, book } = this.store;

    if (fetching) 
      return <div className="fetching">Fetching</div>
    
    if (error !== false) 
      return <div className="error">we have some errors, sorry. try again</div>

    return (
      <div className="book-view">
        <div className="book--title">{book.title || 'No title'}</div>        
        <div className="book--description">{book.description}</div>       
        <div className="book--cover">{book.cover && <img src={book.cover} alt=""/>}</div>
        <div className="book--tags">
          {book.tags.map(tag => (
            <div key={tag._id}><a href="">{tag.label}</a></div>
          ))}
        </div>        
        <div className="book--authors">
          {book.authors.map(author => (
            <div key={author._id}><a href="">{author.name}</a></div>
          ))}
        </div>
        <div className="book--category">{book.category}</div>        
        <div className="book--date">{book.date}</div>        
        <div className="book--current-reader">{book.current_reader}</div>
      </div>
    );
  }

  fetchBook(id){
    fetch(`${apiBase}/books/${id}`)
      .then(res => res.json())
      .then(data => {
        this.store.book = data;
        this.store.fetching = false;
      }, err => {
        this.store.error = err;
        this.store.fetching = false;
      })
  }

}

export default BookView;