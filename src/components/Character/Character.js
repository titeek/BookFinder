import React from 'react';

const Character = (props) => {
  return(
    <span> <span className="textSecondaryColor font-weight-bold">|</span> {props.character} </span>
  );
}

export default Character;