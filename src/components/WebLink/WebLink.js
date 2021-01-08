import React from 'react';
import '../../scss/dist/book.css';

const WebLink = (props) => {
  return(
    <div>
      <li><a className="links text-truncate" href={props.link}>{props.link} </a></li>
    </div>
  );
}

export default WebLink;