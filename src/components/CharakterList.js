import React from 'react';

function CharacterList(props) {
  return (
    <div>
      {props.list} <span className="textSecondaryColor font-weight-bold">|</span>
    </div>
  );
}

export default CharacterList;