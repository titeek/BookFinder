import React from 'react';

import BookListFromTag from '../Book/BookFromTagList';

import '../../scss/dist/tagDetails.css';

const TagDetails = (props) => {
  
  let bookElement = <BookListFromTag list={props.bookList}></BookListFromTag>

  let titleTag = props.titleTag.charAt(0).toUpperCase() + props.titleTag.slice(1);
  titleTag = titleTag.split('_').join(' ');
  
  let element = 
  <div className="container">
    <section className="tagDetails mt-3 mr-5 ml-5 pr-5 pl-5 pt-3">
      <h1 className="d-flex justify-content-center">#</h1>
      <h1 className="d-flex justify-content-center mb-4">{titleTag}</h1>
      {bookElement}
     </section>
  </div>
     
  return(
    <div>
      {element}
    </div>
  );
}

export default TagDetails;