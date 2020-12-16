import React from 'react';
import {Link} from 'react-router-dom';

import Language from './Language';
import LanguageList from './LanguageList';

import '../scss/dist/book.css';

const Book = ({author="Brak autora", book}) => {

  let langList;
  let photoString = book.cover_i ? "http://covers.openlibrary.org/b/id/" + book.cover_i + "-M.jpg" : "http://via.placeholder.com/300x400";


  let publishYear = book.publish_year ? Math.min.apply(null, book.publish_year) : "Unknown";
  let authorString = book.author_name ? book.author_name : "Unknown";
  let authorId = "unknown";

  if(book.author_key) {
      authorId = book.author_key[0];
  }

  book.language ?
    langList = book.language.slice(0, 100).map(lang => (
      <Language key={lang} lang={lang}/>
    )) : langList = <Language key="nokey" lang="There is no informations"/>;

  
  return (
    <div className="row mb-4 book">
      <div className="col-md-4 col-lg-2">
        <Link to={`book${book.key}/${publishYear}`}><img src={photoString} alt="" className="img-fluid book_image"/></Link>
      </div>
      <div className="col-md-8 col-lg-10">
        <Link to={`book${book.key}/${publishYear}`}><h3 className="mb-2 book_title">{book.title}</h3></Link>
        <Link to={`/author/authors/${authorId}`}><p className="p-0 m-0 book_author"><span className="font-weight-bold">Author:</span> {authorString}</p></Link>
        <p className="p-0 m-0 book_text"><span className="font-weight-bold">Publish year:</span> {publishYear}</p>
        <span className="p-0 book_text"><p className="font-weight-bold m-0">Avaiable language(s):</p>
        <LanguageList list={langList}></LanguageList>
        </span>
      </div>
    </div>
  );
}

export default Book;