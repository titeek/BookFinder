import React from 'react';

const Place = (props) => {
  return(
    <span><span className="textSecondaryColor font-weight-bold">|</span> {props.place}  </span>
  );
}

export default Place;