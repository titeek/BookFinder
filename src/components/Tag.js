import React from 'react';
import {Link} from 'react-router-dom';

import '../scss/dist/book.css';

const Tag = (props) => {
  let element;
  let tagLower = props.tag.toLowerCase().split(' ').join('_');
  
  if(props.isTag) {
    element =  
    <span className="tag mr-2">
      <Link to={`/subject/${tagLower}`} className="badge mb-2 text-wrap">{props.tag} </Link>
    </span>
  } else {
    element = <p>There is no tags </p>
  }
  return(
    <span>
      {element}
    </span>
  );
}

export default Tag;