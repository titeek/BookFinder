import React from 'react'
import Loader from 'react-loader-spinner'
import LinkIcon from '@material-ui/icons/Link';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import olApi from '../olApi';

import WebLink from './WebLink';
import WebLinkList from './WebLinkList';
import Book from './Book';
import BookList from './BookList';

import '../scss/dist/author.css';

class AuthorDetail extends React.Component {
  state = {author: {}, error: '', authorBookList: {}, bookLoading: false};


  componentDidMount() {
    olApi.get(`${this.props.match.params.key}/${this.props.match.params.id}.json`)
      .then((response) => {
          this.setState({author: response.data, bookLoading: true});
          olApi.get('search.json', {
            params: {author: response.data.name}
          }).then((response) => {
            this.setState({authorBookList: response.data.docs, bookLoading: false});
          }).catch((error) => {
            this.setState({error: 'Failed to load books list!', bookLoading: false});
          });  
        }).catch((error) => {
          console.log(error);
          this.setState({error: 'Failed to load author data! Author unknown.'});
        });
 
  }

  render() {
    const numberToSlice = 10;
    let element; 
    let photoString = "";
    let birthDate = "";
    let bio = "";
    let webLinkList;
    let authorBooks;

    if(this.state.error) {
      element = 
      <div className="mt-3 alert alert-danger customAlert" role="alert">
        <h4 className="alert-heading">Something goes wrong!</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel corrupti necessitatibus cumque! Iste sint perspiciatis dolores quis doloremque quod. Possimus modi rerum debitis sed quaerat dolore delectus nesciunt quod iusto!</p>
        <hr/>
        <p className="m-0">Error message:</p>
        <p className="mb-0 font-weight-bold">{this.state.error}</p>
      </div>
    } else if(!this.state.author.name) {
      element = 
      <div className="d-flex justify-content-center mt-5">
        <Loader type="ThreeDots" color="#ffb000" height={50} width={120}timeout={999999} />
      </div>
    } else {
      photoString = this.state.author.photos ? "http://covers.openlibrary.org/b/id/" + this.state.author.photos[0] + "-L.jpg" : "http://via.placeholder.com/300x400";

      bio = this.state.author.bio ? this.state.author.bio.value : "No more informations";
      birthDate = this.state.author.birth_date ? this.state.author.birth_date : "---"

      this.state.author.links ?
      webLinkList = this.state.author.links.slice(0, numberToSlice).map(link => (
        <WebLink key={link.url} link={link.url} isLink={true}/>
      )) : webLinkList = <WebLink key="nokey" isLink={false}/>;

      if(this.state.bookLoading) {
        authorBooks = 
        <div className="d-flex justify-content-center mt-5">
          <Loader type="ThreeDots" color="#ffb000" height={50} width={120}timeout={999999} />
        </div>
      } else {
        const authorBooksList = this.state.authorBookList.map(book => (
          <Book className="" key={book.key} book={book}/>
        ));
        authorBooks =  <BookList list={authorBooksList}></BookList>
      }

      element = 
      <div className="row mt-3 authorDetails">
          <div className="col-sm-12 col-md-4 col-lg-3">
            <img src={photoString} alt="" className="img-fluid"/>
            <div className="mt-3 mb-3 authorDetails_birthdateSection">
              <h5 className="font-weight-bold">Birthdate</h5>
              <p>{birthDate}</p>
              <h5 className="font-weight-bold">Last modified</h5>
              <p className="m-0">{this.state.author.last_modified.value.slice(0, 10)}</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-9">
            <section className="authorDetails_infoSectionSingle">
              <h2 className="font-weight-bold">{this.state.author.name}</h2>
              <p>{bio}</p>
            </section>
            <section className="mt-3 authorDetails_infoSectionSingle">
              <section className="d-flex align-items-center mb-3">
                <LinkIcon/><h4 className="font-weight-bold ml-2 m-0">Links</h4>
              </section>
              <WebLinkList list={webLinkList}></WebLinkList>
            </section>
            <section className="mt-3 authorDetails_infoSectionSingle">
              <section className="d-flex align-items-center mb-3">
                <MenuBookIcon/><h4 className="font-weight-bold ml-2 m-0">Books</h4>
              </section>
              {authorBooks}
            </section>
          </div>
      </div>
    }

    return(
      <div className="container">
        {element}
      </div>
    );
  }
}

export default AuthorDetail;