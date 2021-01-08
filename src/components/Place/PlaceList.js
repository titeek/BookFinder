import React from 'react';
import Place from './Place';

function PlaceList(props) {
  let numberToSlice = 20;

  let placeList = props.list.slice(0, numberToSlice).map(place => (
      <Place key={place} place={place}/>)); 

  return (
    <div>
      {placeList} <span className="textSecondaryColor font-weight-bold">|</span>
    </div>
  );
}

export default PlaceList;