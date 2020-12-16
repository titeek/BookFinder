import React from 'react';
import Loader from 'react-loader-spinner'

import olApi from '../olApi';
import SearchFormByTitle from './SearchFormByTitle'
import SearchFormByAuthor from './SearchFormByAuthor';
import BookList from './BookList'
import Book from './Book';

import '../scss/dist/style.css';

class SearchByTitle extends React.Component {
  constructor() {
    super();
    this.state = {bookList: [], bookLoading: false, error: '', numberOfResults: 0, searchByTitleState: true};
    this.searchByTitle = this.searchByTitle.bind(this);
    this.searchByAuthor = this.searchByAuthor.bind(this);
  }
  
  
  onSearchFormSubmitByTitle = (term) => {
    this.setState({bookLoading: true});

    olApi.get('search.json', {
      params: {title: term}
    }).then((response) => {
      this.setState({bookList: response.data.docs, bookLoading: false, numberOfResults: response.data.numFound});
    }).catch((error) => {
      this.setState({error: 'Failed to load books list!', bookLoading: false});
    });
  }

  onSearchFormSubmitByAuthor = (term) => {
    this.setState({bookLoading: true});

    olApi.get('search.json', {
      params: {author: term}
    }).then((response) => {
      this.setState({bookList: response.data.docs, bookLoading: false, numberOfResults: response.data.numFound});
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
    const list = this.state.bookList.map(book => (
      <Book key={book.key} book={book}/>
    ));

    let finder = <SearchFormByTitle onFormSubmit={this.onSearchFormSubmitByTitle}></SearchFormByTitle>;
    if(!this.state.searchByTitleState) {
      finder = <SearchFormByAuthor onFormSubmit={this.onSearchFormSubmitByAuthor}></SearchFormByAuthor>;
    } 

    let element = <div></div>;
    if(this.state.bookLoading) {
      element = 
      <div className="d-flex justify-content-center mt-5">
        <Loader type="ThreeDots" color="#ffb000" height={50} width={120}timeout={999999} />
      </div>
    } else if(this.state.error) {
      element = <div class="alert alert-danger customAlert" role="alert">
      <h4 class="alert-heading">Something goes wrong!</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel corrupti necessitatibus cumque! Iste sint perspiciatis dolores quis doloremque quod. Possimus modi rerum debitis sed quaerat dolore delectus nesciunt quod iusto!</p>
      <hr/>
      <p class="m-0">Error message:</p>
      <p class="mb-0 font-weight-bold">{this.state.error}</p>
    </div>
      
    } else if(this.state.bookList.length !== 0) {
      element = <div>
        <p className="d-flex justify-content-end">Number of results: {this.state.numberOfResults}</p>
        <BookList list={list}></BookList>
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
              {element}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchByTitle;