import React from 'react';
import {Link} from 'react-router-dom';

import Language from './Language';
import LanguageList from './LanguageList';

const Book = ({author="Brak autora", book}) => {

  let langList;
  let photoString = "http://covers.openlibrary.org/b/id/";
  photoString += book.cover_i > 0 ? book.cover_i : 0;
  photoString += "-M.jpg";

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

  console.log(book);
  return (
    <div className="row mb-4">
      <div className="col-md-4 col-lg-2">
        <Link to={`book${book.key}/${publishYear}`}><img src={photoString} alt="" className="img-fluid"/></Link>
      </div>
      <div className="col-md-8 col-lg-10">
        <h3 className="mb-2"><Link to={`book${book.key}/${publishYear}`}>{book.title}</Link></h3>
        <Link to={`/author/authors/${authorId}`}><p className="p-0 m-0"><span className="font-weight-bold">Author:</span> {authorString}</p></Link>
        <p className="p-0 m-0"><span className="font-weight-bold">Publish year:</span> {publishYear}</p>
        <span className="p-0 font-weight-bold">Languages:</span>
        <LanguageList list={langList}></LanguageList>
      </div>
    </div>
  );
}

export default Book;