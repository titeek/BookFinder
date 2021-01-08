import React from 'react';
import Character from './Character';

function CharacterList(props) {

  const numberToSlice = 20;

  let characterList = props.list.slice(0, numberToSlice).map(character => (
      <Character key={character} character={character}/>));

  return (
    <div>
      {characterList} <span className="textSecondaryColor font-weight-bold">|</span>
    </div>
  );
}

export default CharacterList;