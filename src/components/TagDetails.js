import React from 'react';
import Loader from 'react-loader-spinner';

import olApi from '../olApi';
import BookFromTag from './BookFromTag';
import BookList from './BookList';

import '../scss/dist/tagDetails.css';

class TagDetails extends React.Component {
  state = {bookList: {}, error: '', bookLoading: true};

  componentDidMount() {
    olApi.get(`subjects/${this.props.match.params.id}.json`)
    .then((response) => {
      this.setState({bookList: response.data.works, bookLoading: false});
      }).catch((error) => {
        console.log(error);
        this.setState({error: 'Failed to load books list! Tag unknown.'});
      });
  }

  render() {
    let element;
    let titleTag;

    if(this.state.error) {
      element = 
      <div className="mt-3 alert alert-danger customAlert" role="alert">
        <h4 className="alert-heading">Something goes wrong!</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel corrupti necessitatibus cumque! Iste sint perspiciatis dolores quis doloremque quod. Possimus modi rerum debitis sed quaerat dolore delectus nesciunt quod iusto!</p>
        <hr/>
        <p className="m-0">Error message:</p>
        <p className="mb-0 font-weight-bold">{this.state.error}</p>
      </div>
    } else if(this.state.bookLoading) {
      element = 
      <div className="d-flex justify-content-center mt-5">
        <Loader type="ThreeDots" color="#ffb000" height={50} width={120}timeout={999999} />
      </div>
    } else {
      const bookList = this.state.bookList.map(book => (
        <BookFromTag key={book.key} book={book}/>
      ));

      titleTag = this.props.match.params.id.charAt(0).toUpperCase() + this.props.match.params.id.slice(1);
      titleTag = titleTag.split('_').join(' ');
  
      element = 
      <div className="container">
        <section className="tagDetails mt-3 mr-5 ml-5 pr-5 pl-5 pt-3">
          <h1 className="d-flex justify-content-center">#</h1>
          <h1 className="d-flex justify-content-center mb-4">{titleTag}</h1>
          <BookList list={bookList}></BookList>
        </section>
      </div>
    }
    
    return(
      <div>
        {element}
      </div>
    );
  }
}

export default TagDetails;