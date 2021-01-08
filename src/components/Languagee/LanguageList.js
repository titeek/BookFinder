import React from 'react';
import Language from './Language';

function LanguageList(props) {

  let langList = props.list.slice(0, 100).map(lang => (
    <Language key={lang} lang={lang}/>));

  return (
    <div>
      {langList}
    </div>
  );
}

export default LanguageList;