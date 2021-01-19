import React from 'react';
import {Link} from 'react-router-dom';

import LanguageList from '../Languagee/LanguageList';

import '../../scss/dist/book.css';

const Book = ({book}) => {

  let langElement;
  let photoString = book.cover_i > 0 ? "http://covers.openlibrary.org/b/id/" + book.cover_i + "-M.jpg" : "http://via.placeholder.com/300x400";

  let publishYear = book.publish_year ? Math.min.apply(null, book.publish_year) : "Unknown";
  let authorString = book.author_name ? book.author_name : "Unknown";
  let authorId = "unknown";

  if(book.author_key) {
      authorId = book.author_key[0];
  }

  book.language ?
    langElement = <LanguageList list={book.language}></LanguageList>
    : langElement = <p>There is no informations</p>

  return (
    <div className="row mb-4 book">
      <div className="col-md-5 col-lg-3">
      <Link
        to={{
          pathname: `/book${book.key}`, 
          state: { publishYear: publishYear }
        }}><img src={photoString} alt="" className="img-fluid book_image"/></Link>
      </div>
      <div className="col-md-7 col-lg-9">
      <Link
        to={{
          pathname: `/book${book.key}`, 
          state: { publishYear: publishYear }
        }}><h3 className="mb-2 book_title">{book.title}</h3></Link>
        <Link to={`/author/authors/${authorId}`}><p className="p-0 m-0 book_author"><span className="font-weight-bold">Author:</span> {authorString}</p></Link>
        <p className="p-0 m-0 book_text"><span className="font-weight-bold">Publish year:</span> {publishYear}</p>
        <span className="p-0 book_text"><p className="font-weight-bold m-0">Avaiable language(s):</p>
        {langElement}
        </span>
      </div>
    </div>
  );
}

export default Book;