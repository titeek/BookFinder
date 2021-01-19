import React from 'react'
import {compose} from 'redux';
import LinkIcon from '@material-ui/icons/Link';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import WebLinkList from '../WebLink/WebLinkList';
import BookList from '../Book/BookList';

import '../../scss/dist/author.css';

import {withLoading} from '../hoc';

const BookListAndLoading = compose(withLoading)(BookList);

const AuthorDetail = (props) => {
  
  let element; 
  let photoString = "";
  let birthDate = "";
  let bio = "";
  let webLinkElement;
  let authorBooksElement;
  
  photoString = props.author.photos ? "http://covers.openlibrary.org/b/id/" + props.author.photos[0] + "-L.jpg" : "http://via.placeholder.com/300x400";

  bio = props.author.bio ? props.author.bio.value : "No more informations";
  birthDate = props.author.birth_date ? props.author.birth_date : "---"

  props.author.links ?
    webLinkElement = <WebLinkList list={props.author.links}></WebLinkList>
    : webLinkElement = <p>There is no informations</p>

  authorBooksElement = <BookListAndLoading list={props.authorBookList} isLoading={props.loading}> </BookListAndLoading>

  element = 
  <div className="row mt-3 authorDetails">
      <div className="col-sm-12 col-md-4 col-lg-3">
        <img src={photoString} alt="" className="img-fluid"/>
        <div className="mt-3 mb-3 authorDetails_birthdateSection">
          <h5 className="font-weight-bold">Birthdate</h5>
          <p>{birthDate}</p>
          <h5 className="font-weight-bold">Last modified</h5>
          <p className="m-0">{props.author.last_modified.value.slice(0, 10)}</p>
        </div>
      </div>
      <div className="col-sm-12 col-md-8 col-lg-9">
        <section className="authorDetails_infoSectionSingle">
          <h2 className="font-weight-bold">{props.author.name}</h2>
          <p>{bio}</p>
        </section>
        <section className="mt-3 authorDetails_infoSectionSingle">
          <section className="d-flex align-items-center mb-3">
            <LinkIcon/><h4 className="font-weight-bold ml-2 m-0">Links</h4>
          </section>
          {webLinkElement}
        </section>
        <section className="mt-3 authorDetails_infoSectionSingle">
          <section className="d-flex align-items-center mb-3">
            <MenuBookIcon/><h4 className="font-weight-bold ml-2 m-0">Books</h4>
          </section>
          {authorBooksElement}
        </section>
      </div>
  </div>
    
  return(
    <div className="container">
      {element}
    </div>
  );
}

export default AuthorDetail;