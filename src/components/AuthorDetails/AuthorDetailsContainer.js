import {React, useState, useEffect} from 'react';
import {compose} from 'redux';
import olApi from '../../olApi';
import AuthorDetail from './AuthorDetail';

import '../../scss/dist/book.css';

import {withHandleError, withLoading} from '../hoc';
const AuthorDetailWithHandleErrorAndLoading = compose(withHandleError, withLoading)(AuthorDetail);

const AuthorDetailContainer = (props) => {
  const[author, setAuthor] = useState({});
  const[error, setError] = useState('');
  const[authorBookList, setAuthorBookList] = useState({});
  const[bookLoading, setBookLoading] = useState();

  useEffect(() => { //componentDidMount
    olApi.get(`${props.match.params.key}/${props.match.params.id}.json`)
      .then((response) => {
        setAuthor(response.data);
        setBookLoading(true);
        olApi.get('search.json', {
          params: {author: response.data.name}
        }).then((response) => {
          // console.log(response.data.docs);
          setAuthorBookList(response.data.docs);
          setBookLoading(false);
        }).catch((error) => {
          setError('Failed to load books list!');
          setBookLoading(false);
        });  
      }).catch((error) => {
        console.log(error);
        setError('Failed to load author data! Author unknown.');
      });
    return() => { //componentDidUnMount
      console.log("end");
    };
  }, [props.match.params.key, props.match.params.id]);

  return(                                                                             //isLoading={!author.name} isLoading={!authorBookList.title}
    <AuthorDetailWithHandleErrorAndLoading author={author} error={error} isLoading={!author.name} loading={bookLoading} authorBookList={authorBookList}/>
  );
}

export default AuthorDetailContainer;