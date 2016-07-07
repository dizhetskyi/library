import React from 'react';
import { Link } from 'react-router';

const List = ({books}) => (
  <div className="books--list">
    {books.map(book => (
      <div className="books--book" key={book._id}>
        <div className="books--book-title">
          <Link to={`/books/${book._id}`}>{book.title || 'No title'}</Link>
        </div>
        <div className="books--book-description">{book.description}</div>
      </div>
    ))}
  </div>
)

export default List;