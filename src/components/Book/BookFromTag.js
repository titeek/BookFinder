import React from 'react';
import {Link} from 'react-router-dom';

import '../../scss/dist/book.css';

const BookFromTag = ({book}) => {

  let photoString = book.cover_id ? "http://covers.openlibrary.org/b/id/" + book.cover_id + "-M.jpg" : "http://via.placeholder.com/300x400";

  let editionCount = book.edition_count ? book.edition_count : "Unknown";
  let publishYear = book.first_publish_year ? book.first_publish_year : "Unknown";
  let authorString = book.authors.length > 0 ? book.authors[0].name : "Unknown";
  let authorId = "unknown";

  if(book.authors.length > 0) {
      authorId = book.authors[0].key;
      authorId = authorId.slice(9);
  }
  
  return (
    <div className="row mb-4 book">
      <div className="col-md-5 col-lg-3">
        <Link to={`/book${book.key}/${publishYear}`}><img src={photoString} alt="" className="img-fluid book_image"/></Link>
      </div>
      <div className="col-md-7 col-lg-9">
        <Link to={`/book${book.key}/${publishYear}`}><h3 className="mb-2 book_title">{book.title}</h3></Link>
        <Link to={`/author/authors/${authorId}`}><p className="p-0 m-0 book_author"><span className="font-weight-bold">Author:</span> {authorString}</p></Link>
        <p className="p-0 m-0 book_text"><span className="font-weight-bold">Publish year:</span> {publishYear}</p>
        <p className="p-0 m-0 book_text"><span className="font-weight-bold">Edition count:</span> {editionCount}</p>
      </div>
    </div>
  );
}

export default BookFromTag;