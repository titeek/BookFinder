import React from 'react';
import BookFromTag from './BookFromTag';

const BookFromTagList = (props) => {

  const bookList = props.list.map(book => (
    <BookFromTag key={book.key} book={book}/>));

  return (
    <div>
      {bookList}
    </div>
  );
}

export default BookFromTagList;