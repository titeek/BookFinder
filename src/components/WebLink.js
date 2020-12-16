import React from 'react';
import '../scss/dist/book.css';

const WebLink = (props) => {
  let element;
  if(props.isLink) {
    element =  <li><a className="links text-truncate" href={props.link}>{props.link} </a></li>
  } else {
    element = <p><span className="textSecondaryColor font-weight-bold">|</span> There is no informations <span className="textSecondaryColor font-weight-bold">|</span></p>
  }
  return(
    <div>
      {element}
    </div>
  );
}

export default WebLink;