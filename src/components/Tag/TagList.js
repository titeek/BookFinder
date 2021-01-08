import React from 'react';

import Tag from './Tag';

function TagList(props) {
  let numberOfTags = 10;
  
  let tagList = props.list.slice(0, numberOfTags).map(tag => (
    <Tag key={tag} tag={tag} isTag={true}/>));

  return (
    <div className="mr-1">
      {tagList}
    </div>
  );
}

export default TagList;