import React from 'react';
import {Link} from 'react-router-dom';

import '../scss/dist/book.css';

const Tag = (props) => {
  let element;
  if(props.isTag) {
    element =  
    <span className="tag mr-2">
      <Link to='' className="badge mb-1">{props.tag} </Link>
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