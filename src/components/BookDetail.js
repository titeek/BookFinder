import React from 'react';
import {Link} from 'react-router-dom';
import Loader from 'react-loader-spinner'
import PeopleIcon from '@material-ui/icons/People';
import PlaceIcon from '@material-ui/icons/Place';
import LinkIcon from '@material-ui/icons/Link';

import olApi from '../olApi';
import Character from './Character';
import CharacterList from './CharakterList';
import Place from './Place';
import PlaceList from './PlaceList';
import WebLink from './WebLink';
import WebLinkList from './WebLinkList';
import Tag from './Tag';
import TagList from './TagList';

import '../scss/dist/book.css';

class BookDetail extends React.Component {
  state = {book: {}, photo: 0, author: {}, error: ''};

  componentDidMount() {
    olApi.get(`${this.props.match.params.key}/${this.props.match.params.id}.json`)
    .then((response) => {
      this.setState({book: response.data});
        olApi.get(`${response.data.authors[0].author.key}.json`)
        .then((response) => {
          this.setState({author: response.data});
        });
      }).catch((error) => {
        console.log(error);
        this.setState({error: 'Failed to load book data! Book unknown.'});
      });
  }

  render() {

    let element; 
    const numberToSlice = 20;
    const numberOfTags = 10;
    let characterList; 
    let placeList;  
    let webLinkList;
    let tagList;
    let descriptionString = "";
    let photoString = "";

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
      photoString = this.state.book.covers ? "http://covers.openlibrary.org/b/id/" + this.state.book.covers[0] + "-L.jpg" : "http://via.placeholder.com/300x400";
      
      this.state.book.subject_people ?
      characterList = this.state.book.subject_people.slice(0, numberToSlice).map(character => (
        <Character key={character} character={character}/>
      )) : characterList = <Character key="nokey" character="There is no informations"/>;

      this.state.book.subject_places ?
      placeList = this.state.book.subject_places.slice(0, numberToSlice).map(place => (
        <Place key={place} place={place}/>
      )) : placeList = <Place key="nokey" place="There is no informations"/>;

      this.state.book.links ?
      webLinkList = this.state.book.links.slice(0, numberToSlice).map(link => (
        <WebLink key={link.url} link={link.url} isLink={true}/>
      )) : webLinkList = <WebLink key="nokey" isLink={false}/>;

      this.state.book.subjects ?
      tagList = this.state.book.subjects.slice(0, numberOfTags).map(tag => (
        <Tag key={tag} tag={tag} isTag={true}/>
      )) : tagList = <Tag key="nokey" isTag={false}/>;

      if(this.state.book.description) {
        if(this.state.book.description.value){
          if(this.state.book.description.value.includes('([source]')){
            descriptionString = this.state.book.description.value.substring(0, this.state.book.description.value.indexOf('([source]'));
          } else {
            descriptionString = this.state.book.description.value;
          }
        } else {
          if(this.state.book.description.includes('([source]')){
            descriptionString = this.state.book.description.substring(0, this.state.book.description.indexOf('([source]'));
          } else {
            descriptionString = this.state.book.description;
          }
        }
      } else {
        descriptionString = "There is no more informations";
      }
      element = 
      <div className="row mt-3 bookDetails">
          <div className="col-sm-12 col-md-4 col-lg-3">
            <img src={photoString} alt="" className="img-fluid"/>
            <div className="mt-3 mb-3 bookDetails_authorSection">
              <Link to={`/author${this.state.book.authors[0].author.key}`}><h5 className="font-weight-bold">Author</h5><p>{this.state.author.name}</p></Link>
              <h5 className="font-weight-bold">Publish year</h5>
              <p>{this.props.match.params.publishYear}</p>
              <h5 className="font-weight-bold">Last modification</h5>
              <p>{this.state.book.last_modified.value.slice(0,10)}</p>
              <h5 className="font-weight-bold">Tags</h5>
              <TagList list={tagList}></TagList>
            </div>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-9 bookDetails_infoSection">
            <section className="bookDetails_infoSectionSingle">
              <h2 className="font-weight-bold">{this.state.book.title}</h2>
              <p>{descriptionString}</p>
            </section>
            <section className="mt-3 bookDetails_infoSectionSingle">
              <section className="d-flex align-items-center mb-3">
                <PeopleIcon/><h4 className="font-weight-bold ml-2 m-0">Characters</h4>
              </section>
              <CharacterList list={characterList}></CharacterList>
            </section>
            <section className="mt-3 bookDetails_infoSectionSingle">
              <section className="d-flex align-items-center mb-3">
                <PlaceIcon/><h4 className="font-weight-bold ml-2 m-0">Places</h4>
              </section>
              <PlaceList list={placeList}></PlaceList>
            </section>
            <section className=" mt-3 bookDetails_infoSectionSingle">
              <section className="d-flex align-items-center mb-3">
                <LinkIcon/><h4 className="font-weight-bold ml-2 m-0">Links</h4>
              </section>
              <WebLinkList list={webLinkList}></WebLinkList>
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

export default BookDetail;