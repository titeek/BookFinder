import React from 'react';

function PlaceList(props) {
  return (
    <div>
      {props.list} <span className="textSecondaryColor font-weight-bold">|</span>
    </div>
  );
}

export default PlaceList;