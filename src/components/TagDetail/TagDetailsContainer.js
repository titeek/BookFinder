import {React, useState, useEffect} from 'react';
import {compose} from 'redux';
import olApi from '../../olApi';
import TagDetails from '../TagDetail/TagDetails';

import '../../scss/dist/book.css';

import {withHandleError, withLoading} from '../hoc';
const TagDetailsWithHandleErrorAndLoading = compose(withHandleError, withLoading)(TagDetails);

const TagDetailsContainer = (props) => {
  const[bookList, setBookList] = useState({});
  const[bookLoading, setBookLoading] = useState(true);
  const[error, setError] = useState('');

  useEffect(() => { //componentDidMount
    olApi.get(`subjects/${props.match.params.id}.json`)
    .then((response) => {
      setBookList(response.data.works);
      setBookLoading(false);
      }).catch((error) => {
        console.log(error);
        setError('Failed to load books list! Tag unknown.');
      });
    return() => { //componentDidUnMount
      console.log("end");
    };
  }, [props.match.params.id]);

  return(
    <TagDetailsWithHandleErrorAndLoading bookList={bookList} error={error} isLoading={bookLoading} titleTag={props.match.params.id}/>
  );
}

export default TagDetailsContainer;