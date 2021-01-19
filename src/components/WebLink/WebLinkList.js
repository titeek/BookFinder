import React from 'react';
import WebLink from './WebLink';

function WebLinkList(props) {

  let numberToSlice = 20;
  let webLinkElement = props.list.slice(0, numberToSlice).map(link => (
    <WebLink key={link.url} link={link.url}/>));

  return (
    <ul>
      {webLinkElement}
    </ul>
  );
}

export default WebLinkList;