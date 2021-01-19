import React from 'react';
import {compose} from 'redux';

import olApi from '../../olApi';
import SearchFormByTitle from '../SearchFormByTitle'
import SearchFormByAuthor from '../SearchFormByAuthor';
import BookList from '../Book/BookList'
import BooksFilterContainer from '../BooksFilter/BooksFilterContainer';

import '../../scss/dist/style.css';
import {withHandleError, withLoading} from '../hoc';

//Dodaje hoc
const BookListWithHandleErrorAndLoading = compose(withHandleError, withLoading)(BookList);

class Index extends React.Component {
  constructor() {
    super();
    this.state = {bookLoading: false, error: '', searchByTitleState: true, searchFailed: false};
    this.searchByTitle = this.searchByTitle.bind(this);
    this.searchByAuthor = this.searchByAuthor.bind(this);
  }
  
  
  onSearchFormSubmitByTitle = (term) => {
    this.setState({bookLoading: true, error: ''});
    this.props.booksFetched([]);
    
    olApi.get('search.json', {
      params: {title: term}
    }).then((response) => {
      this.setState({bookLoading: false});
      this.props.booksFetched(response.data.docs);
      this.props.numberOfResultsFetched(response.data.numFound);
      if(response.data.numFound === 0) {
        this.setState({searchFailed: true});
      }
    }).catch((error) => {
      this.setState({error: 'Failed to load books list!', bookLoading: false});
    });
  }

  onSearchFormSubmitByAuthor = (term) => {
    this.setState({bookLoading: true});
    this.props.booksFetched([]);
    
    olApi.get('search.json', {
      params: {author: term}
    }).then((response) => {
      this.props.booksFetched(response.data.docs);
      this.props.numberOfResultsFetched(response.data.numFound);
      this.setState({bookLoading: false});
    }).catch((error) => {
      this.setState({error: 'Failed to load books list!', bookLoading: false});
    });
  }

  searchByTitle() {
    this.setState({searchByTitleState: true});
  }

  searchByAuthor() {
    this.setState({searchByTitleState: false});
  }

  render() {
    
    let bookElement = <BookList list={this.props.books}></BookList>

    let finder = <SearchFormByTitle onFormSubmit={this.onSearchFormSubmitByTitle}></SearchFormByTitle>;
    if(!this.state.searchByTitleState) {
      finder = <SearchFormByAuthor onFormSubmit={this.onSearchFormSubmitByAuthor}></SearchFormByAuthor>;
    } 

    let element = <BookListWithHandleErrorAndLoading list={this.props.books} error={this.state.error} isLoading={this.state.bookLoading}/>;

    if(this.props.books.length !== 0) {
      element = <div>
        <p className="d-flex justify-content-end">Number of results: {this.props.numberOfResults}</p>
        {bookElement}
      </div>
    } else if(this.state.searchFailed){
      element = 
      <div className="alert alert-warning customAlert" role="alert">
        <h4 className="alert-heading">No search results!</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel corrupti necessitatibus cumque! Iste sint perspiciatis dolores quis doloremque quod. Possimus modi rerum debitis sed quaerat dolore delectus nesciunt quod iusto!</p>
        <hr/>
        <p className="m-0">Solution</p>
        <p className="mb-0 font-weight-bold">Try one more time with another pharse into the finder.</p>
      </div>
    }

    return(
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-5 mt-3">
              <div className="card finderCard">
                <div className="card-body">
                  <h5 className="card-title">Welcome at Book Finder!</h5>
                  <h6 className="card-subtitle mb-2 text-muted">How u want to find your book?</h6>
                  <button className="btn p-1 mr-2 mb-2 finderCard_button" onClick={this.searchByTitle}>Find by title</button>
                  <button className="btn p-1 mb-2 finderCard_button" onClick={this.searchByAuthor}>Find by author</button>
                  <p className="card-text mt-3">We have milions books in our collections, becouse webservice based on Open Library API - open, editable library catalog, building towards a web page for every book ever published.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-7">
              <div className="mt-3 pb-0 alert alert-secondary finder">
                {finder}
              </div>
              <BooksFilterContainer/>
              {element}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;