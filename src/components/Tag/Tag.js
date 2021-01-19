import React from 'react';
import {Link} from 'react-router-dom';

import '../../scss/dist/book.css';

const Tag = (props) => {
  let tagLower = props.tag.toLowerCase().split(' ').join('_');
  
  let element =  
  <span className="tag mr-2">
    <Link to={`/subject/${tagLower}`} className="badge mb-2 tag_single">{props.tag} </Link>
  </span>
  
  return(
    <span>
      {element}
    </span>
  );
}

export default Tag;