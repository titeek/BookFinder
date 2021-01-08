import React from 'react';
import Book from './Book';

const BookList = (props) => {

  const bookList = props.list.map(book => (
    <Book key={book.key} book={book}/>));

  return (
    <div>
      {bookList}
    </div>
  );
}

export default BookList;