import {React, useState, useEffect} from 'react';
import {compose} from 'redux';
import olApi from '../../olApi';
import BookDetail from './BookDetail';

import '../../scss/dist/book.css';

import {withHandleError, withLoading} from '../hoc';
const BookDetailWithHandleErrorAndLoading = compose(withHandleError, withLoading)(BookDetail);

const BookDetailContainer = (props) => {
  const[book, setBook] = useState({});
  const[author, setAuthor] = useState({});
  const[error, setError] = useState('');

  useEffect(() => { //componentDidMount
    olApi.get(`${props.match.params.key}/${props.match.params.id}.json`)
    .then((response) => {
      setBook(response.data);
        olApi.get(`${response.data.authors[0].author.key}.json`)
        .then((response) => {
          setAuthor(response.data);
        });
      }).catch((error) => {
        console.log(error);
        setError("Failed to load book data! Book unknown.");
      });
    return() => { //componentDidUnMount
      console.log("end");
    };
  }, [props.match.params.key, props.match.params.id]);

  return(
    <BookDetailWithHandleErrorAndLoading book={book} author={author} error={error} publishYear={props.location.state.publishYear} isLoading={!author.name}/>
  );
  
}

export default BookDetailContainer;